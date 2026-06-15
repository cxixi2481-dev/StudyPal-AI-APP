import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { JellyMascot } from "@/components/JellyMascot";

export const Route = createFileRoute("/focus-setup")({
  component: FocusSetup,
});

function FocusSetup() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [reply, setReply] = useState<string | null>(null);

  const submit = () => {
    if (!text.trim()) return;
    setReply("今天我们一起拿下这块硬骨头。");
    setTimeout(() => {
      navigate({ to: "/focus", search: { task: text.trim() } });
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/70 backdrop-blur-2xl flex flex-col">
      <button
        onClick={() => navigate({ to: "/" })}
        className="absolute top-5 right-5 w-10 h-10 rounded-full glass grid place-items-center"
        aria-label="关闭"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-8">
        <JellyMascot size={120} mood="cheer" />

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">今天准备攻克点什么？</h1>
          <p className="text-sm text-muted-foreground">说一句就好，我会陪你完成它。</p>
        </div>

        <div className="w-full max-w-sm glass rounded-2xl p-4">
          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 30))}
            placeholder="今天准备攻克点什么？"
            rows={2}
            className="w-full bg-transparent outline-none resize-none placeholder:text-muted-foreground text-base"
          />
          <div className="flex justify-between items-center pt-2">
            <span className="text-xs text-muted-foreground">{text.length}/30</span>
            {reply && (
              <span className="text-xs text-lime animate-bubble-in">{reply}</span>
            )}
          </div>
        </div>

        <button
          onClick={submit}
          disabled={!text.trim()}
          className="w-full max-w-sm rounded-2xl bg-lime text-lime-foreground py-4 font-semibold flex items-center justify-center gap-2 disabled:opacity-40 active:scale-[0.98] transition"
        >
          进舱专注 <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
