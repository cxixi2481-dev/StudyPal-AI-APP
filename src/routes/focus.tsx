import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Pause, Play, Square } from "lucide-react";
import { JellyMascot } from "@/components/JellyMascot";
import { aiBubbles, pickRandom } from "@/lib/mock";
import { z } from "zod";

export const Route = createFileRoute("/focus")({
  validateSearch: z.object({ task: z.string().optional() }),
  component: Focus,
});

const TOTAL = 25 * 60;

function Focus() {
  const navigate = useNavigate();
  const { task } = Route.useSearch();
  const taskName = task || "毕业论文第二章";
  const [remaining, setRemaining] = useState(TOTAL);
  const [running, setRunning] = useState(true);
  const [bubble, setBubble] = useState(aiBubbles[0]);
  const bubbleRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    const id = setInterval(() => {
      bubbleRef.current++;
      setBubble(pickRandom(aiBubbles));
    }, 12000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  const progress = 1 - remaining / TOTAL;
  const r = 130;
  const C = 2 * Math.PI * r;

  return (
    <div className="fixed inset-0 bg-background flex flex-col">
      {/* Top: task */}
      <header className="pt-12 px-6 text-center">
        <p className="text-xs text-muted-foreground tracking-widest uppercase">当前任务</p>
        <h1 className="mt-1 text-lg font-semibold">{taskName}</h1>
      </header>

      {/* Timer */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <svg width="300" height="300" viewBox="0 0 300 300" className="-rotate-90">
            <circle cx="150" cy="150" r={r} fill="none" stroke="oklch(1 0 0 / 0.06)" strokeWidth="6" />
            <circle
              cx="150"
              cy="150"
              r={r}
              fill="none"
              stroke="var(--lime)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - progress)}
              style={{ filter: "drop-shadow(0 0 12px oklch(0.94 0.23 125 / 0.6))", transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-6xl font-bold text-lime tracking-tight">
              {mm}:{ss}
            </span>
            <span className="mt-2 text-xs text-muted-foreground">
              {running ? "进行中" : "已暂停"} · 25 分钟一局
            </span>
          </div>
        </div>
      </div>

      {/* Jelly companion card */}
      <section className="mx-5 mb-4 glass rounded-3xl p-5 flex items-center gap-4">
        <JellyMascot size={96} mood={running ? "focus" : "idle"} />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-lime font-semibold">AI 搭子 · 同步工作中</p>
          <p
            key={bubble}
            className="mt-2 text-sm leading-relaxed animate-bubble-in glass rounded-2xl rounded-tl-sm px-3 py-2"
          >
            {bubble}
          </p>
        </div>
      </section>

      {/* Controls */}
      <div className="px-5 pb-8 flex gap-3 pb-[env(safe-area-inset-bottom)]">
        <button
          onClick={() => setRunning((v) => !v)}
          className="flex-1 glass rounded-2xl py-4 font-medium flex items-center justify-center gap-2"
        >
          {running ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          {running ? "暂停" : "继续"}
        </button>
        <button
          onClick={() => navigate({ to: "/recap", search: { task: taskName, minutes: Math.round((TOTAL - remaining) / 60) } })}
          className="flex-1 rounded-2xl bg-lime text-lime-foreground py-4 font-semibold flex items-center justify-center gap-2"
        >
          <Square className="w-4 h-4" /> 结束专注
        </button>
      </div>
    </div>
  );
}
