export const todayStats = {
  greeting: "晚上好",
  totalMinutes: 124,
  streakDays: 7,
  lastSession: {
    task: "毕业论文第二章",
    duration: 45,
    when: "2小时前",
  },
};

export const weeklyTrend = [
  { day: "周一", minutes: 90 },
  { day: "周二", minutes: 120 },
  { day: "周三", minutes: 60 },
  { day: "周四", minutes: 180 },
  { day: "周五", minutes: 75 },
  { day: "周六", minutes: 210 },
  { day: "周日", minutes: 124 },
];

export const sessionHistory = [
  { id: "1", task: "毕业论文第二章", date: "今天 19:20", minutes: 45, tag: "论文" },
  { id: "2", task: "高数·多元函数微分", date: "今天 14:05", minutes: 90, tag: "考研" },
  { id: "3", task: "申论范文精读", date: "昨天 21:30", minutes: 60, tag: "考公" },
  { id: "4", task: "英语真题阅读 Text 3", date: "昨天 10:00", minutes: 50, tag: "考研" },
  { id: "5", task: "刑法分则背诵", date: "前天 22:10", minutes: 75, tag: "法考" },
];

export const aiBubbles = [
  "我也开机了，咱一起冲。",
  "进入状态了，节奏不错。",
  "已经坚持30分钟啦，喝口水继续。",
  "再10分钟就到番茄收尾，稳住。",
  "卡住也没关系，写一行废话也是进度。",
  "你这专注力，今天的我有点崇拜你。",
];

export const chatHistory: { id: string; role: "user" | "ai"; text: string; time: string }[] = [
  { id: "m1", role: "ai", text: "嗨，距离答辩还有 3 天，准备得怎么样了？", time: "19:02" },
  { id: "m2", role: "user", text: "第二章还差结论部分，有点写不动。", time: "19:03" },
  {
    id: "m3",
    role: "ai",
    text: "那今晚我们就只啃结论这一块。我陪你 25 分钟，写一段算一段，好不好？",
    time: "19:03",
  },
  { id: "m4", role: "user", text: "好，那就开一局。", time: "19:04" },
  { id: "m5", role: "ai", text: "进舱。我在你旁边敲键盘，别一个人扛。", time: "19:04" },
];

export const mockAIReplies = [
  "稳，这思路没问题，继续往下推。",
  "卡壳就先空着，标个 TODO，往下走。",
  "今天先拿下这一小块，剩下的明天我陪你。",
  "你已经比昨天的自己多写了 200 字了。",
];

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
