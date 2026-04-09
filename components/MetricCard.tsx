import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { AppColors } from "../constants/appTheme";

type Props = {
  label: string;
  value: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  accent?: string;
};

export function MetricCard({
  label,
  value,
  icon,
  accent = AppColors.primary,
}: Props) {
  return (
    <View
      style={{
        width: 200,
        backgroundColor: AppColors.card,
        borderColor: AppColors.border,
        borderWidth: 1,
        borderRadius: 18,
        padding: 14,
        marginRight: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${accent}14`,
            borderColor: `${accent}55`,
            borderWidth: 1,
          }}
        >
          <MaterialCommunityIcons name={icon} size={18} color={accent} />
        </View>
        <Text
          style={{ color: AppColors.muted, fontSize: 12, fontWeight: "800" }}
        >
          {label}
        </Text>
      </View>

      <Text
        style={{
          marginTop: 12,
          color: AppColors.text,
          fontSize: 20,
          fontWeight: "900",
        }}
      >
        {value}
      </Text>
    </View>
  );
}
