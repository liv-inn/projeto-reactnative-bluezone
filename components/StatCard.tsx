import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { AppColors } from "../constants/appTheme";

type Props = {
  label: string;
  value: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color?: string;
};

export function StatCard({
  label,
  value,
  icon,
  color = AppColors.primary,
}: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.card,
        borderColor: AppColors.border,
        borderWidth: 1,
        borderRadius: 16,
        padding: 14,
        minHeight: 88,
      }}
    >
      <MaterialCommunityIcons name={icon} size={22} color={color} />
      <Text
        style={{
          color: AppColors.muted,
          fontSize: 12,
          marginTop: 8,
          fontWeight: "800",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          color: AppColors.text,
          fontSize: 16,
          fontWeight: "900",
          marginTop: 2,
        }}
      >
        {value}
      </Text>
    </View>
  );
}
