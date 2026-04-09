import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { Dropdown } from "../../components/Dropdown";
import { Header } from "../../components/Header";
import { useInventoryContext } from "../../context/InventoryContext";
import { adicionarStyles } from "../../styles/adicionarStyles";
import { pickCategories } from "../../utils/inventory";

const unidades = [
  { label: "Unidade (un)", value: "un" },
  { label: "Caixa (cx)", value: "cx" },
  { label: "Ampola (amp)", value: "amp" },
  { label: "Frasco (fr)", value: "fr" },
];

export default function AdicionarScreen() {
  const router = useRouter();
  const { produtos, addProduto } = useInventoryContext();

  const categorias = useMemo(
    () => [
      { label: "Selecione...", value: "" },
      ...pickCategories(produtos).map((c) => ({ label: c, value: c })),
      { label: "Outros", value: "Outros" },
    ],
    [produtos],
  );

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [unit, setUnit] = useState("");
  const [qtdAtual, setQtdAtual] = useState("");
  const [qtdMax, setQtdMax] = useState("");
  const [valor, setValor] = useState("");
  const [observacao, setObservacao] = useState("");

  const [feedback, setFeedback] = useState<
    | { type: "error"; message: string }
    | { type: "success"; message: string }
    | null
  >(null);

  function salvar() {
    setFeedback(null);

    const nomeOk = nome.trim().length > 0;
    const categoriaOk = categoria.trim().length > 0;
    const unitOk = unit.trim().length > 0;

    const qtdAtualNum = Number(qtdAtual);
    const qtdMaxNum = Number(qtdMax);
    const valorNum = Number(valor);

    const qtdAtualOk = Number.isFinite(qtdAtualNum) && qtdAtualNum >= 0;
    const qtdMaxOk = Number.isFinite(qtdMaxNum) && qtdMaxNum > 0;
    const valorOk = Number.isFinite(valorNum) && valorNum > 0;

    const obsOk = observacao.trim().length > 0;

    if (
      !nomeOk ||
      !categoriaOk ||
      !unitOk ||
      !qtdAtualOk ||
      !qtdMaxOk ||
      !valorOk ||
      !obsOk
    ) {
      setFeedback({
        type: "error",
        message:
          "Preencha todos os campos. Verifique também se os valores numéricos são válidos.",
      });
      return;
    }

    addProduto({
      nome: nome.trim(),
      categoria,
      unit,
      qtdAtual: qtdAtualNum,
      qtdMax: qtdMaxNum,
      iconName: "package-variant",
      valor: valorNum,
      observacoes: [observacao.trim()],
      updatedAt: Date.now(),
    });

    setFeedback({
      type: "success",
      message: "Produto cadastrado com sucesso.",
    });

    // limpa form
    setNome("");
    setCategoria("");
    setUnit("");
    setQtdAtual("");
    setQtdMax("");
    setValor("");
    setObservacao("");

    // volta para home após um curto tempo
    setTimeout(() => router.push("/(tabs)"), 650);
  }

  return (
    <View style={adicionarStyles.safe}>
      <Header
        title="Adicionar produto"
        subtitle="Cadastre um novo item no inventário"
      />

      <ScrollView
        contentContainerStyle={adicionarStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        {feedback ? (
          <View
            style={[
              adicionarStyles.message,
              feedback.type === "error"
                ? adicionarStyles.messageError
                : adicionarStyles.messageSuccess,
            ]}
          >
            <Text style={adicionarStyles.messageText}>{feedback.message}</Text>
          </View>
        ) : null}

        <Text style={adicionarStyles.label}>Nome do produto</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Ex.: Agulha 30G"
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

        <Text style={adicionarStyles.label}>Unidade</Text>
        <Dropdown
          value={unit}
          onChange={setUnit}
          items={[{ label: "Selecione...", value: "" }, ...unidades]}
          containerStyle={adicionarStyles.input}
        />

        <Text style={adicionarStyles.label}>Quantidade atual</Text>
        <TextInput
          value={qtdAtual}
          onChangeText={setQtdAtual}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#94A3B8"
          style={adicionarStyles.input}
        />

        <Text style={adicionarStyles.label}>Mínimo recomendado</Text>
        <TextInput
          value={qtdMax}
          onChangeText={setQtdMax}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#94A3B8"
          style={adicionarStyles.input}
        />

        <Text style={adicionarStyles.label}>Valor (R$)</Text>
        <TextInput
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
          placeholder="0,00"
          placeholderTextColor="#94A3B8"
          style={adicionarStyles.input}
        />

        <Text style={adicionarStyles.label}>Observação</Text>
        <TextInput
          value={observacao}
          onChangeText={setObservacao}
          placeholder="Ex.: validade, lote, fornecedor..."
          placeholderTextColor="#94A3B8"
          multiline
          style={adicionarStyles.textarea}
        />

        <Pressable style={adicionarStyles.button} onPress={salvar}>
          <Text style={adicionarStyles.buttonText}>Salvar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
