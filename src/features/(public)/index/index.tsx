import { useState } from "react";
import { Button } from "@/components/ui/button";

export function HomePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-foreground">
      <section aria-labelledby="home-title" className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl" id="home-title">
          Edunesia.lab
        </h1>
        <Button onClick={() => setClicked(true)} size="lg">
          {clicked ? "Makasih sudah klik!" : "Klik me"}
        </Button>
      </section>
    </main>
  );
}
