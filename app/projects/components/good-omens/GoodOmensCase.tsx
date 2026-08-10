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
          eyebrow: "PROJECT",
          title: "项目简介",
          body: "根据《Good Omens》中多个影视镜头提供的空间线索，反推并重建 Aziraphale 书店的完整三维室内环境。",
        },
        {
          eyebrow: "MY WORK",
          title: "我的工作",
          body: "个人三维环境项目。独立完成影视画面整理、空间比例推导、环境结构搭建、家具与陈设建模、材质调整、灯光布置、摄影机动画和最终渲染。",
        },
        {
          eyebrow: "IMPLEMENTATION",
          title: "技术实现",
          body: "比较不同镜头中重复出现的立柱、门窗、书架、楼梯、家具和雕像，推导它们在统一空间中的相对位置；使用 3ds Max 建立可从不同方向观察的连续场景，并通过材质、暖色局部照明和摄影机动画还原书店视觉特征。",
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
        body="三组对比图用于检查入口、书桌和雕像书架区域的结构关系。每张图片上方为电视剧参考，下方为我的三维重建。"
      />
      <div className="goodomens-comparison-list">
        {panels.map((panel, index) => (
          <ComparisonPanel key={panel.image} panel={panel} reversed={index % 2 === 1} onOpen={onOpen} />
        ))}
      </div>
      <aside className="goodomens-rights-note">
        <p>
          影视截图仅用于非商业学习项目中的视觉研究与三维重建对照；三维模型、场景搭建、材质、灯光、动画与渲染部分由宁舒依独立完成。
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
      body: "比较多个镜头中反复出现的物件，建立入口、立柱、书架、楼梯和家具之间的空间关系。",
    },
    {
      index: "02",
      title: "环境建模与室内陈设",
      body: "先完成主要建筑结构，再补充家具、雕像、书籍、灯具、地毯和其他室内物件。",
    },
    {
      index: "03",
      title: "材质、灯光与摄影机",
      body: "通过木材、织物、纸张、金属和石膏材质区分物件，再使用暖色灯光和摄影机运动完成展示。",
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
      body: "使用暖色局部光源突出书桌、家具和主要陈设，同时保留较暗背景，避免模型细节被整体暗部吞掉。",
    },
    {
      title: "摄影机路径",
      body: "摄影机路径用于展示入口、通道、书架、旋转楼梯和室内陈设之间的空间关系。",
    },
    {
      title: "最终渲染",
      body: "最终渲染用于检查材质、灯光和场景陈设在多角度展示中是否保持统一。",
    },
  ];

  return (
    <section className="case-section goodomens-presentation">
      <div>
        <CaseSectionTitle
          className="goodomens-section-title"
          eyebrow="CAMERA & LIGHTING"
          title="摄影机与灯光呈现"
          body="完成环境模型后，我使用灯光和摄影机动画组织观看顺序，使书店空间能够被连续展示。"
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
          最终场景包含入口、立柱、墙面书架、旋转楼梯、主要家具、雕像和室内陈设。摄影机可以在不同区域之间移动，用于展示空间结构、视觉焦点和灯光层次。
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
