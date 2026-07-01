export default function BasePage() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">基地详情</span>
        <h1 className="section-title">盘鹰旅居基地说明</h1>
        <p className="section-subtitle">
          这里用于展示基地位置、居住环境、公共区域和基础配套信息，后续可继续补充实拍图与更详细说明。
        </p>

        <div className="card">
          <h2>页面内容建议</h2>
          <ul>
            <li>基地位置与周边环境</li>
            <li>房间类型与居住人数</li>
            <li>公共空间与基础设施</li>
            <li>交通与到达方式</li>
            <li>适合人群与注意事项</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
