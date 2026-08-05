import { GoodOmensComparisonPanel, ProjectItem, ProjectMedia } from "../../project-data";
import { CaseSectionTitle, FourCardOverview, OpenImage, ProjectFigure } from "../shared/CasePrimitives";

function mediaByFile(project: ProjectItem, fileName: string) {
  return project.gallery.find((item) => item.src.endsWith(fileName));
}

export function GoodOmensOverview() {
  return (
    <FourCardOverview
      className="goodomens-overview-cards"
      cards={[
        {
          eyebrow: "BACKGROUND",
          title: "项目背景",
          body: "以《Good Omens》中的 Aziraphale 书店为参考，通过多个影视镜头判断立柱、书架、门窗、楼梯和家具之间的空间关系，并将局部画面整合为连续的三维环境。",
        },
        {
          eyebrow: "MY ROLE",
          title: "我的角色",
          body: "个人三维环境项目。独立完成参考分析、空间推导、环境建模、室内陈设、材质、灯光、摄影机动画和最终渲染。",
        },
        {
          eyebrow: "GOAL",
          title: "项目目标",
          body: "不是只复制单一镜头，而是重建一套可从不同角度观察的书店空间，同时保留深色木质结构、暖色照明和密集旧书陈设。",
        },
        {
          eyebrow: "STACK",
          title: "技术与流程",
          body: "Autodesk 3ds Max · Environment Modeling · Materials · Lighting · Camera Animation · Rendering",
        },
      ]}
    />
  );
}

function ComparisonPanel({
  panel,
  reversed,
  onOpen,
}: {
  panel: GoodOmensComparisonPanel;
  reversed: boolean;
  onOpen: OpenImage;
}) {
  if (!panel.available) return null;

  const media: ProjectMedia = {
    src: panel.image,
    alt: `${panel.title}：电视剧参考画面与 3D 重建结果对照`,
    title: panel.title,
    caption: `${panel.topLabel} / ${panel.bottomLabel}`,
  };

  return (
    <article className={`goodomens-comparison-panel ${reversed ? "is-reversed" : ""}`}>
      <div className="goodomens-comparison-copy">
        <span>{panel.index}</span>
        <h3>{panel.title}</h3>
        <p>{panel.description}</p>
        <div>
          {panel.focusPoints.slice(0, 3).map((point) => (
            <small key={point}>{point}</small>
          ))}
        </div>
      </div>
      <figure className="goodomens-comparison-figure">
        <button type="button" onClick={() => onOpen(media)} aria-label={`查看大图：${panel.title}`}>
          <img className="goodomens-comparison-image" src={panel.image} alt={media.alt} loading="lazy" />
        </button>
        <figcaption>
          <span>上方画面 · {panel.topLabel}</span>
          <span>下方画面 · {panel.bottomLabel}</span>
        </figcaption>
      </figure>
    </article>
  );
}

function GoodOmensReferenceComparison({ project, onOpen }: { project: ProjectItem; onOpen: OpenImage }) {
  const panels = project.comparisonPanels?.filter((panel) => panel.available) ?? [];
  if (panels.length === 0) return null;

  return (
    <section className="case-section goodomens-comparisons">
      <CaseSectionTitle
        className="goodomens-section-title"
        eyebrow="REFERENCE COMPARISON"
        title="影视画面与三维重建对照"
        body="三组组合图分别展示入口区域、书桌区域和雕像书架区域。每张图上方为电视剧参考画面，下方为我的 3D 重建结果，用于说明我如何从画面中的空间线索推导三维结构。"
      />
      <div className="goodomens-comparison-list">
        {panels.map((panel, index) => (
          <ComparisonPanel key={panel.image} panel={panel} reversed={index % 2 === 1} onOpen={onOpen} />
        ))}
      </div>
      <aside className="goodomens-rights-note">
        <p>
          影视截图仅用于非商业学习项目中的视觉研究与三维重建对照，相关画面版权归原作品权利方所有；三维模型、场景搭建、材质、灯光、动画与渲染部分由宁舒依独立完成。
        </p>
        <small>
          Television stills are shown only for non-commercial visual study and reconstruction comparison. All 3D modelling, scene assembly, materials, lighting, animation and rendering were completed by Ning Shuyi.
        </small>
      </aside>
    </section>
  );
}

function GoodOmensReconstructionProcess() {
  const steps = [
    {
      index: "01",
      title: "参考分析与空间定位",
      body: "比较多个镜头中反复出现的立柱、书架、门窗、雕像和家具，将它们作为空间定位点。再判断主要区域之间的方向、距离和遮挡关系。",
    },
    {
      index: "02",
      title: "环境建模与室内陈设",
      body: "先建立墙体、地面、立柱、楼梯和书架等主要结构，再补充桌椅、灯具、雕塑、地毯、书籍和小型装饰物。各区域需要能够自然连接。",
    },
    {
      index: "03",
      title: "材质、灯光与摄影机",
      body: "通过木材、织物、纸张、金属和石膏等材质丰富层次。最后利用暖色局部照明、环境暗部和摄影机运动完成展示。",
    },
  ];

  return (
    <section className="case-section goodomens-process">
      <CaseSectionTitle className="goodomens-section-title" eyebrow="RECONSTRUCTION PROCESS" title="重建过程" />
      <div className="goodomens-process-grid goodomens-process-grid-three">
        {steps.map((step) => (
          <article key={step.index}>
            <span>{step.index}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GoodOmensCameraLighting({ project, onOpen }: { project: ProjectItem; onOpen: OpenImage }) {
  const render = mediaByFile(project, "detail-04.png") ?? project.gallery[0];
  const modules = [
    {
      title: "灯光层次",
      body: "使用暖色局部光源突出书桌、家具和主要陈设，同时保留较暗背景，让旧书店氛围和空间可读性保持平衡。",
    },
    {
      title: "摄影机路径",
      body: "摄影机运动用于展示入口、通道、书架、旋转楼梯和室内陈设之间的关系，并通过镜头切换组织观看顺序。",
    },
    {
      title: "最终渲染",
      body: "渲染结果强调深色木质结构、密集书籍和暖色照明之间的层次，使空间在多角度展示中保持统一气氛。",
    },
  ];

  return (
    <section className="case-section goodomens-presentation">
      <div>
        <CaseSectionTitle
          className="goodomens-section-title"
          eyebrow="CAMERA & LIGHTING"
          title="摄影机与灯光呈现"
          body="完成环境模型后，我使用灯光和摄影机动画重新组织观众观察空间的顺序，使书店能够通过镜头运动被连续理解。"
        />
        <div className="goodomens-presentation-modules">
          {modules.map((module) => (
            <article key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.body}</p>
            </article>
          ))}
        </div>
      </div>
      {render ? <ProjectFigure item={render} label="3D SCENE VIEW" onOpen={onOpen} /> : null}
    </section>
  );
}

export function GoodOmensLayout({ project, onOpen }: { project: ProjectItem; onOpen: OpenImage }) {
  return (
    <div className="goodomens-case-flow">
      <GoodOmensReferenceComparison project={project} onOpen={onOpen} />
      <GoodOmensReconstructionProcess />
      <GoodOmensCameraLighting project={project} onOpen={onOpen} />
    </div>
  );
}

export function GoodOmensOutcome() {
  const modules = [
    {
      title: "我的职责",
      body: "独立完成参考分析、空间推导、环境建模、室内陈设、材质、灯光、摄影机动画和最终渲染。",
    },
    {
      title: "项目成果",
      body: "将多个影视镜头中的空间线索整合为一套可从不同方向观察的三维环境，并通过三组画面对照验证主要结构和陈设关系。",
    },
    {
      title: "后续方向",
      body: "继续优化局部模型精度、材质细节、光照层次和摄影机运动，并补充线框图、建模过程和材质测试。",
    },
  ];

  return (
    <section className="case-outcome-redesign goodomens-outcome">
      <div>
        <p>OUTCOME</p>
        <h2>将分散的影视画面转化为可连续观察的三维环境</h2>
        <span>
          最终场景形成了由入口、立柱、墙面书架、旋转楼梯、主要家具、雕像和室内陈设组成的连续书店环境。摄影机可以在不同区域之间移动，使空间结构和灯光氛围不再局限于单一构图。
        </span>
      </div>
      <div className="goodomens-outcome-grid goodomens-outcome-grid-three">
        {modules.map((module) => (
          <article key={module.title}>
            <h3>{module.title}</h3>
            <p>{module.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
