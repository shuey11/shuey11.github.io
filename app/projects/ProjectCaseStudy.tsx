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
import {
  TravelBoardLayout,
  TravelBoardOutcome,
  TravelBoardOverview,
} from "./components/travel-board/TravelBoardCase";
import {
  HotelEaseLayout,
  HotelEaseOutcome,
  HotelEaseOverview,
} from "./components/hotel-ease/HotelEaseCase";
import {
  DrawingArtLayout,
  DrawingArtOutcome,
  DrawingArtOverview,
} from "./components/drawing-art/DrawingArtCase";
import { CaseSectionTitle, EqualHeightMediaRow, OpenImage } from "./components/shared/CasePrimitives";

type ProjectCaseStudyProps = {
  project: ProjectItem;
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

function HeroMedia({ project }: { project: ProjectItem }) {
  const orientation = project.mediaOrientation ?? "landscape";
  const fit = project.mediaFit ?? "cover";
  const specificHeroClass = [
    project.slug === "riseup" ? " riseup-hero-media" : "",
    project.slug === "good-omens-bookshop" ? " goodomens-hero-media" : "",
    project.slug === "ftsm-vr" ? " ftsm-hero-media" : "",
    project.slug === "travel-board-builder" ? " travel-hero-media" : "",
    project.slug === "hotel-booking" ? " hotel-hero-media" : "",
    project.slug === "drawing-art-supplies" ? " drawing-hero-media" : "",
  ].join("");

  return (
    <div
      className={`case-hero-visual case-hero-visual-${orientation} case-hero-visual-fit-${fit}${specificHeroClass}`}
    >
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
      eyebrow: "PROJECT",
      title: "项目简介",
      body: "面向大学生社交信心训练的 Android 应用，通过分级社交任务、互动练习、即时反馈和 3D Avatar 成长，帮助用户持续完成并记录社交练习。",
    },
    {
      eyebrow: "MY WORK",
      title: "我的工作",
      body: "个人毕业设计。独立完成需求调研、问卷分析、原型设计、数据结构、Flutter 应用开发、Firebase 数据管理、Unity Avatar 集成、测试及用户验收；构建 7 类社交场景 × 5 级难度任务体系，并设计 10 类互动训练。",
    },
    {
      eyebrow: "IMPLEMENTATION",
      title: "技术实现",
      body: "使用 Flutter/Dart 构建页面、任务流程和推荐逻辑，使用 Firebase Authentication 完成用户认证、Cloud Firestore 持久化用户与练习数据；根据练习前后的紧张度和信心变化动态调整推荐难度，并将任务结果与 Unity 3D Avatar 动作及成长反馈联动。",
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
  return null;
}

function RiseUpLayout({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  const home = mediaByFile(project, "home.jpg");
  const taskLibrary = mediaByFile(project, "task-library.jpg");
  const interactive = mediaByFile(project, "interactive-task.jpg");
  const completion = mediaByFile(project, "task-completion.jpg");
  const avatar = mediaByFile(project, "avatar-customisation.jpg");
  const thought = mediaByFile(project, "thought-check.jpg");

  return (
    <div className="riseup-case-flow">
      <section className="case-section riseup-core-experience">
        <CaseSectionTitle
          eyebrow="TASK SYSTEM"
          title="70 个分级任务如何进入练习流程"
          body="用户可以从首页推荐或任务库进入练习。系统保存场景、难度、紧张度、信心变化和练习反馈，再用于后续推荐难度调整。"
        />
        <EqualHeightMediaRow
          className="riseup-flow-grid"
          onOpen={onOpen}
          items={[
            ...(home ? [{ media: home, note: "根据用户偏好和练习历史展示推荐任务入口。" }] : []),
            ...(taskLibrary ? [{ media: taskLibrary, note: "按 7 类社交场景和 5 级难度组织 70 个微任务。" }] : []),
            ...(interactive ? [{ media: interactive, note: "通过选择、排序、记录和反思等操作收集练习结果。" }] : []),
          ]}
        />
      </section>

      <section className="case-section riseup-feature-details">
        <CaseSectionTitle
          eyebrow="FEEDBACK & RECORDS"
          title="练习结果、Thought Check 和 Avatar 反馈"
          body="完成页保存练习前后的状态变化；Thought Check 用于结构化记录自动化想法；Avatar 根据任务阶段和结果展示动作反馈。"
        />
        <EqualHeightMediaRow
          onOpen={onOpen}
          items={[
            ...(completion ? [{ media: completion, note: "记录紧张度、信心变化、反思和任务结果。" }] : []),
            ...(thought ? [{ media: thought, note: "记录想法并显示思维模式和反思提示。" }] : []),
            ...(avatar ? [{ media: avatar, note: "用户定制的角色用于练习页面和成长反馈。" }] : []),
          ]}
        />
      </section>
    </div>
  );
}

function LayoutRenderer({ project, onOpen }: ProjectCaseStudyProps & { onOpen: OpenImage }) {
  switch (project.slug) {
    case "riseup":
      return <RiseUpLayout project={project} onOpen={onOpen} />;
    case "good-omens-bookshop":
      return <GoodOmensLayout project={project} onOpen={onOpen} />;
    case "ftsm-vr":
      return <FtsmVrLayout project={project} onOpen={onOpen} />;
    case "travel-board-builder":
      return <TravelBoardLayout project={project} onOpen={onOpen} />;
    case "hotel-booking":
      return <HotelEaseLayout project={project} onOpen={onOpen} />;
    case "drawing-art-supplies":
      return <DrawingArtLayout project={project} onOpen={onOpen} />;
    default:
      return null;
  }
}

function RiseUpOutcome() {
  return (
    <section className="case-outcome-redesign riseup-outcome">
      <div>
        <p>OUTCOME</p>
        <h2>将社交练习组织为可记录、可调整的移动端流程</h2>
        <span>
          最终应用实现任务推荐、互动练习、练习记录、Thought Check、Avatar 定制与动作反馈。17 项功能测试全部通过，UAT 平均评分为 4.92 / 5。
        </span>
      </div>
      <dl>
        <div>
          <dt>我的职责</dt>
          <dd>独立负责需求研究、交互设计、Flutter 开发、Firebase 数据管理、Unity Avatar 集成、测试和最终评估。</dd>
        </div>
        <div>
          <dt>实现结果</dt>
          <dd>完成 7 类沟通场景、70 个微任务、10 类互动训练、个性化推荐、Thought Check、Avatar 定制和成长记录。</dd>
        </div>
        <div>
          <dt>测试结果</dt>
          <dd>17 项测试全部通过，用户验收测试平均评分 4.92 / 5。</dd>
        </div>
      </dl>
    </section>
  );
}

function OutcomeRenderer({ project }: { project: ProjectItem }) {
  switch (project.slug) {
    case "riseup":
      return <RiseUpOutcome />;
    case "good-omens-bookshop":
      return <GoodOmensOutcome />;
    case "ftsm-vr":
      return <FtsmVrOutcome />;
    case "travel-board-builder":
      return <TravelBoardOutcome />;
    case "hotel-booking":
      return <HotelEaseOutcome />;
    case "drawing-art-supplies":
      return <DrawingArtOutcome />;
    default:
      return null;
  }
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const [activeImage, setActiveImage] = useState<ProjectMedia | null>(null);
  const previous = relatedProject(project.previousProject);
  const next = relatedProject(project.nextProject);
  const metrics = useMemo(() => project.metrics.filter(Boolean), [project.metrics]);

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
        <OutcomeRenderer project={project} />

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
