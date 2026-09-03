"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projects, type Project } from "../data/projects";
import { pick, useLanguage } from "./language";
import { SiteShell } from "./site-shell";

const labels = ["Overview", "Challenge", "Process", "Solution", "Outcome"];

export function CaseStudyLayout({ project }: { project: Project }) {
  const { language } = useLanguage();
  const [active, setActive] = useState("overview");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-20% 0px -65%" });
    labels.forEach((label) => { const element = document.getElementById(label.toLowerCase()); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[index + 1];
  const nextHref = next ? `/projects/${next.slug}` : "/experiments";
  const nextTitle = next?.title || "Experiments";
  const nextImage = next?.hero || "/media/experiments/emofuneral-ritual-screen.png";
  return <SiteShell active="projects">
    <aside className="progress-nav" aria-label="Case study progress">{labels.map((label) => <a key={label} href={`#${label.toLowerCase()}`} className={active === label.toLowerCase() ? "active" : ""}>{label}</a>)}</aside>
    <main className="case-page" style={{ "--project-accent": project.accent } as React.CSSProperties}>
      <section className="case-hero" id="overview">
        <div className="case-hero-copy reveal">
          <p className="eyebrow"><span>{project.number}</span> · {pick(project.context, language)}</p>
          <h1>{project.title}</h1><h2>{pick(project.headline, language)}</h2><p className="lede">{pick(project.description, language)}</p>
          <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.links && <div className="text-links">{project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} ↗</a>)}</div>}
        </div>
        <div className={`case-hero-visual ${project.slug}`}>
          <div className={project.slug === "stylebook" || project.slug === "tcd-map" ? "browser-frame" : "phone-frame"}><img src={project.hero} alt={`${project.title} final product interface`}/></div>
          {project.slug === "fantasia" && <><div className="phone-frame hero-support one"><img src="/media/fantasia/fantasia-v2-setup.png" alt="Fantasia V2 setup interface"/></div><div className="phone-frame hero-support two"><img src="/media/fantasia/fantasia-v2-character.png" alt="Fantasia V2 character interface"/></div></>}
        </div>
        <div className="case-meta">
          <div><span>{language === "en" ? "Role" : "角色"}</span><strong>{pick(project.role, language)}</strong></div>
          {project.timeline && <div><span>{language === "en" ? "Timeline" : "时间"}</span><strong>{project.timeline}</strong></div>}
          {project.collaborators && <div><span>{language === "en" ? "Collaboration" : "协作"}</span><strong>{pick(project.collaborators, language)}</strong></div>}
          {project.meta.map((item) => <div key={pick(item.label, language)}><span>{pick(item.label, language)}</span><strong>{pick(item.value, language)}</strong></div>)}
        </div>
      </section>

      <section className="case-section" id="challenge">
        <p className="section-index">01 · {language === "en" ? "Challenge" : "挑战"}</p><h2>{pick(project.contextHeading, language)}</h2><p className="pullquote">{pick(project.contextCopy, language)}</p>
        <div className="problem-grid">{project.problems.map((item) => <article key={pick(item.title, language)}><h3>{pick(item.title, language)}</h3><p>{pick(item.copy, language)}</p></article>)}</div>
        {project.before && <figure className="before-figure"><div className={project.slug === "fantasia" ? "phone-frame" : "browser-frame"}><img src={project.before} alt={`${project.title} previous interface before redesign`}/></div><figcaption>Before · {project.slug === "fantasia" ? "V1" : "Original experience"}</figcaption></figure>}
      </section>

      <section className="case-section role-section">
        <p className="section-index">02 · {language === "en" ? "My role" : "我的角色"}</p><h2>{language === "en" ? "What I owned — and how we worked." : "我的负责范围与团队协作。"}</h2>
        <div className="role-grid"><div><h3>{language === "en" ? "Owned" : "负责"}</h3><ul>{project.ownership.map((item) => <li key={pick(item, language)}>{pick(item, language)}</li>)}</ul></div><div><h3>{language === "en" ? "Collaboration & context" : "协作与背景"}</h3><p>{pick(project.collaboration, language)}</p></div></div>
      </section>

      <section className="case-section" id="process">
        <p className="section-index">03 · {language === "en" ? "Research & insight" : "研究与洞察"}</p><h2>{pick(project.researchHeading, language)}</h2><p className="section-intro">{pick(project.researchIntro, language)}</p>
        <div className="insight-grid">{project.researchItems.map((item) => <article key={pick(item.title, language)}>{item.value && <strong className="metric">{item.value}</strong>}<h3>{pick(item.title, language)}</h3><p>{pick(item.copy, language)}</p></article>)}</div>
        <h3 className="subheading">{language === "en" ? "What changed in the product" : "产品如何改变"}</h3>
        <div className="decision-list">{project.decisions.map((item, i) => <article key={i}><span>0{i + 1}</span><div><small>{language === "en" ? "What we learned" : "我们学到"}</small><p>{pick(item.learning, language)}</p></div><b aria-hidden="true">→</b><div><small>{language === "en" ? "Decision" : "设计决策"}</small><h3>{pick(item.decision, language)}</h3></div><b aria-hidden="true">→</b><div><small>{language === "en" ? "Product change" : "产品变化"}</small><p>{pick(item.change, language)}</p></div></article>)}</div>
        <div className="process-gallery">{project.processImages.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt}/></figure>)}</div>
      </section>

      <section className="case-section solution-section" id="solution">
        <p className="section-index">04 · {language === "en" ? "Final experience" : "最终体验"}</p><h2>{pick(project.solutionHeading, language)}</h2>
        <div className={`solution-gallery ${project.slug}`}>{project.solutionImages.map((image, i) => <figure key={image.src} className={i === 0 ? "featured" : ""}><div className={image.src.includes("mobile") || image.src.includes("v2-") || image.src.includes("mvp-") ? "phone-frame" : "browser-frame"}><img src={image.src} alt={image.alt}/></div>{image.src.includes("mvp-") && <figcaption>Exploratory MVP concept</figcaption>}</figure>)}</div>
      </section>

      <section className="case-section outcome-section" id="outcome">
        <p className="section-index">05 · {language === "en" ? "Outcome & reflection" : "成果与反思"}</p><h2>{pick(project.outcomeHeading, language)}</h2>
        <div className="outcome-grid">{project.outcomes.map((item) => <p key={pick(item, language)}>{pick(item, language)}</p>)}</div><blockquote>{pick(project.reflection, language)}</blockquote>
      </section>

      <Link className="next-project" href={nextHref}><div><p>{language === "en" ? "Next project" : "下一个项目"} · {next?.number || "05"}</p><h2>{nextTitle}</h2><span>{language === "en" ? "Continue reading" : "继续阅读"} ↗</span></div><img src={nextImage} alt=""/></Link>
    </main>
  </SiteShell>;
}
