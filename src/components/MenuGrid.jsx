import { useState } from "react";
import { DRINKS } from "../data/drinks";
import DrinkCard from "./DrinkCard";
import { Coffee, Snowflake } from "lucide-react";

export default function MenuGrid() {
  const [active, setActive] = useState("hot");
  const list = DRINKS[active] || [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActive("hot")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border active:scale-[.99] ${
            active === "hot"
              ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900"
              : "border-neutral-300 text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
          }`}
        >
          <Coffee className="h-4 w-4" /> Sıcak İçecekler
        </button>
        <button
          onClick={() => setActive("cold")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border active:scale-[.99] ${
            active === "cold"
              ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900"
              : "border-neutral-300 text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
          }`}
        >
          <Snowflake className="h-4 w-4" /> Soğuk İçecekler
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((d) => (
          <DrinkCard key={d.id} item={d} />
        ))}
      </div>
    </div>
  );
}
