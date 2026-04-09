import { StyleSheet } from "react-native";
import { AppColors } from "../constants/appTheme";

export const homeStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: AppColors.background },
  container: { padding: 16, paddingBottom: 24 },

  primaryBtn: {
    marginTop: 14,
    backgroundColor: AppColors.primary2,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: { color: AppColors.white, fontWeight: "900" },

  sectionTitle: {
    marginTop: 18,
    color: AppColors.text,
    fontWeight: "900",
    fontSize: 16,
  },
  hint: { color: AppColors.muted, marginTop: 6 },

  listGap: { height: 12 },
});
