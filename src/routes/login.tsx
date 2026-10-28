import { createFileRoute } from "@tanstack/react-router";
import { AccountEntry } from "@/components/account-entry";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-dvh place-items-center bg-bg px-6 text-ink">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold">베드로지파 체육부</h1>
        <p className="mt-2 text-sm text-muted">이메일로 가입하거나, Google로 들어갑니다.</p>
        <AccountEntry />
      </div>
    </main>
  );
}
