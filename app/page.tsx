import Link from "next/link";
import styles from "./page.module.css";

const highlights = [
  {
    title: "信息清晰",
    desc: "把基地、方案、服务和联系方式分区展示，方便用户快速理解。",
  },
  {
    title: "结构务实",
    desc: "不做过度包装，重点呈现可沟通、可咨询、可落地的信息。",
  },
  {
    title: "适合后续扩展",
    desc: "后面可以继续加入房型、环境、价格区间和预约表单。",
  },
];

const services = [
  "基地入住说明",
  "居住方案展示",
  "服务与保障说明",
  "关于盘鹰介绍",
  "联络咨询入口",
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className="badge">盘鹰旅居官网</span>
              <h1 className={styles.heroTitle}>
                面向旅居与长期居住的
                <br />
                稳妥信息展示官网
              </h1>
              <p className={styles.heroDesc}>
                先把基础信息做清楚：基地情况、居住方案、服务内容与咨询方式。
                页面风格克制、简洁、便于后续持续完善。
              </p>

              <div className={styles.heroActions}>
                <Link href="/contact" className="btn btn-primary">
                  预约咨询
                </Link>
                <Link href="/plans" className="btn btn-secondary">
                  查看居住方案
                </Link>
              </div>

              <div className={styles.heroMeta}>
                <div>
                  <strong>官网域名</strong>
                  <span>panyinglvju.com</span>
                </div>
                <div>
                  <strong>当前状态</strong>
                  <span>基础框架已搭建</span>
                </div>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.cardTop}>
                <span className="badge">首页预览区</span>
              </div>
              <div className={styles.previewBox}>
                <div className={styles.previewLogo}>盘鹰</div>
                <div className={styles.previewText}>
                  <h2>盘鹰旅居</h2>
                  <p>旅居生活 · 长期居住 · 信息展示</p>
                </div>
              </div>
              <ul className={styles.previewList}>
                {services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="badge">为什么这样做</span>
            <h2 className="section-title">先把结构搭稳，再逐步补充内容</h2>
            <p className="section-subtitle">
              目前先完成一个能上线、能展示、能继续迭代的官网骨架，避免一开始内容过多、结构混乱。
            </p>
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="badge">下一步内容</span>
            <h2 className="section-title">后续可继续完善的页面模块</h2>
            <p className="section-subtitle">
              首页当前先放清晰入口，后面我们再补子页面和详细模块。
            </p>
          </div>

          <div className={styles.linkGrid}>
            <Link href="/base" className={`card ${styles.linkCard}`}>
              <h3>基地详情</h3>
              <p>展示环境、位置、配套与基本说明。</p>
            </Link>
            <Link href="/plans" className={`card ${styles.linkCard}`}>
              <h3>居住方案</h3>
              <p>整理不同居住时长与服务说明。</p>
            </Link>
            <Link href="/service" className={`card ${styles.linkCard}`}>
              <h3>服务与保障</h3>
              <p>说明服务范围、入住支持与注意事项。</p>
            </Link>
            <Link href="/contact" className={`card ${styles.linkCard}`}>
              <h3>联络我们</h3>
              <p>放置咨询方式、二维码和联系入口。</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
