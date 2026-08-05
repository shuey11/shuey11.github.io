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
          eyebrow: "BACKGROUND",
          title: "项目背景",
          body: "游戏以 UKM FTSM 的真实校园环境为原型。校园因垃圾堆积、植物枯萎和能源浪费而失去生机，玩家需要进入不同建筑、走廊和室外区域，寻找并解决环境问题。",
        },
        {
          eyebrow: "MY ROLE",
          title: "我的角色",
          body: "个人 VR 项目。独立完成校园资料整理、空间规划、Unity 场景搭建、环保任务设计、VR 移动、抓取交互、任务进度、区域完成逻辑、地图显示、音效、碰撞处理和最终结局动画。",
        },
        {
          eyebrow: "GOAL",
          title: "项目目标",
          body: "在保留真实校园主要空间关系和建筑识别度的基础上，将环保知识转化为可实际操作的 VR 任务，并建立从单项任务、区域完成到最终古树复苏的完整游戏循环。",
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
          body="我先根据学校地图确定 Block A-H、停车区域、道路和主要通道之间的关系，再将这些区域转化为 Unity 场景中的建筑与可探索路线。组合图上方是学校地图，下方是项目的 Unity 校园俯瞰图。"
        />
        <div className="ftsm-blueprint-layout">
          {blueprint ? (
            <ProjectFigure
              item={blueprint}
              label="上方 · FTSM 校园地图"
              note="下方 · UKM Green Campus Rescue VR 的 Unity 俯瞰图"
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
          title="以环保任务推动校园逐步恢复"
          body="九个区域分别包含五项任务，任务组合会根据区域环境变化。玩家完成一个区域中的全部任务后，该区域会在地图上被点亮。"
        />
        <div className="ftsm-gameplay-grid">
          {[
            ["探索九个区域", "玩家可以进入 Block A-H 和 Car Parking，在房间、走廊和室外区域中寻找尚未解决的环境问题。"],
            ["完成环保操作", "任务包括收集垃圾、关闭灯、关闭风扇、关闭电脑和浇灌植物。垃圾需要先放入容量有限的背包，再投入垃圾桶才算完成。"],
            ["恢复校园环境", "每个区域完成五项任务后会在地图上点亮；当九个区域全部完成时，系统触发古树复苏动画。"],
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
          body="不同视角承担不同的验证作用：俯视图检查建筑、道路和停车区的总体关系；地面视角检查移动时的空间尺度和视觉方向；现场对照用于确认建筑外观和主要识别特征。"
        />
        <EqualHeightMediaRow
          className="ftsm-result-row"
          onOpen={onOpen}
          items={[
            ...(ground ? [{ media: ground, label: "地面浏览视角" }] : []),
            ...(aerial ? [{ media: aerial, label: "总体空间布局" }] : []),
            ...(compare ? [{ media: compare, label: "数字模型与现场对照" }] : []),
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
        <h2>把真实校园转化为可探索的环保 VR 游戏</h2>
        <span>
          最终项目完成了以 UKM FTSM 校园为原型的 VR 场景和环保任务循环。玩家可以在九个区域中探索、完成任务、查看区域进度，并在全部区域完成后触发古树复苏动画。
        </span>
      </div>
      <dl>
        <div>
          <dt>游戏内容</dt>
          <dd>包含 Block A-H、Car Parking、校园路线、环保任务、地图进度和最终结局动画。</dd>
        </div>
        <div>
          <dt>技术重点</dt>
          <dd>Unity 场景搭建、VR 移动与抓取、碰撞处理、任务状态、区域完成逻辑和实时运行表现。</dd>
        </div>
        <div>
          <dt>项目收获</dt>
          <dd>将真实校园资料转化为可交互 VR 游戏，并把环境教育目标组织成清晰的探索与反馈循环。</dd>
        </div>
      </dl>
    </section>
  );
}
