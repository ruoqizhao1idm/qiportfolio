"use client";

import Link from "next/link";
import { SiteShell } from "./site-shell";
import { useLanguage } from "./language";

const copy = {
  en: {
    context: "Academic · Team project",
    headline: "Designing an AI-assisted workflow for building complete, editable visual systems.",
    description: "StyleBook brings exploration, AI generation, hands-on refinement and production-ready export into one connected workspace.",
    overview: "One workspace from exploration to implementation.",
    overviewCopy: "Instead of producing another isolated palette, we designed a living system designers can understand, test, edit and carry into production.",
    challenge: "Understanding where the design workflow breaks.",
    challengeCopy: "Research showed that speed alone was not enough. Designers needed a faster starting point without losing rationale, control or implementation quality.",
    opportunity: "Connect exploration, generation, refinement and implementation in one workflow.",
    strategy: "Three entry points. One living design system.",
    strategyCopy: "Different starting behaviours converge on the same editable system, so designers can enter through inspiration, direct control or AI guidance.",
    experience: "From AI direction to designer control.",
    experienceCopy: "AI Atelier creates a coherent starting point. Studio turns it into an editable, testable and implementation-ready system.",
    outcome: "From a working product to real-world feedback.",
    outcomeCopy: "StyleBook was presented as a live, interactive product during the two-day IDM Showcase 2026.",
    reflection: "The showcase validated the value of the connected workflow—and revealed where simplicity matters most. The next iteration would prioritise guided onboarding, controllable AI generation, saved versions and complete keyboard navigation.",
  },
  zh: {
    context: "学术 · 团队项目",
    headline: "设计一套用于构建完整、可编辑视觉系统的 AI 辅助工作流。",
    description: "StyleBook 在同一个工作空间中连接灵感探索、AI 生成、手动优化与面向生产的导出。",
    overview: "从探索到落地，都在同一个工作空间完成。",
    overviewCopy: "我们没有再做一个孤立的调色板工具，而是设计了一套设计师能够理解、测试、编辑并带入生产的动态视觉系统。",
    challenge: "理解设计工作流在哪里断裂。",
    challengeCopy: "研究表明，只有速度并不够。设计师需要更快的起点，同时不能失去设计依据、控制权与实现质量。",
    opportunity: "在一条工作流中连接探索、生成、优化与落地。",
    strategy: "三个入口，一套持续演进的设计系统。",
    strategyCopy: "不同的起始行为最终汇入同一套可编辑系统，让设计师可以从灵感、直接控制或 AI 引导进入。",
    experience: "从 AI 提供方向，到设计师掌握控制。",
    experienceCopy: "AI Atelier 生成一致的设计起点，Studio 将它转化为可编辑、可测试且可落地的系统。",
    outcome: "从可运行产品走向真实场景反馈。",
    outcomeCopy: "StyleBook 作为可实时交互的产品，在为期两天的 IDM Showcase 2026 中公开展出。",
    reflection: "展会验证了连贯工作流的价值，也揭示了哪些地方最需要保持简单。下一轮迭代将优先优化新手引导、可控的 AI 生成、版本保存与完整键盘导航。",
  },
};

const painPoints = {
  en: [
    ["Fragmented workflow", "Exploration, generation and handoff lived in separate tools."],
    ["Limited trust in AI", "Fast output lacked enough rationale to support confident decisions."],
    ["Difficult to refine", "AI-generated designs were hard to adjust without starting over."],
    ["Handoff friction", "Production introduced another layer of translation and inconsistency."],
  ],
  zh: [
    ["工作流碎片化", "探索、生成与交付分散在不同工具中。"],
    ["对 AI 信任有限", "快速输出缺少充分依据，难以支持有信心的设计决策。"],
    ["生成结果难以修改", "AI 设计稿不容易手动调整，常常需要重新生成。"],
    ["交付摩擦", "进入生产阶段时又增加了一层翻译与不一致。"],
  ],
};

export function StyleBookCaseStudy() {
  const { language } = useLanguage();
  const t = copy[language];
  const zh = language === "zh";
  return <SiteShell active="projects"><main className="sb-case">
    <section className="sb-hero">
      <div className="sb-hero-copy">
        <p className="section-index">02 · {t.context}</p>
        <h1>StyleBook</h1>
        <h2>{t.headline}</h2>
        <p className="sb-lede">{t.description}</p>
        <div className="sb-actions"><a className="primary-button" href="https://style-book-ai.vercel.app/" target="_blank" rel="noreferrer">{zh ? "查看线上产品" : "View live product"} ↗</a><a className="text-button" href="#outcome">{zh ? "查看成果" : "Jump to outcome"} ↓</a></div>
      </div>
      <figure className="sb-hero-image"><img src="/media/stylebook/stylebook-studio-product-loop.webp" alt="Animated demonstration of the StyleBook Studio"/></figure>
      <div className="sb-facts">
        <p><small>{zh ? "角色" : "Role"}</small><strong>{zh ? "用户研究 · 产品策略 · UX 设计" : "User research · Product strategy · UX design"}</strong></p>
        <p><small>{zh ? "团队" : "Team"}</small><strong>{zh ? "毕业团队项目" : "Team graduation project"}</strong></p>
        <p><small>{zh ? "重点" : "Focus"}</small><strong>{zh ? "AI 工作流 · 设计系统 · 交付" : "AI workflow · Design systems · Handoff"}</strong></p>
        <p><small>{zh ? "成果" : "Outcome"}</small><strong>{zh ? "已发布并完成公开展出" : "Shipped and publicly exhibited"}</strong></p>
      </div>
    </section>

    <section className="sb-section sb-overview">
      <p className="section-index">01 · {zh ? "项目概览" : "Project overview"}</p><h2>{t.overview}</h2><p className="sb-intro">{t.overviewCopy}</p>
      <div className="sb-scale"><p><strong>1,977</strong><span>{zh ? "种色调" : "colour shades"}</span></p><p><strong>1,950</strong><span>{zh ? "款字体" : "font faces"}</span></p><p><strong>30</strong><span>{zh ? "个主题" : "themes"}</span></p><p><strong>8</strong><span>{zh ? "种导出格式" : "export formats"}</span></p></div>
      <div className="sb-journey">{(zh ? ["探索", "描述", "生成", "优化", "验证", "导出"] : ["Explore", "Describe", "Generate", "Refine", "Validate", "Export"]).map((item, i)=><div key={item}><small>0{i+1}</small><strong>{item}</strong></div>)}</div>
    </section>

    <section className="sb-section">
      <p className="section-index">02 · {zh ? "研究与机会" : "Research & opportunity"}</p><h2>{t.challenge}</h2><p className="sb-intro">{t.challengeCopy}</p>
      <div className="sb-research-note"><strong>{zh ? "研究输入" : "Research inputs"}</strong><span>{zh ? "Google 表单 · 用户画像归纳 · 竞品 / 定价分析 · 用户旅程图" : "Google Form · Persona synthesis · Competitor / pricing analysis · User journey mapping"}</span></div>
      <div className="sb-group-label"><span className="sb-label-icon" aria-hidden="true">!</span><div><small>{zh ? "研究发现" : "Research findings"}</small><strong>{zh ? "4 个核心用户痛点" : "Four core user pain points"}</strong></div></div>
      <div className="sb-problems">{painPoints[language].map((point, i)=><article key={point[0]}><b>0{i+1}</b><h3>{point[0]}</h3><p>{point[1]}</p></article>)}</div>
      <div className="sb-group-label sb-users-label"><span className="sb-label-icon users" aria-hidden="true"><i/><i/></span><div><small>{zh ? "目标用户" : "Target users"}</small><strong>{zh ? "两类主要设计行为模式" : "Two primary designer behaviours"}</strong></div></div>
      <div className="sb-personas"><article><small>{zh ? "目标用户 01" : "Target user 01"}</small><h3>{zh ? "团队设计师" : "Team designer"}</h3><p>{zh ? "需要速度、可靠交付，并减少设计与开发之间的差异。" : "Needs speed, reliable handoff and fewer discrepancies between design and implementation."}</p></article><div><small>{zh ? "共同需求" : "Shared needs"}</small><strong>{zh ? "减少工具切换" : "Less tool switching"}</strong><strong>{zh ? "更多 AI 控制" : "More control over AI"}</strong><strong>{zh ? "更清晰的设计依据" : "Stronger rationale"}</strong><strong>{zh ? "可直接生产的输出" : "Production-ready output"}</strong></div><article><small>{zh ? "目标用户 02" : "Target user 02"}</small><h3>{zh ? "独立创作者" : "Independent creator"}</h3><p>{zh ? "需要自主完成完整流程，并能够向客户解释设计选择。" : "Needs autonomy across the whole workflow and rationale for explaining choices to clients."}</p></article></div>
      <p className="sb-opportunity"><small>{zh ? "产品机会" : "Product opportunity"}</small><strong>{t.opportunity}</strong></p>
    </section>

    <section className="sb-band"><div>
      <p className="section-index">03 · {zh ? "产品策略" : "Product strategy"}</p><h2>{t.strategy}</h2><p className="sb-band-intro">{t.strategyCopy}</p>
      <div className="sb-pillars"><article><small>{zh ? "需求 · 无需从零开始" : "Need · Inspiration without starting from zero"}</small><h3>Library</h3><p>{zh ? "浏览精选颜色、字体与主题。" : "Browse curated colours, fonts and themes."}</p></article><article><small>{zh ? "需求 · 创作控制" : "Need · Creative control"}</small><h3>Studio</h3><p>{zh ? "逐项优化设计决策，而不是全部重新生成。" : "Refine individual decisions instead of regenerating everything."}</p></article><article><small>{zh ? "需求 · 速度与引导" : "Need · Speed and guidance"}</small><h3>AI Atelier</h3><p>{zh ? "从自然语言需求生成一致的设计起点。" : "Generate a coherent starting point from a brief."}</p></article></div>
      <svg className="sb-flow-arrow sb-flow-arrow-converge" viewBox="0 0 40 72" aria-hidden="true">
        <path d="M20 4 L20 62"/>
        <path className="arrow-head" d="M12 54 L20 63 L28 54"/>
      </svg>
      <div className="sb-system"><span>Living Design System</span><div><i>Colour</i><i>Typography</i><i>Spacing</i><i>Accessibility</i><i>Tokens</i></div></div>
      <svg className="sb-flow-arrow sb-flow-arrow-split" viewBox="0 0 40 72" aria-hidden="true">
        <path d="M20 4 L20 62"/>
        <path className="arrow-head" d="M12 54 L20 63 L28 54"/>
      </svg>
      <div className="sb-export"><article><small>{zh ? "代码与文档" : "Code & documentation"}</small><p>CSS · JSON · Tailwind · React · Flutter · SwiftUI · Style Guide</p></article><article><small>Figma Plugin</small><p>{zh ? "将完整 Token 集或仅调色板直接导入 Figma。" : "Push a complete token set—or only the colour palette—directly into Figma."}</p></article></div>
      <blockquote>{zh ? "关键决策：AI 辅助工作流，而不是替代设计师。" : "Key decision: AI should assist the workflow, not replace the designer."}</blockquote>
    </div></section>

    <section className="sb-section sb-experience">
      <p className="section-index">04 · {zh ? "核心体验" : "Core experience"}</p><h2>{t.experience}</h2><p className="sb-intro">{t.experienceCopy}</p>
      <div className="sb-experience-grid"><div className="sb-steps">
        <h3>AI Atelier · {zh ? "获取方向" : "Get direction"}</h3>
        <p><b>01 · {zh ? "描述" : "Describe"}</b><span>{zh ? "用自然语言输入产品、受众与期望氛围。" : "Describe the product, audience and desired mood in plain language."}</span></p>
        <p><b>02 · {zh ? "生成" : "Generate"}</b><span>{zh ? "AI 将需求转化为结构化起点，而不是最终答案。" : "AI translates the brief into a structured starting point—not a finished answer."}</span></p>
        <p><b>03 · {zh ? "理解" : "Review"}</b><span>{zh ? "设计理念解释帮助设计师判断保留、拒绝或优化什么。" : "Clear rationale helps the designer decide what to keep, reject or refine."}</span></p>
        <h3>Studio · {zh ? "掌握控制" : "Take control"}</h3>
        <p><b>04 · {zh ? "手动优化" : "Refine"}</b><span>{zh ? "颜色、字体、间距与状态都可以独立编辑。" : "Colour, type, spacing and states remain independently editable."}</span></p>
        <p><b>05 · {zh ? "实时验证并导出" : "Validate & export"}</b><span>{zh ? "在真实界面中查看变化，再导出到代码、文档或 Figma。" : "See changes in context, then export to code, documentation or Figma."}</span></p>
      </div><div className="sb-product-story">
        <figure><img src="/media/stylebook/stylebook-ai-generated-system.png" alt="StyleBook AI generated system"/><figcaption>{zh ? "AI 输入、设计理念与生成系统展示" : "AI brief, design rationale and generated system preview"}</figcaption></figure>
        <figure><img src="/media/stylebook/stylebook-studio-live-preview.png" alt="StyleBook Studio long-form live preview"/><figcaption>{zh ? "手动修改区与实时展示区：直接点击字段进行具体修改" : "Manual refinement and live preview with direct field-level editing"}</figcaption></figure>
      </div></div>
    </section>

    <section className="sb-section sb-outcome" id="outcome">
      <p className="section-index">05 · {zh ? "成果与现场反馈" : "Outcome & field feedback"}</p><h2>{t.outcome}</h2><p className="sb-intro">{t.outcomeCopy}</p>
      <div className="sb-outcome-stats"><p><strong>2 {zh ? "天" : "days"}</strong><span>{zh ? "现场展览" : "Live exhibition"}</span></p><p><strong>≈200 {zh ? "人次" : "visitors"}</strong><span>{zh ? "展会到访量估算" : "Estimated showcase footfall"}</span></p><p><strong>1 {zh ? "个已发布产品" : "shipped product"}</strong><span>{zh ? "在公开场景中展示" : "Presented in a public setting"}</span></p></div>
      <div className="sb-field-grid"><div className="sb-photo-grid"><figure><img src="/media/stylebook/stylebook-showcase-visitors.png" alt="Visitors trying StyleBook at IDM Showcase 2026"/></figure><figure><img src="/media/stylebook/stylebook-showcase-venue.png" alt="StyleBook exhibition installation at Trinity College Dublin"/></figure></div><div className="sb-feedback"><article><h3>{zh ? "获得共鸣的部分" : "What resonated"}</h3><ul><li>{zh ? "端到端流程连贯且有实际价值。" : "The end-to-end flow felt useful and coherent."}</li><li>{zh ? "访客重视在 Studio 中继续优化 AI 输出的能力。" : "Visitors valued being able to refine AI output in Studio."}</li><li>{zh ? "导出功能让概念更接近真实生产。" : "Export made the concept feel practical rather than experimental."}</li></ul></article><article><h3>{zh ? "访客希望继续改进" : "What visitors asked for"}</h3><ul><li>{zh ? "为第一次使用者提供更清晰的引导路径。" : "A clearer guided path for first-time users."}</li><li>{zh ? "更个性化、减少重复的 AI 输出。" : "More personalised and less repetitive AI output."}</li><li>{zh ? "保存项目、版本历史与更完整的键盘可访问性。" : "Saved projects, version history and stronger keyboard accessibility."}</li></ul></article></div></div>
      <div className="sb-social"><img src="/media/stylebook/stylebook-social-proof.png" alt="StyleBook preview post on social media"/><div><small>{zh ? "发布前兴趣信号" : "Pre-launch interest signal"}</small><strong>2K+ {zh ? "次点赞" : "likes"}</strong><p>{zh ? "展会前的预览内容获得大量关注，表明用户期待体验产品；这是一项兴趣指标，并不等同于正式采用数据。" : "A preview post attracted strong attention before the showcase, signalling curiosity rather than claiming product adoption."}</p></div></div>
      <p className="sb-reflection">{t.reflection}</p>
    </section>

    <Link className="next-project" href="/projects/letitgreen"><div><p>{zh ? "下一个项目" : "Next project"} · 03</p><h2>LetItGreen</h2><span>{zh ? "继续阅读" : "Continue reading"} ↗</span></div><img src="/media/letitgreen/letitgreen-mobile-product-detail.png" alt=""/></Link>
  </main></SiteShell>;
}
