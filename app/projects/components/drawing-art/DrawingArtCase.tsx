import { ProjectItem, ProjectMedia } from "../../project-data";
import { CaseSectionTitle, EqualHeightMediaRow, FourCardOverview, OpenImage } from "../shared/CasePrimitives";

function mediaByFile(project: ProjectItem, fileName: string) {
  return project.gallery.find((item) => item.src.endsWith(fileName));
}

export function DrawingArtOverview() {
  return (
    <FourCardOverview
      className="drawing-overview-cards"
      cards={[
        {
          eyebrow: "BACKGROUND",
          title: "项目背景",
          body: "绘画用品业务需要同时维护商品、客户、员工、订单和发票信息。如果这些数据分散在不同页面且缺少关系约束，就容易出现订单找不到客户、商品明细与订单不一致或发票内容重复录入等问题。",
        },
        {
          eyebrow: "MY ROLE",
          title: "我的角色",
          body: "个人数据库 Web 项目。独立完成关系数据库结构设计、数据表创建、主键与外键关系、PHP 后端逻辑、CRUD 页面、表单验证、数据查询、订单明细处理、发票生成和前端表格展示。",
        },
        {
          eyebrow: "GOAL",
          title: "项目目标",
          body: "将商品、客户、员工、订单、订单明细和发票组织为关系清楚的数据结构，使业务数据可以被统一维护、查询和复用，并避免同一信息在不同页面中重复录入。",
        },
        {
          eyebrow: "STACK",
          title: "技术栈",
          body: "PHP · MySQL · Bootstrap · DataTables",
        },
      ]}
    />
  );
}

export function DrawingArtLayout({ project, onOpen }: { project: ProjectItem; onOpen: OpenImage }) {
  const list = mediaByFile(project, "products-list.png");
  const detail = mediaByFile(project, "product-detail.png");
  const customers = mediaByFile(project, "customers.png");
  const order = mediaByFile(project, "order-details.png");
  const invoice = mediaByFile(project, "invoice.png");

  return (
    <div className="drawing-case-flow">
      <section className="case-section drawing-db-section">
        <CaseSectionTitle
          eyebrow="DATABASE STRUCTURE"
          title="用关系数据库组织商品、客户和交易数据"
          body="系统将不会频繁变化的商品、客户和员工信息作为主数据保存，再通过订单和订单明细记录每次交易。发票读取订单、客户和商品明细，减少同一数据在多个页面中重复输入。"
        />
        <div className="drawing-relation-map" aria-label="数据库关系说明">
          <span>Customer</span>
          <b>→</b>
          <span>Order</span>
          <b>→</b>
          <span>Order Detail</span>
          <b>→</b>
          <span>Product</span>
          <span>Order → Invoice</span>
          <span>Staff → 后台操作或订单处理</span>
        </div>
        <div className="drawing-db-modules">
          <article>
            <h3>主数据</h3>
            <p>Product、Customer 和 Staff 提供商品、客户与后台用户基础资料。</p>
          </article>
          <article>
            <h3>交易数据</h3>
            <p>Order 记录订单主体，Order Detail 记录订单包含的商品和数量。</p>
          </article>
          <article>
            <h3>输出数据</h3>
            <p>Invoice 基于订单与订单明细生成，用于展示客户信息、商品列表、数量、价格和订单金额。</p>
          </article>
        </div>
      </section>

      <section className="case-section drawing-product-section">
        <CaseSectionTitle
          eyebrow="PRODUCT WORKSPACE"
          title="商品资料的集中浏览与维护"
          body="产品列表用于集中查看和维护商品数据，产品详情用于查看单项商品的完整字段。两者共同构成订单录入时使用的商品基础资料。"
        />
        <EqualHeightMediaRow
          className="drawing-product-row"
          onOpen={onOpen}
          items={[
            ...(list ? [{ media: list, label: "产品列表" }] : []),
            ...(detail ? [{ media: detail, label: "产品详情" }] : []),
          ] as Array<{ media: ProjectMedia; label?: string; note?: string }>}
        />
      </section>

      <section className="case-section drawing-business-section">
        <CaseSectionTitle
          eyebrow="BUSINESS FLOW"
          title="从客户建立订单，再由订单明细生成发票"
          body="客户和商品先作为基础资料存在数据库中。创建订单时选择客户，再向订单中加入一个或多个商品和数量，系统保存订单明细，并根据订单主体与明细内容生成发票。"
        />
        <EqualHeightMediaRow
          className="drawing-business-row"
          onOpen={onOpen}
          items={[
            ...(customers ? [{ media: customers, label: "客户管理", note: "创建和维护客户资料，为后续订单提供客户引用，避免在每张订单和发票中重复输入客户信息。" }] : []),
            ...(order ? [{ media: order, label: "订单与商品明细", note: "订单保存交易主体，订单明细记录所选商品及数量。一个订单可以包含多个商品，每条明细都关联同一个订单。" }] : []),
            ...(invoice ? [{ media: invoice, label: "发票输出", note: "发票读取订单、客户和商品明细，形成统一的交易输出，而不是独立于订单重新创建一套数据。" }] : []),
          ] as Array<{ media: ProjectMedia; label?: string; note?: string }>}
        />
      </section>
    </div>
  );
}

export function DrawingArtOutcome() {
  return (
    <section className="case-outcome-redesign drawing-outcome">
      <div>
        <p>OUTCOME</p>
        <h2>将分散的后台页面组织为关系清楚的数据管理系统</h2>
      </div>
      <dl>
        <div>
          <dt>数据结构</dt>
          <dd>建立 Product、Customer、Staff、Order、Order Detail 和 Invoice 之间的关系，减少重复数据。</dd>
        </div>
        <div>
          <dt>功能实现</dt>
          <dd>完成商品、客户、员工和订单数据的新增、查询、修改与删除，并实现订单明细和发票输出。</dd>
        </div>
        <div>
          <dt>技术收获</dt>
          <dd>理解关系数据库中主键、外键和交易数据的组织方式，并通过 PHP 将数据库操作连接到具体业务页面。</dd>
        </div>
        <div>
          <dt>后续方向</dt>
          <dd>继续增加权限控制、库存变化记录、输入校验、事务处理和更完整的报表功能。</dd>
        </div>
      </dl>
    </section>
  );
}
