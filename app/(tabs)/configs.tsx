import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    Switch,
    Text,
    View,
} from "react-native";
import { Header } from "../../components/Header";
import { AppColors } from "../../constants/appTheme";

export default function ConfigsScreen() {
  const [desligarNotificacoes, setDesligarNotificacoes] = useState(false);
  const [enviarRelatorioEmail, setEnviarRelatorioEmail] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: AppColors.background }}>
      <Header
        title="Configurações"
        subtitle="Preferências do aplicativo"
        showLogo
      />
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }}>
        <View
          style={{
            backgroundColor: AppColors.card,
            borderColor: AppColors.border,
            borderWidth: 1,
            borderRadius: 16,
            padding: 14,
          }}
        >
          {/* Desligar notificações */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ color: AppColors.text, fontWeight: "900" }}>
                Desligar notificações
              </Text>
              <Text
                style={{
                  color: AppColors.muted,
                  marginTop: 4,
                  fontWeight: "600",
                }}
              >
                Desativa alertas de estoque baixo
              </Text>
            </View>
            <Switch
              value={desligarNotificacoes}
              onValueChange={setDesligarNotificacoes}
            />
          </View>

          <View style={{ height: 1, backgroundColor: AppColors.border }} />

          {/* Enviar relatório por e-mail */}
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={{ color: AppColors.text, fontWeight: "900" }}>
                Enviar relatório para o e-mail
              </Text>
              <Text
                style={{
                  color: AppColors.muted,
                  marginTop: 4,
                  fontWeight: "600",
                }}
              >
                Ativar o envio de relatório para o e-mail mensalmente
              </Text>
            </View>
            <Switch
              value={enviarRelatorioEmail}
              onValueChange={setEnviarRelatorioEmail}
            />
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: AppColors.border,
              marginTop: 12,
            }}
          />

          {/* Gerenciar categorias */}
          <Pressable
            onPress={() => {
              // TODO: Implementar tela/modal para gerenciar categorias
            }}
            style={({ pressed }) => ({
              marginTop: 12,
              paddingVertical: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: pressed ? 0.7 : 1,
            })}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: AppColors.cardAlt,
                  borderColor: AppColors.border,
                  borderWidth: 1,
                }}
              >
                <MaterialCommunityIcons
                  name="tag-multiple"
                  size={18}
                  color={AppColors.primary}
                />
              </View>
              <View>
                <Text style={{ color: AppColors.text, fontWeight: "900" }}>
                  Gerenciar categorias
                </Text>
                <Text
                  style={{
                    color: AppColors.muted,
                    marginTop: 4,
                    fontWeight: "600",
                  }}
                >
                  Adicionar, editar ou remover categorias
                </Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={AppColors.muted}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
