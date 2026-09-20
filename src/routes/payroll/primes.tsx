import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function PrimesPage() {
  return <Subpage title="Primes" subtitle="Gestion des primes et récompenses." />;
}

export const Route = createFileRoute("/payroll/primes")({ component: PrimesPage });
