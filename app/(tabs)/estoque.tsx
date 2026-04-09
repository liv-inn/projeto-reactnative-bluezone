import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { ProdutoCard } from "../../components/ProdutoCard";
import { SearchInput } from "../../components/SearchInput";
import { useInventoryContext } from "../../context/InventoryContext";
import { estoqueStyles } from "../../styles/estoqueStyles";
import { pickCategories } from "../../utils/inventory";

export default function EstoqueScreen() {
  const router = useRouter();
  const pushAny = router.push as unknown as (href: any) => void;
  const { produtos } = useInventoryContext();
  const [q, setQ] = useState("");
  const [categoria, setCategoria] = useState<string>("Todas");

  const categorias = useMemo(
    () => ["Todas", ...pickCategories(produtos)],
    [produtos],
  );

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    return produtos.filter((p) => {
      const matchText =
        text.length === 0 ||
        p.nome.toLowerCase().includes(text) ||
        p.categoria.toLowerCase().includes(text);
      const matchCat = categoria === "Todas" || p.categoria === categoria;
      return matchText && matchCat;
    });
  }, [produtos, q, categoria]);

  const hasFilters = q.trim().length > 0 || categoria !== "Todas";

  function clearFilters() {
    setQ("");
    setCategoria("Todas");
  }

  return (
    <View style={estoqueStyles.safe}>
      <Header title="Estoque" subtitle="Buscar e filtrar produtos" showLogo />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        contentContainerStyle={estoqueStyles.container}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <>
            <SearchInput
              value={q}
              onChangeText={setQ}
              placeholder="Buscar por nome ou categoria..."
            />

            <View style={estoqueStyles.actionsRow}>
              <Text style={estoqueStyles.resultText}>
                {filtered.length} resultado{filtered.length === 1 ? "" : "s"}
                {categoria !== "Todas" ? ` • ${categoria}` : ""}
              </Text>

              {hasFilters ? (
                <Pressable
                  style={estoqueStyles.clearBtn}
                  onPress={clearFilters}
                >
                  <MaterialCommunityIcons
                    name="close-circle"
                    size={16}
                    color="#64748B"
                  />
                  <Text style={estoqueStyles.clearText}>Limpar</Text>
                </Pressable>
              ) : null}
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 12 }}
              contentContainerStyle={{ gap: 10, paddingRight: 2 }}
            >
              {categorias.map((c) => {
                const active = c === categoria;
                return (
                  <Pressable
                    key={c}
                    style={[
                      estoqueStyles.chip,
                      active && estoqueStyles.chipActive,
                    ]}
                    onPress={() => setCategoria(c)}
                  >
                    <Text
                      style={[
                        estoqueStyles.chipText,
                        active && estoqueStyles.chipTextActive,
                      ]}
                    >
                      {c}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <View style={{ height: 14 }} />
          </>
        }
        ItemSeparatorComponent={() => <View style={estoqueStyles.listGap} />}
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
        ListEmptyComponent={() => (
          <View style={estoqueStyles.emptyWrap}>
            <Text style={estoqueStyles.emptyTitle}>
              Nenhum produto encontrado
            </Text>
            <Text style={estoqueStyles.emptyDesc}>
              Tente limpar os filtros ou buscar por outro termo.
            </Text>
          </View>
        )}
      />
    </View>
  );
}
