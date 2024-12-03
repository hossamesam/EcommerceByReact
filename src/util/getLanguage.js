import i18next from "i18next";
export function SwitchLanguage() {
 return i18next.language === "ar" ? "en" : "ar"
}
