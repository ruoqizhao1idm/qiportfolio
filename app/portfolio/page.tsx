"use client";

import Link from "next/link";
import { projects } from "../data/projects";
import { pick, useLanguage } from "../components/language";
import { SiteShell } from "../components/site-shell";

const homeCopy = {
  intro: { en: "Qi · Product / UX Designer", zh: "赵若淇 · 产品 / UX 设计师" },
  headline: { en: "Complex world, simple experiences.", zh: "复杂世界，简单体验" },
  support: { en: "Product/UX designer focused on AI experiences. I work across research, product thinking, interaction design and prototyping to make digital products clear, human and accessible.", zh: "产品/UX 设计师，专注 AI 体验设计。工作涵盖用户研究、产品思维、交互设计与原型制作，让数字产品清晰、人性化、无障碍。" },
};

export default function HomePage() {
  const { language } = useLanguage();
  const projectOrder = ["fantasia", "stylebook", "letitgreen", "tcd-map"];
  const orderedProjects = [...projects].sort((a, b) => projectOrder.indexOf(a.slug) - projectOrder.indexOf(b.slug));
  return <SiteShell active="projects"><main>
    <section className="home-hero container">
      <div className="home-hero-copy"><p className="eyebrow">{pick(homeCopy.intro, language)}</p><h1>{pick(homeCopy.headline, language)}</h1><p className="lede">{pick(homeCopy.support, language)}</p><div className="hero-actions"><a className="primary-button" href="#projects">{language === "en" ? "View Projects" : "查看项目"} →</a><Link className="text-button" href="/about">{language === "en" ? "About Me" : "关于我"} →</Link></div></div>
      <div className="portrait-composition"><div className="portrait-mask"><img src="/media/profile/ruoqi-zhao-portrait.jpg" alt="Portrait of Qi"/></div><img className="fragment fantasia-fragment" src="/media/fantasia/fantasia-v2-scenario-selection.png" alt=""/><img className="fragment stylebook-fragment" src="/media/stylebook/stylebook-studio-product-loop.webp" alt=""/></div>
    </section>

    <section className="projects-section container" id="projects"><div className="section-heading"><p className="section-index">01 · {language === "en" ? "Selected work" : "精选作品"}</p><h2>{language === "en" ? "Selected Projects" : "精选项目"}</h2><p>{language === "en" ? "Research, product strategy and interaction design across professional, academic and experimental contexts." : "横跨专业、学术与实验语境的研究、产品策略与交互设计。"}</p></div>
      <div className="project-grid">{orderedProjects.map((project, i) => <Link key={project.slug} href={`/projects/${project.slug}`} className={`project-card card-${i + 1} project-${project.slug}`}>
        <div className="project-image"><img src={project.hero} alt={`${project.title} project preview`}/>{project.slug === "fantasia" && <><img className="support-screen screen-a" src="/media/fantasia/fantasia-v2-setup.png" alt=""/><img className="support-screen screen-b" src="/media/fantasia/fantasia-v2-character.png" alt=""/></>}</div>
        <div className="project-card-copy"><p className="eyebrow"><span>{language === "en" ? `Project ${project.number}` : `项目 ${project.number}`}</span> · {pick(project.context, language)}{project.slug === "stylebook" && <> · {language === "en" ? "Featured" : "重点项目"}</>}</p><h3>{project.title}</h3><h4>{pick(project.subtitle, language)}</h4><p>{project.slug === "fantasia" ? (language === "en" ? "Reframing a configuration-heavy AI experience into a more guided path toward personalised storytelling." : "把配置繁重的 AI 体验重构为更有引导性的个性化叙事路径。") : project.slug === "stylebook" ? (language === "en" ? "A shipped AI-assisted workspace connecting design-system exploration, editable generation, live validation and production export." : "一套已发布的 AI 辅助工作空间，连接设计系统探索、可编辑生成、实时验证与生产导出。") : pick(project.description, language)}</p><div className="tag-row">{project.tags.slice(0,4).map((tag)=><span key={tag}>{tag}</span>)}</div>{project.slug === "stylebook" && <strong className="award-label">{language === "en" ? "Shipped · Exhibited to ≈200 visitors" : "已发布 · 约 200 人次现场体验"}</strong>}{project.slug === "letitgreen" && <strong className="award-label">2nd Place · AI for Ireland Hackathon</strong>}</div>
      </Link>)}</div>
    </section>

    <section className="about-preview"><div className="container about-preview-grid"><div><p className="section-index">02 · {language === "en" ? "About" : "关于"}</p><h2>{language === "en" ? "Designing between research and making." : "在研究与制作之间进行设计。"}</h2><p>{language === "en" ? "I'm Qi, a Product / UX Designer completing an MSc in Interactive Digital Media at Trinity College Dublin. My work spans user research, AI-enabled products, interaction design, accessibility and prototyping. I enjoy turning ambiguous ideas and complex systems into experiences people can understand and use." : "我是赵若淇，正在都柏林圣三一学院攻读互动数字媒体硕士。我的工作涵盖用户研究、AI 产品、交互设计、可访问性与原型。我喜欢把模糊想法和复杂系统转化为人们能够理解和使用的体验。"}</p><Link className="text-button" href="/about">{language === "en" ? "More About Me" : "更多关于我"} →</Link></div><div className="about-crop"><img src="/media/profile/ruoqi-zhao-portrait.jpg" alt="Qi working between research and prototyping"/></div></div></section>

    <section className="experiments-teaser container"><div className="section-heading"><p className="section-index">03 · {language === "en" ? "Creative range" : "创作范围"}</p><h2>{language === "en" ? "Experiments" : "实验"}</h2><p>{language === "en" ? "Narrative, emotional and spatial explorations beyond conventional product interfaces." : "超越常规产品界面的叙事、情感与空间探索。"}</p></div><div className="teaser-grid"><Link href="/experiments"><img src="/media/experiments/emofuneral-ritual-screen.png" alt="EmoFuneral ritual screen"/><span>EmoFuneral</span></Link><Link href="/experiments"><img src="/media/experiments/twine-palace-game-screen.png" alt="The Death of Consort Hua game"/><span>The Death of Consort Hua</span></Link><Link href="/experiments"><img src="/media/experiments/spatial-pink-sunset-render.png" alt="Pink sunset spatial model"/><span>3D Spatial Modelling</span></Link></div><Link className="text-button" href="/experiments">{language === "en" ? "Explore Experiments" : "探索实验"} →</Link></section>

    <section className="home-contact"><div className="container"><p className="section-index">04 · {language === "en" ? "Contact" : "联系"}</p><h2>{language === "en" ? "Let's connect." : "保持联系。"}</h2><p>{language === "en" ? "I'm currently open to Product Design, UX/UI and AI product opportunities." : "我目前正在寻找产品设计、UX/UI 与 AI 产品相关机会。"}</p><div className="contact-links"><a href="mailto:zrqqqq123@163.com">{language === "en" ? "Email" : "邮箱"} ↗</a> <a href="https://www.linkedin.com/in/ruoqi-zhao-37bb553a2/?locale=en-US" target="_blank" rel="noreferrer">{language === "en" ? "LinkedIn" : "领英"} ↗</a><a href="https://www.dropbox.com/scl/fi/0w9pfozgigqzrbn04w3q0/RuoqiZhao_CV.pdf?rlkey=d8hiqfdd0hucto2z3u2qpwlo9&st=jayt14rz&dl=0" target="_blank" rel="noreferrer">{language === "en" ? "Resume" : "简历"} ↗</a></div></div></section>
  </main></SiteShell>;
}
