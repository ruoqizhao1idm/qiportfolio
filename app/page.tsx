"use client";

import { useCallback, useState } from "react";
import { CosmicScene } from "./components/cosmic-scene";
import { LanguageToggle, useLanguage } from "./components/language";

export default function LandingPage() {
  const { language } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [entering, setEntering] = useState(false);
  const enter = useCallback(() => {
    if (entering) return;
    setEntering(true);
    window.setTimeout(() => { window.location.href = "/portfolio"; }, 720);
  }, [entering]);
  const onReady = useCallback(() => setReady(true), []);
  const copy = language === "en" ? {
    eyebrow: "Product designer · AI & accessible experiences",
    title: ["DESIGNING", "CLEARER WORLDS."],
    body: "I’m Qi. I turn complex systems into digital products that feel human, useful and alive.",
    enter: "Enter portfolio", hint: "Move to pilot C–01 · use the button to enter", skip: "Skip intro",
  } : {
    eyebrow: "产品设计师 · AI 与无障碍体验",
    title: ["设计更清晰的", "数字世界。"],
    body: "我是赵若淇。我将复杂系统转化为兼具人性、实用性与生命力的数字产品。",
    enter: "进入作品集", hint: "移动鼠标驾驶 C–01 · 点击按钮进入", skip: "跳过动画",
  };
  return <main className={`landing-page ${ready ? "ready" : ""} ${entering ? "entering" : ""}`}>
    <CosmicScene onProgress={setProgress} onReady={onReady} onEnter={enter}/>
    <div className="cosmic-vignette"/>
    <header className="landing-nav"><a className="qi-mark" href="#top" aria-label="Qi">Qi<span>✦</span></a><div><LanguageToggle/><button className="skip-button" onClick={enter}>{copy.skip} ↗</button></div></header>
    <section className="landing-copy" id="top"><p className="landing-eyebrow"><i/>{copy.eyebrow}</p><h1>{copy.title.map((line)=><span key={line}>{line}</span>)}</h1><p className="landing-intro">{copy.body}</p><button className="primary-enter" onClick={enter}>{copy.enter}<i>↗</i></button></section>
    <div className="specimen"><span>CAMERA ROCKET</span><strong>C–01</strong><small>{copy.hint}</small></div>
    <div className={`load-line ${ready ? "complete" : ""}`}><span style={{width:`${progress}%`}}/><small>{String(progress).padStart(3,"0")}%</small></div>
    <div className="landing-status"><i/> AVAILABLE FOR PRODUCT & UX OPPORTUNITIES</div>
    <div className="entry-flash"><span>{language === "en" ? "ENTERING QI’S PORTFOLIO" : "正在进入赵若淇的作品集"}</span></div>
  </main>;
}
