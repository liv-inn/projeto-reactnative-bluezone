import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { MetricCard } from "../../components/MetricCard";
import { useInventoryContext } from "../../context/InventoryContext";
import { relatoriosStyles } from "../../styles/relatoriosStyles";
import { getStatus, pickCategories } from "../../utils/inventory";

export default function RelatoriosScreen() {
  const { produtos, lowStock } = useInventoryContext();
  const [period, setPeriod] = useState<"semana" | "mes">("semana");

  const byCategoria = useMemo(() => {
    const cats = pickCategories(produtos);
    return cats.map((c) => {
      const total = produtos.filter((p) => p.categoria === c).length;
      const low = produtos.filter(
        (p) => p.categoria === c && getStatus(p) !== "adequado",
      ).length;
      return { categoria: c, total, low };
    });
  }, [produtos]);

  const total = produtos.length;
  const totalLow = lowStock.length;

  return (
    <View style={relatoriosStyles.safe}>
      <Header title="Relatórios" subtitle="Visão geral do estoque" showLogo />

      <ScrollView contentContainerStyle={relatoriosStyles.container}>
        <Text style={relatoriosStyles.title}>Período</Text>
        <View style={relatoriosStyles.periodWrap}>
          <Pressable
            style={[
              relatoriosStyles.periodBtn,
              period === "semana" && relatoriosStyles.periodBtnActive,
            ]}
            onPress={() => setPeriod("semana")}
          >
            <Text
              style={[
                relatoriosStyles.periodText,
                period === "semana" && relatoriosStyles.periodTextActive,
              ]}
            >
              Semana
            </Text>
          </Pressable>
          <Pressable
            style={[
              relatoriosStyles.periodBtn,
              period === "mes" && relatoriosStyles.periodBtnActive,
            ]}
            onPress={() => setPeriod("mes")}
          >
            <Text
              style={[
                relatoriosStyles.periodText,
                period === "mes" && relatoriosStyles.periodTextActive,
              ]}
            >
              Mês
            </Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 12 }}
        >
          <MetricCard
            label="Produtos"
            value={String(total)}
            icon="package-variant"
          />
          <MetricCard
            label="Alertas"
            value={String(totalLow)}
            icon="alert"
            accent="#F59E0B"
          />
          <MetricCard
            label="Indisponível"
            value={String(
              produtos.filter((p) => getStatus(p) === "indisponivel").length,
            )}
            icon="alert-circle"
            accent="#DC2626"
          />
          <View style={{ width: 4 }} />
        </ScrollView>

        <View style={relatoriosStyles.sectionCard}>
          <View style={relatoriosStyles.sectionTitleRow}>
            <Text style={relatoriosStyles.sectionTitle}>Estoque baixo</Text>
          </View>

          {lowStock.length === 0 ? (
            <Text style={{ color: "#93A4B8" }}>
              Não tem nada faltando ou próximo da falta.
            </Text>
          ) : (
            lowStock.map((p) => (
              <View key={p.id} style={relatoriosStyles.lowStockRow}>
                <View style={{ flex: 1 }}>
                  <Text style={relatoriosStyles.lowStockName}>{p.nome}</Text>
                  <Text style={relatoriosStyles.lowStockCategory}>
                    {p.categoria}
                  </Text>
                </View>
                <Text style={relatoriosStyles.lowStockQty}>{p.qtdAtual}</Text>
              </View>
            ))
          )}
        </View>

        <View style={relatoriosStyles.sectionCard}>
          <View style={relatoriosStyles.sectionTitleRow}>
            <Text style={relatoriosStyles.sectionTitle}>Por categoria</Text>
          </View>

          {byCategoria.map((row) => {
            const pct = row.total === 0 ? 0 : Math.min(1, row.low / row.total);
            return (
              <View key={row.categoria} style={relatoriosStyles.barRow}>
                <View style={relatoriosStyles.barTop}>
                  <Text style={relatoriosStyles.barLabel}>{row.categoria}</Text>
                  <Text style={relatoriosStyles.barValue}>
                    {row.low}/{row.total} alertas
                  </Text>
                </View>
                <View style={relatoriosStyles.barTrack}>
                  <View
                    style={[
                      relatoriosStyles.barFill,
                      { width: `${pct * 100}%` },
                    ]}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
