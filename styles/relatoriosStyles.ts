import { StyleSheet } from "react-native";

export const RelatoriosColors = {
  background: "#FFFFFF",
  card: "#FFFFFF",
  cardAlt: "#F6F8FC",
  text: "#0F172A",
  muted: "#64748B",
  border: "#E2E8F0",
  primary: "#5C6B52",
  danger: "#DC2626",
} as const;

export const relatoriosStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: RelatoriosColors.background },
  container: { padding: 16, paddingBottom: 24 },

  title: { color: RelatoriosColors.text, fontSize: 18, fontWeight: "900" },

  periodWrap: {
    marginTop: 12,
    backgroundColor: RelatoriosColors.cardAlt,
    borderColor: RelatoriosColors.border,
    borderWidth: 1,
    padding: 6,
    borderRadius: 14,
    flexDirection: "row",
    gap: 8,
  },
  periodBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  periodBtnActive: {
    backgroundColor: RelatoriosColors.primary,
  },
  periodText: {
    color: RelatoriosColors.muted,
    fontWeight: "800",
    fontSize: 12,
  },
  periodTextActive: { color: "#FFFFFF" },

  cardsRow: { flexDirection: "row", gap: 12, marginTop: 14 },
  statCard: {
    flex: 1,
    backgroundColor: RelatoriosColors.card,
    borderColor: RelatoriosColors.border,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    minHeight: 86,
  },
  statLabel: { color: RelatoriosColors.muted, fontSize: 12, marginTop: 8 },
  statValue: {
    color: RelatoriosColors.text,
    fontSize: 16,
    fontWeight: "900",
    marginTop: 2,
  },

  sectionCard: {
    marginTop: 14,
    backgroundColor: RelatoriosColors.card,
    borderColor: RelatoriosColors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  sectionTitle: { color: RelatoriosColors.text, fontWeight: "900" },

  barRow: { marginBottom: 10 },
  barTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  barLabel: { color: RelatoriosColors.muted, fontSize: 12, fontWeight: "700" },
  barValue: { color: RelatoriosColors.text, fontSize: 12, fontWeight: "900" },
  barTrack: {
    marginTop: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: RelatoriosColors.cardAlt,
    overflow: "hidden",
    borderColor: RelatoriosColors.border,
    borderWidth: 1,
  },
  barFill: {
    height: "100%",
    backgroundColor: RelatoriosColors.primary,
    borderRadius: 999,
  },

  lowStockHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },

  lowStockRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderTopColor: RelatoriosColors.border,
    borderTopWidth: 1,
  },
  lowStockName: { color: RelatoriosColors.text, fontWeight: "800" },
  lowStockCategory: {
    color: RelatoriosColors.muted,
    fontSize: 12,
    marginTop: 2,
  },
  lowStockQty: { color: RelatoriosColors.danger, fontWeight: "900" },
});
