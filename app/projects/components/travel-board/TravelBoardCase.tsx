import { ProjectItem, ProjectMedia } from "../../project-data";
import { CaseSectionTitle, EqualHeightMediaRow, FourCardOverview, OpenImage, ProjectFigure } from "../shared/CasePrimitives";

function mediaByFile(project: ProjectItem, fileName: string) {
  return project.gallery.find((item) => item.src.endsWith(fileName));
}

export function TravelBoardOverview() {
  return (
    <FourCardOverview
      className="travel-overview-cards"
      cards={[
        {
          eyebrow: "BACKGROUND",
          title: "项目背景",
          body: "Travel Board Builder 是一款可配置的城市旅行棋应用。用户可以在开始游戏前编辑棋盘格、地点、旅行事件、玩家名称和棋子外观，再使用保存后的配置开始 1-4 人回合制游戏。",
        },
        {
          eyebrow: "MY ROLE",
          title: "我的角色",
          body: "个人 Flutter 项目。独立完成功能规划、游戏规则设计、棋盘数据结构、界面设计、棋盘编辑器、回合状态管理、地点与事件逻辑、本地 JSON 存档、旅行日志以及 Web 部署。",
        },
        {
          eyebrow: "GOAL",
          title: "项目目标",
          body: "在提供足够编辑自由度的同时，保证棋盘结构、价格配置、玩家状态和回合流程保持一致。用户修改后的内容需要能够正确进入游戏，并在保存和重新读取后保持完整。",
        },
        {
          eyebrow: "STACK",
          title: "技术栈",
          body: "Flutter · Dart · Local JSON · Flutter Web",
        },
      ]}
    />
  );
}

export function TravelBoardLayout({ project, onOpen }: { project: ProjectItem; onOpen: OpenImage }) {
  const setup = mediaByFile(project, "starting-setup.jpg");
  const unlock = mediaByFile(project, "unlock-location.jpg");
  const board = mediaByFile(project, "board-editor.jpg");
  const location = mediaByFile(project, "location-editor.jpg");
  const event = mediaByFile(project, "event-editor.png");
  const journal = mediaByFile(project, "assets-journal.png");
  const gameplay = mediaByFile(project, "gameplay.jpg");

  return (
    <div className="travel-case-flow">
      <section className="case-section travel-config-section">
        <CaseSectionTitle
          eyebrow="PRE-GAME CONFIGURATION"
          title="先配置玩家、棋盘与事件，再开始游戏"
          body="开始新对局前，用户可以设置玩家信息、编辑棋盘格内容，并配置地点和旅行事件。保存后的配置会作为新游戏的棋盘数据。"
        />
        <EqualHeightMediaRow
          className="travel-config-row"
          onOpen={onOpen}
          items={[
            ...(setup
              ? [{
                  media: setup,
                  label: "玩家与棋盘设置",
                  note: "设置玩家人数、玩家名称和棋子图片，并进入棋盘编辑器与旅行事件配置。",
                }]
              : []),
            ...(board
              ? [{
                  media: board,
                  label: "棋盘格内容编辑",
                  note: "设置格子类型、名称和图片，并编辑普通地点、旅行事件、随机事件和旅行消费等内容。",
                }]
              : []),
          ] as Array<{ media: ProjectMedia; label?: string; note?: string }>}
        />
      </section>

      <section className="case-section travel-data-section">
        <CaseSectionTitle
          eyebrow="GAME DATA STRUCTURE"
          title="配置数据、对局状态与旅行记录分层管理"
          body="棋盘配置、当前对局和旅行记录被分开维护。用户既可以重复使用一套自定义棋盘，也可以保存不同游戏进度，并把地点照片和资产变化记录到对应对局中。"
        />
        <div className="travel-data-grid">
          <article>
            <span>01</span>
            <h3>棋盘配置</h3>
            <p>保存 32 个格子的类型、地点信息、费用、图片和旅行事件，使自定义内容能够在新对局中重复使用。</p>
            {location ? <ProjectFigure item={location} onOpen={onOpen} /> : null}
          </article>
          <article>
            <span>02</span>
            <h3>对局状态</h3>
            <p>记录当前回合、玩家位置、玩家资金、地点解锁状态和事件结果，确保多个玩家按照同一套规则进行游戏。</p>
            {event ? <ProjectFigure item={event} onOpen={onOpen} /> : null}
          </article>
          <article>
            <span>03</span>
            <h3>存档与旅行日志</h3>
            <p>通过本地 JSON 保存多个游戏进度，并为不同对局保留玩家资产、地点记录和上传的旅行照片。</p>
            {journal ? <ProjectFigure item={journal} onOpen={onOpen} /> : null}
          </article>
        </div>
      </section>

      <section className="case-section travel-play-loop">
        <CaseSectionTitle
          eyebrow="PLAY LOOP"
          title="从玩家掷骰到地点解锁与对局保存"
          body="配置进入游戏后才进入回合制对局。地点解锁只在玩家落到地点格后出现，并根据格子配置、价格和当前资金决定后续操作。"
        />
        <div className="travel-loop-layout">
          <ol>
            <li><strong>01 掷骰与移动</strong> 当前玩家掷骰，并按照结果沿棋盘路线移动。</li>
            <li><strong>02 触发格子规则</strong> 到达地点、旅行事件或随机事件格后，系统读取该格子的配置内容。</li>
            <li><strong>03 地点解锁</strong> 只有玩家落到地点格后，才会根据价格和当前资金显示地点解锁与旅行花费功能。</li>
            <li><strong>04 更新玩家状态</strong> 系统更新玩家位置、资金、已解锁地点和当前回合。</li>
            <li><strong>05 保存与继续</strong> 用户可以保存当前对局，并从已有存档继续游戏，无需重新配置棋盘。</li>
          </ol>
          <EqualHeightMediaRow
            className="travel-play-media-row"
            onOpen={onOpen}
            items={[
              ...(gameplay ? [{ media: gameplay, label: "回合制棋盘对局" }] : []),
              ...(unlock ? [{ media: unlock, label: "地点解锁与旅行花费" }] : []),
            ] as Array<{ media: ProjectMedia; label?: string }>}
          />
        </div>
      </section>
    </div>
  );
}

export function TravelBoardOutcome() {
  return (
    <section className="case-outcome-redesign travel-outcome">
      <div>
        <p>OUTCOME</p>
        <h2>把棋盘编辑、对局状态和旅行记录连接成一个可保存的游戏流程</h2>
        <span>
          项目最终完成了从游戏前配置到多人回合制游玩的核心流程。用户可以先调整地点、事件和棋盘格内容，再使用本地 JSON 保存不同进度。
        </span>
      </div>
      <dl>
        <div>
          <dt>配置能力</dt>
          <dd>支持 32 格棋盘、地点、事件、价格、玩家名称和棋子外观编辑。</dd>
        </div>
        <div>
          <dt>对局能力</dt>
          <dd>支持 1-4 名玩家按回合移动，并记录资金、位置、地点解锁和事件结果。</dd>
        </div>
        <div>
          <dt>后续方向</dt>
          <dd>继续优化规则提示、存档恢复反馈、棋盘编辑校验和更多旅行内容模板。</dd>
        </div>
      </dl>
    </section>
  );
}
