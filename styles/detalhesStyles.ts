import { StyleSheet } from "react-native";
import { AppColors } from "../constants/appTheme";

export const detalhesStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: AppColors.background },
  container: { padding: 16, paddingBottom: 30 },

  row: { flexDirection: "row", gap: 12, marginTop: 12 },

  card: {
    marginTop: 14,
    backgroundColor: AppColors.card,
    borderColor: AppColors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
  },

  h1: { color: AppColors.text, fontSize: 18, fontWeight: "900" },
  sub: { color: AppColors.muted, marginTop: 6 },

  qty: { color: AppColors.text, fontWeight: "900", fontSize: 22 },

  input: {
    marginTop: 10,
    backgroundColor: AppColors.cardAlt,
    borderColor: AppColors.border,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: AppColors.text,
    minHeight: 90,
    textAlignVertical: "top",
  },

  btnRow: { flexDirection: "row", gap: 12, marginTop: 12 },
  btn: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
  },
  btnPrimary: {
    backgroundColor: AppColors.primary2,
    borderColor: AppColors.primary2,
  },
  btnDanger: { backgroundColor: "transparent", borderColor: AppColors.danger },
  btnText: { color: AppColors.white, fontWeight: "900" },
  btnTextDanger: { color: AppColors.danger, fontWeight: "900" },
});
