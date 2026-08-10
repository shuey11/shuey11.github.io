import { ProjectItem, ProjectMedia } from "../../project-data";
import { CaseSectionTitle, EqualHeightMediaRow, FourCardOverview, OpenImage } from "../shared/CasePrimitives";

function mediaByFile(project: ProjectItem, fileName: string) {
  return project.gallery.find((item) => item.src.endsWith(fileName));
}

export function HotelEaseOverview() {
  return (
    <FourCardOverview
      className="hotel-overview-cards"
      cards={[
        {
          eyebrow: "PROJECT",
          title: "项目简介",
          body: "面向酒店预订与住店服务开发的多角色移动应用，包含 Guest、Staff 和 Admin，覆盖房型浏览、地图选房、预订、消息通知及酒店内部服务管理。",
        },
        {
          eyebrow: "MY WORK",
          title: "我的工作",
          body: "五人小组项目，担任组长。负责房间预订、地图选房、消息通知、个人偏好及房型推荐模块的页面、交互和业务流程开发；同时负责需求拆解、任务协调、数据字段统一、版本整合和三端核心流程联调。",
        },
        {
          eyebrow: "IMPLEMENTATION",
          title: "技术实现",
          body: "使用 Flutter/Dart 开发移动端页面和操作流程，通过 Firebase Authentication 完成用户认证、Cloud Firestore 管理用户、房间和预订数据；串联浏览房型 → 地图选房 → 提交预订 → 查看预订 → 接收通知流程，并连接 Guest、Staff、Admin 三种角色的数据状态。",
        },
        {
          eyebrow: "STACK",
          title: "技术栈",
          body: "Flutter · Dart · Firebase Authentication · Cloud Firestore · Figma",
        },
      ]}
    />
  );
}

export function HotelEaseLayout({ project, onOpen }: { project: ProjectItem; onOpen: OpenImage }) {
  const services = mediaByFile(project, "booking-services.jpg");
  const room = mediaByFile(project, "room-details.png");
  const booking = mediaByFile(project, "booking-management.jpg");
  const floor = mediaByFile(project, "floor-map.png");
  const role = mediaByFile(project, "role-sync.jpg");

  return (
    <div className="hotel-case-flow">
      <section className="case-section hotel-role-section">
        <CaseSectionTitle
          eyebrow="ROLE SYSTEM"
          title="Guest、Staff 和 Admin 读取并更新同一套酒店数据"
          body="Guest 提交预订后，Firestore 保存房间、日期、用户和预订状态；Staff / Admin 页面读取相关预订数据并显示最新状态。不同角色使用同一套数据，但操作范围不同。"
        />
        <EqualHeightMediaRow
          className="hotel-role-row"
          onOpen={onOpen}
          items={[
            ...(services
              ? [{
                  media: services,
                  label: "GUEST / 客人",
                  note: "浏览房型与服务入口，选择日期、查看房间位置、提交预订，并接收相关通知。",
                }]
              : []),
            ...(booking
              ? [{
                  media: booking,
                  label: "STAFF / 员工",
                  note: "读取分配到的服务或预订数据，查看任务信息，并更新处理状态。",
                }]
              : []),
            ...(role
              ? [{
                  media: role,
                  label: "ADMIN / 管理员",
                  note: "查看房间、预订和服务状态，检查酒店管理流程中的数据变化。",
                }]
              : []),
          ] as Array<{ media: ProjectMedia; label?: string; note?: string }>}
        />
      </section>

      <section className="case-section hotel-booking-section">
        <CaseSectionTitle
          eyebrow="BOOKING FLOW"
          title="从房型浏览到地图选房和预订提交"
          body="Guest 先浏览房型和房间详情，再通过楼层地图选择具体房间；提交后，Cloud Firestore 保存用户、房间、日期和预订状态，后续页面读取最新预订记录。"
        />
        <div className="hotel-booking-layout">
          <ol>
            <li>浏览房型与酒店服务。</li>
            <li>查看房间详情、价格和可用信息。</li>
            <li>在楼层地图中选择具体房间。</li>
            <li>提交预订并写入 Firestore。</li>
            <li>查看预订状态并接收通知。</li>
          </ol>
          <EqualHeightMediaRow
            className="hotel-booking-row"
            onOpen={onOpen}
            items={[
              ...(room ? [{ media: room }] : []),
              ...(floor ? [{ media: floor }] : []),
            ] as Array<{ media: ProjectMedia; label?: string }>}
          />
        </div>
      </section>

      <section className="case-section hotel-shared-state">
        <CaseSectionTitle
          eyebrow="SHARED STATE"
          title="预订、通知和角色页面之间的数据流转"
          body="Guest 的预订数据写入 Firestore 后，Staff / Admin 页面读取对应房间、日期、用户和状态；当状态被处理或更新后，Guest 侧页面可继续读取最新记录并展示通知。"
        />
      </section>
    </div>
  );
}

export function HotelEaseOutcome() {
  return (
    <section className="case-outcome-redesign hotel-outcome">
      <div>
        <p>OUTCOME</p>
        <h2>把客人预订操作和酒店内部管理连接到同一套移动系统</h2>
        <span>
          最终完成 Guest、Staff 和 Admin 三种角色，以及房型浏览、地图选房、预订、消息通知、酒店服务、员工任务和管理功能。项目由五人团队完成，并通过 25 名用户测试收集反馈。
        </span>
      </div>
      <dl>
        <div>
          <dt>我的职责</dt>
          <dd>负责房间预订、地图选房、消息通知、个人偏好和房型推荐模块，并作为组长完成需求拆解、数据字段统一、版本整合和三端流程联调。</dd>
        </div>
        <div>
          <dt>系统成果</dt>
          <dd>完成 Guest、Staff 和 Admin 三种角色，以及房间浏览、地图选房、预订、酒店服务、员工任务和管理功能。</dd>
        </div>
        <div>
          <dt>测试结果</dt>
          <dd>项目由五人团队完成，并通过 25 名用户的测试收集可用性反馈。</dd>
        </div>
      </dl>
    </section>
  );
}
