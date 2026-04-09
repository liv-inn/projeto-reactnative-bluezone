import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Header } from "../../components/Header";
import { MetricCard } from "../../components/MetricCard";
import { ProdutoCard } from "../../components/ProdutoCard";
import { useInventoryContext } from "../../context/InventoryContext";
import { homeStyles } from "../../styles/homeStyles";
import { getStatus } from "../../utils/inventory";

export default function HomeScreen() {
  const router = useRouter();
  const pushAny = router.push as unknown as (href: any) => void;
  const { produtos, lowStock } = useInventoryContext();

  const stats = useMemo(() => {
    const total = produtos.length;
    const indisponivel = produtos.filter(
      (p) => getStatus(p) === "indisponivel",
    ).length;
    const critico = produtos.filter((p) => getStatus(p) === "critico").length;
    const abaixo = produtos.filter(
      (p) => getStatus(p) === "abaixo_minimo",
    ).length;
    return { total, indisponivel, critico, abaixo };
  }, [produtos]);

  return (
    <View style={homeStyles.safe}>
      <Header
        title="Inventário Clínica"
        subtitle="Nutrologia & Estética"
        showLogo
      />

      <ScrollView contentContainerStyle={homeStyles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 8 }}
        >
          <MetricCard
            label="Produtos"
            value={String(stats.total)}
            icon="package-variant"
          />
          <MetricCard
            label="Indisponível"
            value={String(stats.indisponivel)}
            icon="alert-circle"
            accent="#DC2626"
          />
          <MetricCard
            label="Crítico"
            value={String(stats.critico)}
            icon="progress-alert"
            accent="#F59E0B"
          />
          <MetricCard
            label="Abaixo mín."
            value={String(stats.abaixo)}
            icon="chart-timeline-variant"
            accent="#FBBF24"
          />
          <View style={{ width: 4 }} />
        </ScrollView>

        <Pressable
          style={homeStyles.primaryBtn}
          onPress={() => pushAny("/(tabs)/adicionar")}
        >
          <Text style={homeStyles.primaryBtnText}>Adicionar novo produto</Text>
        </Pressable>

        <Text style={homeStyles.sectionTitle}>Alertas de estoque</Text>
        {lowStock.length === 0 ? (
          <Text style={homeStyles.hint}>
            Nenhum item em falta ou quase em falta.
          </Text>
        ) : (
          <FlatList
            data={lowStock}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={homeStyles.listGap} />}
            renderItem={({ item }) => (
              <ProdutoCard
                produto={item}
                onPress={() =>
                  pushAny({
                    pathname: "/(tabs)/detalhes_produto",
                    params: { id: item.id },
                  })
                }
              />
            )}
            style={{ marginTop: 12 }}
          />
        )}
      </ScrollView>
    </View>
  );
}
