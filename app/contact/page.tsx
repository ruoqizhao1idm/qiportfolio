"use client";

import { SiteShell } from "../components/site-shell";
import { useLanguage } from "../components/language";

const resume = "https://www.dropbox.com/scl/fi/0w9pfozgigqzrbn04w3q0/RuoqiZhao_CV.pdf?rlkey=d8hiqfdd0hucto2z3u2qpwlo9&st=jayt14rz&dl=0";

export default function ContactPage() {
  const { language } = useLanguage();
  const zh = language === "zh";
  return <SiteShell active="contact"><main className="contact-page container">
    <p className="eyebrow">{zh ? "联系" : "Contact"}</p>
    <h1>{zh ? "保持联系。" : "Let's connect."}</h1>
    <p className="lede">{zh ? "我正在寻找产品经理、UX/UI设计 与 AI 产品相关机会，也欢迎围绕游戏相关或者交互数字体验展开交流。" : "I'm open to Product Manager, UX/UI and AI product opportunities, as well as conversations around games and interactive digital experiences."}</p>
    <div className="contact-list">
      <a href="mailto:zrqqqq123@163.com"><span>{zh ? "邮箱" : "Email"}</span><strong>zrqqqq123@163.com</strong><b>↗</b></a>
      <a href="https://www.linkedin.com/in/ruoqi-zhao-37bb553a2/?locale=en-US" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>{zh ? "个人主页链接" : "Profile link"}</strong></a>
      <a href={resume} target="_blank" rel="noreferrer"><span>{zh ? "简历" : "Resume"}</span><strong>{zh ? "查看简历" : "View resume"}</strong><b>↗</b></a>
      <div><span>{zh ? "地点" : "Location"}</span><strong>{zh ? "爱尔兰，都柏林" : "Dublin, Ireland"}</strong></div>
    </div>
  </main></SiteShell>;
}
