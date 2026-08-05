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
          eyebrow: "BACKGROUND",
          title: "项目背景",
          body: "HotelEase 是一套面向客人、酒店员工和管理员的多角色移动应用。客人可以查找并预订房间、选择房间位置和申请酒店服务；员工负责查看并处理服务任务；管理员负责管理房间、预订信息和整体运营数据。",
        },
        {
          eyebrow: "MY ROLE",
          title: "我的角色",
          body: "五人小组项目，担任组长。负责需求拆解、功能分工、进度协调、界面与数据字段统一、版本整合、核心流程联调和测试，并参与 Flutter 与 Firebase 功能实现。",
        },
        {
          eyebrow: "GOAL",
          title: "项目目标",
          body: "将客人的预订流程和酒店内部处理流程连接起来，使房间、预订和服务任务的状态能够在不同角色页面中保持一致，同时保证移动端操作清晰、职责边界明确。",
        },
        {
          eyebrow: "STACK",
          title: "技术栈",
          body: "Flutter · Firebase Authentication · Cloud Firestore · Figma",
        },
      ]}
    />
  );
}

export function HotelEaseLayout({ project, onOpen }: { project: ProjectItem; onOpen: OpenImage }) {
  const services = mediaByFile(project, "booking-services.png");
  const room = mediaByFile(project, "room-details.png");
  const booking = mediaByFile(project, "booking-management.png");
  const floor = mediaByFile(project, "floor-map.png");
  const role = mediaByFile(project, "role-sync.png");

  return (
    <div className="hotel-case-flow">
      <section className="case-section hotel-role-section">
        <CaseSectionTitle
          eyebrow="ROLE SYSTEM"
          title="Guest、Staff 和 Admin 围绕同一套酒店数据协作"
          body="三种角色不是三套相互独立的应用。房间、预订和服务任务保存在 Firestore 中，一个角色更新状态后，其他相关角色页面会读取更新后的数据。"
        />
        <EqualHeightMediaRow
          className="hotel-role-row"
          onOpen={onOpen}
          items={[
            ...(services ? [{ media: services, label: "GUEST / 客人", note: "浏览和搜索房间，选择入住与退房日期，通过地图查看房间位置，提交预订，并申请洗衣、客房清洁、餐饮等酒店服务。" }] : []),
            ...(booking ? [{ media: booking, label: "STAFF / 员工", note: "查看分配到的服务任务，确认任务信息并更新处理状态，同时查看与当前工作相关的房间和客人需求。" }] : []),
            ...(role ? [{ media: role, label: "ADMIN / 管理员", note: "查看和维护房间、预订及相关运营信息，管理房态，并从整体角度检查预订和服务执行情况。" }] : []),
          ] as Array<{ media: ProjectMedia; label?: string; note?: string }>}
        />
      </section>

      <section className="case-section hotel-booking-section">
        <CaseSectionTitle eyebrow="BOOKING FLOW" title="从查找房间到查看预订状态" />
        <div className="hotel-booking-layout">
          <ol>
            <li>选择入住和退房日期并浏览可用房型。</li>
            <li>查看房间详情和价格。</li>
            <li>通过地图查看或选择房间位置。</li>
            <li>提交预订。</li>
            <li>在 Booking 页面查看预订时间和当前状态。</li>
          </ol>
          <EqualHeightMediaRow
            className="hotel-booking-row"
            onOpen={onOpen}
            items={[
              ...(room ? [{ media: room, label: "房间详情" }] : []),
              ...(floor ? [{ media: floor, label: "地图选房" }] : []),
            ] as Array<{ media: ProjectMedia; label?: string }>}
          />
        </div>
      </section>

      <section className="case-section hotel-shared-state">
        <CaseSectionTitle
          eyebrow="SHARED STATE"
          title="房间、预订与服务任务在不同角色之间同步"
          body="客人提交预订后，系统保存房间、日期、客人和预订状态；客人申请酒店服务后，系统生成对应任务供员工查看和处理；员工或管理员更新状态后，相关页面读取新的 Firestore 数据，从而减少不同角色之间的信息断层。"
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
        <h2>把客人操作和酒店内部管理连接到同一套移动系统</h2>
      </div>
      <dl>
        <div>
          <dt>我的职责</dt>
          <dd>作为组长负责需求拆解、任务协调、数据结构统一、版本整合、核心流程联调和测试，并参与应用功能实现。</dd>
        </div>
        <div>
          <dt>系统成果</dt>
          <dd>完成 Guest、Staff 和 Admin 三种角色，以及房间浏览、地图选房、预订、酒店服务、员工任务和管理功能。</dd>
        </div>
        <div>
          <dt>测试结果</dt>
          <dd>项目由五人团队完成，并通过 25 名用户的测试收集可用性反馈。</dd>
        </div>
        <div>
          <dt>后续方向</dt>
          <dd>继续优化角色权限、异常状态处理、通知机制和管理端数据概览。</dd>
        </div>
      </dl>
    </section>
  );
}
