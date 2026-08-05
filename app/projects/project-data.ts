export type ProjectMedia = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
};

export type GoodOmensComparisonPanel = {
  image: string;
  title: string;
  index: string;
  topLabel: string;
  bottomLabel: string;
  description: string;
  analysis: string;
  focusPoints: string[];
  available: boolean;
};

export type ProjectItem = {
  slug: string;
  n: string;
  title: string;
  englishTitle: string;
  category: string;
  year?: string;
  role?: string;
  tagline: string;
  heroDescription?: string;
  summary: string;
  challenge?: string;
  solution?: string;
  technologies: string[];
  highlights: string[];
  metrics: string[];
  cover: string;
  video?: string;
  previewImage?: string;
  mediaOrientation?: "landscape" | "portrait";
  mediaFit?: "cover" | "contain";
  layout:
    | "mobile-journey"
    | "cinematic-3d"
    | "spatial-vr"
    | "board-collage"
    | "service-flow"
    | "dashboard-editorial";
  theme: "riseup" | "bookshop" | "vr" | "travel" | "hotel" | "drawing";
  gallery: ProjectMedia[];
  comparisonPanels?: GoodOmensComparisonPanel[];
  previousProject: string;
  nextProject: string;
  tone: "violet" | "green" | "amber" | "blue" | "coral" | "ink";
};

const mediaRoot = "/media/projects";

export const projects: ProjectItem[] = [
  {
    slug: "riseup",
    n: "01",
    title: "RiseUp",
    englishTitle: "RiseUp",
    category: "FINAL YEAR PROJECT · ANDROID",
    role: "个人项目",
    tagline: "让看不见的练习，变成可以被看见的成长。",
    summary:
      "面向大学生沟通信心练习的 Android 应用，将个性化 iCBT 微任务、互动练习与可定制 3D Avatar 结合。",
    challenge:
      "沟通信心练习往往分散在日常体验中，用户很难持续记录自己的练习、反馈与成长过程。",
    solution:
      "应用把练习拆分为微任务、互动任务和 Thought Check，并通过完成反馈与 Avatar 自定义形成持续参与感。",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "GoRouter",
      "Firebase Authentication",
      "Cloud Firestore",
      "Unity",
      "Blender",
      "Android Notifications",
    ],
    highlights: [
      "首页与个性化推荐",
      "任务库",
      "互动任务",
      "完成反馈与成长记录",
      "Avatar 自定义",
      "Thought Check",
    ],
    metrics: ["7 个沟通场景", "70 个微任务", "17 项测试全部通过", "UAT 平均评分 4.92 / 5"],
    cover: `${mediaRoot}/riseup/cover.jpg`,
    video: `${mediaRoot}/riseup/demo.mp4`,
    mediaOrientation: "portrait",
    mediaFit: "contain",
    layout: "mobile-journey",
    theme: "riseup",
    gallery: [
      {
        src: `${mediaRoot}/riseup/home.jpg`,
        alt: "RiseUp 首页与个性化推荐界面",
        title: "首页与个性化推荐",
        caption: "首页集中呈现练习入口与个性化任务，让用户快速回到当前可执行的沟通练习。",
      },
      {
        src: `${mediaRoot}/riseup/task-library.jpg`,
        alt: "RiseUp 任务库界面",
        title: "任务库",
        caption: "任务库将 iCBT 微任务组织为可浏览、可选择的练习内容。",
      },
      {
        src: `${mediaRoot}/riseup/interactive-task.jpg`,
        alt: "RiseUp 互动任务界面",
        title: "互动任务",
        caption: "互动任务把练习转化为具体操作，降低用户开始练习时的心理门槛。",
      },
      {
        src: `${mediaRoot}/riseup/task-completion.jpg`,
        alt: "RiseUp 完成反馈与成长记录界面",
        title: "完成反馈与成长记录",
        caption: "完成页用于承接任务结果，并把练习行为记录为可回看的成长过程。",
      },
      {
        src: `${mediaRoot}/riseup/avatar-customisation.jpg`,
        alt: "RiseUp Avatar 自定义界面",
        title: "Avatar 自定义",
        caption: "用户可以自定义 Avatar，让练习过程有更具个人感的视觉反馈。",
      },
      {
        src: `${mediaRoot}/riseup/thought-check.jpg`,
        alt: "RiseUp Thought Check 界面",
        title: "Thought Check",
        caption: "Thought Check 帮助用户记录想法，并把抽象感受转化为可表达的内容。",
      },
    ],
    previousProject: "drawing-art-supplies",
    nextProject: "good-omens-bookshop",
    tone: "violet",
  },
  {
    slug: "good-omens-bookshop",
    n: "02",
    title: "Good Omens Bookshop",
    englishTitle: "Good Omens Bookshop Recreation",
    category: "3D ENVIRONMENT RECREATION",
    role: "个人三维环境项目",
    tagline: "从零散的影视镜头中，推导并重建一座可以被连续观察的 3D 书店。",
    heroDescription:
      "项目以电视剧《Good Omens》中的 Aziraphale 书店为视觉参考，通过多个镜头分析空间关系，并使用 3ds Max 完成环境建模、室内陈设、材质灯光、摄影机动画和最终渲染。",
    summary:
      "本项目以电视剧《Good Omens》中的书店内部场景为视觉参考，使用 3ds Max 完成三维环境重建。",
    challenge:
      "影视画面只能提供有限角度，需要把可见线索整理为可连续观看的三维空间。",
    solution:
      "项目围绕书架、书桌、旋转楼梯、灯光和室内陈设重建书店氛围，并通过动画镜头展示空间。",
    technologies: [
      "3ds Max",
      "Environment Modeling",
      "Materials",
      "Lighting",
      "Camera Animation",
      "Rendering",
    ],
    highlights: ["场景复刻", "书桌与陈设", "旋转楼梯", "空间总览"],
    metrics: ["场景复刻", "Fly-through", "最终渲染"],
    cover: `${mediaRoot}/good-omens-bookshop/cover.png`,
    video: `${mediaRoot}/good-omens-bookshop/demo.mp4`,
    mediaFit: "contain",
    layout: "cinematic-3d",
    theme: "bookshop",
    gallery: [
      {
        src: `${mediaRoot}/good-omens-bookshop/detail-01.png`,
        alt: "Good Omens Bookshop 书店窗边与书架区域",
        title: "窗边空间与书架",
        caption: "画面呈现书店入口附近的窗、书架、桌椅与暖色灯光，建立室内空间的基调。",
      },
      {
        src: `${mediaRoot}/good-omens-bookshop/detail-02.png`,
        alt: "Good Omens Bookshop 书桌、电话与书架细节",
        title: "书桌与陈设细节",
        caption: "书桌、电话、雕塑、书本和座椅共同构成书店内部的日常物件层次。",
      },
      {
        src: `${mediaRoot}/good-omens-bookshop/detail-03.png`,
        alt: "Good Omens Bookshop 旋转楼梯与书柜区域",
        title: "旋转楼梯与高书柜",
        caption: "旋转楼梯与环绕书柜强化了书店的纵深，也为镜头运动提供了明确路径。",
      },
      {
        src: `${mediaRoot}/good-omens-bookshop/detail-04.png`,
        alt: "Good Omens Bookshop 3ds Max 场景俯视总览",
        title: "场景总览",
        caption: "俯视视角展示整体空间布局、家具位置和镜头视锥，便于检查场景组织。",
      },
    ],
    comparisonPanels: [
      {
        index: "01",
        image: "/assets/projects/good-omens/comparisons/entrance-layout-comparison.jpg",
        title: "入口空间、立柱与家具布局",
        topLabel: "电视剧参考画面",
        bottomLabel: "我的 3D 重建",
        description:
          "入口画面用于判断书店的主要空间轴线。立柱、雕像、中央陈设和两侧座椅共同提供定位线索，我据此重建入口与内部区域的距离和层次。",
        analysis:
          "在重建过程中，我没有只复制单个镜头中的物件位置，而是考虑这些结构从其他摄影机方向观察时是否仍然合理。立柱用于划分前后空间，雕像形成靠近前景的视觉节点，中央陈设引导视线继续进入书店内部，两侧座椅和书架则帮助判断通道宽度和场景尺度。",
        focusPoints: [
          "入口与内部空间的视线轴",
          "立柱之间的距离和节奏",
          "雕像与中央陈设的位置",
          "两侧座椅和通道宽度",
          "前景、中景和背景的空间纵深",
        ],
        available: true,
      },
      {
        index: "02",
        image: "/assets/projects/good-omens/comparisons/desk-area-comparison.jpg",
        title: "书桌区域与室内陈设",
        topLabel: "电视剧参考画面",
        bottomLabel: "我的 3D 重建",
        description:
          "书桌区域主要用于验证家具关系和室内陈设密度。书桌、座椅、台灯、背景书架和桌面物件被重新组织为前景、中景和背景层次。",
        analysis:
          "书桌区域不仅需要还原主要家具，还需要通过大量小型陈设建立旧书店的真实感。我在场景中加入书籍、台灯、雕塑、地毯和桌面物件，并通过暖色局部照明突出桌面区域。背景继续保持较暗，使书桌成为视觉中心，同时保留后方书架和墙面结构的可辨识度。",
        focusPoints: [
          "书桌和座椅的位置关系",
          "台灯形成的局部暖光",
          "背景书架和墙面结构",
          "桌面与周围陈设的丰富度",
          "前中后景的视觉层次",
        ],
        available: true,
      },
      {
        index: "03",
        image: "/assets/projects/good-omens/comparisons/statue-bookshelf-comparison.jpg",
        title: "雕像、立柱与书架陈设",
        topLabel: "电视剧参考画面",
        bottomLabel: "我的 3D 重建",
        description:
          "雕像、立柱和周围书架是这一局部空间的主要识别点。重建时需要保持画面识别度，同时让该区域能够自然连接到完整书店空间。",
        analysis:
          "我在三维场景中重新建立雕像与立柱的相对位置，并补充两侧书架、地面书籍、地毯和小型家具。这个区域需要同时保持影视画面的识别度，并与完整书店空间自然连接，因此局部物件的位置不能只服务单一镜头，还需要适应其他摄影机角度。",
        focusPoints: [
          "雕像和立柱的相对位置",
          "两侧书架的高度和分布",
          "地面书籍与局部装饰",
          "立柱对空间区域的划分",
          "局部场景与整体环境的连接",
        ],
        available: true,
      },
    ],
    previousProject: "riseup",
    nextProject: "ftsm-vr",
    tone: "amber",
  },
  {
    slug: "ftsm-vr",
    n: "03",
    title: "FTSM VR",
    englishTitle: "UKM Green Campus Rescue VR",
    category: "VR ENVIRONMENTAL GAME · CAMPUS RECONSTRUCTION",
    role: "个人项目",
    tagline: "基于真实 UKM FTSM 校园环境重建的 VR 环保游戏。",
    heroDescription:
      "玩家以 Green Hero 的身份探索虚拟校园，在九个区域中完成垃圾回收、节约用电和植物养护任务，逐步恢复校园环境，并在全部区域完成后触发古树复苏动画。",
    summary:
      "基于真实 UKM FTSM 校园环境构建的环保主题 VR 游戏，玩家通过完成区域任务恢复校园环境。",
    challenge:
      "真实校园空间需要保持可辨识的布局关系，同时让环保任务、区域进度和最终结局形成完整游戏循环。",
    solution:
      "项目将校园地图、建筑路线和环保互动任务整合到 Unity VR 场景中，让玩家在探索中完成垃圾回收、关闭闲置设备和浇灌植物。",
    technologies: ["Unity", "C#", "OpenXR", "VR Interaction", "Environmental Game"],
    highlights: ["九个校园区域", "环保任务", "VR 抓取交互", "地图进度", "古树结局动画"],
    metrics: ["9 个校园区域", "45 项区域任务", "5 类环保操作", "1 个最终结局动画"],
    cover: `${mediaRoot}/ftsm-vr/cover.png`,
    video: `${mediaRoot}/ftsm-vr/demo.mp4`,
    mediaFit: "contain",
    layout: "spatial-vr",
    theme: "vr",
    gallery: [
      {
        src: `${mediaRoot}/ftsm-vr/scene-01.jpg`,
        alt: "UKM Green Campus Rescue VR 校园地图与 Unity 俯瞰图对照",
        title: "FTSM 校园地图与 Unity 俯瞰图",
        caption: "上方为学校提供的 FTSM 校园地图，下方为 UKM Green Campus Rescue VR 的 Unity 校园俯瞰图。",
      },
      {
        src: `${mediaRoot}/ftsm-vr/scene-02.png`,
        alt: "FTSM VR 入口道路视角",
        title: "入口道路视角",
        caption: "从入口道路观察重建后的 FTSM 建筑群，呈现 VR 场景中的主要到达体验。",
      },
      {
        src: `${mediaRoot}/ftsm-vr/scene-03.png`,
        alt: "FTSM VR 校园建筑俯瞰视角",
        title: "校园建筑俯瞰",
        caption: "俯瞰视角展示建筑、停车区、道路和绿化的整体组合。",
      },
      {
        src: `${mediaRoot}/ftsm-vr/scene-04.jpg`,
        alt: "FTSM VR 数字模型与真实建筑对照",
        title: "数字模型与真实建筑对照",
        caption: "同一位置的模型与真实建筑并置，展示重建结果与现实环境的对应关系。",
      },
    ],
    previousProject: "good-omens-bookshop",
    nextProject: "travel-board-builder",
    tone: "green",
  },
  {
    slug: "travel-board-builder",
    n: "04",
    title: "Travel Board Builder",
    englishTitle: "Travel Board Builder",
    category: "CUSTOMISABLE TRAVEL BOARD GAME",
    role: "个人项目",
    tagline: "让用户先设计一张属于自己的城市旅行棋盘，再使用同一套配置进入多人回合制游戏。",
    heroDescription:
      "项目将棋盘编辑器、地点数据、旅行事件、玩家配置、对局状态、本地存档和旅行日志整合到同一个 Flutter 应用中。",
    summary:
      "可自定义的旅行棋盘应用，支持可视化编辑、拖动交换、事件卡、1–4 人游戏、旅行日记与独立多存档。",
    challenge:
      "旅行棋盘需要兼顾编辑自由度和游玩流程，既能自定义地点，也要保持游戏过程清晰。",
    solution:
      "应用把棋盘、地点、事件卡、资源记录和游玩状态拆分管理，让用户可以从配置进入游戏。",
    technologies: ["Flutter", "Dart", "Local JSON", "Web", "Game State"],
    highlights: ["初始设置", "棋盘编辑", "地点编辑", "事件编辑", "旅行日记", "游戏流程", "解锁地点"],
    metrics: ["32 格棋盘", "1–4 人", "多存档恢复"],
    cover: `${mediaRoot}/travel-board-builder/cover.jpg`,
    previewImage: `${mediaRoot}/travel-board-builder/gameplay.jpg`,
    mediaOrientation: "portrait",
    mediaFit: "contain",
    layout: "board-collage",
    theme: "travel",
    gallery: [
      {
        src: `${mediaRoot}/travel-board-builder/starting-setup.jpg`,
        alt: "Travel Board Builder 初始设置界面",
        title: "初始设置",
        caption: "用户先建立旅行棋盘的基础配置，为后续编辑和游玩流程准备数据。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/board-editor.jpg`,
        alt: "Travel Board Builder 棋盘编辑界面",
        title: "棋盘编辑",
        caption: "棋盘编辑器用于调整格子内容，让城市探索路径可以被重新组织。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/location-editor.jpg`,
        alt: "Travel Board Builder 地点编辑界面",
        title: "地点编辑",
        caption: "地点编辑连接城市地点与棋盘格子，让每个位置拥有可维护的信息。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/event-editor.png`,
        alt: "Travel Board Builder 事件编辑界面",
        title: "事件编辑",
        caption: "事件卡为棋盘过程加入变化，让游玩不只依赖固定路线。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/assets-journal.png`,
        alt: "Travel Board Builder 旅行资源与日记界面",
        title: "旅行资源与日记",
        caption: "资源与日记用于记录旅行过程中的资产、进度和体验内容。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/gameplay.jpg`,
        alt: "Travel Board Builder 游戏流程界面",
        title: "游戏流程",
        caption: "游玩界面承接多人、棋盘位置和回合过程，让配置后的内容真正进入游戏。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/unlock-location.jpg`,
        alt: "Travel Board Builder 解锁地点界面",
        title: "解锁地点",
        caption: "解锁机制让地点探索拥有阶段感，强化旅行棋盘的推进节奏。",
      },
    ],
    previousProject: "ftsm-vr",
    nextProject: "hotel-booking",
    tone: "coral",
  },
  {
    slug: "hotel-booking",
    n: "05",
    title: "HotelEase",
    englishTitle: "Hotel Booking Management System",
    category: "TEAM MOBILE APPLICATION · TEAM LEAD",
    role: "小组项目 · 组长",
    tagline: "通过 Guest、Staff 和 Admin 三种角色，把房间浏览、预订、服务申请和酒店管理连接到同一套移动流程中。",
    heroDescription:
      "系统使用 Flutter 和 Firebase 构建，不同角色读取和更新同一套房间、预订与服务任务数据，使客人操作和酒店内部处理能够保持状态一致。",
    summary:
      "面向 Guest、Staff 与 Admin 的多角色酒店系统。我担任组长并负责完整预订链路、地图选房和跨角色房态。",
    challenge:
      "酒店预订流程需要同时覆盖客人浏览、房间选择、预订管理和不同角色之间的房态同步。",
    solution:
      "系统将服务浏览、房间详情、预订管理、楼层地图与多角色状态同步组织成连续移动端流程。",
    technologies: ["Flutter", "Firebase Authentication", "Cloud Firestore", "Figma"],
    highlights: ["服务浏览", "房间详情", "预订管理", "楼层地图", "角色房态同步"],
    metrics: ["5 人团队", "3 类角色", "25 人测试"],
    cover: `${mediaRoot}/hotel-booking/cover.png`,
    video: `${mediaRoot}/hotel-booking/demo.mp4`,
    mediaOrientation: "portrait",
    mediaFit: "contain",
    layout: "service-flow",
    theme: "hotel",
    gallery: [
      {
        src: `${mediaRoot}/hotel-booking/booking-services.png`,
        alt: "HotelEase 预订服务界面",
        title: "预订服务",
        caption: "服务浏览界面让用户先理解可选服务，再进入具体房型与预订流程。",
      },
      {
        src: `${mediaRoot}/hotel-booking/room-details.png`,
        alt: "HotelEase 房间详情界面",
        title: "房间详情",
        caption: "房间详情页集中展示房间信息，帮助用户在预订前完成确认。",
      },
      {
        src: `${mediaRoot}/hotel-booking/booking-management.png`,
        alt: "HotelEase 预订管理界面",
        title: "预订管理",
        caption: "预订管理用于查看和维护已有预订，让移动端流程形成闭环。",
      },
      {
        src: `${mediaRoot}/hotel-booking/floor-map.png`,
        alt: "HotelEase 楼层地图界面",
        title: "楼层地图",
        caption: "地图选房把抽象房型转化为具体房间位置，增强选择过程的明确性。",
      },
      {
        src: `${mediaRoot}/hotel-booking/role-sync.png`,
        alt: "HotelEase 多角色状态同步界面",
        title: "角色房态同步",
        caption: "不同角色共享房态信息，支持 Guest、Staff 与 Admin 之间的业务连接。",
      },
    ],
    previousProject: "travel-board-builder",
    nextProject: "drawing-art-supplies",
    tone: "blue",
  },
  {
    slug: "drawing-art-supplies",
    n: "06",
    title: "Drawing Art Supplies",
    englishTitle: "Drawing Art Supplies Management System",
    category: "WEB · RELATIONAL DATABASE SYSTEM",
    role: "个人项目",
    tagline: "通过关系数据库连接商品、客户、员工、订单明细和发票，形成完整的绘画用品后台管理流程。",
    heroDescription:
      "系统使用 PHP 和 MySQL 构建，将主数据维护、订单录入、商品明细和发票输出整合到同一个 Web 后台中。",
    summary:
      "围绕产品、顾客、员工、订单和订单明细构建的数据库后台，实现 CRUD、多产品订单、金额计算和发票。",
    challenge:
      "商品、客户、订单和发票数据需要在同一后台中保持关系清晰，避免业务流程被分散页面割裂。",
    solution:
      "系统围绕关系数据库组织核心模块，让产品维护、客户管理、订单明细和发票生成保持连续。",
    technologies: ["PHP", "MySQL", "Bootstrap", "DataTables", "Relational Database"],
    highlights: ["登录", "产品列表", "产品详情", "客户管理", "订单明细", "发票"],
    metrics: ["6 个核心模块", "关系数据库", "发票生成"],
    cover: `${mediaRoot}/drawing-art-supplies/cover.png`,
    previewImage: `${mediaRoot}/drawing-art-supplies/products-list.png`,
    mediaFit: "contain",
    layout: "dashboard-editorial",
    theme: "drawing",
    gallery: [
      {
        src: `${mediaRoot}/drawing-art-supplies/products-list.png`,
        alt: "Drawing Art Supplies 产品列表界面",
        title: "产品列表",
        caption: "产品列表用于集中浏览与维护商品数据，是订单流程的基础数据来源。",
      },
      {
        src: `${mediaRoot}/drawing-art-supplies/product-detail.png`,
        alt: "Drawing Art Supplies 产品详情界面",
        title: "产品详情",
        caption: "产品详情页展示单个商品的信息，支持更细粒度的数据查看。",
      },
      {
        src: `${mediaRoot}/drawing-art-supplies/customers.png`,
        alt: "Drawing Art Supplies 客户管理界面",
        title: "客户管理",
        caption: "客户模块维护订单关联对象，让业务数据能够按用户关系组织。",
      },
      {
        src: `${mediaRoot}/drawing-art-supplies/order-details.png`,
        alt: "Drawing Art Supplies 订单明细界面",
        title: "订单明细",
        caption: "订单明细连接商品、数量和金额计算，形成完整的交易记录。",
      },
      {
        src: `${mediaRoot}/drawing-art-supplies/invoice.png`,
        alt: "Drawing Art Supplies 发票界面",
        title: "发票",
        caption: "发票页将订单数据输出为可阅读的业务凭证。",
      },
    ],
    previousProject: "hotel-booking",
    nextProject: "riseup",
    tone: "ink",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
