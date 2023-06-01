"use client";

import { Category } from "@/components/rules/category";
import { Difficulty } from "@/components/rules/difficulty";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10">
      <div className="mb-8">
        <h2>Let&apos;s play a game.</h2>
      </div>
      <div>
        <h4>Rules</h4>
        <div className="flex">
          <Category />
          <Difficulty />
        </div>
      </div>
    </main>
  );
}
