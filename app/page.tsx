"use client";

import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { ProjectItem, projects } from "./projects/project-data";

type Ability = {
  title: string;
  category?: string;
  technologies: string;
  projects: string;
  description?: string;
};

const abilities = [
  {
    title: "移动应用与前端",
    technologies: "Flutter · Dart · React · TypeScript · HTML · CSS · Bootstrap",
    projects: "RiseUp · HotelEase · Travel Board Builder · 个人作品集网站",
  },
  {
    title: "数据与后端",
    technologies: "Firebase Authentication · Cloud Firestore · Local JSON · PHP · MySQL · DataTables",
    projects: "RiseUp · HotelEase · Travel Board Builder · Drawing Art Supplies",
  },
  {
    title: "VR 与交互",
    technologies: "Unity · C# · OpenXR · VR Interaction · Collision · Task System",
    projects: "UKM Green Campus Rescue VR · RiseUp Avatar",
  },
  {
    title: "3D 与视觉",
    technologies: "3ds Max · Blender · Environment Modeling · Materials · Lighting · Camera Animation · Figma",
    projects: "Good Omens Bookshop · RiseUp · HotelEase",
  },
  {
    title: "AI 辅助开发",
    category: "AI-ASSISTED DEVELOPMENT",
    technologies: "ChatGPT · OpenAI Codex · Stitch · Prompt Engineering · AI-assisted Development",
    projects: "个人作品集网站 · Travel Board Builder",
    description:
      "使用 ChatGPT、OpenAI Codex 和 Stitch 辅助需求拆解、AI-assisted Prototyping、Code Generation、Code Refactoring 和 Debugging；最终代码由本人完成 Human Review、修改、测试与 Build & Deployment。",
  },
] satisfies Ability[];

const coursework = [
  ["移动应用开发", "Mobile Application Development"],
  ["Web程序设计", "Web Programming"],
  ["数据库", "Database"],
  ["高级数据库", "Advanced Database"],
  ["软件需求工程", "Requirements Engineering"],
  ["软件测试", "Software Testing"],
  ["多媒体编程", "Multimedia Programming"],
  ["3D建模", "3D Modelling"],
  ["虚拟现实", "Virtual Reality"],
];

const activities = [
  {
    n: "01",
    title: "Dean’s List Award ×4",
    time: "2023—2025",
    meta: "Honour",
    description: "连续四学期获得马来西亚国立大学院长荣誉名单。",
  },
  {
    n: "02",
    title: "DJI RoboMaster Challenge 2026",
    time: "2026.06",
    meta: "Competition Experience",
    description:
      "参与马来西亚DJI RoboMaster Challenge 2026，赛事共有5所高校、12支队伍参赛。",
  },
  {
    n: "03",
    title: "Young Teachers 8.1",
    time: "2026.06",
    meta: "担任学生导师 / Student Mentor",
    description: "参与Young Teachers 8.1学生导师计划，协助开展学习交流与指导活动。",
  },
];

const contact = {
  email: "nshuey@163.com",
  github: "https://github.com/shuey11",
  resume: "/resume/Ning-Shuyi-Resume.pdf",
};

const navigableSections = new Set(["top", "about", "projects", "skills", "contact"]);

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const nav = document.querySelector<HTMLElement>(".nav");
  const offset = (nav?.offsetHeight ?? 58) + 24;
  const targetTop = section.getBoundingClientRect().top + window.scrollY - offset;
  const html = document.documentElement;
  const previousScrollBehavior = html.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "auto",
  });
  html.style.scrollBehavior = previousScrollBehavior;
}

function handleSectionNavigation(event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
  event.preventDefault();
  scrollToSection(sectionId);
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}#${sectionId}`,
  );
  event.currentTarget.blur();
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectPreviewMedia({ project }: { project: ProjectItem }) {
  const wrapRef = useRef<HTMLAnchorElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canAutoPlayVideo, setCanAutoPlayVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setCanAutoPlayVideo(Boolean(project.video) && !reducedMotion.matches);

    update();
    reducedMotion.addEventListener("change", update);
    return () => {
      reducedMotion.removeEventListener("change", update);
    };
  }, [project.video]);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.22),
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: [0, 0.2, 0.4, 0.65],
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return;

    video.muted = true;
    video.defaultMuted = true;

    if (!canAutoPlayVideo) {
      video.pause();
      return;
    }

    if (isVisible) {
      video.play().catch(() => {
        // Autoplay can be rejected by browser policy; keep the video poster visible.
      });
      return;
    }

    video.pause();
  }, [canAutoPlayVideo, isVisible, videoFailed]);

  const representative = project.previewImage ?? project.gallery[0]?.src ?? project.cover;

  return (
    <a
      className={`media-card media-${project.mediaOrientation ?? "landscape"} media-fit-${
        project.mediaFit ?? "cover"
      } ${project.video ? "media-video" : "media-image"}`}
      data-project={project.slug}
      href={`/projects/${project.slug}/`}
      ref={wrapRef}
      aria-label={`打开 ${project.title} 技术详情`}
    >
      {project.video && !videoFailed ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={project.cover}
          onError={() => setVideoFailed(true)}
        >
          <source src={project.video} type="video/mp4" />
        </video>
      ) : (
        <img src={project.cover} alt={`${project.title} 项目封面`} loading="lazy" />
      )}
      {!project.video ? (
        <img
          className="media-hover"
          src={representative}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      ) : null}
      <span className="media-shine" aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        setScroll(window.scrollY);
        frame.current = null;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useLayoutEffect(() => {
    const initialSection = window.location.hash.slice(1);
    if (!navigableSections.has(initialSection)) return;

    scrollToSection(initialSection);
    if (document.documentElement.dataset.initialHashScroll === "true") {
      document.documentElement.style.scrollBehavior = "";
      delete document.documentElement.dataset.initialHashScroll;
    }
  }, []);

  return (
    <main
      onPointerMove={(event) =>
        setPointer({
          x: (event.clientX / window.innerWidth - 0.5) * 2,
          y: (event.clientY / window.innerHeight - 0.5) * 2,
        })
      }
    >
      <nav className={`nav ${scroll > 40 ? "nav-scrolled" : ""}`}>
        <a
          className="brand"
          href="#top"
          aria-label="返回首页"
          onClick={(event) => handleSectionNavigation(event, "top")}
        >
          <span>宁舒依</span>
          <small>Ning Shuyi</small>
        </a>
        <div className="nav-links">
          <a href="#about" onClick={(event) => handleSectionNavigation(event, "about")}>
            关于
          </a>
          <a href="#projects" onClick={(event) => handleSectionNavigation(event, "projects")}>
            项目
          </a>
          <a href="#skills" onClick={(event) => handleSectionNavigation(event, "skills")}>
            能力
          </a>
          <a href="#contact" onClick={(event) => handleSectionNavigation(event, "contact")}>
            联系
          </a>
        </div>
        <a className="nav-cta" href={contact.resume} rel="noreferrer" target="_blank">
          简历 <Arrow />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-identity reveal">SOFTWARE ENGINEERING · INTERACTIVE MEDIA</p>
          <h1>
            <span>软件工程与</span>
            <span className="gradient-text">交互媒体开发者</span>
          </h1>
          <p className="hero-intro">
            我目前就读于 UKM 软件工程（多媒体系统开发）专业，项目实践涵盖 Web 前端、移动应用、云端数据、数据库系统、VR 游戏与3D建模。我关注界面呈现与交互体验，也能够从需求分析、数据结构和用户流程出发，完成设计、开发、测试与最终展示。
          </p>
          <div className="hero-tags" aria-label="关键词">
            {["HTML / CSS","React / TypeScript","Flutter / Dart","Java","PHP / MySQL","Firebase / Firestore","Unity / C#","3ds Max / Blender"].map(
              (item) => (
                <span key={item}>{item}</span>
              ),
            )}
          </div>
          <p className="hero-status">
            正在寻找能够参与真实产品与数字体验开发的实习机会
          </p>
          <div className="hero-actions">
            <a
              className="button button-dark"
              href="#projects"
              onClick={(event) => handleSectionNavigation(event, "projects")}
            >
              查看技术项目 <span>↓</span>
            </a>
            <a className="button button-ghost" href={contact.resume} rel="noreferrer" target="_blank">
              查看简历
            </a>
            <a className="button button-ghost" href={contact.github} rel="noreferrer" target="_blank">
              GitHub <Arrow />
            </a>
          </div>
        </div>

        <div
          className="liquid-stage"
          aria-hidden="true"
          style={{
            transform: `translate3d(${pointer.x * 10}px, ${pointer.y * 8}px, 0) rotateX(${
              pointer.y * -2
            }deg) rotateY(${pointer.x * 3}deg)`,
          }}
        >
          <div className="halo halo-a" />
          <div className="halo halo-b" />
          <div className="liquid liquid-main">
            <div className="liquid-shine" />
            <div className="liquid-core" />
            <span className="fragment fragment-phone">APP</span>
            <span className="fragment fragment-vr">VR</span>
            <span className="fragment fragment-3d">3D</span>
          </div>
          <div className="liquid liquid-small" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-wrap">
            <img
              className="hero-portrait"
              src="/images/profile.png"
              alt="宁舒依 Ning Shuyi"
            />
            <div className="portrait-name">
              <strong>宁舒依</strong>
              <span>NING SHUYI</span>
            </div>
          </div>
          <p className="stage-label label-one">RESEARCH → PRODUCT</p>
          <p className="stage-label label-two">LOGIC → EXPERIENCE</p>
        </div>

        <div className="hero-foot">
          <span>PORTFOLIO 2026</span>
          <span className="scroll-cue">
            <i /> SCROLL TO EXPLORE
          </span>
          <span>Ningbo, China</span>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="about-background" aria-hidden="true">
          <div className="about-perspective-grid" />
          <div className="about-circuit">
            <i className="circuit-line circuit-line-a" />
            <i className="circuit-line circuit-line-b" />
            <i className="circuit-line circuit-line-c" />
            <i className="circuit-line circuit-line-d" />
            <i className="circuit-node circuit-node-a" />
            <i className="circuit-node circuit-node-b" />
            <i className="circuit-node circuit-node-c" />
            <i className="circuit-node circuit-node-d" />
            <span className="process-word word-research">RESEARCH</span>
            <span className="process-word word-design">DESIGN</span>
            <span className="process-word word-develop">DEVELOP</span>
            <span className="process-word word-test">TEST</span>
          </div>
        </div>
        <p className="section-index">00 / ABOUT</p>
        <div>
          <h2>关于我</h2>
          <div className="about-row">
            <div className="about-copy">
              <p>
                我是一名软件工程（多媒体系统开发）学生，主要项目涉及 Flutter、Firebase、Unity、VR、3D 环境和 PHP / MySQL。相比只实现单个页面，我更关注一个系统中的功能流程、数据关系、状态变化和用户操作如何连接。
              </p>
              <p>
                我的个人项目通常由需求整理、功能规划、界面设计、开发、测试和最终展示组成；在团队项目中，我也参与任务分配、数据字段统一、版本整合和流程联调。
              </p>
              <div className="education-brand">
                <div className="education-logo-shell">
                  <img
                    className="education-logo"
                    src="/images/ukm-logo.png"
                    alt="Universiti Kebangsaan Malaysia logo"
                  />
                </div>
                <div>
                  <strong>Universiti Kebangsaan Malaysia</strong>
                  <span>Bachelor of Software Engineering · Multimedia Systems Development</span>
                </div>
              </div>
            </div>
            <dl>
              <div>
                <dt>马来西亚国立大学</dt>
                <dd>Universiti Kebangsaan Malaysia（UKM）</dd>
              </div>
              <div>
                <dt>学历</dt>
                <dd>
                  Bachelor of Software Engineering
                  <br />
                  Multimedia Systems Development
                </dd>
              </div>
              <div>
                <dt>预计毕业</dt>
                <dd>August 2027</dd>
              </div>
              <div className="education-stats">
                <span>
                  <b>3.70</b>
                  <small>/ 4.00 CGPA</small>
                </span>
                <span>
                  <b>×4</b>
                  <small>Dean&apos;s List</small>
                </span>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="credentials" id="coursework">
        <div className="course-panel">
          <p className="section-index">01 / CORE COURSEWORK</p>
          <div className="credentials-heading">
            <h2>
              相关课程
              <br />
              Related Coursework
            </h2>
            <p>
              课程覆盖移动应用、Web、数据库、需求、测试、多媒体编程、3D 建模与 VR，为项目中的系统实现和交互开发提供基础。
            </p>
          </div>
          <div className="course-cloud">
            {coursework.map(([cn, en]) => (
              <span key={cn}>
                <strong>{cn}</strong>
                <small>{en}</small>
              </span>
            ))}
          </div>
        </div>

        <div className="honours-panel">
          <p className="section-index">02 / HONOURS & ACTIVITIES</p>
          <div className="credentials-heading">
            <h2>
              荣誉与经历
              <br />
              Honours & Activities
            </h2>
          </div>
          <div className="timeline">
            {activities.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span className="timeline-number">{item.n}</span>
                <div>
                  <p>{item.time}</p>
                  <h3>{item.title}</h3>
                  <small>{item.meta}</small>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-intro" id="projects">
        <p className="section-index">03—08 / SELECTED WORK</p>
        <h2>
          六个项目，
          <br />
          六种软件与交互系统实现。
        </h2>
        <p>每个项目展示类型、职责、核心技术、技术重点和真实规模或结果。</p>
      </section>

      <section className="projects">
        {projects.map((project) => (
          <article
            className={`project project-${project.tone}`}
            id={project.slug}
            key={project.slug}
          >
            <div className="project-sticky">
              <div className="project-number">{project.n}</div>
              <div className="project-copy">
                <p className="project-eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <h4>{project.tagline}</h4>
                <p className="project-description">{project.summary}</p>
                <p className="project-description">
                  <strong>我的角色：</strong>{project.role}
                </p>
                {project.solution ? (
                  <p className="project-description">
                    <strong>技术重点：</strong>{project.solution}
                  </p>
                ) : null}
                <div className="tech-list">
                  {project.technologies.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className={`project-art art-${project.tone}`}>
                <div className="art-glow" />
                <div className="art-orb" />
                <ProjectPreviewMedia project={project} />
                <div className="art-ring" />
              </div>
              <div className="project-stats">
                {project.metrics.map((stat) => (
                  <span key={stat}>{stat}</span>
                ))}
              </div>
              <a className="project-link" href={`/projects/${project.slug}/`}>
                查看技术详情 <Arrow />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="skills" id="skills">
        <div className="skills-heading">
          <p className="section-index">09 / CAPABILITIES</p>
          <h2>技术能力与项目应用</h2>
        </div>
        <div className="ability-list">
          {abilities.map((ability, index) => (
            <div className="ability" key={ability.title}>
              <span>0{index + 1}</span>
              <h3>
                {ability.title}
                {ability.category ? <small>{ability.category}</small> : null}
              </h3>
              <div className="ability-body">
                <p>{ability.technologies}</p>
                <p><strong>使用项目：</strong>{ability.projects}</p>
                {ability.description ? <p>{ability.description}</p> : null}
              </div>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-liquid" aria-hidden="true" />
        <p className="section-index">10 / CONTACT</p>
        <h2>一起讨论软件、移动应用与交互项目</h2>
        <p className="footer-copy">
          我正在寻找软件开发、前端开发、移动应用、游戏与交互媒体相关的实习和项目机会。可以通过邮箱、GitHub 或简历进一步了解我的项目经验。
        </p>
        <div className="contact-grid" aria-label="联系方式">
          <span className="contact-link">
            <small>Email</small>
            {contact.email === "待填写" ? "邮箱待补充" : contact.email}
          </span>
          <a className="contact-link" href={contact.github} rel="noreferrer" target="_blank">
            <small>GitHub</small>
            查看 GitHub <Arrow />
          </a>
          <a
            className="contact-link"
            href={contact.resume}
            download="Ning-Shuyi-Resume.pdf"
          >
            <small>下载简历</small>
            下载简历 <Arrow />
          </a>
        </div>
        <p className="location-note">Ningbo, China</p>
        <div className="footer-bottom">
          <span>Ning Shuyi © 2026</span>
          <div>
            <a
              href="https://shuey11.github.io/travel-board-builder-flutter/"
              rel="noreferrer"
              target="_blank"
            >
              LIVE PROJECT
            </a>
            <a href="#top" onClick={(event) => handleSectionNavigation(event, "top")}>
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
