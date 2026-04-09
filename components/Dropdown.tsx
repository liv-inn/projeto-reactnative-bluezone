import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { AppColors } from "../constants/appTheme";

type Props = {
  value: string;
  onChange: (v: string) => void;
  items: { label: string; value: string }[];
  containerStyle?: StyleProp<ViewStyle>;
};

export function Dropdown({ value, onChange, items, containerStyle }: Props) {
  return (
    <View
      style={[
        {
          borderColor: AppColors.border,
          borderWidth: 1,
          borderRadius: 14,
          overflow: "hidden",
          backgroundColor: AppColors.cardAlt,
          justifyContent: "center",
          minHeight: 48,
        },
        containerStyle,
      ]}
    >
      <Picker
        selectedValue={value}
        onValueChange={(v: string) => onChange(String(v))}
        dropdownIconColor={AppColors.muted}
        style={{ color: AppColors.text }}
      >
        {items.map((it) => (
          <Picker.Item key={it.value} label={it.label} value={it.value} />
        ))}
      </Picker>
    </View>
  );
}
