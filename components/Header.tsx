"use client";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          {/* Logo 区域 */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>盘鹰旅居</span>
          </Link>

          {/* 导航菜单 */}
          <nav className={styles.nav}>
            <Link href="/" className={styles.navItem}>首页</Link>
            <Link href="/base" className={styles.navItem}>旅居基地</Link>
            <Link href="/service" className={styles.navItem}>服务方案</Link>
            <Link href="/about" className={styles.navItem}>关于我们</Link>
          </nav>

          {/* 联系按钮 */}
          <Link href="/contact" className="btn btn-primary">
            预约咨询
          </Link>
        </div>
      </div>
    </header>
  );
}
