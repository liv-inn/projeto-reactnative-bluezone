import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export type Produto = {
  id: string;
  nome: string;
  categoria: string;
  qtdAtual: number;
  qtdMax: number;
  unit: string;
  observacoes: string[];
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};

export const produtosMock: Produto[] = [
  {
    id: "1",
    nome: "Ácido Hialurônico 1ml",
    categoria: "Injetáveis",
    qtdAtual: 25,
    qtdMax: 10,
    unit: "un",
    observacoes: ["Armazenar em local seco", "Validade: 12/2026"],
    iconName: "bottle-tonic",
  },
  {
    id: "2",
    nome: "Toxina Botulínica 100U",
    categoria: "Injetáveis",
    qtdAtual: 8,
    qtdMax: 5,
    unit: "un",
    observacoes: ["Manter refrigerado", "Lote: TB-2025-09"],
    iconName: "needle",
  },
  {
    id: "3",
    nome: "Vitamina C Injetável",
    categoria: "Injetáveis",
    qtdAtual: 3,
    qtdMax: 10,
    unit: "amp",
    observacoes: ["Repor na próxima compra"],
    iconName: "needle",
  },
  {
    id: "4",
    nome: "Whey Protein Isolado",
    categoria: "Suplementos",
    qtdAtual: 40,
    qtdMax: 15,
    unit: "un",
    observacoes: ["Fornecedor: NutriPro"],
    iconName: "weight-lifter",
  },
  {
    id: "5",
    nome: "Creatina Monohidratada",
    categoria: "Suplementos",
    qtdAtual: 30,
    qtdMax: 10,
    unit: "un",
    observacoes: [],
    iconName: "bottle-tonic",
  },
  {
    id: "6",
    nome: "Luvas Nitrílicas M",
    categoria: "Descartáveis",
    qtdAtual: 5,
    qtdMax: 20,
    unit: "cx",
    observacoes: ["Usar primeiro as caixas abertas"],
    iconName: "hand-extended",
  },
  {
    id: "7",
    nome: "Seringas 3ml",
    categoria: "Descartáveis",
    qtdAtual: 200,
    qtdMax: 50,
    unit: "un",
    observacoes: ["Separar por tamanho"],
    iconName: "needle",
  },
  {
    id: "8",
    nome: "Agulhas 30G",
    categoria: "Descartáveis",
    qtdAtual: 150,
    qtdMax: 50,
    unit: "un",
    observacoes: [],
    iconName: "needle",
  },
];
