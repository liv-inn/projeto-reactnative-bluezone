import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import { AppColors } from "../constants/appTheme";

type Props = {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
};

export function SearchInput({ value, onChangeText, placeholder }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor: AppColors.cardAlt,
        borderColor: AppColors.border,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 12,
      }}
    >
      <MaterialCommunityIcons
        name="magnify"
        size={18}
        color={AppColors.muted}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        style={{ flex: 1, color: AppColors.text, paddingVertical: 0 }}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
      {value.length > 0 ? (
        <MaterialCommunityIcons
          name="close-circle"
          size={18}
          color={AppColors.muted}
          onPress={() => onChangeText("")}
        />
      ) : null}
    </View>
  );
}
