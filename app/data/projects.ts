import type { Localized } from "../components/language";

export type Project = {
  slug: string; number: string; context: Localized; title: string; subtitle: Localized; headline: Localized; description: Localized;
  role: Localized; timeline?: string; collaborators?: Localized; tags: string[]; accent: string; hero: string;
  meta: { label: Localized; value: Localized }[];
  contextHeading: Localized; contextCopy: Localized; problems: { title: Localized; copy: Localized }[]; before?: string;
  ownership: Localized[]; collaboration: Localized;
  researchHeading: Localized; researchIntro: Localized; researchItems: { title: Localized; copy: Localized; value?: string }[];
  decisions: { learning: Localized; decision: Localized; change: Localized }[];
  processImages: { src: string; alt: string }[];
  solutionHeading: Localized; solutionImages: { src: string; alt: string }[];
  outcomeHeading: Localized; outcomes: Localized[]; reflection: Localized;
  links?: { label: string; href: string }[];
};

const l = (en: string, zh: string): Localized => ({ en, zh });

export const projects: Project[] = [
  {
    slug: "fantasia", number: "01", context: l("Professional", "专业项目"), title: "Fantasia", subtitle: l("AI Personalised Storytelling Product", "AI 个性化叙事产品"),
    headline: l("Designing a more guided path into AI-powered personalised storytelling.", "为 AI 个性化叙事设计一条更清晰、更有引导性的进入路径。"),
    description: l("Fantasia is an AI-powered storytelling product that transforms user preferences into personalised narrative experiences. I worked as the sole Product Manager and Product Designer on the product redesign and explored the next multimodal MVP direction.", "Fantasia 将用户偏好转化为个性化叙事体验。我作为唯一的产品经理与产品设计师负责产品重构，并探索下一阶段的多模态 MVP 方向。"),
    role: l("Product Manager & Product Designer · Sole Designer", "产品经理与产品设计师 · 唯一设计师"), timeline: "Dec 2024 — Jul 2025", collaborators: l("CEO · Engineering · Marketing", "CEO · 工程 · 市场"),
    tags: ["Product Design", "UX Research", "AI", "0→1"], accent: "#8b2869", hero: "/media/fantasia/fantasia-v2-scenario-selection.png",
    meta: [
      { label: l("Research", "研究"), value: l("85 survey responses · 5 interviews · 3 social platforms", "85 份问卷 · 5 次深访 · 3 个社交平台") },
      { label: l("Owned", "负责"), value: l("Strategy · Research · IA · UX/UI · Handoff", "策略 · 研究 · 信息架构 · UX/UI · 交付") },
    ],
    contextHeading: l("More control was creating more friction.", "更多控制，反而制造了更多摩擦。"),
    contextCopy: l("I reframed the problem from ‘giving users more customisation’ to ‘helping users enter a personalised story with less effort.’", "我将问题从“给用户更多自定义”重构为“帮助用户用更少的精力进入个性化故事”。"),
    problems: [
      { title: l("Too many decisions before the story", "进入故事前要做太多决定"), copy: l("Users configured multiple fields before reaching the core experience.", "用户必须先配置多个字段才能进入核心体验。") },
      { title: l("No clear mental model", "缺少清晰的心智模型"), copy: l("Settings, plots, characters and preferences lacked a strong hierarchy.", "设置、情节、角色与偏好之间缺少明确层级。") },
      { title: l("Text-heavy interaction", "交互过度依赖文字"), copy: l("The setup and experience reduced immersion by relying heavily on text.", "设置与体验过度依赖文字，削弱沉浸感。") },
    ], before: "/media/fantasia/fantasia-v1-configuration-before.jpg",
    ownership: [l("Product / UX direction", "产品 / UX 方向"), l("User research and synthesis", "用户研究与归纳"), l("IA, flows and high-fidelity UI", "信息架构、流程与高保真界面"), l("Developer handoff and MVP exploration", "开发交付与 MVP 探索")], collaboration: l("CEO, Engineering and Marketing", "CEO、工程与市场团队"),
    researchHeading: l("From feedback to product decisions", "从反馈到产品决策"), researchIntro: l("Three recurring patterns shaped the redesign.", "三类反复出现的反馈塑造了这次重构。"),
    researchItems: [
      { value: "85", title: l("Survey responses", "问卷回复"), copy: l("Curiosity was high, but trust was fragile.", "好奇心很高，但信任很脆弱。") },
      { value: "5", title: l("In-depth interviews", "深度访谈"), copy: l("Emotional relevance mattered more than AI itself.", "情感相关性比 AI 本身更重要。") },
      { value: "3", title: l("Social testing platforms", "社交测试平台"), copy: l("TikTok · X · Reddit. AI-positive users wanted voice, audio and video.", "TikTok · X · Reddit。积极用户期待语音、音频与视频。") },
    ],
    decisions: [
      { learning: l("Too many choices, not enough guidance", "选项太多，引导不足"), decision: l("Scenario-led entry", "情境引导入口"), change: l("Give users a meaningful starting point before detailed configuration.", "先提供有意义的起点，再进入详细配置。") },
      { learning: l("The setup lacked clear logic", "设置流程缺少逻辑"), decision: l("Progressive customisation", "渐进式个性化"), change: l("Group preferences into a clearer sequence.", "将偏好组织成更清晰的顺序。") },
      { learning: l("Repeated setup interrupted momentum", "重复设置打断体验"), decision: l("Reusable preferences", "可复用偏好"), change: l("Help returning users reach the story faster.", "帮助回访用户更快进入故事。") },
    ],
    processImages: [
      { src: "/media/fantasia/fantasia-iteration-wireframe-01.png", alt: "Fantasia exploratory wireframe" },
      { src: "/media/fantasia/fantasia-iteration-wireframe-02.png", alt: "Fantasia preference wireframe" },
      { src: "/media/fantasia/fantasia-early-restructured-flow.png", alt: "Fantasia early restructured flow" },
    ],
    solutionHeading: l("Personalisation should feel guided, not configured.", "个性化应该像被引导，而不是被配置。"),
    solutionImages: [
      { src: "/media/fantasia/fantasia-v2-scenario-selection.png", alt: "Fantasia V2 scenario selection" },
      { src: "/media/fantasia/fantasia-v2-setup.png", alt: "Fantasia V2 setup" },
      { src: "/media/fantasia/fantasia-v2-character.png", alt: "Fantasia V2 character preferences" },
      { src: "/media/fantasia/fantasia-v2-audio.png", alt: "Fantasia V2 audio preferences" },
      { src: "/media/fantasia/fantasia-mvp-alex-concept.png", alt: "Exploratory multimodal MVP concept with Alex" },
      { src: "/media/fantasia/fantasia-mvp-ghost-concept.png", alt: "Exploratory multimodal MVP character concept" },
    ],
    outcomeHeading: l("A clearer entry into the experience — and a direction for what came next.", "更清晰的体验入口，以及明确的下一步方向。"),
    outcomes: [l("V2 UX direction", "V2 UX 方向"), l("Developer handoff", "开发交付"), l("Simplified personalisation model", "简化的个性化模型"), l("Research-informed multimodal MVP direction", "研究驱动的多模态 MVP 方向")],
    reflection: l("Personalisation should feel guided, not configured.", "个性化应该像被引导，而不是被配置。"),
  },
  {
    slug: "stylebook", number: "02", context: l("Academic · Team Project", "学术 · 团队项目"), title: "StyleBook", subtitle: l("AI-Assisted Design System Workspace", "AI 辅助设计系统工作空间"),
    headline: l("Designing an AI-assisted workflow for building complete visual systems.", "设计一套用于构建完整视觉系统的 AI 辅助工作流。"),
    description: l("A team-built platform helping designers explore, generate and refine visual systems across colour, typography, themes and production-oriented export.", "一个团队构建的平台，帮助设计师探索、生成和优化颜色、字体、主题及面向生产的导出。"),
    role: l("User Research · Market Research · Persona Synthesis · Product / UX Contribution", "用户研究 · 市场研究 · 用户画像归纳 · 产品 / UX 贡献"), collaborators: l("Team graduation project · Backend primarily led by a teammate", "毕业团队项目 · 后端主要由队友负责"),
    tags: ["UX Research", "Product Strategy", "AI", "Design Systems"], accent: "#17264f", hero: "/media/stylebook/stylebook-studio-product-loop.webp",
    meta: [
      { label: l("Product scale", "产品规模"), value: l("1,977 shades · 1,950 fonts · 30 themes", "1,977 种色调 · 1,950 款字体 · 30 个主题") },
      { label: l("Export", "导出"), value: l("8 production-oriented formats", "8 种面向生产的格式") },
    ],
    contextHeading: l("The problem wasn't a lack of tools. It was the gaps between them.", "问题不是工具太少，而是工具之间存在断层。"),
    contextCopy: l("Designers often move between separate tools for colour, typography, accessibility, AI generation and production handoff.", "设计师经常在颜色、字体、可访问性、AI 生成与生产交付工具之间来回切换。"),
    problems: [
      { title: l("Fragmented workflow", "碎片化工作流"), copy: l("Exploration, generation and handoff lived in separate products.", "探索、生成与交付分散在不同产品中。") },
      { title: l("AI trust", "AI 信任问题"), copy: l("AI was useful, but not trustworthy enough on its own.", "AI 有用，但不足以独立被信任。") },
      { title: l("Handoff friction", "交付摩擦"), copy: l("Production introduced another translation layer.", "进入生产阶段时又增加一层转换。") },
    ],
    ownership: [l("User research", "用户研究"), l("Market and competitor research", "市场与竞品研究"), l("Persona synthesis and user journeys", "用户画像归纳与用户旅程"), l("Product opportunity framing and UX contribution", "产品机会定义与 UX 贡献")], collaboration: l("Working team-built product. Backend development was primarily led by a teammate.", "最终成果为团队共同构建的产品，后端开发主要由队友负责。"),
    researchHeading: l("Two behaviours, one shared problem", "两种行为模式，一个共同问题"), researchIntro: l("Team designers needed speed and reliable handoff. Independent creators needed autonomy and rationale. Both wanted less tool switching, more AI control, stronger reasoning and production-ready output.", "团队设计师需要速度与可靠交付，独立创作者需要自主性与设计依据；两者都需要减少工具切换、增强 AI 控制、提供更强理由与生产级输出。"),
    researchItems: [
      { title: l("Team Designer", "团队设计师"), copy: l("Speed + reliable handoff · small teams · high technical confidence", "速度 + 可靠交付 · 小团队 · 技术信心高") },
      { title: l("Shared Needs", "共同需求"), copy: l("Less switching · more control · stronger reasoning · production-ready outputs", "少切换 · 多控制 · 强理由 · 可生产输出") },
      { title: l("Independent Creator", "独立创作者"), copy: l("Autonomy + rationale · owns the whole workflow · heavy AI adopter", "自主性 + 依据 · 负责全流程 · 深度使用 AI") },
    ],
    decisions: [
      { learning: l("Inspiration without starting from zero", "无需从零开始的灵感"), decision: l("Library", "Library"), change: l("Browse curated colours, fonts and themes.", "浏览精选颜色、字体与主题。") },
      { learning: l("Creative control", "创作控制"), decision: l("Studio", "Studio"), change: l("Refine individual design decisions directly.", "直接优化单个设计决策。") },
      { learning: l("Speed and guidance", "速度与引导"), decision: l("AI Atelier", "AI Atelier"), change: l("Generate a coherent starting point from a brief.", "从需求描述生成一致的起点。") },
    ],
    processImages: [{ src: "/media/stylebook/stylebook-research-product-architecture.png", alt: "StyleBook research to product architecture" }],
    solutionHeading: l("From research structure to a working product", "从研究结构到可运行产品"),
    solutionImages: [{ src: "/media/stylebook/stylebook-studio-product-loop.webp", alt: "StyleBook Studio product loop" }, { src: "/media/stylebook/stylebook-research-product-architecture.png", alt: "StyleBook Library Studio AI Atelier system" }],
    outcomeHeading: l("One living design system — built as a team.", "一个持续演进的设计系统，由团队共同构建。"),
    outcomes: [l("Research-informed product structure", "研究驱动的产品结构"), l("Unified Library / Studio / AI model", "统一的 Library / Studio / AI 模型"), l("Working team-built product", "团队构建的可运行产品"), l("Production-oriented export", "面向生产的导出")],
    reflection: l("Next: Live Exhibition — observing discoverability, trust, preferred entry point and visitor feedback without pre-judging the result.", "请期待现场展示：即将更新——观察可发现性、信任实际测试与访客反馈，不预设结果。"),
    links: [{ label: "Live product", href: "https://style-book-ai.vercel.app/" }],
  },
  {
    slug: "emergency-mask", number: "03", context: l("Product Design · Individual Concept", "产品设计 · 个人概念项目"), title: "Emergency Mask", subtitle: l("Foldable Support Mask for Enclosed Environments", "面向密闭环境的可折叠应急支持面罩"),
    headline: l("Designing a compact, recognisable and wearable support product for enclosed public environments.", "为车厢等密闭公共环境设计一款紧凑、易识别且可穿戴的应急支持产品。"),
    description: l("A conceptual product-design project exploring form, compact storage, fit and a clear usage sequence for enclosed, crowded public spaces such as transit carriages.", "一个面向车厢等密闭、拥挤公共空间的概念性产品设计项目，重点探索产品造型、紧凑收纳、佩戴结构与清晰的使用流程。"),
    role: l("Product Designer · 3D Modeller · Prototype Maker", "产品设计师 · 3D建模 · 原型制作"), timeline: "Aug 2024 — Nov 2024",
    tags: ["Product Design", "Rhino", "3D Modelling", "Prototyping"], accent: "#a54836", hero: "/media/emergency-mask/emergency-mask-final-render.png",
    meta: [{ label: l("Tools", "工具"), value: l("Rhino · Adobe Illustrator · 3D Printing", "Rhino · Adobe Illustrator · 3D打印") }],
    contextHeading: l("Emergency support must remain understandable under pressure.", "应急支持产品必须在压力下依然容易理解。"),
    contextCopy: l("The concept focuses on making a compact device easier to recognise, retrieve and wear inside enclosed public environments.", "概念聚焦如何让紧凑设备在密闭公共环境中更容易被识别、取用和佩戴。"),
    problems: [
      { title: l("Limited space", "空间有限"), copy: l("Public infrastructure leaves little room for dedicated equipment.", "公共设施中可用于专用设备的空间有限。") },
      { title: l("High-stress use", "高压力使用"), copy: l("The interaction must remain clear when attention and time are limited.", "在注意力和时间有限时，交互仍需保持清晰。") },
      { title: l("Different users", "不同使用者"), copy: l("The wearing structure must accommodate varied head sizes and visibility needs.", "佩戴结构需要适应不同头围并保持面部可见。") },
    ],
    ownership: [l("Product form and structure", "产品造型与结构"), l("Rhino 3D modelling", "Rhino 3D建模"), l("Usage scenario and storyboard", "使用场景与故事板"), l("Physical prototype and fit evaluation", "实体原型与佩戴验证")],
    collaboration: l("Individual academic concept project.", "个人学术概念项目。"),
    researchHeading: l("Scenario-led form development", "场景驱动的造型发展"), researchIntro: l("The usage sequence informed storage, retrieval, unfolding and fit.", "使用流程影响了收纳、取出、展开与佩戴结构。"),
    researchItems: [
      { title: l("Compact storage", "紧凑收纳"), copy: l("A foldable form reduces the stored footprint.", "折叠结构减少设备的收纳体积。") },
      { title: l("Rapid recognition", "快速识别"), copy: l("High-visibility accents make the product easier to locate.", "高可见性边框帮助快速定位产品。") },
      { title: l("Adjustable fit", "适应性佩戴"), copy: l("Straps and transparent coverage balance fit and observation.", "头带与透明包覆兼顾佩戴和观察。") },
    ],
    decisions: [{ learning: l("Digital proportions concealed fit issues", "数字比例掩盖了佩戴问题"), decision: l("Build at full scale", "制作一比一原型"), change: l("The prototype revealed an oversized frame, limited adjustment and contact-point discomfort.", "原型暴露了外框偏大、调节范围有限和接触位置不舒适的问题。") }],
    processImages: [{ src: "/media/emergency-mask/emergency-mask-storyboard.png", alt: "Emergency mask usage storyboard" }, { src: "/media/emergency-mask/emergency-mask-prototype-labelled.png", alt: "Labelled physical prototype" }],
    solutionHeading: l("From a Rhino model to a wearable object", "从 Rhino 模型到可穿戴实体"),
    solutionImages: [{ src: "/media/emergency-mask/emergency-mask-system-display.png", alt: "Final mask structure and feature display" }, { src: "/media/emergency-mask/emergency-mask-final-render.png", alt: "Final folded and deployed mask render" }],
    outcomeHeading: l("A compact concept made testable through physical prototyping.", "通过实体原型，让紧凑产品概念变得可验证。"),
    outcomes: [l("Rhino form development", "Rhino造型发展"), l("Folded and deployed states", "折叠与展开状态"), l("Full-scale physical prototype", "一比一实体原型"), l("Fit findings for further iteration", "支持后续迭代的佩戴发现")],
    reflection: l("Translating the Rhino model into a full-scale prototype revealed issues that appearance alone could not show.", "将 Rhino 模型转化为一比一原型后，才发现仅凭外观无法识别的尺寸与佩戴问题。"),
  },
  {
    slug: "letitgreen", number: "04", context: l("Hackathon Project", "黑客松项目"), title: "LetItGreen", subtitle: l("AI-Assisted Circular Economy Platform", "AI 辅助循环经济平台"),
    headline: l("Reducing second-hand listing friction with AI and local discovery.", "用 AI 与本地发现减少二手发布摩擦。"), description: l("An AI-assisted circular-economy prototype connecting faster second-hand listing with nearby products and recycling resources.", "一个将快速二手发布、附近商品与回收资源连接起来的 AI 辅助循环经济原型。"),
    role: l("Product Designer & Developer", "产品设计师与开发者"), tags: ["Product Design", "AI Prototype", "Geospatial", "Hackathon"], accent: "#4f765f", hero: "/media/letitgreen/letitgreen-mobile-product-detail.png",
    meta: [{ label: l("Recognition", "奖项"), value: l("2nd Place · AI for Ireland Hackathon", "AI for Ireland 黑客松二等奖") }],
    contextHeading: l("Reuse was fragmented across too many steps.", "再利用被分散在太多步骤中。"), contextCopy: l("How might we reduce listing effort while connecting reuse with nearby resources?", "如何减少发布成本，同时把再利用与附近资源连接起来？"),
    problems: [{ title: l("Listing takes effort", "发布很费力"), copy: l("Writing details, descriptions and pricing slows second-hand selling.", "填写详情、描述和定价拖慢二手出售。") }, { title: l("Local reuse is fragmented", "本地再利用信息分散"), copy: l("Marketplace products and recycling resources are usually separated.", "市场商品与回收资源通常彼此分离。") }],
    ownership: [l("Product concept", "产品概念"), l("UX/UI and front-end", "UX/UI 与前端"), l("AI integration", "AI 集成"), l("Geospatial experience", "地理空间体验")], collaboration: l("Rapid hackathon build with shared team delivery.", "黑客松环境下的团队快速交付。"),
    researchHeading: l("Three actions shaped the prototype", "三个核心动作塑造了原型"), researchIntro: l("Discover nearby, list with AI, then save and revisit.", "发现附近、用 AI 发布、保存并再次访问。"),
    researchItems: [{ title: l("Discover nearby", "发现附近"), copy: l("Browse second-hand products around the user.", "浏览用户附近的二手商品。") }, { title: l("List with AI", "用 AI 发布"), copy: l("Reduce repetitive listing work while preserving review.", "减少重复发布工作，同时保留人工审核。") }, { title: l("Save & revisit", "保存与回访"), copy: l("Support repeated marketplace interactions.", "支持持续的市场互动。") }],
    decisions: [
      { learning: l("Listing work was repetitive", "发布工作重复"), decision: l("AI-assisted draft", "AI 辅助草稿"), change: l("Upload → identify → draft title, description and price → user reviews / edits → publish.", "上传 → 识别 → 生成标题、描述与价格 → 用户审核 / 编辑 → 发布。") },
      { learning: l("Reuse information was split", "再利用信息分散"), decision: l("One spatial view", "统一空间视图"), change: l("Combine user location, marketplace items and recycling points through Leaflet.js.", "通过 Leaflet.js 连接用户位置、市场商品与回收点。") },
    ],
    processImages: [{ src: "/media/letitgreen/letitgreen-system-architecture.png", alt: "LetItGreen supporting system architecture" }], solutionHeading: l("A working circular-economy prototype", "可运行的循环经济原型"),
    solutionImages: [{ src: "/media/letitgreen/letitgreen-mobile-product-detail.png", alt: "LetItGreen Plant Jasmeen mobile product screen" }, { src: "/media/letitgreen/letitgreen-hackathon-award.jpg", alt: "AI for Ireland second place award" }],
    outcomeHeading: l("2nd Place · AI for Ireland Hackathon", "AI for Ireland 黑客松二等奖"), outcomes: [l("Working prototype", "可运行原型"), l("Human-reviewed AI listing flow", "人工审核的 AI 发布流程"), l("Geospatial reuse discovery", "地理空间再利用发现")], reflection: l("Technology supported the result; the product outcome remained the focus.", "技术服务于结果，产品价值始终是重点。"),
    links: [{ label: "GitHub", href: "https://github.com/ruoqizhao1idm/letitgreen_qi" }, { label: "Video demo", href: "https://youtu.be/dlnymXIEoIY" }],
  },
  {
    slug: "tcd-map", number: "05", context: l("Academic · Team Project", "学术 · 团队项目"), title: "TCD Interactive Map", subtitle: l("Accessible Campus Navigation", "无障碍校园导航"),
    headline: l("Making campus information easier to navigate — and easier to access.", "让校园信息更易导航，也更易访问。"), description: l("A UX/UI refresh and interactive campus-information experience combining spatial navigation, structured building information and accessibility-conscious implementation.", "一次结合空间导航、结构化建筑信息与可访问性实现的 UX/UI 更新。"),
    role: l("UI/UX Designer & Front-end Developer", "UI/UX 设计师与前端开发者"), tags: ["UX/UI", "Accessibility", "Information Architecture", "Front-end"], accent: "#17365f", hero: "/media/tcd-map/tcd-redesigned-map-overview.png",
    meta: [{ label: l("Focus", "重点"), value: l("IA · Accessibility · Responsive web", "信息架构 · 可访问性 · 响应式网页") }],
    contextHeading: l("The existing experience made simple campus questions harder to answer.", "原有体验让简单的校园问题变得更难回答。"), contextCopy: l("The redesign focused on clarity, consistency and access rather than cosmetic change alone.", "重构关注清晰性、一致性与可访问，而不只是视觉修饰。"),
    problems: [{ title: l("Scattered information", "信息分散"), copy: l("Building details lived in inconsistent places.", "建筑详情分散在不一致的位置。") }, { title: l("Weak hierarchy", "信息层级弱"), copy: l("Simple destinations were hard to scan and compare.", "简单目的地难以扫描与比较。") }, { title: l("Accessibility information", "可访问性信息"), copy: l("Entrance and access details were difficult to locate consistently.", "入口与无障碍详情难以稳定查找。") }], before: "/media/tcd-map/tcd-original-map-before.png",
    ownership: [l("UI/UX design", "UI/UX 设计"), l("Responsive interface planning", "响应式界面规划"), l("Front-end implementation contribution", "前端实现贡献"), l("Accessibility-conscious content structure", "可访问性内容结构")], collaboration: l("Academic team project.", "学术团队项目。"),
    researchHeading: l("Three ways to find the same destination", "三种方式找到同一目的地"), researchIntro: l("Different tasks required complementary paths rather than one overloaded map.", "不同任务需要互补路径，而不是一张负担过重的地图。"),
    researchItems: [{ title: l("Interactive Map", "交互地图"), copy: l("For spatial discovery.", "用于空间发现。") }, { title: l("A–Z Catalogue", "A–Z 目录"), copy: l("For direct lookup.", "用于直接查找。") }, { title: l("Building Pages", "建筑页面"), copy: l("For detailed destination information.", "用于目的地详情。") }],
    decisions: [{ learning: l("Access details were inconsistent", "无障碍详情不一致"), decision: l("Structure accessibility into the content model", "将可访问性纳入内容模型"), change: l("Use semantic headings, readable responsive layouts and consistent entrance/access information; controls remain supporting UI only.", "使用语义标题、可读响应式布局与一致的入口/无障碍信息；设置控件只是辅助界面。") }],
    processImages: [{ src: "/media/tcd-map/tcd-welcome-page.png", alt: "TCD welcome page" }, { src: "/media/tcd-map/tcd-building-catalogue.png", alt: "TCD A to Z catalogue" }, { src: "/media/tcd-map/tcd-building-detail-page.png", alt: "TCD building detail page" }],
    solutionHeading: l("Accessibility shaped the structure, not only the styling.", "可访问性塑造了结构，而不只是样式。"), solutionImages: [{ src: "/media/tcd-map/tcd-redesigned-map-detail.png", alt: "TCD redesigned desktop map" }, { src: "/media/tcd-map/tcd-mobile-map.png", alt: "TCD responsive mobile map" }, { src: "/media/tcd-map/tcd-accessibility-controls.png", alt: "TCD supporting accessibility controls" }, { src: "/media/tcd-map/tcd-building-detail-page.png", alt: "TCD consistent building detail page" }],
    outcomeHeading: l("A clearer, more consistent campus experience.", "更清晰、更一致的校园体验。"), outcomes: [l("Clearer hierarchy", "更清晰的层级"), l("Consistent building-page structure", "一致的建筑页面结构"), l("Accessibility-conscious implementation", "可访问性实现"), l("Responsive web experience", "响应式网页体验")], reflection: l("This project strengthened my understanding of the gap between interface planning and front-end implementation.", "这个项目加深了我对界面规划与前端实现之间差距的理解。"),
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug)!;
