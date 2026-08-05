"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectItem, projects } from "./projects/project-data";

const abilities = [
  [
    "移动应用开发",
    "Flutter · Dart · Android · 移动端UI · 状态管理 · 通知 · 语音与音频功能",
  ],
  [
    "Web与前端",
    "React · TypeScript · JavaScript · HTML · CSS · Bootstrap · 响应式设计",
  ],
  [
    "后端与数据",
    "Firebase Authentication · Cloud Firestore · PHP · MySQL · SQL · 关系数据库 · CRUD · 多表查询",
  ],
  [
    "VR、3D与互动媒体",
    "Unity · C# · Blender · Autodesk 3ds Max · XR Interaction Toolkit · OpenXR · 3D建模 · 动画与交互",
  ],
  [
    "产品与开发流程",
    "用户研究 · 需求分析 · UI/UX · 增量开发 · Agile · 系统测试 · UAT · 团队协作",
  ],
];

const coursework = [
  ["计算机程序设计", "Programming"],
  ["离散数学", "Discrete Mathematics"],
  ["程序设计与问题解决", "Programming and Problem Solving"],
  ["数据库", "Database"],
  ["高级数据库", "Advanced Database"],
  ["Web程序设计", "Web Programming"],
  ["移动编程", "Mobile Programming"],
  ["软件需求工程", "Software Requirements Engineering"],
  ["软件测试", "Software Testing"],
  ["信息共享", "Information Sharing"],
  ["多媒体系统软件开发", "Multimedia Systems Development"],
  ["数字音频与视频技术", "Digital Audio and Video Technology"],
  ["3D建模", "3D Modelling"],
  ["VR", "Virtual Reality"],
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
  resume: "#",
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectPreviewMedia({ project }: { project: ProjectItem }) {
  const wrapRef = useRef<HTMLAnchorElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 900px)");
    const update = () =>
      setCanPlayVideo(Boolean(project.video) && !reducedMotion.matches && !smallScreen.matches);

    update();
    reducedMotion.addEventListener("change", update);
    smallScreen.addEventListener("change", update);
    return () => {
      reducedMotion.removeEventListener("change", update);
      smallScreen.removeEventListener("change", update);
    };
  }, [project.video]);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.58),
      { threshold: [0, 0.35, 0.58, 0.82] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPlayVideo || videoFailed) return;

    if (isVisible) {
      video.play().catch(() => setVideoFailed(true));
      return;
    }

    video.pause();
  }, [canPlayVideo, isVisible, videoFailed]);

  const representative = project.previewImage ?? project.gallery[0]?.src ?? project.cover;

  return (
    <a
      className={`media-card media-${project.mediaOrientation ?? "landscape"} media-fit-${
        project.mediaFit ?? "cover"
      } ${project.video ? "media-video" : "media-image"}`}
      data-project={project.slug}
      href={`/projects/${project.slug}/`}
      ref={wrapRef}
      aria-label={`打开 ${project.title} 项目概览`}
    >
      {project.video && canPlayVideo && !videoFailed ? (
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
        <a className="brand" href="#top" aria-label="返回首页">
          <span>宁舒依</span>
          <small>Ning Shuyi</small>
        </a>
        <div className="nav-links">
          <a href="#about">关于</a>
          <a href="#projects">项目</a>
          <a href="#skills">能力</a>
          <a href="#contact">联系</a>
        </div>
        <a className="nav-cta" href="#contact">
          简历 <Arrow />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-identity reveal">
            SOFTWARE ENGINEERING · INTERACTIVE MEDIA
          </p>
          <h1>
            <span>从系统逻辑，</span>
            <span>到可感知的</span>
            <span className="gradient-text">数字体验。</span>
          </h1>
          <p className="hero-intro">
            我是宁舒依，一名软件工程与互动媒体开发者。目前就读于马来西亚国立大学软件工程（多媒体系统开发）专业，关注应用开发、系统实现与互动体验，探索软件技术在移动端、Web、实时交互和3D场景中的不同应用。我希望将清晰的系统逻辑与有参与感的视觉体验结合起来，创造真正可以使用、探索和感受的数字产品。
          </p>
          <div className="hero-tags" aria-label="关键词">
            {["应用开发","Web技术","数据与系统","实时交互","VR与3D","互动媒体",].map(
              (item) => (
                <span key={item}>{item}</span>
              ),
            )}
          </div>
          <p className="hero-status">
            正在寻找软件开发相关实习机会
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              探索项目 <span>↓</span>
            </a>
            <a className="button button-ghost" href="#about">
              认识我
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
          <h2>
            我不只制作界面，
            <br />
            也构建界面背后的系统。
          </h2>
          <div className="about-row">
            <div className="about-copy">
              <p>
                我就读于马来西亚国立大学软件工程（多媒体系统开发）专业。项目覆盖Flutter与Firebase移动应用、PHP与MySQL数据系统、Unity VR交互及3D内容制作，呈现从需求分析、系统实现到测试验证的完整开发过程。
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
                  <span>Software Engineering · 2023—2027</span>
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
                  软件工程（多媒体系统开发）荣誉学士
                  <br />
                  B. Software Engineering (Hons.)
                  <br />
                  Multimedia System Development
                </dd>
              </div>
              <div>
                <dt>时间</dt>
                <dd>2023.09—2027.08</dd>
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
              核心课程
              <br />
              Core Coursework
            </h2>
            <p>
              从编程、数据库、Web与移动开发，到需求、测试、多媒体系统和3D内容，课程训练围绕可实现的软件产品展开。
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
          六种把想法变成体验的方式。
        </h2>
        <p>向下滚动，进入每个项目。</p>
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
                项目概览 <Arrow />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="skills" id="skills">
        <div className="skills-heading">
          <p className="section-index">09 / CAPABILITIES</p>
          <h2>
            工具会变化，
            <br />
            解决问题的能力会留下。
          </h2>
        </div>
        <div className="ability-list">
          {abilities.map(([title, body], index) => (
            <div className="ability" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-liquid" aria-hidden="true" />
        <p className="section-index">10 / CONTACT</p>
        <h2>
          准备把下一个想法，
          <br />
          变成可以体验的产品。
        </h2>
        <p className="footer-copy">
          欢迎联系我，了解项目详情或讨论实习与合作机会。
        </p>
        <div className="contact-grid" aria-label="联系方式">
          <span className="contact-link">
            <small>Email</small>
            {contact.email === "待填写" ? "邮箱待补充" : contact.email}
          </span>
          <a className="contact-link" href={contact.github} rel="noreferrer" target="_blank">
            <small>GitHub</small>
            shuey11 <Arrow />
          </a>
          {contact.resume === "#" ? (
            <span className="contact-link">
              <small>下载简历</small>
              简历即将更新
            </span>
          ) : (
            <a
              className="contact-link"
              href={contact.resume}
              rel="noreferrer"
              target="_blank"
            >
              <small>下载简历</small>
              Resume <Arrow />
            </a>
          )}
        </div>
        <p className="location-note">Malaysia / Ningbo, China</p>
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
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
