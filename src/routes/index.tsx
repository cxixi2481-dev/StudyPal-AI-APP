import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Clock4, Sparkles, ChevronRight } from "lucide-react";
import { JellyMascot } from "@/components/JellyMascot";
import { todayStats } from "@/lib/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudyPal · 今日学习" },
      { name: "description", content: "今天，和你的 AI 搭子一起开机。" },
    ],
  }),
  component: Home,
});

function Home() {
  const hours = (todayStats.totalMinutes / 60).toFixed(1);

  return (
    <div className="px-5 pt-10 pb-6 flex flex-col gap-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lime text-xl font-bold tracking-tight">StudyPal</span>
            <span className="text-xs text-muted-foreground">AI 学习搭子</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {todayStats.greeting}，准备好和我一起开机了吗？
          </p>
        </div>
        <JellyMascot size={56} />
      </header>

      {/* Stats card */}
      <section className="glass rounded-3xl p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">今日累计专注</p>
            <p className="mt-1 font-mono text-4xl font-bold text-lime">
              {hours}
              <span className="text-base ml-1 text-muted-foreground">小时</span>
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-accent px-3 py-1.5">
            <Flame className="w-4 h-4 text-lime" />
            <span className="text-sm text-lime font-semibold">{todayStats.streakDays} 天连续</span>
          </div>
        </div>
        {/* mini bars */}
        <div className="mt-5 flex items-end gap-1.5 h-12">
          {[24, 38, 18, 52, 30, 70, 44].map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-md bg-lime/70"
              style={{ height: `${v}%`, opacity: 0.4 + i * 0.09 }}
            />
          ))}
        </div>
      </section>

      {/* Last session */}
      <section className="glass rounded-2xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent grid place-items-center">
          <Clock4 className="w-5 h-5 text-lime" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground">上一次专注</p>
          <p className="text-sm font-medium truncate">
            {todayStats.lastSession.task} · {todayStats.lastSession.duration} 分钟
          </p>
        </div>
        <span className="text-xs text-muted-foreground">{todayStats.lastSession.when}</span>
      </section>

      {/* Big CTA */}
      <Link
        to="/focus-setup"
        className="group relative mt-2 rounded-3xl bg-lime text-lime-foreground p-6 flex items-center justify-between animate-pulse-glow"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-80">
            <Sparkles className="w-4 h-4" /> 一起开机
          </div>
          <p className="mt-2 text-2xl font-bold">开启专注</p>
          <p className="text-sm opacity-75">25 分钟一局，我陪你冲</p>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-lime-foreground/10 grid place-items-center group-active:scale-95 transition">
          <ChevronRight className="w-7 h-7" />
        </div>
      </Link>

      <p className="text-center text-xs text-muted-foreground mt-2">
        “你不是一个人在自习室。”
      </p>
    </div>
  );
}
