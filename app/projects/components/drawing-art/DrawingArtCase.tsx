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
          eyebrow: "PROJECT",
          title: "项目简介",
          body: "面向绘画用品业务的 Web 后台管理系统，用于统一管理商品、顾客、员工、订单、订单明细和发票数据。",
        },
        {
          eyebrow: "MY WORK",
          title: "我的工作",
          body: "负责顾客、员工和订单 3 个核心模块，并完成数据库关系设计、PHP 后端 CRUD、后台管理页面、表单处理和数据查询。",
        },
        {
          eyebrow: "IMPLEMENTATION",
          title: "技术实现",
          body: "使用 PHP 处理表单请求和业务判断，MySQL 完成数据新增、查询、修改和删除；HTML/CSS + JavaScript 构建后台页面及表单交互，并通过主键和外键连接 Customer、Order、Order Detail、Product 等数据。",
        },
        {
          eyebrow: "STACK",
          title: "技术栈",
          body: "PHP · MySQL · HTML · CSS · JavaScript · Bootstrap · DataTables",
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
          title="用关系字段组织主数据与交易数据"
          body="Order 保存一次交易的订单主体，Order Detail 保存订单包含的商品和数量，Invoice 读取订单、客户和商品明细生成交易输出。"
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
          <span>Staff → 后台操作</span>
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
            ...(list
              ? [{
                  media: list,
                  note: "集中展示商品编号、名称、价格、品牌、类型、国家和库存数量，并提供查看、编辑和删除操作。",
                }]
              : []),
            ...(detail
              ? [{
                  media: detail,
                  note: "读取单个商品的完整字段，用于检查商品资料和订单引用的数据来源。",
                }]
              : []),
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
            ...(customers ? [{ media: customers, note: "维护客户资料，为后续订单提供客户引用。" }] : []),
            ...(order
              ? [{
                  media: order,
                  note: "建立订单后加入一个或多个商品及数量，并将明细关联到同一个订单。",
                }]
              : []),
            ...(invoice
              ? [{
                  media: invoice,
                  note: "根据订单主体、客户和商品明细生成统一的交易输出。",
                }]
              : []),
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
        <h2>将后台页面操作连接到 MySQL 数据库</h2>
        <span>
          最终完成商品、顾客、员工、订单和订单明细的数据维护，并实现发票生成与表格查询功能。
        </span>
      </div>
      <dl>
        <div>
          <dt>数据结构</dt>
          <dd>建立 Product、Customer、Staff、Order、Order Detail 和 Invoice 之间的关系，减少重复数据。</dd>
        </div>
        <div>
          <dt>技术实现</dt>
          <dd>通过 PHP 将后台页面操作连接到 MySQL 数据库，实现 Product、Customer、Staff、Order 和 Order Detail 等数据的 CRUD，并使用关系字段组织订单与商品数据。</dd>
        </div>
        <div>
          <dt>项目结果</dt>
          <dd>完成 6 个核心实体管理，以及订单明细和发票输出流程。</dd>
        </div>
      </dl>
    </section>
  );
}
