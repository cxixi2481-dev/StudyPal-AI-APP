import { Link, useRouterState } from "@tanstack/react-router";
import { Home, MessageCircle, BarChart3, User } from "lucide-react";

const items = [
  { to: "/", label: "首页", icon: Home },
  { to: "/chat", label: "聊天", icon: MessageCircle },
  { to: "/history", label: "历史", icon: BarChart3 },
  { to: "/profile", label: "我的", icon: User },
] as const;

export function BottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  // Hide on immersive screens
  if (path.startsWith("/focus") || path.startsWith("/recap")) return null;

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md px-4 pb-4">
        <div className="glass rounded-2xl flex justify-around items-center py-2 px-1">
          {items.map(({ to, label, icon: Icon }) => {
            const active = to === "/" ? path === "/" : path.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl transition-colors ${
                  active ? "text-lime" : "text-muted-foreground"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={active ? 2.4 : 1.8} />
                <span className="text-[11px]">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
