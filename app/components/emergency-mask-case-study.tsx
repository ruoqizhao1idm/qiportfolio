"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./language";
import { SiteShell } from "./site-shell";

const sections = ["overview", "development", "final"] as const;

export function EmergencyMaskCaseStudy() {
  const { language } = useLanguage();
  const zh = language === "zh";
  const [active, setActive] = useState<(typeof sections)[number]>("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id as (typeof sections)[number])),
      { rootMargin: "-25% 0px -60%" },
    );
    sections.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  const nav = zh
    ? { overview: "概览", development: "设计发展", final: "最终设计" }
    : { overview: "Overview", development: "Development", final: "Final design" };

  return <SiteShell active="projects">
    <aside className="progress-nav mask-progress" aria-label={zh ? "案例进度" : "Case study progress"}>
      {sections.map((id) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{nav[id]}</a>)}
    </aside>

    <main className="mask-case">
      <section className="mask-hero" id="overview">
        <div className="mask-hero-copy reveal">
          <p className="eyebrow"><span>03</span> · {zh ? "产品设计 · 个人概念项目" : "PRODUCT DESIGN · INDIVIDUAL CONCEPT"}</p>
          <h1>Emergency<br/>Mask</h1>
          <h2>{zh ? "为车厢等密闭公共环境设计的可折叠应急支持面罩。" : "A foldable emergency-support mask for enclosed public environments such as transit carriages."}</h2>
          <p className="lede">{zh
            ? "本项目探索如何在密闭、拥挤的公共空间内，为突发呼吸不适的使用者提供更容易识别、取用和佩戴的初步支持。方案聚焦产品造型、紧凑收纳、佩戴结构与使用流程。"
            : "This project explores how a recognisable, compact and wearable product could provide initial support to people experiencing sudden respiratory distress in enclosed, crowded public spaces. The concept focuses on form, storage, fit and a clear usage sequence."}</p>
          <div className="tag-row"><span>Product Design</span><span>Rhino</span><span>3D Modelling</span><span>Physical Prototype</span></div>
        </div>
        <figure className="mask-hero-visual">
          <img src="/media/emergency-mask/emergency-mask-final-render.png" alt={zh ? "应急面罩的 Rhino 最终渲染图" : "Final Rhino render of the emergency mask"}/>
          <figcaption>{zh ? "最终造型 · 折叠与展开状态" : "Final form · folded and deployed states"}</figcaption>
        </figure>
        <div className="mask-meta">
          <div><span>{zh ? "时间" : "Duration"}</span><strong>Aug–Nov 2024</strong></div>
          <div><span>{zh ? "角色" : "Role"}</span><strong>{zh ? "产品设计 · 3D建模 · 原型验证" : "Product design · 3D modelling · Prototype evaluation"}</strong></div>
          <div><span>{zh ? "工具" : "Tools"}</span><strong>Rhino · Adobe Illustrator · 3D Printing</strong></div>
          <div><span>{zh ? "范围" : "Scope"}</span><strong>{zh ? "个人概念项目" : "Individual concept project"}</strong></div>
        </div>
      </section>

      <section className="mask-section mask-context">
        <p className="section-index">01 · {zh ? "项目概览" : "PROJECT OVERVIEW"}</p>
        <div className="mask-section-heading">
          <h2>{zh ? "从密闭环境中的应急场景出发。" : "Starting from an emergency scenario in an enclosed environment."}</h2>
          <p>{zh
            ? "在车厢等密闭公共环境中，空间有限、人员密集，并且专业协助无法立即到达。设计需要让设备在紧张情况下容易被发现、理解和使用，同时保持紧凑收纳。"
            : "Inside enclosed public environments such as transit carriages, space is limited, crowds are dense and professional assistance may not be immediately available. The product therefore needed to be easy to find, understand and use while remaining compact in storage."}</p>
        </div>
        <div className="mask-goals">
          <article><span>01</span><h3>{zh ? "紧凑收纳" : "Compact storage"}</h3><p>{zh ? "折叠结构适应有限的公共设施空间。" : "A foldable form designed around limited public-infrastructure space."}</p></article>
          <article><span>02</span><h3>{zh ? "快速识别" : "Rapid recognition"}</h3><p>{zh ? "高可见性边框与清晰结构降低紧急状态下的理解成本。" : "High-visibility accents and a legible form reduce interpretation effort."}</p></article>
          <article><span>03</span><h3>{zh ? "适应性佩戴" : "Adjustable fit"}</h3><p>{zh ? "透明面罩与可调头带兼顾包覆、观察和不同头围。" : "A transparent shield and adjustable straps balance coverage, visibility and fit."}</p></article>
        </div>
        <div className="mask-context-visuals">
          <figure className="mask-sketch"><img src="/media/emergency-mask/emergency-mask-form-study.png" alt={zh ? "面罩尺寸和结构草图" : "Mask proportion and structure sketch"}/><figcaption>{zh ? "尺寸、内层组件与外部框架的早期定义" : "Early definition of scale, inner component and outer frame"}</figcaption></figure>
          <figure className="mask-scenario"><img src="/media/emergency-mask/emergency-mask-scenario.png" alt={zh ? "密闭车厢中的面罩使用流程" : "Mask usage flow inside an enclosed carriage"}/><figcaption>{zh ? "场景推演：从发现设备到佩戴与寻求帮助" : "Scenario mapping: from finding the device to wearing it and seeking assistance"}</figcaption></figure>
        </div>
      </section>

      <section className="mask-section mask-development" id="development">
        <p className="section-index">02 · {zh ? "设计发展与原型" : "DESIGN DEVELOPMENT & PROTOTYPING"}</p>
        <div className="mask-section-heading">
          <h2>{zh ? "用流程推演塑造产品，用实体原型检验比例。" : "Shaping the product through scenarios, then testing its proportions physically."}</h2>
          <p>{zh
            ? "故事板把抽象功能转化为具体动作，帮助检查收纳位置、取用顺序和佩戴步骤。随后，我在 Rhino 中建立产品外形、折叠状态与头部比例，并制作实体原型进行佩戴验证。"
            : "The storyboard translated abstract functions into concrete actions, helping examine storage, retrieval and fitting. I then developed the form, folded state and head proportions in Rhino before producing a physical prototype for fit evaluation."}</p>
        </div>
        <div className="mask-development-grid">
          <figure className="mask-storyboard"><img src="/media/emergency-mask/emergency-mask-storyboard.png" alt={zh ? "应急面罩使用故事板" : "Emergency mask usage storyboard"}/><figcaption>{zh ? "使用故事板 · 启动、取出、展开、佩戴与寻求进一步协助" : "Usage storyboard · activate, retrieve, unfold, wear and seek further assistance"}</figcaption></figure>
          <div className="mask-prototype-column">
            <figure><img src="/media/emergency-mask/emergency-mask-prototype-labelled.png" alt={zh ? "带结构标注的实体原型" : "Labelled physical mask prototype"}/></figure>
            <div className="prototype-findings">
              <h3>{zh ? "原型发现" : "Prototype findings"}</h3>
              <ul>
                <li><strong>{zh ? "尺寸" : "Scale"}</strong><span>{zh ? "首版外框偏大，需要缩小整体比例。" : "The first frame was oversized and needed tighter proportions."}</span></li>
                <li><strong>{zh ? "调节" : "Adjustment"}</strong><span>{zh ? "头带需要更大的调节范围。" : "The strap required a wider adjustment range."}</span></li>
                <li><strong>{zh ? "舒适性" : "Comfort"}</strong><span>{zh ? "面部接触处需要增加缓冲并改善重量分布。" : "Facial contact points required cushioning and improved weight distribution."}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mask-section mask-final" id="final">
        <p className="section-index">03 · {zh ? "最终设计与验证" : "FINAL DESIGN & EVALUATION"}</p>
        <div className="mask-section-heading">
          <h2>{zh ? "从 Rhino 数字模型到可穿戴实体。" : "From a Rhino model to a wearable physical object."}</h2>
          <p>{zh
            ? "最终方案由可重复使用的外部框架、透明可折叠面罩、可调节头带和可替换内层组件构成。实体模型用于比较数字建模比例与真实佩戴效果。"
            : "The final concept combines a reusable outer frame, transparent foldable shield, adjustable straps and a replaceable inner component. The physical model was used to compare digital proportions with the real wearing experience."}</p>
        </div>
        <figure className="mask-final-render"><img src="/media/emergency-mask/emergency-mask-system-display.png" alt={zh ? "应急面罩最终结构渲染和功能标注" : "Final emergency mask render with structural callouts"}/></figure>
        <div className="mask-feature-row">
          <article><h3>{zh ? "可调节头带" : "Adjustable strap"}</h3><p>{zh ? "稳定面罩并适应不同头围。" : "Stabilises the mask across different head sizes."}</p></article>
          <article><h3>{zh ? "透明折叠面罩" : "Transparent foldable shield"}</h3><p>{zh ? "保持面部可见并减少收纳体积。" : "Maintains facial visibility while reducing storage volume."}</p></article>
          <article><h3>{zh ? "可替换内层组件" : "Replaceable inner component"}</h3><p>{zh ? "将重复使用外框与接触组件分离。" : "Separates the reusable frame from the contact component."}</p></article>
          <article><h3>{zh ? "环境连接接口" : "Environmental connection"}</h3><p>{zh ? "探索与车厢等密闭空间基础设施连接的可能性。" : "Explores a connection with infrastructure in enclosed environments."}</p></article>
        </div>
        <div className="mask-reflection">
          <p className="section-index">{zh ? "反思" : "REFLECTION"}</p>
          <blockquote>{zh
            ? "实体产品不能只根据屏幕中的比例和外观判断。将 Rhino 模型转化为一比一原型后，我才能真正识别尺寸、调节范围和佩戴舒适性的问题。"
            : "A physical product cannot be judged through on-screen proportion and appearance alone. Translating the Rhino model into a full-scale prototype revealed issues in scale, adjustability and wearing comfort."}</blockquote>
          <small>{zh
            ? "本项目为概念性产品设计；实际应用仍需要进一步的安全、医疗与工程验证。"
            : "This is a conceptual product-design project. Real-world application would require further safety, clinical and engineering validation."}</small>
        </div>
      </section>

      <Link className="next-project" href="/projects/letitgreen"><div><p>{zh ? "下一个项目 · 04" : "NEXT PROJECT · 04"}</p><h2>LetItGreen</h2><span>{zh ? "继续阅读" : "Continue reading"} ↗</span></div><img src="/media/letitgreen/letitgreen-mobile-product-detail.png" alt=""/></Link>
    </main>
  </SiteShell>;
}
