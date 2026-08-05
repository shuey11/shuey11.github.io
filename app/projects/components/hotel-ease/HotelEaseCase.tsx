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
          body: "HotelEase 是一套面向客人、员工和管理员的酒店移动应用。系统覆盖房间浏览、预订、地图选房、服务申请、员工任务处理和房态管理。",
        },
        {
          eyebrow: "MY ROLE",
          title: "我的角色",
          body: "五人小组项目，担任组长。负责需求拆解、功能分工、进度协调、界面与数据字段统一、版本整合、核心流程联调和测试，并参与 Flutter 与 Firebase 功能实现。",
        },
        {
          eyebrow: "GOAL",
          title: "项目目标",
          body: "将客人的预订和服务申请连接到酒店内部处理流程，使房间、预订和任务状态可以在不同角色页面中保持一致，同时明确不同角色的操作范围。",
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
          title="Guest、Staff 和 Admin 围绕同一套酒店数据协作"
          body="一个角色更新数据后，其他相关页面会从 Firestore 读取更新后的状态。三种角色共享房间、预订和服务任务数据，但操作范围不同。"
        />
        <EqualHeightMediaRow
          className="hotel-role-row"
          onOpen={onOpen}
          items={[
            ...(services ? [{ media: services, label: "GUEST / 客人", note: "浏览房间、选择日期、查看房间位置、提交预订，并申请洗衣、清洁和餐饮等酒店服务。" }] : []),
            ...(booking ? [{ media: booking, label: "STAFF / 员工", note: "读取分配到的服务任务，查看任务信息，并更新处理状态。" }] : []),
            ...(role ? [{ media: role, label: "ADMIN / 管理员", note: "维护房间和预订信息，查看房态，并检查酒店服务的执行情况。" }] : []),
          ] as Array<{ media: ProjectMedia; label?: string; note?: string }>}
        />
      </section>

      <section className="case-section hotel-booking-section">
        <CaseSectionTitle eyebrow="BOOKING FLOW" title="从选择日期到查看预订状态" />
        <div className="hotel-booking-layout">
          <ol>
            <li>选择入住与退房日期。</li>
            <li>浏览房型。</li>
            <li>查看房间详情与位置。</li>
            <li>提交预订。</li>
            <li>查看预订状态。</li>
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
          body="客人提交预订后，系统保存房间、日期、客人和预订状态；客人申请酒店服务后，系统生成对应任务供员工处理；员工或管理员更新状态后，相关页面读取新的 Firestore 数据。"
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
        <span>最终完成 Guest、Staff 和 Admin 三种角色，以及房间浏览、地图选房、预订、酒店服务、员工任务和管理功能。项目由五人团队完成，并通过 25 名用户测试收集反馈。</span>
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
