import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { AppColors } from "../constants/appTheme";

type Props = {
  title: string;
  subtitle?: string;
  rightIcon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onRightPress?: () => void;
  showLogo?: boolean;
};

export function Header({
  title,
  subtitle,
  rightIcon,
  onRightPress,
  showLogo,
}: Props) {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 12,
        backgroundColor: AppColors.background,
        borderBottomColor: AppColors.border,
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          {showLogo ? (
            <View
              style={{
                width: 34,
                height: 34,
                borderRadius: 12,
                backgroundColor: AppColors.cardAlt,
                borderColor: AppColors.border,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../assets/images/icon.png")}
                style={{ width: 22, height: 22, resizeMode: "contain" }}
                accessibilityLabel="Logo da clínica (placeholder)"
              />
            </View>
          ) : null}

          <View style={{ flex: 1 }}>
            <Text
              style={{ color: AppColors.text, fontSize: 20, fontWeight: "900" }}
            >
              {title}
            </Text>
            {subtitle ? (
              <Text
                style={{
                  color: AppColors.muted,
                  marginTop: 4,
                  fontWeight: "600",
                }}
              >
                {subtitle}
              </Text>
            ) : null}
          </View>
        </View>

        {rightIcon ? (
          <Pressable
            onPress={onRightPress}
            style={({ pressed }) => ({
              width: 40,
              height: 40,
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: AppColors.cardAlt,
              borderColor: AppColors.border,
              borderWidth: 1,
              opacity: pressed ? 0.7 : 1,
            })}
            hitSlop={10}
          >
            <MaterialCommunityIcons
              name={rightIcon}
              size={20}
              color={AppColors.primary}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
