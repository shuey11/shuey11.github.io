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
          body: "绘画用品业务需要同时维护商品、客户、员工、订单和发票。如果缺少清晰的数据关系，容易产生重复输入、订单明细不一致或发票无法追踪的问题。",
        },
        {
          eyebrow: "MY ROLE",
          title: "我的角色",
          body: "个人数据库 Web 项目。独立完成数据库设计、主键与外键关系、PHP 后端逻辑、CRUD 页面、数据查询、订单明细处理、发票生成和表格展示。",
        },
        {
          eyebrow: "GOAL",
          title: "项目目标",
          body: "将主数据和交易数据分开管理，使商品和客户可以被订单重复引用，并让发票直接读取订单及其明细，减少重复录入。",
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
          title="用关系数据库组织主数据与交易数据"
          body="Order 保存一次交易的订单主体，Order Detail 保存订单包含的商品和数量，Invoice 读取订单、客户和商品明细生成。"
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
          body="产品列表用于集中展示商品字段并提供维护操作；产品详情用于读取单个商品完整字段，作为订单引用的数据来源。"
        />
        <EqualHeightMediaRow
          className="drawing-product-row"
          onOpen={onOpen}
          items={[
            ...(list ? [{ media: list, label: "产品列表", note: "集中展示商品编号、名称、价格、品牌、类型、国家和库存数量，并提供查看、编辑和删除操作。" }] : []),
            ...(detail ? [{ media: detail, label: "产品详情", note: "读取单个商品的完整字段，用于检查商品资料和订单引用的数据来源。" }] : []),
          ] as Array<{ media: ProjectMedia; label?: string; note?: string }>}
        />
      </section>

      <section className="case-section drawing-business-section">
        <CaseSectionTitle
          eyebrow="BUSINESS FLOW"
          title="从客户建立订单，再由订单明细生成发票"
          body="客户和商品先作为基础资料保存在数据库中。创建订单时选择客户，再向订单中加入一个或多个商品和数量，最后根据订单、客户和商品明细生成发票。"
        />
        <EqualHeightMediaRow
          className="drawing-business-row"
          onOpen={onOpen}
          items={[
            ...(customers ? [{ media: customers, label: "客户管理", note: "维护客户资料，为后续订单提供客户引用。" }] : []),
            ...(order ? [{ media: order, label: "订单与商品明细", note: "建立订单后加入一个或多个商品及数量，并将明细关联到同一个订单。" }] : []),
            ...(invoice ? [{ media: invoice, label: "发票输出", note: "根据订单主体、客户和商品明细生成统一的交易输出。" }] : []),
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
        <h2>将分散的后台页面组织为关系清楚的数据系统</h2>
        <span>最终完成商品、客户、员工、订单和订单明细的数据维护，并实现发票生成与表格查询功能。</span>
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
