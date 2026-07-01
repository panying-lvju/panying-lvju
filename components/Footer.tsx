"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "首页", href: "/" },
  { label: "基地详情", href: "/base" },
  { label: "居住方案", href: "/plans" },
  { label: "服务与保障", href: "/service" },
  { label: "关于盘鹰", href: "/about" },
  { label: "联络我们", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandMark}>盘鹰</span>
          <span className={styles.brandText}>
            <strong>PANYING</strong>
            <em>旅居</em>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="主导航">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
          预约咨询
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="打开菜单"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          <div className={`container ${styles.mobileInner}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`btn btn-primary ${styles.mobileCta}`}
              onClick={() => setOpen(false)}
            >
              预约咨询
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
