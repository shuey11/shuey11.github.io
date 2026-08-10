import { ProjectItem, ProjectMedia } from "../../project-data";
import {
  CaseSectionTitle,
  EqualHeightMediaRow,
  FourCardOverview,
  OpenImage,
  ProjectFigure,
} from "../shared/CasePrimitives";

function mediaByFile(project: ProjectItem, fileName: string) {
  return project.gallery.find((item) => item.src.endsWith(fileName));
}

export function TravelBoardOverview() {
  return (
    <FourCardOverview
      className="travel-overview-cards"
      cards={[
        {
          eyebrow: "PROJECT",
          title: "项目简介",
          body: "可自定义城市旅行内容的 Flutter Web 棋盘游戏，用户可以先编辑玩家、棋盘、地点和旅行事件，再使用保存后的配置开始多人回合制游戏。",
        },
        {
          eyebrow: "MY WORK",
          title: "我的工作",
          body: "个人 Flutter 项目。独立完成功能规划、32 格棋盘数据结构、配置编辑器、地点与事件逻辑、玩家回合管理、资金与位置状态、本地 JSON 存档、旅行日志和 Web 部署。",
        },
        {
          eyebrow: "IMPLEMENTATION",
          title: "技术实现",
          body: "使用 Flutter/Dart 将“游戏前配置”和“实际对局”分开管理；Local JSON 分别保存棋盘配置、当前玩家、回合、资金、位置、地点解锁状态及旅行日志，使用户能够保存并恢复不同游戏进度。",
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
  const cellEditor = mediaByFile(project, "board-editor.jpg");
  const boardOrder = mediaByFile(project, "location-editor.jpg");
  const event = mediaByFile(project, "event-editor.png");
  const journal = mediaByFile(project, "assets-journal.png");
  const gameplay = mediaByFile(project, "gameplay.jpg");

  return (
    <div className="travel-case-flow">
      <section className="case-section travel-data-section">
        <CaseSectionTitle
          eyebrow="GAME DATA STRUCTURE"
          title="棋盘配置、特殊事件与玩家数据分别管理"
          body="游戏开始前完成玩家与棋盘配置；特殊事件作为棋盘中的特殊格预先设置；游戏进行后，玩家资产和已解锁地点等状态随存档保存。"
        />

        <div className="travel-system-grid">
          <article className="travel-system-card">
            <span>01</span>
            <h3>初始设置</h3>
            {setup ? (
              <ProjectFigure
                item={setup}
                note="设置玩家人数、玩家名称和棋子图片，并进入棋盘与事件配置。"
                onOpen={onOpen}
              />
            ) : null}
          </article>

          <article className="travel-system-card">
            <span>02</span>
            <h3>单格内容编辑</h3>
            {cellEditor ? (
              <ProjectFigure
                item={cellEditor}
                note="点击棋盘格后，可设置格子类型、名称、图片及对应内容，例如普通地点、旅行事件或随机事件。"
                onOpen={onOpen}
              />
            ) : null}
          </article>

          <article className="travel-system-card">
            <span>03</span>
            <h3>棋盘顺序调整</h3>
            {boardOrder ? (
              <ProjectFigure
                item={boardOrder}
                note="普通棋盘格可拖动交换位置，四个角落格保持固定，用于调整整张棋盘的旅行路线和内容顺序。"
                onOpen={onOpen}
              />
            ) : null}
          </article>

          <article className="travel-system-card">
            <span>04</span>
            <h3>特殊事件配置</h3>
            {event ? (
              <ProjectFigure
                item={event}
                note="编辑旅行事件和随机事件的名称、分类、效果及数值；玩家落到对应特殊格后，系统读取配置并执行事件。"
                onOpen={onOpen}
              />
            ) : null}
          </article>

          <article className="travel-system-card">
            <span>05</span>
            <h3>玩家资产</h3>
            {journal ? (
              <ProjectFigure
                item={journal}
                note="读取当前存档中的玩家现金、已解锁地点及相关游戏数据，用于查看玩家当前资产状态。"
                onOpen={onOpen}
              />
            ) : null}
          </article>
        </div>
      </section>

      <section className="case-section travel-play-loop">
        <CaseSectionTitle
          eyebrow="PLAY LOOP"
          title="从掷骰移动到地点解锁与存档"
          body="玩家掷骰移动后，系统根据落点读取对应棋盘格配置，并更新当前玩家的位置、资金、地点解锁状态和事件结果，再切换到下一名玩家。"
        />
        <div className="travel-loop-layout">
          <ol>
            <li>当前玩家掷骰并移动。</li>
            <li>系统读取落点类型与格子配置。</li>
            <li>触发地点解锁、旅行事件或特殊事件。</li>
            <li>更新当前玩家的位置、资金、地点解锁状态和事件结果。</li>
            <li>切换到下一回合，并保存游戏进度。</li>
          </ol>
          <EqualHeightMediaRow
            className="travel-play-media-row"
            onOpen={onOpen}
            items={[
              ...(gameplay ? [{ media: gameplay }] : []),
              ...(unlock ? [{ media: unlock }] : []),
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
        <h2>将棋盘编辑和多人游戏状态整合到同一个 Flutter 应用</h2>
        <span>
          最终实现 32 格可编辑棋盘、1–4 人回合制游戏、地点与事件触发、多存档读取和旅行日志功能。
        </span>
      </div>
      <dl>
        <div>
          <dt>配置能力</dt>
          <dd>支持 32 格棋盘、地点、事件、价格、玩家名称和棋子外观编辑。</dd>
        </div>
        <div>
          <dt>对局能力</dt>
          <dd>支持 1–4 名玩家按回合移动，并记录资金、位置、地点解锁和事件结果。</dd>
        </div>
        <div>
          <dt>项目结果</dt>
          <dd>通过 Local JSON 保存棋盘配置、当前对局状态和旅行记录，使不同游戏进度能够恢复。</dd>
        </div>
      </dl>
    </section>
  );
}
