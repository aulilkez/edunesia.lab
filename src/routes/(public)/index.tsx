import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/(public)/index";

export const Route = createFileRoute("/(public)/")({ component: HomePage });
