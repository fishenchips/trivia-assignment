"use client";

import { Rules } from "@/components/rules";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10">
      <div className="mb-8">
        <h2>Let&apos;s play a game.</h2>
      </div>
      <Rules />
    </main>
  );
}
