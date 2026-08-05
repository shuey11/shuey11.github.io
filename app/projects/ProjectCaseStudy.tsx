"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ProjectItem, ProjectMedia, projects } from "./project-data";
import {
  GoodOmensLayout,
  GoodOmensOutcome,
  GoodOmensOverview,
} from "./components/good-omens/GoodOmensCase";
import { FtsmVrLayout, FtsmVrOutcome, FtsmVrOverview } from "./components/ftsm-vr/FtsmVrCase";
import { TravelBoardLayout, TravelBoardOutcome, TravelBoardOverview } from "./components/travel-board/TravelBoardCase";
import { HotelEaseLayout, HotelEaseOutcome, HotelEaseOverview } from "./components/hotel-ease/HotelEaseCase";
import { DrawingArtLayout, DrawingArtOutcome, DrawingArtOverview } from "./components/drawing-art/DrawingArtCase";

type ProjectCaseStudyProps = {
  project: ProjectItem;
};

type OpenImage = (item: ProjectMedia) => void;

type MediaCardProps = {
  item: ProjectMedia;
  className?: string;
  label?: string;
  frame?: "phone" | "browser" | "film" | "plain";
  onOpen: OpenImage;
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function relatedProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function mediaByFile(project: ProjectItem, fileName: string) {
  return project.gallery.find((item) => item.src.endsWith(fileName));
}

function MediaCard({ item, className = "", label, frame = "plain", onOpen }: MediaCardProps) {
  return (
    <button
      className={`case-media case-media-${frame} ${className}`}
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`查看大图：${item.title ?? item.alt}`}
    >
      {label ? <span className="case-media-label">{label}</span> : null}
      <img src={item.src} alt={item.alt} loading="lazy" />
      {item.title ? <strong>{item.title}</strong> : null}
    </button>
  );
}

function RiseUpFigure({
  item,
  className = "",
  label,
  onOpen,
}: {
  item: ProjectMedia;
  className?: string;
  label?: string;
  onOpen: OpenImage;
}) {
  return (
    <figure className={`riseup-media-figure ${className}`}>
      <button type="button" onClick={() => onOpen(item)} aria-label={`查看大图：${item.title ?? item.alt}`}>
        <img src={item.src} alt={item.alt} loading="lazy" />
      </button>
      <figcaption>
        {label ? <span>{label}</span> : null}
        {item.title ? <strong>{item.title}</strong> : null}
        {item.caption ? <p>{item.caption}</p> : null}
      </figcaption>
    </figure>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="case-section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <span>{body}</span> : null}
    </div>
  );
}

function HeroMedia({ project }: { project: ProjectItem }) {
  const orientation = project.mediaOrientation ?? "landscape";
  const fit = project.mediaFit ?? "cover";
  const riseupClass = project.slug === "riseup" ? " riseup-hero-media" : "";
  const bookshopClass = project.slug === "good-omens-bookshop" ? " goodomens-hero-media" : "";
  const specificHeroClass = [
    project.slug === "ftsm-vr" ? " ftsm-hero-media" : "",
    project.slug === "travel-board-builder" ? " travel-hero-media" : "",
    project.slug === "hotel-booking" ? " hotel-hero-media" : "",
    project.slug === "drawing-art-supplies" ? " drawing-hero-media" : "",
  ].join("");

  return (
    <div className={`case-hero-visual case-hero-visual-${orientation} case-hero-visual-fit-${fit}${riseupClass}${bookshopClass}${specificHeroClass}`}>
      {project.video ? (
        <video
          src={project.video}
          poster={project.cover}
          controls
          preload="metadata"
          playsInline
          muted
          aria-label={`${project.title} 项目演示视频`}
        />
      ) : (
        <img src={project.cover} alt={`${project.title} 项目封面`} />
      )}
    </div>
  );
}

function RiseUpOverview() {
  const cards = [
    {
      eyebrow: "BACKGROUND",
      title: "项目背景",
      body: "面向大学生日常沟通信心练习的 Android 自助应用。项目参考 CBT 与 iCBT 中的渐进式练习、认知重构和自我监测，将其转化为移动端微任务。",
    },
    {
      eyebrow: "MY ROLE",
      title: "我的角色",
      body: "个人毕业设计。独立完成调研、交互设计、Flutter 与 Firebase 开发、Unity Avatar 集成、测试和用户验收。",
    },
    {
      eyebrow: "GOAL",
      title: "项目目标",
      body: "通过个性化任务、互动练习和 Avatar 即时反馈降低练习门槛，使用户能够以较小步骤练习不同沟通场景。",
    },
    {
      eyebrow: "STACK",
      title: "技术栈",
      body: "Flutter · Dart · Provider · GoRouter · Firebase Authentication · Cloud Firestore · Unity · Blender · Android Notifications",
    },
  ];

  return (
    <section className="case-overview-redesign riseup-overview-cards">
      {cards.map((card) => (
        <article key={card.eyebrow}>
          <span>{card.eyebrow}</span>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </article>
      ))}
    </section>
  );
}

function Overview({ project }: { project: ProjectItem }) {
  if (project.slug === "riseup") return <RiseUpOverview />;
  if (project.slug === "good-omens-bookshop") return <GoodOmensOverview />;
  if (project.slug === "ftsm-vr") return <FtsmVrOverview />;
  if (project.slug === "travel-board-builder") return <TravelBoardOverview />;
  if (project.slug === "hotel-booking") return <HotelEaseOverview />;
  if (project.slug === "drawing-art-supplies") return <DrawingArtOverview />;

  return (
    <section className="case-overview-redesign">
      <article>
        <span>Background</span>
        <p>{project.summary}</p>
      </article>
      {project.role ? (
        <article>
          <span>My Role</span>
          <p>{project.role}</p>
        </article>
      ) : null}
      {project.challenge ? (
        <article>
          <span>Goal</span>
          <p>{project.challenge}</p>
        </article>
      ) : null}
      <article>
        <span>Stack</span>
        <p>{project.technologies.join(" · ")}</p>
      </article>
    </section>
  );
}

function RiseUpLayout({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  const home = mediaByFile(project, "home.jpg");
  const taskLibrary = mediaByFile(project, "task-library.jpg");
  const interactive = mediaByFile(project, "interactive-task.jpg");
  const completion = mediaByFile(project, "task-completion.jpg");
  const avatar = mediaByFile(project, "avatar-customisation.jpg");
  const thought = mediaByFile(project, "thought-check.jpg");
  const coreCards = [
    {
      eyebrow: "PERSONALISED TASKS",
      title: "个性化微任务推荐",
      body: "系统结合困难场景、偏好时长和历史练习结果调整任务难度。练习受挫时降低等级，连续取得进步时提高推荐等级。",
      tags: ["7 个沟通场景", "每个场景 5 个等级", "根据练习结果调整", "支持偏好时长"],
    },
    {
      eyebrow: "AVATAR FEEDBACK",
      title: "3D Avatar 即时反馈",
      body: "Avatar 在推荐、开始、思考、完成和升级等阶段提供动作反馈，并配合成长积分与信心变化展示练习结果。",
      tags: ["推荐动作", "开始反馈", "完成反馈", "升级反馈"],
    },
    {
      eyebrow: "AVATAR CUSTOMISATION",
      title: "Avatar 个性化定制",
      body: "用户可以选择性别、文化风格、脸型、发型、服装和配饰，创建持续出现在任务与成长页面中的虚拟伙伴。",
      tags: ["性别", "文化风格", "脸型与发型", "服装与配饰"],
    },
  ];
  const cbtCards = [
    {
      eyebrow: "GRADED PRACTICE",
      title: "渐进式情境练习",
      body: "七类沟通场景按难度分级，让用户从较容易的任务开始，逐步接触更具挑战性的日常情境。",
    },
    {
      eyebrow: "COGNITIVE RESTRUCTURING",
      title: "认知重构与 Thought Check",
      body: "Thought Check 用于记录自动化想法、识别常见思维模式，并通过证据问题和平衡想法提示支持自我反思。",
    },
    {
      eyebrow: "SELF-MONITORING",
      title: "练习前后自我监测",
      body: "用户在练习前后记录紧张度、信心变化和简短反思，这些结果会进入成长记录和后续推荐依据。",
    },
  ];
  const flowSteps = [
    {
      n: "01",
      title: "选择任务",
      body: "用户可以从个性化推荐或任务库中选择需要练习的沟通场景和任务。",
      media: taskLibrary,
    },
    {
      n: "02",
      title: "完成互动练习",
      body: "任务通过分支选择、排序、语音练习、证据挑战、情绪记录和短反思等方式，引导用户主动参与，而不是被动阅读。",
      media: interactive,
    },
    {
      n: "03",
      title: "记录结果与反馈",
      body: "完成后记录练习前后的紧张度与信心变化，展示成长积分和 Avatar 反馈，并保存任务回答与反思。",
      media: completion,
    },
  ].filter((step) => step.media) as Array<{ n: string; title: string; body: string; media: ProjectMedia }>;
  const featureDetails = [
    {
      eyebrow: "PERSONALISED RECOMMENDATION",
      title: "个性化任务推荐",
      body: "首页根据用户选择的困难场景、偏好时长和历史练习结果展示推荐任务。推荐卡包含任务场景、预计时长、任务难度和 Avatar 提示，让用户可以快速开始一次练习。",
      media: home,
      reverse: false,
    },
    {
      eyebrow: "AVATAR SYSTEM",
      title: "Avatar 定制与成长反馈",
      body: "用户可以选择性别、文化风格、脸型、发型、服装和配饰。完成任务后，Avatar 会根据任务结果、反馈风格和等级变化播放对应动作，并配合成长积分和信心进度展示用户的练习成果。",
      media: avatar,
      reverse: true,
    },
    {
      eyebrow: "THOUGHT CHECK",
      title: "Thought Check",
      body: "Thought Check 用于记录困扰用户的自动化想法，并通过本地规则识别常见思维模式。系统提供证据问题、平衡想法建议和可执行的小步骤，帮助用户进行结构化反思。分析结果只在本地显示，不上传云端。",
      media: thought,
      reverse: false,
    },
  ].filter((detail) => detail.media) as Array<{
    eyebrow: string;
    title: string;
    body: string;
    media: ProjectMedia;
    reverse: boolean;
  }>;

  return (
    <div className="riseup-case-flow">
      <section className="case-section riseup-core-experience">
        <SectionTitle
          eyebrow="CORE EXPERIENCE"
          title="围绕持续练习设计的三项核心体验"
          body="RiseUp 的核心不只是展示任务，而是解决三个问题：推荐什么、练习过程中如何获得反馈，以及用户如何与自己的虚拟伙伴建立个人连接。"
        />
        <div className="riseup-core-grid">
          {coreCards.map((card) => (
            <article key={card.eyebrow} className="riseup-core-card">
              <div className="riseup-core-copy">
                <span>{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <div className="riseup-tag-list">
                  {card.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section riseup-cbt-foundation">
        <SectionTitle
          eyebrow="DESIGN FOUNDATION"
          title="以 CBT 原则组织练习，而不是随机生成任务"
          body="项目参考 CBT 与 iCBT 的常见练习方式，只保留与移动端任务直接相关的三个设计依据。"
        />
        <div className="riseup-foundation-grid">
          {cbtCards.map((card) => (
            <article key={card.eyebrow}>
              <span>{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <aside className="riseup-scope-note">
          <h3>使用范围说明</h3>
          <p>
            RiseUp 不提供心理疾病诊断、临床评估、危机干预或治疗建议，也不能替代心理咨询师、医生或其他专业服务；它只用于日常沟通练习和自我反思。
          </p>
        </aside>
      </section>

      <section className="case-section riseup-practice-flow">
        <SectionTitle
          eyebrow="PRACTICE FLOW"
          title="一次练习，如何影响下一次推荐"
          body="用户从推荐或任务库进入练习，完成互动任务并记录练习前后的变化。完成记录会参与后续推荐，让下一次练习更符合用户当前的状态。"
        />
        <div className="riseup-flow-grid">
          {flowSteps.map((step) => (
            <article key={step.n} className="riseup-flow-step">
              <div>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <RiseUpFigure item={step.media} onOpen={onOpen} />
            </article>
          ))}
        </div>
        <aside className="riseup-feedback-loop">
          <h3>练习结果参与下一次推荐</h3>
          <p>
            如果练习后的紧张度明显升高，或信心低于练习前，系统会降低后续推荐难度；如果用户在同一场景连续取得信心提升，系统会提高该场景的推荐等级。
          </p>
          <div aria-label="反馈循环路径">
            <span>个性化推荐</span>
            <span>互动练习</span>
            <span>完成与记录</span>
            <span>调整下一次推荐</span>
          </div>
        </aside>
      </section>

      <section className="case-section riseup-feature-details">
        {featureDetails.map((detail) => (
          <article className={detail.reverse ? "is-reversed" : ""} key={detail.eyebrow}>
            <div className="riseup-feature-copy">
              <span>{detail.eyebrow}</span>
              <h3>{detail.title}</h3>
              <p>{detail.body}</p>
            </div>
            <RiseUpFigure item={detail.media} onOpen={onOpen} />
          </article>
        ))}
      </section>
    </div>
  );
}

function BookshopLayout({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  if (project.slug === "good-omens-bookshop") {
    return <GoodOmensLayout project={project} onOpen={onOpen} />;
  }

  const [d1, d2, d3, d4] = project.gallery;

  return (
    <>
      <section className="case-section case-film-strip">
        <SectionTitle eyebrow="Film Strip" title="用电影画幅阅读书店空间的前景、中景与动线。" body={project.solution} />
        <div className="film-strip">
          {project.gallery.map((item, index) => (
            <MediaCard item={item} key={item.src} label={`FRAME ${index + 1}`} frame="film" onOpen={onOpen} />
          ))}
        </div>
      </section>
      <section className="case-section case-cinematic-grid">
        <MediaCard item={d4} className="space-map" frame="film" onOpen={onOpen} />
        <div className="cinematic-stack">
          <MediaCard item={d1} frame="film" onOpen={onOpen} />
          <MediaCard item={d2} frame="film" onOpen={onOpen} />
        </div>
        <div className="cinematic-copy">
          <p>Design & Development</p>
          <h2>从整体布局到书桌、电话、书架和旋转楼梯，重建一个可被镜头游走的 3D 书店。</h2>
          <span>{project.technologies.join(" · ")}</span>
        </div>
        <MediaCard item={d3} className="stair-detail" frame="film" onOpen={onOpen} />
      </section>
    </>
  );
}

function VrLayout({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  const [map, entry, aerial, compare] = project.gallery;

  return (
    <>
      <section className="case-section case-blueprint">
        <SectionTitle eyebrow="Spatial Blueprint" title="从平面参考到可进入的虚拟建筑环境。" body={project.solution} />
        <div className="blueprint-grid">
          <MediaCard item={map} className="blueprint-map" frame="plain" onOpen={onOpen} />
          <div className="blueprint-notes">
            <article><span>01</span><p>平面图与 Unity 俯视场景对照，用来建立空间关系。</p></article>
            <article><span>02</span><p>入口、道路、停车区和建筑外观组成主要导航路径。</p></article>
            <article><span>03</span><p>真实建筑对照用于校准外观和空间识别度。</p></article>
          </div>
        </div>
      </section>
      <section className="case-section case-vr-matrix">
        <MediaCard item={entry} className="wide" label="ENTRY" frame="plain" onOpen={onOpen} />
        <MediaCard item={aerial} label="AERIAL" frame="plain" onOpen={onOpen} />
        <MediaCard item={compare} label="COMPARE" frame="plain" onOpen={onOpen} />
      </section>
    </>
  );
}

function TravelLayout({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  const setup = mediaByFile(project, "starting-setup.jpg");
  const unlock = mediaByFile(project, "unlock-location.jpg");
  const location = mediaByFile(project, "location-editor.jpg");
  const board = mediaByFile(project, "board-editor.jpg");
  const event = mediaByFile(project, "event-editor.png");
  const journal = mediaByFile(project, "assets-journal.png");
  const gameplay = mediaByFile(project, "gameplay.jpg");
  const create = [setup, unlock, location].filter(Boolean) as ProjectMedia[];
  const collage = [board, event, journal].filter(Boolean) as ProjectMedia[];

  return (
    <>
      <section className="case-section case-board-flow">
        <SectionTitle eyebrow="Create Board" title="从初始设置到地点解锁，建立一张可编辑旅行棋盘。" body={project.solution} />
        <div className="board-track">
          {create.map((item, index) => (
            <MediaCard item={item} key={item.src} label={`STEP ${index + 1}`} frame="phone" onOpen={onOpen} />
          ))}
        </div>
      </section>
      <section className="case-section case-board-collage">
        <div className="board-copy">
          <p>Design & Development</p>
          <h2>棋盘、事件卡和旅行日记像票券一样拼合，支持配置后进入游玩。</h2>
        </div>
        {collage.map((item, index) => (
          <MediaCard item={item} key={item.src} className={`ticket ticket-${index + 1}`} frame="phone" onOpen={onOpen} />
        ))}
        {gameplay ? <MediaCard item={gameplay} className="gameplay" frame="phone" onOpen={onOpen} /> : null}
      </section>
    </>
  );
}

function HotelLayout({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  const services = mediaByFile(project, "booking-services.png");
  const room = mediaByFile(project, "room-details.png");
  const management = mediaByFile(project, "booking-management.png");
  const floor = mediaByFile(project, "floor-map.png");
  const role = mediaByFile(project, "role-sync.png");

  return (
    <>
      <section className="case-section case-role-overview">
        <SectionTitle eyebrow="Role System" title="Guest、Staff、Admin 共享同一条预订管理逻辑。" body={project.solution} />
        <div className="role-pillars">
          {["Guest", "Staff", "Admin"].map((roleName, index) => (
            <article key={roleName}>
              <span>0{index + 1}</span>
              <h3>{roleName}</h3>
              <p>围绕浏览、预订、管理与状态同步形成多角色流程。</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-section case-service-map">
        {services ? <MediaCard item={services} className="side left" frame="phone" onOpen={onOpen} /> : null}
        {role ? <MediaCard item={role} className="center" frame="phone" onOpen={onOpen} /> : null}
        {management ? <MediaCard item={management} className="side right" frame="phone" onOpen={onOpen} /> : null}
      </section>
      <section className="case-section case-room-pair">
        {floor ? <MediaCard item={floor} className="large" frame="phone" onOpen={onOpen} /> : null}
        {room ? <MediaCard item={room} className="small" frame="phone" onOpen={onOpen} /> : null}
        <div>
          <p>Booking Flow</p>
          <h2>从浏览服务、查看房间，到地图选房和后台管理，流程被整理成清晰的移动端路径。</h2>
        </div>
      </section>
    </>
  );
}

function DrawingLayout({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  const login = mediaByFile(project, "login.png");
  const list = mediaByFile(project, "products-list.png");
  const detail = mediaByFile(project, "product-detail.png");
  const customers = mediaByFile(project, "customers.png");
  const order = mediaByFile(project, "order-details.png");
  const invoice = mediaByFile(project, "invoice.png");

  return (
    <>
      <section className="case-section case-dashboard-bento">
        <SectionTitle eyebrow="Data Workspace" title="商品管理和订单数据被组织成后台工作台。" body={project.solution} />
        {list ? <MediaCard item={list} className="browser-main" frame="browser" onOpen={onOpen} /> : null}
        {detail ? <MediaCard item={detail} className="browser-side" frame="browser" onOpen={onOpen} /> : null}
        {login ? <MediaCard item={login} className="login-card" frame="browser" onOpen={onOpen} /> : null}
      </section>
      <section className="case-section case-business-triptych">
        <SectionTitle eyebrow="Business Flow" title="客户、订单明细和发票构成完整业务链路。" />
        <div>
          {[customers, order, invoice].filter(Boolean).map((item) => (
            <MediaCard item={item as ProjectMedia} key={(item as ProjectMedia).src} frame="browser" onOpen={onOpen} />
          ))}
        </div>
      </section>
    </>
  );
}

function LayoutRenderer({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  switch (project.layout) {
    case "mobile-journey":
      return <RiseUpLayout project={project} onOpen={onOpen} />;
    case "cinematic-3d":
      return <BookshopLayout project={project} onOpen={onOpen} />;
    case "spatial-vr":
      if (project.slug === "ftsm-vr") return <FtsmVrLayout project={project} onOpen={onOpen} />;
      return <VrLayout project={project} onOpen={onOpen} />;
    case "board-collage":
      if (project.slug === "travel-board-builder") return <TravelBoardLayout project={project} onOpen={onOpen} />;
      return <TravelLayout project={project} onOpen={onOpen} />;
    case "service-flow":
      if (project.slug === "hotel-booking") return <HotelEaseLayout project={project} onOpen={onOpen} />;
      return <HotelLayout project={project} onOpen={onOpen} />;
    case "dashboard-editorial":
      if (project.slug === "drawing-art-supplies") return <DrawingArtLayout project={project} onOpen={onOpen} />;
      return <DrawingLayout project={project} onOpen={onOpen} />;
    default:
      return null;
  }
}

function DefaultOutcome({ project }: { project: ProjectItem }) {
  return (
    <section className="case-outcome-redesign">
      <div>
        <p>Outcome</p>
        <h2>{project.summary}</h2>
      </div>
      <dl>
        {project.role ? (
          <div>
            <dt>我的角色</dt>
            <dd>{project.role}</dd>
          </div>
        ) : null}
        <div>
          <dt>项目结果</dt>
          <dd>{project.solution ?? project.summary}</dd>
        </div>
        <div>
          <dt>可继续改进</dt>
          <dd>后续可以继续补充更完整的交互说明、可访问性细节和更多真实使用场景。</dd>
        </div>
      </dl>
    </section>
  );
}

function RiseUpOutcome() {
  return (
    <section className="case-outcome-redesign riseup-outcome">
      <div>
        <p>OUTCOME</p>
        <h2>把抽象的信心练习，转化为可以持续记录的成长过程</h2>
        <span>
          RiseUp 最终完成了个性化任务推荐、互动练习、练习记录和 3D Avatar 反馈。用户可以通过较小任务逐步练习不同沟通场景。
        </span>
      </div>
      <dl>
        <div>
          <dt>我的职责</dt>
          <dd>独立负责需求研究、交互设计、Flutter 开发、Firebase 数据管理、Unity Avatar 集成、测试和最终评估。</dd>
        </div>
        <div>
          <dt>实现结果</dt>
          <dd>完成 7 个沟通场景、70 个微任务、10 类互动形式、个性化推荐、Thought Check、Avatar 定制、动作反馈和成长记录。</dd>
        </div>
        <div>
          <dt>测试结果</dt>
          <dd>17 项功能测试全部通过；10 名目标用户参与 UAT，平均评分为 4.92 / 5。反馈集中在功能引导、Thought Check 示例和更多场景选项。</dd>
        </div>
        <div>
          <dt>后续方向</dt>
          <dd>继续优化推荐规则、交互说明与可访问性细节，并扩展更多真实沟通场景、语言和 Avatar 定制内容。</dd>
        </div>
      </dl>
    </section>
  );
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const [activeImage, setActiveImage] = useState<ProjectMedia | null>(null);
  const previous = relatedProject(project.previousProject);
  const next = relatedProject(project.nextProject);
  const metrics = useMemo(() => project.metrics.filter(Boolean), [project.metrics]);
  const isRiseUp = project.slug === "riseup";
  const isGoodOmens = project.slug === "good-omens-bookshop";
  const isFtsmVr = project.slug === "ftsm-vr";
  const isTravelBoard = project.slug === "travel-board-builder";
  const isHotelEase = project.slug === "hotel-booking";
  const isDrawingArt = project.slug === "drawing-art-supplies";

  useEffect(() => {
    if (!activeImage) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage]);

  return (
    <main className={`case-page case-redesign case-theme-${project.theme} case-layout-${project.layout}`}>
      <nav className="case-nav-redesign">
        <Link href="/#projects">返回全部项目</Link>
        <Link className="case-brand-redesign" href="/">
          <span>宁舒依</span>
          <small>Ning Shuyi</small>
        </Link>
        <span>{project.n} / 06</span>
      </nav>

      <section className="case-hero-redesign">
        <div className="case-hero-copy-redesign">
          <p>{project.category}</p>
          <h1>{project.title}</h1>
          <span>{project.englishTitle}</span>
          <h2>{project.tagline}</h2>
          {project.heroDescription ? <p className="case-hero-support">{project.heroDescription}</p> : null}
          <div className="case-tech-redesign">
            {project.technologies.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <HeroMedia project={project} />
      </section>

      <div className="case-content-wrap">
        <Overview project={project} />
        {metrics.length > 0 ? (
          <section className="case-metrics-redesign">
            {metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </section>
        ) : null}
        <LayoutRenderer project={project} onOpen={setActiveImage} />
        {isRiseUp ? (
          <RiseUpOutcome />
        ) : isGoodOmens ? (
          <GoodOmensOutcome />
        ) : isFtsmVr ? (
          <FtsmVrOutcome />
        ) : isTravelBoard ? (
          <TravelBoardOutcome />
        ) : isHotelEase ? (
          <HotelEaseOutcome />
        ) : isDrawingArt ? (
          <DrawingArtOutcome />
        ) : (
          <DefaultOutcome project={project} />
        )}

        <section className="case-next-redesign">
          {previous ? (
            <a href={`/projects/${previous.slug}/`}>
              <small>上一个项目</small>
              <strong>{previous.title}</strong>
            </a>
          ) : null}
          <Link href="/#projects" className="case-back-redesign">
            返回全部项目
          </Link>
          {next ? (
            <a href={`/projects/${next.slug}/`}>
              <small>下一个项目</small>
              <strong>
                {next.title} <Arrow />
              </strong>
            </a>
          ) : null}
        </section>
      </div>

      {activeImage ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title ?? activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button type="button" onClick={() => setActiveImage(null)} autoFocus>
            关闭
          </button>
          <img src={activeImage.src} alt={activeImage.alt} />
          {activeImage.caption ? <p>{activeImage.caption}</p> : null}
        </div>
      ) : null}
    </main>
  );
}
