import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { AppColors } from "../../constants/appTheme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: AppColors.card,
          borderTopColor: AppColors.border,
          height: 64,
          paddingTop: 6,
          paddingBottom: 10,
        },
        tabBarItemStyle: { paddingVertical: 2 },
        tabBarLabelStyle: { fontWeight: "800", fontSize: 11 },
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: AppColors.muted,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="estoque"
        options={{
          title: "Estoque",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="warehouse"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="adicionar"
        options={{
          title: "Adicionar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="relatorios"
        options={{
          title: "Relatórios",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-arc"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="configs"
        options={{
          title: "Config",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="detalhes_produto" options={{ href: null }} />
      <Tabs.Screen name="editar_produto" options={{ href: null }} />
    </Tabs>
  );
}
