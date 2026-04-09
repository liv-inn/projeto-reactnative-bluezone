import { StyleSheet } from "react-native";
import { AppColors } from "../constants/appTheme";

export const adicionarStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: AppColors.background },
  container: { padding: 16, paddingBottom: 40 },

  label: {
    color: AppColors.muted,
    fontWeight: "800",
    marginTop: 12,
    marginBottom: 8,
  },
  input: {
    backgroundColor: AppColors.cardAlt,
    borderColor: AppColors.border,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: AppColors.text,
  },

  textarea: {
    backgroundColor: AppColors.cardAlt,
    borderColor: AppColors.border,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: AppColors.text,
    minHeight: 96,
    textAlignVertical: "top",
  },

  message: {
    marginTop: 12,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  messageError: {
    backgroundColor: "#FEE2E2",
    borderColor: AppColors.danger,
  },
  messageSuccess: {
    backgroundColor: "#DCFCE7",
    borderColor: AppColors.success,
  },
  messageText: { fontWeight: "800", color: AppColors.text },

  button: {
    marginTop: 18,
    backgroundColor: AppColors.primary2,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: { color: AppColors.white, fontWeight: "900" },
});
