import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { useInventoryContext } from "../../context/InventoryContext";
import { detalhesStyles } from "../../styles/detalhesStyles";

function formatUpdatedAt(ts?: number) {
  if (!ts) return "-";
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(ts));
  } catch {
    return new Date(ts).toLocaleString();
  }
}

export default function DetalhesProdutoScreen() {
  const router = useRouter();
  const pushAny = router.push as unknown as (href: any) => void;

  const { id } = useLocalSearchParams<{ id: string }>();
  const { produtos } = useInventoryContext();

  const produto = useMemo(
    () => produtos.find((p) => p.id === id),
    [produtos, id],
  );

  if (!produto) {
    return (
      <View style={detalhesStyles.safe}>
        <Header title="Detalhes" subtitle="Produto não encontrado" />
        <View style={detalhesStyles.container}>
          <Text style={{ color: "#64748B" }}>
            O produto informado não existe.
          </Text>
        </View>
      </View>
    );
  }

  const obsList = (produto.observacoes ?? []).filter(Boolean);

  return (
    <View style={detalhesStyles.safe}>
      <Header title="Detalhes do produto" subtitle="Informações do item" />

      <ScrollView contentContainerStyle={detalhesStyles.container}>
        <View style={detalhesStyles.card}>
          <Text style={detalhesStyles.h1}>{produto.nome}</Text>
          <Text style={detalhesStyles.sub}>{produto.categoria}</Text>

          <View style={detalhesStyles.row}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#64748B", fontWeight: "800" }}>
                Quantidade
              </Text>
              <Text style={detalhesStyles.qty}>
                {produto.qtdAtual} {produto.unit}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#64748B", fontWeight: "800" }}>
                Última atualização
              </Text>
              <Text
                style={{ color: "#0F172A", fontWeight: "800", marginTop: 8 }}
              >
                {formatUpdatedAt(produto.updatedAt)}
              </Text>
            </View>
          </View>

          <View style={[detalhesStyles.btnRow, { marginTop: 14 }]}>
            <Pressable
              style={[detalhesStyles.btn, detalhesStyles.btnPrimary]}
              onPress={() =>
                pushAny({
                  pathname: "/(tabs)/editar_produto",
                  params: { id: produto.id },
                })
              }
            >
              <Text style={detalhesStyles.btnText}>Editar</Text>
            </Pressable>
          </View>
        </View>

        <View style={detalhesStyles.card}>
          <Text style={{ color: "#0F172A", fontWeight: "900" }}>
            Observações
          </Text>

          {obsList.length === 0 ? (
            <Text style={{ color: "#64748B", marginTop: 10 }}>
              Sem observações.
            </Text>
          ) : (
            <View style={{ marginTop: 10, gap: 8 }}>
              {obsList.map((o, idx) => (
                <View
                  key={`${produto.id}-obs-${idx}`}
                  style={{
                    backgroundColor: "#F6F8FC",
                    borderColor: "#E2E8F0",
                    borderWidth: 1,
                    borderRadius: 14,
                    padding: 12,
                  }}
                >
                  <Text style={{ color: "#0F172A", fontWeight: "700" }}>
                    {o}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
