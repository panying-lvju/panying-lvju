import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">404</span>
        <h1 className="section-title">页面未找到</h1>
        <p className="section-subtitle">
          您访问的页面不存在，可能是链接写错了，或者页面还在完善中。
        </p>

        <Link href="/" className="btn btn-primary">
          返回首页
        </Link>
      </div>
    </main>
  );
}
