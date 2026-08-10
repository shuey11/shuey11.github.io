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
    category: "FINAL YEAR PROJECT · ANDROID APPLICATION",
    role: "独立完成需求分析、原型设计、数据结构及核心功能开发，并构建 7 类社交场景 × 5 级难度、10 类互动训练。",
    tagline: "面向大学生社交信心训练的 Android 应用。",
    heroDescription:
      "项目使用 Flutter 构建任务与数据流程，通过 Firebase 保存账户和练习记录，并集成 Unity 3D Avatar 提供定制和即时动作反馈。",
    summary:
      "通过分级社交任务、互动练习、练习记录和 3D Avatar，为用户提供持续练习与成长反馈。",
    challenge:
      "需要把课堂发言、陌生人交流、向讲师提问和小组讨论等场景转化为可在手机中完成的短任务。",
    solution:
      "使用 Flutter/Dart 实现任务流程与推荐逻辑，Firebase Auth / Cloud Firestore 管理认证及练习数据，并集成 Unity 3D Avatar，根据练习结果调整任务难度和角色反馈。",
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
    highlights: ["任务推荐", "互动练习", "练习记录", "Thought Check", "Avatar 定制", "动作反馈"],
    metrics: ["70 个微任务", "17 项测试全部通过", "UAT 4.92 / 5"],
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
        caption: "Home 页面根据用户偏好和历史练习结果展示推荐任务，作为进入练习流程的主要入口。",
      },
      {
        src: `${mediaRoot}/riseup/task-library.jpg`,
        alt: "RiseUp 任务库界面",
        title: "任务库",
        caption: "任务库按沟通场景和难度组织 70 个微任务，支持用户主动选择练习内容。",
      },
      {
        src: `${mediaRoot}/riseup/interactive-task.jpg`,
        alt: "RiseUp 互动任务界面",
        title: "互动任务",
        caption: "互动任务通过选择、排序、记录和反思等操作收集练习结果，而不是只展示静态说明。",
      },
      {
        src: `${mediaRoot}/riseup/task-completion.jpg`,
        alt: "RiseUp 完成反馈与成长记录界面",
        title: "完成反馈与成长记录",
        caption: "完成页保存紧张度、信心变化和任务反馈，用于成长记录与后续推荐调整。",
      },
      {
        src: `${mediaRoot}/riseup/avatar-customisation.jpg`,
        alt: "RiseUp Avatar 自定义界面",
        title: "Avatar 自定义",
        caption: "Avatar 定制结果会进入任务推荐和反馈页面，为 Unity 动作反馈提供对应角色。",
      },
      {
        src: `${mediaRoot}/riseup/thought-check.jpg`,
        alt: "RiseUp Thought Check 界面",
        title: "Thought Check",
        caption: "Thought Check 用于记录自动化想法，并通过本地规则给出思维模式和反思提示。",
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
    role: "独立完成参考画面整理、空间比例推导、环境结构、家具与陈设建模、材质、灯光、摄影机动画及最终渲染。",
    tagline: "根据《Good Omens》影视镜头重建完整 3D 书店空间。",
    heroDescription:
      "项目以《Good Omens》中的 Aziraphale 书店为参考，使用 3ds Max 完成空间分析、环境建模、室内陈设、材质、灯光、摄影机动画和最终渲染。",
    summary:
      "通过多个影视镜头中的立柱、书架、楼梯、家具和陈设关系，反推并重建 Aziraphale 书店的连续室内空间。",
    challenge:
      "电视剧画面只展示局部空间，需要比较多个镜头中的立柱、书架、门窗、楼梯、家具和雕像。",
    solution:
      "使用 3ds Max 比较多个镜头中的重复空间线索，建立统一三维布局，使重建结果能够从不同摄影机方向连续观察，而不是只复刻单一画面。",
    technologies: [
      "3ds Max",
      "Environment Modeling",
      "Materials",
      "Lighting",
      "Camera Animation",
      "Rendering",
    ],
    highlights: ["场景重建", "书桌与陈设", "旋转楼梯", "空间总览"],
    metrics: ["完整室内环境", "3 组影视画面对照"],
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
        caption: "窗边视角用于检查门窗、书架、桌椅和暖色局部照明在同一空间中的组织关系。",
      },
      {
        src: `${mediaRoot}/good-omens-bookshop/detail-02.png`,
        alt: "Good Omens Bookshop 书桌、电话与书架细节",
        title: "书桌与陈设细节",
        caption: "书桌区域用于验证桌面物件、座椅、背景书架和局部灯光之间的前后层次。",
      },
      {
        src: `${mediaRoot}/good-omens-bookshop/detail-03.png`,
        alt: "Good Omens Bookshop 旋转楼梯与书柜区域",
        title: "旋转楼梯与高书柜",
        caption: "旋转楼梯和高书柜用于建立垂直空间关系，并作为摄影机运动的主要视觉路径。",
      },
      {
        src: `${mediaRoot}/good-omens-bookshop/detail-04.png`,
        alt: "Good Omens Bookshop 3ds Max 场景俯视总览",
        title: "场景总览",
        caption: "场景总览用于检查入口、书架、家具和摄影机视角在三维空间中的相对位置。",
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
          "重建时不仅复刻单个镜头中的物件位置，也检查这些结构从其他摄影机方向观察时是否仍然合理。",
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
          "我在场景中加入书籍、台灯、雕塑、地毯和桌面物件，并通过暖色局部照明突出桌面区域。",
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
          "雕像、立柱和周围书架是这一局部空间的主要识别点。重建时需要保持画面识别度，同时让该区域自然连接到完整书店空间。",
        analysis:
          "我重新建立雕像与立柱的相对位置，并补充两侧书架、地面书籍、地毯和小型家具。",
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
    role: "独立完成校园资料整理、空间规划、Unity 场景搭建、VR 移动与抓取、物体交互、环保任务、区域进度、地图显示和结局动画。",
    tagline: "基于真实 UKM FTSM 校园重建的 VR 环保游戏。",
    heroDescription:
      "玩家以 Green Hero 的身份探索虚拟校园，在九个区域中完成垃圾回收、节约用电和植物养护任务，逐步恢复校园环境，并在全部区域完成后触发古树复苏动画。",
    summary:
      "玩家探索虚拟 FTSM 校园，通过垃圾回收、节约用电和植物养护任务恢复九个区域的环境。",
    challenge:
      "需要在保留校园主要路线和建筑识别度的同时，把垃圾回收、节约用电和植物养护转化为 VR 任务。",
    solution:
      "使用 Unity + C# + OpenXR 构建 VR 交互，将校园划分为 9 个任务区域，每区 5 项任务；区域完成后更新地图状态，全部完成后触发古树复苏动画。",
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
        alt: "UKM Green Campus Rescue VR 校园地图与 Unity 俯览图对照",
        title: "FTSM 校园地图与 Unity 俯览图",
        caption: "Unity 俯视图用于验证九个任务区域、道路和建筑之间的总体关系。",
      },
      {
        src: `${mediaRoot}/ftsm-vr/scene-02.png`,
        alt: "FTSM VR 入口道路视角",
        title: "入口道路视角",
        caption: "地面视角用于检查玩家移动时的道路尺度、入口方向和建筑识别度。",
      },
      {
        src: `${mediaRoot}/ftsm-vr/scene-03.png`,
        alt: "FTSM VR 校园建筑俯览视角",
        title: "校园建筑俯览",
        caption: "俯览视角用于检查 Block A-H、停车区域、道路和景观在场景中的布局。",
      },
      {
        src: `${mediaRoot}/ftsm-vr/scene-04.jpg`,
        alt: "FTSM VR 数字模型与真实建筑对照",
        title: "数字模型与真实建筑对照",
        caption: "现场对照用于检查数字模型是否保留真实建筑的主要外观和空间特征。",
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
    role: "独立完成棋盘数据结构、配置编辑器、地点与事件逻辑、玩家回合、资金与位置状态、多存档、旅行日志及 Web 部署。",
    tagline: "可自定义城市旅行内容的 Flutter Web 回合制棋盘游戏。",
    heroDescription:
      "项目将棋盘编辑器、地点规则、旅行事件、玩家状态、本地 JSON 存档和旅行日志整合到 Flutter Web 应用中。",
    summary:
      "用户可在游戏前配置玩家、32 格棋盘、地点和旅行事件，再使用同一套配置开始 1–4 人回合制游戏。",
    challenge:
      "需要同时管理游戏前配置、实际对局状态、地点解锁、资金变化和本地存档恢复。",
    solution:
      "使用 Flutter/Dart 开发编辑器和游戏流程，并通过 Local JSON 分别保存棋盘配置、当前对局状态和旅行记录，使配置和游戏进度能够恢复。",
    technologies: ["Flutter", "Dart", "Local JSON", "Flutter Web"],
    highlights: ["初始设置", "单格内容编辑", "棋盘顺序调整", "特殊事件编辑", "旅行日记", "游戏流程", "解锁地点"],
    metrics: ["32 格棋盘", "1–4 名玩家", "多存档支持"],
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
        caption: "设置玩家人数、玩家名称和棋子图片，并进入棋盘、地点与特殊事件的配置功能。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/board-editor.jpg`,
        alt: "Travel Board Builder 单格内容编辑界面",
        title: "单格内容编辑",
        caption: "点击某个棋盘格后，可设置格子类型、名称、图片及对应内容，例如普通地点、旅行事件或随机事件。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/location-editor.jpg`,
        alt: "Travel Board Builder 棋盘顺序调整界面",
        title: "棋盘顺序调整",
        caption: "普通棋盘格可以拖动交换位置，四个角落格保持固定，用于调整整张棋盘的旅行路线和内容顺序。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/event-editor.png`,
        alt: "Travel Board Builder 特殊事件编辑界面",
        title: "特殊事件编辑",
        caption: "编辑旅行事件卡和随机事件卡的名称、分类、效果和数值；玩家落到对应特殊格后，系统读取配置并执行事件。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/assets-journal.png`,
        alt: "Travel Board Builder 玩家资产界面",
        title: "玩家资产",
        caption: "展示当前存档、玩家现金和已解锁地点等资产信息。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/gameplay.jpg`,
        alt: "Travel Board Builder 游戏流程界面",
        title: "游戏流程",
        caption: "游戏界面读取棋盘配置，并记录当前玩家、回合、位置、资金、地点解锁状态和事件执行结果。",
      },
      {
        src: `${mediaRoot}/travel-board-builder/unlock-location.jpg`,
        alt: "Travel Board Builder 解锁地点界面",
        title: "解锁地点",
        caption: "地点解锁只在玩家落到地点格后出现，并根据配置价格和当前资金执行操作。",
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
    role: "五人小组组长；负责房间预订、地图选房、消息通知、个人偏好及房型推荐模块，并参与任务分配、数据字段统一、版本整合和三端流程联调。",
    tagline: "面向酒店预订与住店服务的多角色移动应用。",
    heroDescription:
      "项目使用 Flutter 和 Firebase 构建，房间、预订和服务任务保存在同一套 Firestore 数据中，不同角色根据职责读取和更新相关状态。",
    summary:
      "包含 Guest、Staff 和 Admin 三种角色，覆盖房型浏览、地图选房、预订、消息通知及酒店服务管理。",
    challenge:
      "需要把客人的预订和服务申请连接到酒店内部处理流程，并明确不同角色的操作范围。",
    solution:
      "使用 Flutter/Dart 开发相关页面和业务流程，通过 Firebase Authentication / Cloud Firestore 读写用户、房间和预订数据，并连接 Guest、Staff、Admin 三种角色的数据状态。",
    technologies: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore", "Figma"],
    highlights: ["服务浏览", "房间详情", "预订管理", "楼层地图", "角色状态同步"],
    metrics: ["5 人团队", "3 种角色", "25 人测试"],
    cover: `${mediaRoot}/hotel-booking/cover.png`,
    video: `${mediaRoot}/hotel-booking/demo.mp4`,
    mediaOrientation: "portrait",
    mediaFit: "contain",
    layout: "service-flow",
    theme: "hotel",
    gallery: [
      {
        src: `${mediaRoot}/hotel-booking/booking-services.jpg`,
        alt: "HotelEase 预订服务界面",
        title: "预订服务",
        caption: "Guest 页面用于浏览房间和服务入口，并把客人操作连接到预订流程。",
      },
      {
        src: `${mediaRoot}/hotel-booking/room-details.png`,
        alt: "HotelEase 房间详情界面",
        title: "房间详情",
        caption: "房间详情读取房型、价格和房间信息，供用户在提交预订前确认。",
      },
      {
        src: `${mediaRoot}/hotel-booking/booking-management.jpg`,
        alt: "HotelEase 预订管理界面",
        title: "预订管理",
        caption: "Staff 页面读取服务任务，并将处理结果更新到 Firestore。",
      },
      {
        src: `${mediaRoot}/hotel-booking/floor-map.png`,
        alt: "HotelEase 楼层地图界面",
        title: "楼层地图",
        caption: "楼层地图用于查看或选择具体房间位置，使房型选择连接到空间信息。",
      },
      {
        src: `${mediaRoot}/hotel-booking/role-sync.jpg`,
        alt: "HotelEase 多角色状态同步界面",
        title: "角色状态同步",
        caption: "Admin 页面用于查看房间、预订和服务状态，检查酒店管理流程中的数据变化。",
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
    category: "WEB · BACK-OFFICE MANAGEMENT SYSTEM",
    role: "负责顾客、员工和订单 3 个核心模块，实现后台数据新增、查询、修改、删除及对应页面与表单操作。",
    tagline: "面向绘画用品业务的 Web 后台管理系统。",
    heroDescription:
      "系统使用 PHP 和 MySQL 构建，将商品维护、顾客管理、订单录入、订单明细和发票输出连接到同一个 Web 后台。",
    summary:
      "用于管理商品、顾客、员工、订单和相关交易数据，并提供常用后台增删改查操作。",
    challenge:
      "绘画用品业务需要同时维护商品、顾客、员工、订单和发票，缺少关系约束会导致重复录入和订单追踪困难。",
    solution:
      "使用 PHP 编写表单请求处理、业务判断和 CRUD 逻辑，MySQL 完成数据存储与查询，并通过 HTML/CSS + JavaScript 实现后台页面和表单交互。",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "DataTables"],
    highlights: ["Product", "Customer", "Staff", "Order", "Order Detail", "Invoice"],
    metrics: ["6 个核心实体", "完整订单与发票流程"],
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
        caption: "产品列表集中展示商品编号、名称、价格、品牌、类型、国家和库存数量，并提供查看、编辑和删除操作。",
      },
      {
        src: `${mediaRoot}/drawing-art-supplies/product-detail.png`,
        alt: "Drawing Art Supplies 产品详情界面",
        title: "产品详情",
        caption: "产品详情读取单个商品的完整字段，用于检查商品资料和订单引用的数据来源。",
      },
      {
        src: `${mediaRoot}/drawing-art-supplies/customers.png`,
        alt: "Drawing Art Supplies 客户管理界面",
        title: "客户管理",
        caption: "客户管理维护客户资料，为后续订单提供客户引用。",
      },
      {
        src: `${mediaRoot}/drawing-art-supplies/order-details.png`,
        alt: "Drawing Art Supplies 订单明细界面",
        title: "订单明细",
        caption: "订单明细连接订单和商品，使一个订单能够包含多个商品记录。",
      },
      {
        src: `${mediaRoot}/drawing-art-supplies/invoice.png`,
        alt: "Drawing Art Supplies 发票界面",
        title: "发票",
        caption: "发票根据订单主体、客户和商品明细生成统一的交易输出。",
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
