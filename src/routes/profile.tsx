import { createFileRoute } from "@tanstack/react-router";
import { Bell, Heart, Settings, LogOut, ChevronRight } from "lucide-react";
import { JellyMascot } from "@/components/JellyMascot";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "StudyPal · 我的" }] }),
  component: Profile,
});

const rows = [
  { icon: Bell, label: "提醒与陪伴节奏", hint: "每 25 分钟" },
  { icon: Heart, label: "搭子人格", hint: "温柔锐评型" },
  { icon: Settings, label: "通用设置", hint: "" },
  { icon: LogOut, label: "退出登录", hint: "" },
];

function Profile() {
  return (
    <div className="px-5 pt-10 pb-6 space-y-5">
      <header className="glass rounded-3xl p-5 flex items-center gap-4">
        <JellyMascot size={72} mood="cheer" />
        <div>
          <h1 className="text-lg font-bold">同学，你好</h1>
          <p className="text-xs text-muted-foreground">已经和搭子一起学了 12 天</p>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1">
            <span className="text-xs text-lime font-semibold">考研 · 冲刺中</span>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-3 gap-3">
        {[
          { k: "总时长", v: "37.2h" },
          { k: "总场次", v: "48" },
          { k: "战报", v: "12" },
        ].map((s) => (
          <div key={s.k} className="glass rounded-2xl p-4 text-center">
            <p className="font-mono text-lg font-bold text-lime">{s.v}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{s.k}</p>
          </div>
        ))}
      </section>

      <section className="glass rounded-3xl divide-y divide-white/5 overflow-hidden">
        {rows.map(({ icon: Icon, label, hint }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 p-4 text-left active:bg-white/5"
          >
            <div className="w-9 h-9 rounded-xl bg-accent grid place-items-center">
              <Icon className="w-4 h-4 text-lime" />
            </div>
            <span className="flex-1 text-sm">{label}</span>
            {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </section>

      <p className="text-center text-xs text-muted-foreground pt-2">
        StudyPal v0.1 · 你不是一个人在自习室
      </p>
    </div>
  );
}
