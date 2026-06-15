import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Download, Share2, RefreshCw, ChevronLeft } from "lucide-react";
import { JellyMascot } from "@/components/JellyMascot";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/recap")({
  validateSearch: z.object({ task: z.string().optional(), minutes: z.number().optional() }),
  component: Recap,
});

const ROASTS = [
  "今天这状态，给你一颗星——⭐️。开玩笑，是五颗。",
  "中途想划走的时候你没划，这就是进步。",
  "比起昨天那只摆烂的你，今天这只值得被夸。",
];

const TIPS = [
  "明天先开一局 25 分钟，专攻结论部分。",
  "明早可以从昨晚卡住的那段开始，预热 10 分钟。",
  "睡前花 3 分钟列明天的 3 件事，我们再开机。",
];

function Recap() {
  const navigate = useNavigate();
  const { task, minutes } = Route.useSearch();
  const [seed, setSeed] = useState(0);

  const taskName = task || "毕业论文第二章";
  const mins = minutes ?? 25;
  const roast = ROASTS[seed % ROASTS.length];
  const tip = TIPS[seed % TIPS.length];

  return (
    <div className="min-h-screen px-5 pt-10 pb-10 flex flex-col">
      <header className="flex items-center justify-between">
        <button
          onClick={() => navigate({ to: "/" })}
          className="w-10 h-10 rounded-full glass grid place-items-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm text-muted-foreground">今日复盘</span>
        <div className="w-10" />
      </header>

      {/* Card */}
      <div className="mt-6 flex-1 flex items-center">
        <div className="w-full glass rounded-[2rem] p-6 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-16 w-60 h-60 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--lime)" }}
          />
          <div className="relative flex items-center gap-3">
            <JellyMascot size={64} mood="cheer" />
            <div>
              <p className="text-xs text-lime">StudyPal · 战报</p>
              <h2 className="text-lg font-bold">今日斩获</h2>
            </div>
          </div>

          <div className="relative mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-background/40 p-4">
              <p className="text-xs text-muted-foreground">专注任务</p>
              <p className="mt-1 font-semibold truncate">{taskName}</p>
            </div>
            <div className="rounded-2xl bg-background/40 p-4">
              <p className="text-xs text-muted-foreground">专注时长</p>
              <p className="mt-1 font-mono font-bold text-lime text-xl">{mins} 分钟</p>
            </div>
          </div>

          <div className="relative mt-4 rounded-2xl bg-background/40 p-4">
            <p className="text-xs text-lime font-semibold">搭子锐评</p>
            <p className="mt-1 text-sm leading-relaxed">{roast}</p>
          </div>

          <div className="relative mt-3 rounded-2xl bg-background/40 p-4">
            <p className="text-xs text-lime font-semibold">明日建议</p>
            <p className="mt-1 text-sm leading-relaxed">{tip}</p>
          </div>

          <div className="relative mt-5 text-center text-[11px] text-muted-foreground">
            #StudyPal · 你不是一个人在自习室
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <button className="glass rounded-2xl py-3 flex flex-col items-center gap-1 text-xs">
          <Download className="w-4 h-4" /> 保存图片
        </button>
        <button className="rounded-2xl bg-lime text-lime-foreground py-3 flex flex-col items-center gap-1 text-xs font-semibold">
          <Share2 className="w-4 h-4" /> 分享战报
        </button>
        <button
          onClick={() => setSeed((s) => s + 1)}
          className="glass rounded-2xl py-3 flex flex-col items-center gap-1 text-xs"
        >
          <RefreshCw className="w-4 h-4" /> 重新生成
        </button>
      </div>
    </div>
  );
}
