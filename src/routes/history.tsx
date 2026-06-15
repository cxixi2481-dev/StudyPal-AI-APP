import { createFileRoute } from "@tanstack/react-router";
import { Flame, Timer } from "lucide-react";
import { sessionHistory, weeklyTrend } from "@/lib/mock";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [{ title: "StudyPal · 历史看板" }] }),
  component: History,
});

function History() {
  const totalMin = weeklyTrend.reduce((s, d) => s + d.minutes, 0);
  const max = Math.max(...weeklyTrend.map((d) => d.minutes));

  return (
    <div className="px-5 pt-10 pb-6 space-y-5">
      <header>
        <h1 className="text-2xl font-bold">历史看板</h1>
        <p className="text-sm text-muted-foreground mt-1">每一次开机，都被认真记着。</p>
      </header>

      <section className="grid grid-cols-2 gap-3">
        <div className="glass rounded-2xl p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Timer className="w-4 h-4" /> 累计专注
          </div>
          <p className="mt-2 font-mono text-2xl font-bold text-lime">
            {(totalMin / 60).toFixed(1)}<span className="text-sm text-muted-foreground ml-1">h</span>
          </p>
        </div>
        <div className="glass rounded-2xl p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Flame className="w-4 h-4" /> 连续学习
          </div>
          <p className="mt-2 font-mono text-2xl font-bold text-lime">
            7<span className="text-sm text-muted-foreground ml-1">天</span>
          </p>
        </div>
      </section>

      {/* Trend */}
      <section className="glass rounded-3xl p-5">
        <div className="flex items-end justify-between">
          <h2 className="font-semibold">最近 7 天</h2>
          <span className="text-xs text-muted-foreground">单位：分钟</span>
        </div>
        <div className="mt-6 flex items-end gap-2 h-36">
          {weeklyTrend.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-lime/40 to-lime"
                style={{
                  height: `${(d.minutes / max) * 100}%`,
                  boxShadow: "0 0 12px oklch(0.94 0.23 125 / 0.35)",
                }}
                title={`${d.minutes} 分钟`}
              />
              <span className="text-[10px] text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </section>

      {/* List */}
      <section className="space-y-2">
        <h2 className="text-sm text-muted-foreground px-1">学习记录</h2>
        {sessionHistory.map((s) => (
          <div key={s.id} className="glass rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent grid place-items-center text-lime text-xs font-bold">
              {s.tag}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{s.task}</p>
              <p className="text-xs text-muted-foreground">{s.date}</p>
            </div>
            <span className="font-mono text-lime font-semibold">{s.minutes}m</span>
          </div>
        ))}
      </section>
    </div>
  );
}
