"use client";

import { SiteShell } from "../components/site-shell";
import { useLanguage } from "../components/language";

const resume = "https://www.dropbox.com/scl/fi/0w9pfozgigqzrbn04w3q0/RuoqiZhao_CV.pdf?rlkey=d8hiqfdd0hucto2z3u2qpwlo9&st=jayt14rz&dl=0";

const capabilities = {
  en: [
    "User Research & Synthesis",
    "Product & Interaction Design",
    "Information Architecture",
    "Prototyping",
    "AI Product Experiences",
    "Accessibility",
    "Front-end Implementation Awareness",
  ],
  zh: [
    "用户研究与洞察归纳",
    "产品与交互设计",
    "信息架构",
    "原型设计",
    "AI 产品体验",
    "无障碍设计",
    "前端实现认知",
  ],
};

export default function AboutPage() {
  const { language } = useLanguage();
  const zh = language === "zh";
  return <SiteShell active="about"><main className="simple-page container">
    <section className="about-hero">
      <div className="about-portrait"><img src="/media/profile/ruoqi-zhao-portrait.jpg" alt={zh ? "赵若淇的个人照片" : "Portrait of Qi"}/></div>
      <div>
        <p className="eyebrow">{zh ? "赵若淇 · 产品 / UX 设计师" : "Qi · Product / UX Designer"}</p>
        <h1>{zh ? "你好，我是赵若淇。" : "Hi, I'm Qi."}</h1>
        <p className="lede">{zh ? "我是一名拥有互动数字媒体背景的产品 / UX 设计师，工作横跨研究、交互设计与原型。我尤其关注 AI 产品、无障碍设计，以及如何让复杂系统变得简单而人性化。" : "I'm a Product / UX Designer with a background in interactive digital media, working across research, interaction design and prototyping. I'm particularly interested in AI-enabled products, accessibility and experiences where complex systems need to feel simple and human."}</p>
        <p>{zh ? "我的项目涵盖专业 AI 产品、无障碍校园导航、实验叙事与快速黑客松原型。我喜欢在理解用户、梳理产品问题与把想法转化为可测试方案之间不断切换。" : "My projects range from professional AI product work to accessible campus navigation, experimental storytelling and rapid hackathon prototypes. I enjoy moving between understanding people, structuring product problems and making ideas tangible enough to test."}</p>
      </div>
    </section>
    <section className="about-details">
      <div><p className="section-index">01 · {zh ? "教育" : "Education"}</p><h2>{zh ? "互动数字媒体理学硕士" : "MSc Interactive Digital Media"}</h2><p>{zh ? "都柏林圣三一学院" : "Trinity College Dublin"}</p></div>
      <div><p className="section-index">02 · {zh ? "能力" : "Capabilities"}</p><ul className="capability-list">{capabilities[language].map((item) => <li key={item}>{item}</li>)}</ul></div>
    </section>
    <section className="about-outside">
      <p className="section-index">03 · {zh ? "产品设计之外" : "Outside product design"}</p>
      <h2>{zh ? "互动叙事、3D 与情感界面。" : "Interactive narrative, 3D and emotional interfaces."}</h2>
      <p>{zh ? "这些实验让我在常规产品流程之外继续探索选择、空间、情绪与媒介。" : "These experiments let me keep exploring choice, space, emotion and media beyond conventional product workflows."}</p>
      <div className="contact-links"><a href={resume} target="_blank" rel="noreferrer">{zh ? "简历" : "Resume"} ↗</a><a href="mailto:zhaor3@tcd.ie">{zh ? "邮箱" : "Email"} ↗</a><span>LinkedIn · {zh ? "链接待补充" : "link pending"}</span></div>
    </section>
  </main></SiteShell>;
}
