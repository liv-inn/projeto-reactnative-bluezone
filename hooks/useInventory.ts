import { useMemo, useState } from "react";
import { produtosMock, type Produto } from "../mocks/produtos";
import { getStatus } from "../utils/inventory";

export type InventoryItem = Produto & {
  valor?: number;
  observacoes?: string[];
  updatedAt?: number;
};

export function useInventory() {
  const [produtos, setProdutos] = useState<InventoryItem[]>(
    produtosMock.map((p) => ({
      ...p,
      valor: 0,
      observacoes: [],
      updatedAt: Date.now(),
    })),
  );

  const lowStock = useMemo(
    () =>
      produtos.filter((p) =>
        ["abaixo_minimo", "critico", "indisponivel"].includes(getStatus(p)),
      ),
    [produtos],
  );

  function addProduto(item: Omit<InventoryItem, "id">) {
    setProdutos((prev) => [
      { ...item, id: String(Date.now()), updatedAt: Date.now() },
      ...prev,
    ]);
  }

  function updateProduto(id: string, patch: Partial<InventoryItem>) {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, ...patch, updatedAt: Date.now() } : p,
      ),
    );
  }

  function adjustQuantidade(id: string, delta: number) {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              qtdAtual: Math.max(0, p.qtdAtual + delta),
              updatedAt: Date.now(),
            }
          : p,
      ),
    );
  }

  function removeProduto(id: string) {
    setProdutos((prev) => prev.filter((p) => p.id !== id));
  }

  return {
    produtos,
    setProdutos,
    lowStock,
    addProduto,
    updateProduto,
    adjustQuantidade,
    removeProduto,
  };
}
