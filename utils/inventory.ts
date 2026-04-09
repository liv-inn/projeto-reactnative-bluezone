import type { Produto } from "../mocks/produtos";

export type StockStatus =
  | "adequado"
  | "abaixo_minimo"
  | "critico"
  | "indisponivel";

export function getStatus(p: Produto): StockStatus {
  if (p.qtdAtual <= 0) return "indisponivel";
  if (p.qtdAtual <= Math.max(1, Math.floor(p.qtdMax * 0.5))) return "critico";
  if (p.qtdAtual <= p.qtdMax) return "abaixo_minimo";
  return "adequado";
}

export function statusLabel(status: StockStatus): string {
  switch (status) {
    case "indisponivel":
      return "Indisponível";
    case "critico":
      return "Crítico";
    case "abaixo_minimo":
      return "Abaixo do mínimo";
    default:
      return "Adequado";
  }
}

export function statusColor(status: StockStatus): string {
  switch (status) {
    case "indisponivel":
      return "#DC2626";
    case "critico":
      return "#F59E0B";
    case "abaixo_minimo":
      return "#FBBF24";
    default:
      return "#16A34A";
  }
}

export function pickCategories(produtos: Produto[]): string[] {
  return Array.from(new Set(produtos.map((p) => p.categoria))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function formatMoneyBRL(value: number): string {
  try {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  } catch {
    return `R$ ${value.toFixed(2)}`;
  }
}
