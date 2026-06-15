import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { JellyMascot } from "@/components/JellyMascot";
import { chatHistory, mockAIReplies, pickRandom } from "@/lib/mock";

export const Route = createFileRoute("/chat")({
  head: () => ({ meta: [{ title: "StudyPal · 聊聊" }] }),
  component: Chat,
});

type Msg = { id: string; role: "user" | "ai"; text: string; time: string };

function Chat() {
  const [msgs, setMsgs] = useState<Msg[]>(chatHistory);
  const [text, setText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
  }, [msgs]);

  const send = () => {
    const t = text.trim();
    if (!t) return;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    setMsgs((m) => [...m, { id: crypto.randomUUID(), role: "user", text: t, time }]);
    setText("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "ai", text: pickRandom(mockAIReplies), time },
      ]);
    }, 700);
  };

  return (
    <div className="flex flex-col h-screen pb-24">
      {/* Header */}
      <header className="px-5 pt-10 pb-4 flex items-center gap-3 sticky top-0 bg-background/80 backdrop-blur-xl z-10">
        <JellyMascot size={44} />
        <div>
          <h1 className="font-semibold">StudyPal</h1>
          <p className="text-xs text-lime">在线 · 同步陪学中</p>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 space-y-3">
        {msgs.map((m) => (
          <div
            key={m.id}
            className={`flex animate-bubble-in ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-lime text-lime-foreground rounded-2xl rounded-tr-sm"
                  : "glass rounded-2xl rounded-tl-sm"
              }`}
            >
              {m.text}
              <div
                className={`mt-1 text-[10px] ${
                  m.role === "user" ? "text-lime-foreground/60" : "text-muted-foreground"
                }`}
              >
                {m.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="fixed bottom-20 inset-x-0 px-4">
        <div className="mx-auto max-w-md glass rounded-2xl p-2 flex items-center gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="跟搭子说点什么…"
            className="flex-1 bg-transparent px-3 py-2 outline-none text-sm placeholder:text-muted-foreground"
          />
          <button
            onClick={send}
            disabled={!text.trim()}
            className="w-10 h-10 rounded-xl bg-lime text-lime-foreground grid place-items-center disabled:opacity-40"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
