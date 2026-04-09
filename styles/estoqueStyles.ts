import { StyleSheet } from "react-native";
import { AppColors } from "../constants/appTheme";

export const estoqueStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: AppColors.background },
  container: { padding: 16, paddingBottom: 24 },

  search: {
    backgroundColor: AppColors.cardAlt,
    borderColor: AppColors.border,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: AppColors.text,
  },

  actionsRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  resultText: { color: AppColors.muted, fontWeight: "700" },
  clearBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: AppColors.cardAlt,
    borderColor: AppColors.border,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  clearText: { color: AppColors.text, fontWeight: "900", fontSize: 12 },

  row: { flexDirection: "row", gap: 10, marginTop: 12 },
  chip: {
    backgroundColor: AppColors.card,
    borderColor: AppColors.border,
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  chipActive: {
    backgroundColor: `${AppColors.primary}14`,
    borderColor: AppColors.primary,
  },
  chipText: { color: AppColors.muted, fontWeight: "800", fontSize: 12 },
  chipTextActive: { color: AppColors.primary2 },

  emptyWrap: {
    marginTop: 14,
    backgroundColor: AppColors.cardAlt,
    borderColor: AppColors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
  },
  emptyTitle: { color: AppColors.text, fontWeight: "900" },
  emptyDesc: { color: AppColors.muted, marginTop: 4, fontWeight: "600" },

  listGap: { height: 12 },
});
