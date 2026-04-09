import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { Dropdown } from "../../components/Dropdown";
import { Header } from "../../components/Header";
import { AppColors } from "../../constants/appTheme";
import { useInventoryContext } from "../../context/InventoryContext";
import { adicionarStyles } from "../../styles/adicionarStyles";
import { detalhesStyles } from "../../styles/detalhesStyles";
import { pickCategories } from "../../utils/inventory";

export default function EditarProdutoScreen() {
  const router = useRouter();
  const pushAny = router.push as unknown as (href: any) => void;
  const backAny = router.back as unknown as () => void;

  const { id } = useLocalSearchParams<{ id: string }>();
  const { produtos, updateProduto, adjustQuantidade, removeProduto } =
    useInventoryContext();

  const produto = useMemo(
    () => produtos.find((p) => p.id === id),
    [produtos, id],
  );

  const categorias = useMemo(() => {
    const cats = pickCategories(produtos);
    return [
      { label: "Selecione...", value: "" },
      ...cats.map((c) => ({ label: c, value: c })),
      { label: "Outros", value: "Outros" },
    ];
  }, [produtos]);

  const [nome, setNome] = useState(produto?.nome ?? "");
  const [categoria, setCategoria] = useState(produto?.categoria ?? "");
  const [novaObs, setNovaObs] = useState("");

  if (!produto) {
    return (
      <View style={{ flex: 1, backgroundColor: AppColors.background }}>
        <Header title="Editar produto" subtitle="Produto não encontrado" />
        <View style={{ padding: 16 }}>
          <Text style={{ color: AppColors.muted }}>
            O produto informado não existe.
          </Text>
        </View>
      </View>
    );
  }

  const produtoId = produto.id;

  function salvarAlteracoes() {
    const nomeOk = nome.trim().length > 0;
    const categoriaOk = categoria.trim().length > 0;

    if (!nomeOk || !categoriaOk) {
      Alert.alert("Atenção", "Informe nome e categoria.");
      return;
    }

    updateProduto(produtoId, {
      nome: nome.trim(),
      categoria,
    });

    Alert.alert("Sucesso", "Produto atualizado.", [
      { text: "OK", onPress: backAny },
    ]);
  }

  function adicionarObservacao() {
    const text = novaObs.trim();
    if (!text) {
      Alert.alert("Atenção", "Digite uma observação para adicionar.");
      return;
    }

    const current = produtos.find((p) => p.id === produtoId);
    const atual = (current?.observacoes ?? []).filter(Boolean);
    updateProduto(produtoId, { observacoes: [text, ...atual] });
    setNovaObs("");
    Alert.alert("Sucesso", "Observação adicionada.");
  }

  function confirmarExclusao() {
    Alert.alert(
      "Excluir produto",
      "Tem certeza que deseja excluir este produto? Esta ação não pode ser desfeita.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            removeProduto(produtoId);
            pushAny("/(tabs)/estoque");
          },
        },
      ],
    );
  }

  return (
    <View style={detalhesStyles.safe}>
      <Header
        title="Editar produto"
        subtitle="Dados, quantidade e observações"
        rightIcon="trash-can-outline"
        onRightPress={confirmarExclusao}
      />

      <ScrollView
        contentContainerStyle={adicionarStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={detalhesStyles.card}>
          <Text style={{ color: AppColors.text, fontWeight: "900" }}>
            Dados do produto
          </Text>

          <Text style={adicionarStyles.label}>Nome</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            placeholder="Nome do produto"
            placeholderTextColor="#94A3B8"
            style={adicionarStyles.input}
          />

          <Text style={adicionarStyles.label}>Categoria</Text>
          <Dropdown
            value={categoria}
            onChange={setCategoria}
            items={categorias}
            containerStyle={adicionarStyles.input}
          />

          <Pressable style={adicionarStyles.button} onPress={salvarAlteracoes}>
            <Text style={adicionarStyles.buttonText}>Salvar alterações</Text>
          </Pressable>
        </View>

        <View style={detalhesStyles.card}>
          <Text style={{ color: AppColors.text, fontWeight: "900" }}>
            Quantidade
          </Text>

          <View style={[detalhesStyles.row, { alignItems: "center" }]}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: AppColors.muted, fontWeight: "800" }}>
                Atual
              </Text>
              <Text style={detalhesStyles.qty}>
                {produto.qtdAtual} {produto.unit}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: AppColors.muted, fontWeight: "800" }}>
                Ajustar
              </Text>
              <View style={detalhesStyles.btnRow}>
                <Pressable
                  style={[detalhesStyles.btn, detalhesStyles.btnDanger]}
                  onPress={() => adjustQuantidade(produtoId, -1)}
                >
                  <Text style={detalhesStyles.btnTextDanger}>-1</Text>
                </Pressable>
                <Pressable
                  style={[detalhesStyles.btn, detalhesStyles.btnPrimary]}
                  onPress={() => adjustQuantidade(produtoId, +1)}
                >
                  <Text style={detalhesStyles.btnText}>+1</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <Text
            style={{ color: AppColors.muted, marginTop: 6, fontWeight: "600" }}
          >
            Ajustar quantidade atualiza a data de modificação do produto.
          </Text>
        </View>

        <View style={detalhesStyles.card}>
          <Text style={{ color: AppColors.text, fontWeight: "900" }}>
            Adicionar observação
          </Text>
          <TextInput
            value={novaObs}
            onChangeText={setNovaObs}
            placeholder="Ex.: lote, validade, fornecedor..."
            placeholderTextColor="#94A3B8"
            multiline
            style={adicionarStyles.textarea}
          />
          <Pressable
            style={adicionarStyles.button}
            onPress={adicionarObservacao}
          >
            <Text style={adicionarStyles.buttonText}>Adicionar observação</Text>
          </Pressable>
        </View>

        {/* remove botão grande de excluir e deixa apenas ação no header */}
        <View style={{ marginTop: 8, alignItems: "flex-end" }}>
          <Pressable
            onPress={confirmarExclusao}
            hitSlop={12}
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
          >
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={22}
              color={AppColors.danger}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
