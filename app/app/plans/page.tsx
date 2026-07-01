export default function PlansPage() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">居住方案</span>
        <h1 className="section-title">盘鹰旅居居住方案</h1>
        <p className="section-subtitle">
          这里用于展示不同居住时长、服务内容与方案说明，方便用户快速了解可选项。
        </p>

        <div className="card">
          <h2>页面内容建议</h2>
          <ul>
            <li>短住 / 中住 / 长住方案</li>
            <li>对应服务内容与支持范围</li>
            <li>价格说明方式（如后续需要可添加）</li>
            <li>入住流程与咨询步骤</li>
            <li>可根据实际情况灵活调整</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
