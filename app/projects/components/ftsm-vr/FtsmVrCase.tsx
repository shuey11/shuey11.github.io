import { ProjectItem, ProjectMedia } from "../../project-data";
import { CaseSectionTitle, EqualHeightMediaRow, FourCardOverview, OpenImage, ProjectFigure } from "../shared/CasePrimitives";

function mediaByFile(project: ProjectItem, fileName: string) {
  return project.gallery.find((item) => item.src.endsWith(fileName));
}

export function FtsmVrOverview() {
  return (
    <FourCardOverview
      className="ftsm-overview-cards"
      cards={[
        {
          eyebrow: "PROJECT",
          title: "项目简介",
          body: "以 UKM FTSM 真实校园为原型重建的 VR 环保游戏，玩家探索不同建筑和室外区域，通过可操作任务逐步恢复校园环境。",
        },
        {
          eyebrow: "MY WORK",
          title: "我的工作",
          body: "个人 VR 项目。独立完成校园资料整理、空间规划、Unity 场景搭建、环保任务设计、VR 移动、抓取交互、碰撞处理、任务状态、地图进度和最终结局动画。",
        },
        {
          eyebrow: "IMPLEMENTATION",
          title: "技术实现",
          body: "使用 Unity、C# 和 OpenXR 构建 VR 场景与交互，将 Block A–H 和 Car Parking 划分为 9 个任务区域，每个区域配置 5 项环保任务；完成区域后更新地图进度，9 个区域全部完成后触发古树复苏动画。",
        },
        {
          eyebrow: "STACK",
          title: "技术栈",
          body: "Unity · C# · OpenXR · VR Interaction",
        },
      ]}
    />
  );
}

export function FtsmVrLayout({ project, onOpen }: { project: ProjectItem; onOpen: OpenImage }) {
  const blueprint = mediaByFile(project, "scene-01.jpg");
  const ground = mediaByFile(project, "scene-02.png");
  const aerial = mediaByFile(project, "scene-03.png");
  const compare = mediaByFile(project, "scene-04.jpg");

  return (
    <div className="ftsm-case-flow">
      <section className="case-section ftsm-blueprint-section">
        <CaseSectionTitle
          eyebrow="SPATIAL REFERENCE"
          title="从校园地图建立虚拟场景的总体布局"
          body="我先根据学校地图确定 Block A-H、停车区域、道路和主要通道之间的关系，再将这些区域转化为 Unity 场景中的建筑与可探索路线。"
        />
        <div className="ftsm-blueprint-layout">
          {blueprint ? (
            <ProjectFigure
              item={blueprint}
              note="上方为 FTSM 校园地图，下方为 UKM Green Campus Rescue VR 的 Unity 俯览图，用于核对九个任务区域、道路和建筑之间的总体关系。"
              onOpen={onOpen}
            />
          ) : null}
          <div className="ftsm-blueprint-notes">
            {[
              ["01", "区域划分", "根据校园地图建立 Block A-H 和 Car Parking 共九个任务区域。"],
              ["02", "路线组织", "使用道路、入口、走廊和楼梯连接不同区域，使玩家能够连续探索校园。"],
              ["03", "场景识别", "结合真实建筑外观和主要环境特征，让玩家可以通过建筑和路线判断所在区域。"],
            ].map(([index, title, body]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section ftsm-gameplay-system">
        <CaseSectionTitle
          eyebrow="GAMEPLAY SYSTEM"
          title="用区域任务、物体交互和地图进度组织 VR 玩法"
          body="九个区域分别包含五项任务。玩家完成一个区域中的全部任务后，该区域会在地图上被点亮；全部完成后触发古树复苏结局动画。"
        />
        <div className="ftsm-gameplay-grid">
          {[
            ["探索九个区域", "玩家进入 Block A-H 和 Car Parking，在房间、走廊和室外区域中寻找尚未完成的环保任务。"],
            ["完成环保操作", "任务包括收集垃圾、关灯、关风扇、关闭电脑和浇灌植物。垃圾需要先放入背包，再投入垃圾桶。"],
            ["更新区域进度", "每个区域完成五项任务后会在地图上点亮；当九个区域全部完成时，系统播放古树复苏结局动画。"],
          ].map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <aside className="ftsm-gameplay-loop">
          <strong>9 个区域 × 每个区域 5 项任务 = 45 项区域任务</strong>
          <div aria-label="UKM Green Campus Rescue VR 游戏循环">
            <span>探索区域</span>
            <span>完成环保任务</span>
            <span>点亮区域进度</span>
            <span>完成全部九个区域</span>
            <span>触发古树复苏动画</span>
          </div>
        </aside>
      </section>

      <section className="case-section ftsm-result-section">
        <CaseSectionTitle
          eyebrow="RECONSTRUCTION RESULT"
          title="从整体布局到地面视角验证场景"
          body="俯视图用于检查九个任务区域、道路和停车区关系；地面视角用于检查玩家移动时的尺度和方向；现场对照用于确认建筑外观特征。"
        />
        <EqualHeightMediaRow
          className="ftsm-result-row"
          onOpen={onOpen}
          items={[
            ...(ground ? [{ media: ground }] : []),
            ...(aerial ? [{ media: aerial }] : []),
            ...(compare ? [{ media: compare }] : []),
          ] as Array<{ media: ProjectMedia; label?: string }>}
        />
      </section>
    </div>
  );
}

export function FtsmVrOutcome() {
  return (
    <section className="case-outcome-redesign ftsm-outcome">
      <div>
        <p>OUTCOME</p>
        <h2>将校园重建、VR 交互和环保任务整合为可游玩的场景</h2>
        <span>
          最终项目完成了以 UKM FTSM 校园为原型的 VR 场景、九个任务区域、五类环保操作、地图进度和结局动画。
        </span>
      </div>
      <dl>
        <div>
          <dt>游戏内容</dt>
          <dd>包含 Block A-H、Car Parking、校园路线、环保任务、地图进度和最终结局动画。</dd>
        </div>
        <div>
          <dt>技术实现</dt>
          <dd>使用 Unity、C# 和 OpenXR 实现 VR 移动、抓取、碰撞处理、任务状态和区域完成逻辑。</dd>
        </div>
        <div>
          <dt>项目结果</dt>
          <dd>完成 9 个校园区域、45 项区域任务、5 类环保操作和 1 个最终结局动画。</dd>
        </div>
      </dl>
    </section>
  );
}
