import i18next from "i18next";
export function SwitchLanguage() {
 return i18next.language === "ar" ? "en" : "ar"
}
console.log('====================================');
console.log("is", i18next.language, "and", i18next.dir());
console.log('====================================');