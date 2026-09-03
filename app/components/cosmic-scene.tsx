"use client";

import { useEffect, useRef } from "react";
import type * as ThreeTypes from "three";

type Props = { onProgress: (value: number) => void; onReady: () => void; onEnter: () => void };

export function CosmicScene({ onProgress, onReady }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let cleanup = () => {};
    void (async () => {
      const [THREE, { FBXLoader }] = await Promise.all([import("three"), import("three/examples/jsm/loaders/FBXLoader.js")]);
      if (cancelled) return;
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -500, 500);
      camera.position.z = 100;
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.12;
      renderer.domElement.className = "rocket-cursor-canvas";
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);
      scene.add(new THREE.HemisphereLight(0xeaf8ff, 0x172238, 3.4));
      const key = new THREE.DirectionalLight(0xffffff, 4.2); key.position.set(-3, 5, 8); scene.add(key);
      const rim = new THREE.DirectionalLight(0x72e4ff, 2.3); rim.position.set(5, 1, 3); scene.add(rim);
      const pivot = new THREE.Group(); scene.add(pivot);
      const target = new THREE.Vector2(0, 0);
      const position = new THREE.Vector2(0, 0);
      const velocity = new THREE.Vector2(0, 0);
      let model: ThreeTypes.Group | null = null;
      let frame = 0;
      let last = performance.now();
      const resize = () => {
        const width = Math.max(host.clientWidth, 1); const height = Math.max(host.clientHeight, 1);
        camera.left = -width / 2; camera.right = width / 2; camera.top = height / 2; camera.bottom = -height / 2;
        camera.updateProjectionMatrix(); renderer.setSize(width, height, false);
      };
      const move = (event: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        target.set(event.clientX - rect.left - rect.width / 2, rect.height / 2 - (event.clientY - rect.top));
      };
      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", move, { passive: true });
      new FBXLoader().load("/landing/qi-camera-rocket.fbx", (object) => {
        if (cancelled) return;
        let meshCount = 0; let uvMeshes = 0; let embeddedMaterials = 0;
        object.traverse((child) => {
          const mesh = child as ThreeTypes.Mesh;
          if (!mesh.isMesh) return;
          meshCount += 1;
          if (mesh.geometry?.attributes?.uv) uvMeshes += 1;
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          embeddedMaterials += materials.filter(Boolean).length;
          materials.forEach((material) => {
            const standard = material as ThreeTypes.MeshStandardMaterial;
            if ("roughness" in standard) standard.roughness = Math.max(standard.roughness ?? .45, .3);
            if ("metalness" in standard) standard.metalness = Math.min(standard.metalness ?? .1, .45);
          });
        });
        const box = new THREE.Box3().setFromObject(object);
        const size = box.getSize(new THREE.Vector3()); const center = box.getCenter(new THREE.Vector3());
        const longest = Math.max(size.x, size.y, size.z, .001);
        const cursorSize = window.matchMedia("(pointer: coarse)").matches ? 0 : 38;
        const scale = cursorSize / longest;
        object.scale.setScalar(scale);
        object.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
        // Present the camera-window side to the viewer instead of the rocket's narrow profile.
        object.rotation.y = 1.05;
        pivot.add(object); model = object;
        const validation = { meshCount, uvMeshes, allMeshesHaveUV: meshCount > 0 && meshCount === uvMeshes, materials: embeddedMaterials, bounds: [size.x, size.y, size.z].map((value) => Number(value.toFixed(3))), renderedCursorPx: cursorSize };
        console.info("FBX validation", validation);
        host.dataset.fbxValidation = JSON.stringify(validation);
        host.classList.add("model-ready");
        onProgress(100); onReady();
      }, (event) => { if (event.total) onProgress(Math.min(98, Math.round(event.loaded / event.total * 100))); }, (error) => {
        console.error("FBX failed to load", error); host.classList.add("model-error"); onProgress(100); onReady();
      });
      const animate = (now: number) => {
        frame = requestAnimationFrame(animate);
        const dt = Math.min((now - last) / 1000, .033); last = now;
        const stiffness = 74; const drag = 15;
        velocity.x += ((target.x - position.x) * stiffness - velocity.x * drag) * dt;
        velocity.y += ((target.y - position.y) * stiffness - velocity.y * drag) * dt;
        position.addScaledVector(velocity, dt); pivot.position.set(position.x, position.y, 0);
        if (model) {
          const lean = THREE.MathUtils.clamp(-velocity.x / 1450, -.34, .34);
          const pitch = THREE.MathUtils.clamp(velocity.y / 2100, -.16, .16);
          pivot.rotation.z += (lean - pivot.rotation.z) * Math.min(1, dt * 10);
          pivot.rotation.x += (pitch - pivot.rotation.x) * Math.min(1, dt * 8);
          pivot.rotation.y += (THREE.MathUtils.clamp(velocity.x / 3200, -.1, .1) - pivot.rotation.y) * Math.min(1, dt * 7);
        }
        renderer.render(scene, camera);
      };
      frame = requestAnimationFrame(animate);
      cleanup = () => {
        cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move);
        scene.traverse((child) => { const mesh = child as ThreeTypes.Mesh; mesh.geometry?.dispose?.(); const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]; materials.forEach((material) => material?.dispose?.()); });
        renderer.dispose(); renderer.domElement.remove();
      };
    })().catch((error) => { console.error("Rocket cursor scene failed", error); onProgress(100); onReady(); });
    return () => { cancelled = true; cleanup(); };
  }, [onProgress, onReady]);
  return <div className="cosmic-scene" ref={hostRef}><video className="cosmic-video" autoPlay muted loop playsInline poster="/landing/cosmic-poster.png" aria-hidden="true"><source src="/landing/cosmic-loop-8s.webm" type="video/webm" /></video></div>;
}
