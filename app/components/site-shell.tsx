"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageToggle, useLanguage } from "./language";

const nav = [
  ["Projects", "项目", "/portfolio#projects"],
  ["Experiments", "实验", "/experiments"],
  ["About", "关于", "/about"],
  ["Contact", "联系", "/contact"],
] as const;

export function Navbar({ active = "" }: { active?: string }) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [active]);
  return <header className="site-header">
    <div className="nav-inner">
      <Link href="/portfolio" className="wordmark" aria-label="Qi, Portfolio home">Qi</Link>
      <button className="menu-button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{language === "en" ? "Menu" : "菜单"}</button>
      <nav id="main-navigation" className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
        {nav.map(([en, zh, href]) => <Link key={en} href={href} className={active === en.toLowerCase() ? "active" : ""}>{language === "en" ? en : zh}</Link>)}
        <LanguageToggle />
      </nav>
    </div>
  </header>;
}

export function Footer() {
  const { language } = useLanguage();
  return <footer className="site-footer"><div className="footer-inner"><p>© 2026 {language === "en" ? "Qi" : "赵若淇"}</p><p>{language === "en" ? "Designed between research and making." : "基于研究与制作之间进行设计。"}</p><a href="mailto:zrqqqq123@163.com">zrqqqq123@163.com</a></div></footer>;
}

export function SiteShell({ children, active = "" }: { children: React.ReactNode; active?: string }) {
  return <><Navbar active={active}/>{children}<Footer/></>;
}
