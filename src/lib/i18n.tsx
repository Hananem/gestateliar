import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "fr" | "ar";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  fr: {
    Navigation: "Navigation",
    "Pilotage d’atelier": "Pilotage d’atelier",
    "Atelier opérationnel": "Atelier opérationnel",
    "Dernière synchro : 08:01": "Dernière synchro : 08:01",
    Dashboard: "Dashboard",
    Stock: "Stock",
    "Vue d'ensemble": "Vue d'ensemble",
    "Matières & accessoires": "Matières & accessoires",
    "Historique des mouvements": "Historique des mouvements",
    Valorisation: "Valorisation",
    "Alertes de stock": "Alertes de stock",
    "Matières": "Matières",
    "Rouleaux / Lots": "Rouleaux / Lots",
    Mouvements: "Mouvements",
    Réceptions: "Réceptions",
    Sorties: "Sorties",
    Retours: "Retours",
    Inventaire: "Inventaire",
    Production: "Production",
    "Vue d'ensemble": "Vue d'ensemble",
    Consommation: "Consommation",
    Avancement: "Avancement",
    Rejets: "Rejets",
    Articles: "Articles",
    Opérations: "Opérations",
    "Lots de production": "Lots de production",
    "Équipe": "Équipe",
    Ouvriers: "Ouvriers",
    Affectations: "Affectations",
    Travail: "Travail",
    "Travail quotidien": "Travail quotidien",
    "Créer un ouvrier": "Créer un ouvrier",
    "Créer une affectation": "Créer une affectation",
    "Enregistrer un travail": "Enregistrer un travail",
    "Modification conservée dans l'historique": "Modification conservée dans l'historique",
    "Annulation avec motif obligatoire": "Annulation avec motif obligatoire",
    "Travail validé par le responsable": "Travail validé par le responsable",
    Paie: "Paie",
    Clôtures: "Clôtures",
    "Fiche de paie": "Fiche de paie",
    Barèmes: "Barèmes",
    Avances: "Avances",
    Primes: "Primes",
    Retenues: "Retenues",
    "Calcul mensuel": "Calcul mensuel",
    Dépenses: "Dépenses",
    Catégories: "Catégories",
    "Rapport des dépenses": "Rapport des dépenses",
    "Dépenses période": "Dépenses période",
    "Dépenses affectées": "Dépenses affectées",
    "Dépenses récurrentes": "Dépenses récurrentes",
    "À affecter": "À affecter",
    "يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً": "يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً",
    "التكاليف مبنية على المصروفات المرتبطة بالدفعات": "التكاليف مبنية على المصروفات المرتبطة بالدفعات",
    "Une dépense peut être affectée à un lot à l'enregistrement ou plus tard": "يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً",
    "Les coûts sont basés sur les dépenses affectées aux lots": "التكاليف مبنية على المصروفات المرتبطة بالدفعات",
    Rapports: "Rapports",
    Productivité: "Productivité",
    Coûts: "Coûts",
    Administration: "Administration",
    Utilisateurs: "Utilisateurs",
    "Rôles & permissions": "Rôles & permissions",
    Paramètres: "Paramètres",
    Audit: "Audit",
    "Rechercher un lot, un article...": "Rechercher un lot, un article...",
    Rechercher: "Rechercher",
    Notifications: "Notifications",
    "Responsable d’atelier": "Responsable d’atelier",
    "Mon compte": "Mon compte",
    Préférences: "Préférences",
    Profil: "Profil",
    "Dimanche 20 septembre": "Dimanche 20 septembre",
    "Bonjour Fatima,": "Bonjour Fatima,",
    "Voici l’état de votre atelier aujourd’hui.": "Voici l’état de votre atelier aujourd’hui.",
    "Données actualisées à 08:02": "Données actualisées à 08:02",
    "Indicateurs clés": "Indicateurs clés",
    "Vue de production": "Vue de production",
    "Alertes stock": "Alertes stock",
    "Lots de production actifs": "Lots de production actifs",
    "Activité récente": "Activité récente",
    "Productivité équipe": "Productivité équipe",
    "Dépenses mensuelles": "Dépenses mensuelles",
  },
  ar: {
    Navigation: "التنقل",
    "Pilotage d’atelier": "إدارة الورشة",
    "Atelier opérationnel": "الورشة تعمل",
    "Dernière synchro : 08:01": "آخر مزامنة: 08:01",
    Dashboard: "لوحة التحكم",
    Stock: "المخزون",
    "Vue d'ensemble": "نظرة عامة",
    "Matières & accessoires": "المواد والإكسسوارات",
    "Historique des mouvements": "سجل الحركات",
    Valorisation: "قيمة المخزون",
    "Alertes de stock": "تنبيهات المخزون",
    "Matières": "المواد الخام",
    "Rouleaux / Lots": "اللفائف / الدفعات",
    Mouvements: "الحركات",
    Réceptions: "الاستلامات",
    Sorties: "الصرف",
    Retours: "المرتجعات",
    Inventaire: "الجرد",
    Production: "الإنتاج",
    "Vue d'ensemble": "نظرة عامة",
    Consommation: "استهلاك المواد",
    Avancement: "تقدم الإنتاج",
    Rejets: "القطع المرفوضة",
    Articles: "المنتجات",
    Opérations: "العمليات",
    "Lots de production": "دفعات الإنتاج",
    "Équipe": "الفريق",
    Ouvriers: "العمال",
    Affectations: "التعيينات",
    Travail: "العمل",
    "Travail quotidien": "العمل اليومي",
    "Créer un ouvrier": "إنشاء عامل",
    "Créer une affectation": "إنشاء تعيين",
    "Enregistrer un travail": "تسجيل عمل",
    "Modification conservée dans l'historique": "يتم الاحتفاظ بالتعديل في السجل",
    "Annulation avec motif obligatoire": "الإلغاء يتطلب ذكر السبب",
    "Travail validé par le responsable": "تم اعتماد العمل من المسؤول",
    Paie: "الرواتب",
    Clôtures: "إغلاق الرواتب",
    "Fiche de paie": "كشف الراتب",
    Barèmes: "جداول الأجور",
    Avances: "السلف",
    Primes: "المكافآت",
    Retenues: "الخصومات",
    "Calcul mensuel": "الحساب الشهري",
    Dépenses: "المصروفات",
    Catégories: "الفئات",
    "Dépenses récurrentes": "المصروفات المتكررة",
    "Rapport des dépenses": "تقرير المصروفات",
    "Dépenses période": "مصروفات الفترة",
    "Dépenses affectées": "المصروفات المخصصة",
    "À affecter": "غير مخصصة",
    "يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً": "يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً",
    "التكاليف مبنية على المصروفات المرتبطة بالدفعات": "التكاليف مبنية على المصروفات المرتبطة بالدفعات",
    Rapports: "التقارير",
    Productivité: "الإنتاجية",
    Coûts: "التكاليف",
    Administration: "الإدارة",
    Utilisateurs: "المستخدمون",
    "Rôles & permissions": "الأدوار والصلاحيات",
    Paramètres: "الإعدادات",
    Audit: "التدقيق",
    "Rechercher un lot, un article...": "ابحث عن دفعة أو منتج...",
    Rechercher: "بحث",
    Notifications: "الإشعارات",
    "Responsable d’atelier": "مسؤولة الورشة",
    "Mon compte": "حسابي",
    Préférences: "التفضيلات",
    Profil: "الملف الشخصي",
    "Dimanche 20 septembre": "الأحد 20 سبتمبر",
    "Bonjour Fatima,": "مرحبًا فاطمة،",
    "Voici l’état de votre atelier aujourd’hui.": "إليك حالة ورشتك اليوم.",
    "Données actualisées à 08:02": "تم تحديث البيانات في 08:02",
    "Indicateurs clés": "المؤشرات الرئيسية",
    "Vue de production": "نظرة عامة على الإنتاج",
    "Alertes stock": "تنبيهات المخزون",
    "Lots de production actifs": "دفعات الإنتاج النشطة",
    "Activité récente": "النشاط الأخير",
    "Productivité équipe": "إنتاجية الفريق",
    "Dépenses mensuelles": "المصروفات الشهرية",
  },
} as const;

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "fr";
    return window.localStorage.getItem("gestateliar-language") === "ar" ? "ar" : "fr";
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("gestateliar-language", nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => (Object.prototype.hasOwnProperty.call(translations[language], key) ? translations[language][key as keyof typeof translations.fr] : key),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider.");
  return context;
}
