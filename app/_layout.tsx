import { Stack } from "expo-router";
import React from "react";
import { InventoryProvider } from "../context/InventoryContext";

export default function RootLayout() {
  return (
    <InventoryProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </InventoryProvider>
  );
}
