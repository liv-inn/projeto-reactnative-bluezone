import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { AppColors } from "../constants/appTheme";
import type { Produto } from "../mocks/produtos";
import { getStatus, statusColor, statusLabel } from "../utils/inventory";

type Props = {
  produto: Produto;
  onPress?: () => void;
};

export function ProdutoCard({ produto, onPress }: Props) {
  const status = getStatus(produto);
  const color = statusColor(status);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: AppColors.card,
          borderColor: AppColors.border,
          borderWidth: 1,
          borderRadius: 18,
          padding: 14,
          flexDirection: "row",
          gap: 12,
          opacity: pressed ? 0.92 : 1,
        },
      ]}
    >
      <View
        style={{
          width: 46,
          height: 46,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: AppColors.cardAlt,
          borderColor: AppColors.border,
          borderWidth: 1,
        }}
      >
        <MaterialCommunityIcons
          name={produto.iconName}
          size={22}
          color={AppColors.primary}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{ color: AppColors.text, fontWeight: "900", fontSize: 14 }}
          numberOfLines={1}
        >
          {produto.nome}
        </Text>
        <Text
          style={{
            color: AppColors.muted,
            marginTop: 4,
            fontSize: 12,
            fontWeight: "700",
          }}
          numberOfLines={1}
        >
          {produto.categoria}
        </Text>
        <Text style={{ color: AppColors.muted, marginTop: 4, fontSize: 12 }}>
          {produto.qtdAtual} {produto.unit} • mín. {produto.qtdMax}{" "}
          {produto.unit}
        </Text>
      </View>

      <View style={{ alignItems: "flex-end", justifyContent: "space-between" }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 999,
            backgroundColor: `${color}14`,
            borderColor: `${color}55`,
            borderWidth: 1,
          }}
        >
          <Text style={{ color, fontWeight: "900", fontSize: 12 }}>
            {statusLabel(status)}
          </Text>
        </View>

        <MaterialCommunityIcons
          name="chevron-right"
          size={20}
          color={AppColors.muted}
        />
      </View>
    </Pressable>
  );
}
