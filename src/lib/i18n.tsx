import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Language = 'fr' | 'ar'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    Navigation: 'Navigation',
    'Pilotage d’atelier': 'Pilotage d’atelier',
    'Atelier opérationnel': 'Atelier opérationnel',
    'Dernière synchro : 08:01': 'Dernière synchro : 08:01',
    Dashboard: 'Dashboard',
    Stock: 'Stock',
    "Vue d'ensemble": "Vue d'ensemble",
    'Matières & accessoires': 'Matières & accessoires',
    'Historique des mouvements': 'Historique des mouvements',
    Valorisation: 'Valorisation',
    'Alertes de stock': 'Alertes de stock',
    Matières: 'Matières',
    'Rouleaux / Lots': 'Rouleaux / Lots',
    Mouvements: 'Mouvements',
    Réceptions: 'Réceptions',
    Sorties: 'Sorties',
    Retours: 'Retours',
    Inventaire: 'Inventaire',
    Production: 'Production',
    "Vue d'ensemble": "Vue d'ensemble",
    Consommation: 'Consommation',
    Avancement: 'Avancement',
    Rejets: 'Rejets',
    Articles: 'Articles',
    Opérations: 'Opérations',
    'Lots de production': 'Lots de production',
    Équipe: 'Équipe',
    Ouvriers: 'Ouvriers',
    Affectations: 'Affectations',
    Travail: 'Travail',
    'Travail quotidien': 'Travail quotidien',
    'Créer un ouvrier': 'Créer un ouvrier',
    'Créer une affectation': 'Créer une affectation',
    'Enregistrer un travail': 'Enregistrer un travail',
    "Modification conservée dans l'historique":
      "Modification conservée dans l'historique",
    'Annulation avec motif obligatoire': 'Annulation avec motif obligatoire',
    'Travail validé par le responsable': 'Travail validé par le responsable',
    Paie: 'Paie',
    Clôtures: 'Clôtures',
    'Fiche de paie': 'Fiche de paie',
    Barèmes: 'Barèmes',
    Avances: 'Avances',
    Primes: 'Primes',
    Retenues: 'Retenues',
    'Calcul mensuel': 'Calcul mensuel',
    Dépenses: 'Dépenses',
    Catégories: 'Catégories',
    'Rapport des dépenses': 'Rapport des dépenses',
    'Dépenses période': 'Dépenses période',
    'Dépenses affectées': 'Dépenses affectées',
    'Dépenses récurrentes': 'Dépenses récurrentes',
    'À affecter': 'À affecter',
    'يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً':
      'يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً',
    'التكاليف مبنية على المصروفات المرتبطة بالدفعات':
      'التكاليف مبنية على المصروفات المرتبطة بالدفعات',
    "Une dépense peut être affectée à un lot à l'enregistrement ou plus tard":
      'يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً',
    'Les coûts sont basés sur les dépenses affectées aux lots':
      'التكاليف مبنية على المصروفات المرتبطة بالدفعات',
    Rapports: 'Rapports',
    Productivité: 'Productivité',
    Coûts: 'Coûts',
    Administration: 'Administration',
    Utilisateurs: 'Utilisateurs',
    'Rôles & permissions': 'Rôles & permissions',
    Paramètres: 'Paramètres',
    Audit: 'Audit',
    'Rechercher un lot, un article...': 'Rechercher un lot, un article...',
    Rechercher: 'Rechercher',
    Notifications: 'Notifications',
    'Responsable d’atelier': 'Responsable d’atelier',
    'Mon compte': 'Mon compte',
    Préférences: 'Préférences',
    Profil: 'Profil',
    'Dimanche 20 septembre': 'Dimanche 20 septembre',
    'Bonjour Fatima,': 'Bonjour Fatima,',
    'Voici l’état de votre atelier aujourd’hui.':
      'Voici l’état de votre atelier aujourd’hui.',
    'Données actualisées à 08:02': 'Données actualisées à 08:02',
    'Indicateurs clés': 'Indicateurs clés',
    'Vue de production': 'Vue de production',
    'Alertes stock': 'Alertes stock',
    'Lots de production actifs': 'Lots de production actifs',
    'Activité récente': 'Activité récente',
    'Productivité équipe': 'Productivité équipe',
    'Dépenses mensuelles': 'Dépenses mensuelles',
  },
  ar: {
    Navigation: 'التنقل',
    'Pilotage d’atelier': 'إدارة الورشة',
    'Atelier opérationnel': 'الورشة تعمل',
    'Dernière synchro : 08:01': 'آخر مزامنة: 08:01',
    Dashboard: 'لوحة التحكم',
    Stock: 'المخزون',
    "Vue d'ensemble": 'نظرة عامة',
    'Matières & accessoires': 'المواد والإكسسوارات',
    'Historique des mouvements': 'سجل الحركات',
    Valorisation: 'قيمة المخزون',
    'Alertes de stock': 'تنبيهات المخزون',
    Matières: 'المواد الخام',
    'Rouleaux / Lots': 'اللفائف / الدفعات',
    Mouvements: 'الحركات',
    Réceptions: 'الاستلامات',
    Sorties: 'الصرف',
    Retours: 'المرتجعات',
    Inventaire: 'الجرد',
    Production: 'الإنتاج',
    "Vue d'ensemble": 'نظرة عامة',
    Consommation: 'استهلاك المواد',
    Avancement: 'تقدم الإنتاج',
    Rejets: 'القطع المرفوضة',
    Articles: 'المنتجات',
    Opérations: 'العمليات',
    'Lots de production': 'دفعات الإنتاج',
    Équipe: 'الفريق',
    Ouvriers: 'العمال',
    Affectations: 'التعيينات',
    Travail: 'العمل',
    'Travail quotidien': 'العمل اليومي',
    'Créer un ouvrier': 'إنشاء عامل',
    'Créer une affectation': 'إنشاء تعيين',
    'Enregistrer un travail': 'تسجيل عمل',
    "Modification conservée dans l'historique":
      'يتم الاحتفاظ بالتعديل في السجل',
    'Annulation avec motif obligatoire': 'الإلغاء يتطلب ذكر السبب',
    'Travail validé par le responsable': 'تم اعتماد العمل من المسؤول',
    Paie: 'الرواتب',
    Clôtures: 'إغلاق الرواتب',
    'Fiche de paie': 'كشف الراتب',
    Barèmes: 'جداول الأجور',
    Avances: 'السلف',
    Primes: 'المكافآت',
    Retenues: 'الخصومات',
    'Calcul mensuel': 'الحساب الشهري',
    Dépenses: 'المصروفات',
    Catégories: 'الفئات',
    'Dépenses récurrentes': 'المصروفات المتكررة',
    'Rapport des dépenses': 'تقرير المصروفات',
    'Dépenses période': 'مصروفات الفترة',
    'Dépenses affectées': 'المصروفات المخصصة',
    'À affecter': 'غير مخصصة',
    'يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً':
      'يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً',
    'التكاليف مبنية على المصروفات المرتبطة بالدفعات':
      'التكاليف مبنية على المصروفات المرتبطة بالدفعات',
    Rapports: 'التقارير',
    Productivité: 'الإنتاجية',
    Coûts: 'التكاليف',
    Administration: 'الإدارة',
    Utilisateurs: 'المستخدمون',
    'Rôles & permissions': 'الأدوار والصلاحيات',
    Paramètres: 'الإعدادات',
    Audit: 'التدقيق',
    'Rechercher un lot, un article...': 'ابحث عن دفعة أو منتج...',
    Rechercher: 'بحث',
    Notifications: 'الإشعارات',
    'Responsable d’atelier': 'مسؤولة الورشة',
    'Mon compte': 'حسابي',
    Préférences: 'التفضيلات',
    Profil: 'الملف الشخصي',
    'Dimanche 20 septembre': 'الأحد 20 سبتمبر',
    'Bonjour Fatima,': 'مرحبًا فاطمة،',
    'Voici l’état de votre atelier aujourd’hui.': 'إليك حالة ورشتك اليوم.',
    'Données actualisées à 08:02': 'تم تحديث البيانات في 08:02',
    'Indicateurs clés': 'المؤشرات الرئيسية',
    'Vue de production': 'نظرة عامة على الإنتاج',
    'Alertes stock': 'تنبيهات المخزون',
    'Lots de production actifs': 'دفعات الإنتاج النشطة',
    'Activité récente': 'النشاط الأخير',
    'Productivité équipe': 'إنتاجية الفريق',
    'Dépenses mensuelles': 'المصروفات الشهرية',
    'Suivi des quantités disponibles, des alertes et des mouvements récents.':
      'متابعة الكميات المتوفرة والتنبيهات والحركات الأخيرة.',
    'Nouvelle réception': 'استلام جديد',
    'Stock total': 'إجمالي المخزون',
    'Toutes les références': 'جميع الأصناف',
    'Valeur estimée': 'القيمة التقديرية',
    'Sous le seuil': 'تحت حد التنبيه',
    "Mouvements aujourd'hui": 'حركات اليوم',
    'Dernier à 08:01': 'آخر حركة في 08:01',
    '58 420 unités': '58,420 وحدة',
    '7 matières': '7 مواد',
    '2 urgentes': 'حالتان عاجلتان',
    '18': '18',
    Matière: 'المادة',
    'Couleur / unité': 'اللون / الوحدة',
    Fournisseur: 'المورد',
    Stock: 'المخزون',
    Seuil: 'حد التنبيه',
    'Matières & accessoires': 'المواد والإكسسوارات',
    'Ajouter une matière': 'إضافة مادة',
    'Référentiel des tissus, accessoires, prix et seuils de réapprovisionnement.':
      'مرجع الأقمشة والإكسسوارات والأسعار وحدود إعادة التوريد.',
    'Rouleaux & lots fournisseurs': 'لفائف ودفعات الموردين',
    'Enregistrer un rouleau': 'تسجيل لفافة',
    "Traçabilité de chaque rouleau, de sa réception jusqu'à son utilisation.":
      'تتبع كل لفافة من استلامها إلى استعمالها.',
    Réceptions: 'الاستلامات',
    'Enregistrer les entrées, leurs documents justificatifs et la mise à jour du stock.':
      'تسجيل الإدخالات ووثائقها وتحديث رصيد المخزون.',
    'Sorties vers production': 'الصرف إلى الإنتاج',
    'Enregistrer une sortie': 'تسجيل صرف',
    'Préparer et contrôler les matières affectées aux lots de production.':
      'تحضير ومراقبة المواد المخصصة لدفعات الإنتاج.',
    "Retours d'atelier": 'مرتجعات الورشة',
    'Enregistrer un retour': 'تسجيل إرجاع',
    "Réconcilier les matières retournées avec la sortie d'origine et leur état.":
      'مطابقة المواد المرجعة مع عملية الصرف الأصلية وحالتها.',
    Inventaires: 'الجرد',
    'Créer un inventaire': 'إنشاء جرد',
    'Comparer le stock physique au stock système et approuver les ajustements.':
      'مقارنة المخزون الفعلي برصيد النظام واعتماد التسويات.',
    'Historique des mouvements': 'سجل الحركات',
    "Exporter l'historique": 'تصدير السجل',
    'Rechercher les entrées, sorties, retours, pertes et ajustements.':
      'البحث في الإدخالات والصرف والمرتجعات والفاقد والتسويات.',
    'Valorisation du stock': 'قيمة المخزون',
    'Exporter la valorisation': 'تصدير التقييم',
    "Estimation de la valeur du stock selon le prix d'achat de référence.":
      'تقدير قيمة المخزون حسب سعر الشراء المرجعي.',
    'Configurer les seuils': 'ضبط الحدود',
    'Prioriser les matières sous le seuil, épuisées ou proches de la fin de rouleau.':
      'ترتيب المواد تحت الحد أو النافدة أو اللفائف القريبة من النفاد.',
    'Données actualisées à 08:02': 'تم تحديث البيانات في 08:02',
    "Une dépense peut être affectée à un lot à l'enregistrement ou plus tard":
      'يمكن ربط المصروف بدفعة إنتاج عند التسجيل أو لاحقاً',
    'Les coûts sont basés sur les dépenses affectées aux lots':
      'التكاليف مبنية على المصروفات المرتبطة بالدفعات',
    'Pilotage des articles, des lots et des étapes de fabrication.':
      'إدارة المنتجات والدفعات ومراحل التصنيع.',
    'Créer un lot': 'إنشاء دفعة',
    'Lots actifs': 'الدفعات النشطة',
    '4 échéances cette semaine': '4 آجال هذا الأسبوع',
    'Pièces produites': 'القطع المنتجة',
    "Aujourd'hui": 'اليوم',
    "Taux d'acceptation": 'نسبة القبول',
    'Rejets à traiter': 'القطع المرفوضة للمعالجة',
    '6 à corriger': '6 للتصحيح',
    'Référentiel des produits, variantes, consommations théoriques et opérations.':
      'مرجع المنتجات والأنواع والاستهلاك النظري والعمليات.',
    'Ajouter un article': 'إضافة منتج',
    'Définir les étapes de fabrication et la tarification de chaque opération.':
      'تحديد مراحل التصنيع وتعريفة كل عملية.',
    'Ajouter une opération': 'إضافة عملية',
    'Suivre les quantités planifiées, les responsables et les dates cibles.':
      'متابعة الكميات المخططة والمسؤولين والآجال المستهدفة.',
    'Comparer la consommation réelle aux besoins théoriques de chaque lot.':
      'مقارنة الاستهلاك الفعلي بالاحتياج النظري لكل دفعة.',
    'Saisir une consommation': 'إدخال الاستهلاك',
    'Suivre les quantités produites, acceptées et rejetées par lot.':
      'متابعة الكميات المنتجة والمقبولة والمرفوضة لكل دفعة.',
    'Saisir un avancement': 'إدخال التقدم',
    'Enregistrer les pièces non conformes et décider de leur traitement.':
      'تسجيل القطع غير المطابقة وتحديد معالجتها.',
    'Enregistrer un rejet': 'تسجيل رفض',
    "Créer, consulter, modifier et archiver les travailleurs de l'atelier.":
      'إنشاء وعرض وتعديل وأرشفة عمال الورشة.',
    'Ouvriers actifs': 'العمال النشطون',
    'Équipe actuelle': 'الفريق الحالي',
    'Affectations actives': 'التعيينات النشطة',
    'Sur les lots en cours': 'على الدفعات الجارية',
    'Travail à valider': 'عمل في انتظار الاعتماد',
    'Saisies du jour': 'إدخالات اليوم',
    'Modifications tracées': 'التعديلات المسجلة',
    'Cette semaine': 'هذا الأسبوع',
    'Distribuer les ouvriers sur les opérations et suivre les lots de production.':
      'توزيع العمال على العمليات ومتابعة دفعات الإنتاج.',
    'Créer une affectation': 'إنشاء تعيين',
    'Enregistrer et valider le travail réalisé par ouvrier, article, opération, quantité et période.':
      'تسجيل واعتماد العمل حسب العامل والمنتج والعملية والكمية والفترة.',
    'Enregistrer un travail': 'تسجيل عمل',
    "Modification conservée dans l'historique":
      'يتم الاحتفاظ بالتعديل في السجل',
    'Annulation avec motif obligatoire': 'الإلغاء يتطلب ذكر السبب',
    'Travail validé par le responsable': 'تم اعتماد العمل من المسؤول',
    'Préparer, contrôler et suivre les rémunérations mensuelles des ouvriers.':
      'تحضير ومراقبة ومتابعة أجور العمال الشهرية.',
    'Préparer la période': 'تحضير الفترة',
    'Période active': 'الفترة النشطة',
    'Sept. 2026': 'سبتمبر 2026',
    'En préparation': 'قيد التحضير',
    'Brut total': 'إجمالي الخام',
    'Net à payer': 'صافي الدفع',
    'Après déductions': 'بعد الاقتطاعات',
    'À contrôler': 'للمراجعة',
    'Avant clôture': 'قبل الإغلاق',
    'Gérer les tarifs selon le mode de rémunération enregistré.':
      'إدارة التعريفات حسب طريقة الدفع المسجلة.',
    'Ajouter un barème': 'إضافة تعريفة',
    'Enregistrer les avances et la période de paie sur laquelle elles seront déduites.':
      'تسجيل التسبيقات وفترة الرواتب التي ستُخصم منها.',
    'Enregistrer une avance': 'تسجيل تسبيق',
    'Enregistrer les primes par ouvrier et par période avec leur motif et leur créateur.':
      'تسجيل المكافآت حسب العامل والفترة والسبب ومنشئها.',
    'Enregistrer une prime': 'تسجيل مكافأة',
    'Enregistrer les retenues appliquées au salaire avec leur motif et leur créateur.':
      'تسجيل الاقتطاعات على الراتب مع سببها ومنشئها.',
    'Enregistrer une retenue': 'تسجيل اقتطاع',
    'Réviser le détail de chaque calcul avant la clôture de la période.':
      'مراجعة تفاصيل كل حساب قبل إغلاق الفترة.',
    'Calculer la période': 'حساب الفترة',
    'Fermer une période et conserver une version fixe des calculs de paie.':
      'إغلاق الفترة والاحتفاظ بنسخة ثابتة من حسابات الرواتب.',
    'Clôturer septembre': 'إغلاق سبتمبر',
    "Consulter et imprimer le relevé interne détaillé d'un ouvrier autorisé.":
      'عرض وطباعة كشف داخلي مفصل للعامل المصرح له.',
    'Imprimer / PDF': 'طباعة / PDF',
    'الاطلاع والطباعة متاحان للمستخدمين المصرح لهم فقط':
      'الاطلاع والطباعة متاحان للمستخدمين المصرح لهم فقط',
    "Enregistrer les dépenses de l'atelier et les affecter à un lot de production.":
      'تسجيل مصروفات الورشة وربطها بدفعة إنتاج.',
    'Enregistrer une dépense': 'تسجيل مصروف',
    'Classer les dépenses pour faciliter leur suivi et leurs rapports.':
      'تصنيف المصروفات لتسهيل متابعتها وإعداد تقاريرها.',
    'Ajouter une catégorie': 'إضافة تصنيف',
    "Programmer et suivre les dépenses périodiques de l'atelier.":
      'برمجة ومتابعة المصروفات الدورية للورشة.',
    'Ajouter une dépense récurrente': 'إضافة مصروف دوري',
    'Analyser les dépenses par catégorie, période et lot de production.':
      'تحليل المصروفات حسب التصنيف والفترة ودفعة الإنتاج.',
    'Exporter le rapport': 'تصدير التقرير',
    'Comparer les dépenses affectées et le coût total des lots de production.':
      'مقارنة المصروفات المخصصة والتكلفة الإجمالية لدفعات الإنتاج.',
    "Exporter l'analyse": 'تصدير التحليل',
    'Synthèse des quantités, alertes et valorisation du stock.':
      'ملخص الكميات والتنبيهات وقيمة المخزون.',
    'Synthèse des quantités planifiées, réalisées et rejetées.':
      'ملخص الكميات المخططة والمنجزة والمرفوضة.',
    'Comparer le travail validé par ouvrier, article et opération.':
      'مقارنة العمل المعتمد حسب العامل والمنتج والعملية.',
    'Synthèse des montants bruts, primes, retenues et nets dus.':
      'ملخص الأجور الخام والمكافآت والاقتطاعات والصافي المستحق.',
    'Rapport des dépenses par catégorie, période et lot affecté.':
      'تقرير المصروفات حسب التصنيف والفترة والدفعة المخصصة.',
    'Analyse du coût des lots et des dépenses qui leur sont affectées.':
      'تحليل تكلفة الدفعات والمصروفات المرتبطة بها.',
    'Filtres de période et de domaine': 'مرشحات الفترة والمجال',
    "Gérer les comptes qui peuvent accéder à l'application.":
      'إدارة الحسابات التي يمكنها الوصول إلى التطبيق.',
    'Créer un utilisateur': 'إنشاء مستخدم',
    'Définir les accès aux modules et aux opérations sensibles.':
      'تحديد الوصول إلى الوحدات والعمليات الحساسة.',
    'Créer un rôle': 'إنشاء دور',
    "Configurer les paramètres généraux utilisés par l'application.":
      'ضبط الإعدادات العامة المستخدمة في التطبيق.',
    'Enregistrer les paramètres': 'حفظ الإعدادات',
    "Consulter l'historique des actions sensibles effectuées dans l'application.":
      'عرض سجل العمليات الحساسة المنفذة في التطبيق.',
    "Exporter l'audit": 'تصدير سجل التدقيق',
    'Utilisateurs actifs': 'المستخدمون النشطون',
    'Accès autorisés': 'صلاحيات الوصول',
    'Rôles configurés': 'الأدوار المضبوطة',
    'Permissions définies': 'الصلاحيات المحددة',
    'Actions sensibles': 'العمليات الحساسة',
    'Dernier contrôle': 'آخر تحقق',
    'Accès réservé aux utilisateurs autorisés':
      'الوصول مخصص للمستخدمين المصرح لهم',
    'Net = brut + primes + régularisations positives − avances − retenues':
      'الصافي = الأجر الخام + المكافآت + التسويات الإيجابية − التسبيقات − الاقتطاعات',
    'À la pièce : quantités acceptées uniquement × tarif enregistré · À la journée : jours validés · Au mois : salaire fixe de la période':
      'بالقطعة: الكميات المقبولة فقط × التعريفة المسجلة · باليوم: أيام العمل المعتمدة · بالشهر: الراتب الثابت للفترة',
    'Consultation et impression réservées aux utilisateurs autorisés':
      'الاطلاع والطباعة متاحان للمستخدمين المصرح لهم فقط',
    Indicateur: 'المؤشر',
    Valeur: 'القيمة',
    Évolution: 'التطور',
    'Matière / rouleau': 'المادة / اللفافة',
    Longueur: 'الطول',
    Réception: 'الاستلام',
    Référence: 'المرجع',
    Quantité: 'الكمية',
    Date: 'التاريخ',
    Statut: 'الحالة',
    'Lot de production': 'دفعة الإنتاج',
    Article: 'المنتج',
    'Quantité validée': 'الكمية المعتمدة',
    Période: 'الفترة',
    Brut: 'الأجر الخام',
    Primes: 'المكافآت',
    Avances: 'التسبيقات',
    Retenues: 'الاقتطاعات',
    'Net dû': 'الصافي المستحق',
    Mode: 'طريقة الدفع',
    'Primes / régularisations': 'المكافآت / التسويات',
    Part: 'النسبة',
    Montant: 'المبلغ',
    'Lots affectés': 'الدفعات المخصصة',
    'Coût matières': 'تكلفة المواد',
    'Coût total': 'التكلفة الإجمالية',
    Utilisateur: 'المستخدم',
    Rôle: 'الدور',
    'Dernière activité': 'آخر نشاط',
    'Modules autorisés': 'الوحدات المسموحة',
    'Actions sensibles': 'العمليات الحساسة',
    Paramètre: 'الإعداد',
    'Valeur actuelle': 'القيمة الحالية',
    'Dernière modification': 'آخر تعديل',
    'Modifié par': 'عدله',
    'Date / heure': 'التاريخ / الوقت',
    Action: 'العملية',
    Module: 'الوحدة',
    Résultat: 'النتيجة',
    Actif: 'نشط',
    Archivé: 'مؤرشف',
    Désactivé: 'معطل',
    Réussie: 'ناجحة',
    'Tous les modules': 'جميع الوحدات',
    'Calcul, fiche de paie': 'الحساب وكشف الراتب',
    'Aucune clôture': 'لا يمكن الإغلاق',
    "Responsable d'atelier": 'مسؤول الورشة',
    'Gestionnaire paie': 'مسير الرواتب',
    Opérateur: 'عامل تشغيل',
    'Dinar algérien (DA)': 'الدينار الجزائري (دج)',
    'Septembre 2026': 'سبتمبر 2026',
    'Responsable requis': 'يتطلب اعتماد المسؤول',
    'Ouverture de période': 'فتح الفترة',
    "Enregistrement d'une avance": 'تسجيل تسبيق',
    'Modification du travail': 'تعديل العمل',
    "Affectation d'un lot": 'تعيين دفعة',
    Urgente: 'عاجلة',
    'À surveiller': 'تحت المراقبة',
    'Rouleau faible': 'لفافة منخفضة',
    Validé: 'معتمد',
    'À valider': 'في انتظار الاعتماد',
    'À corriger': 'للتصحيح',
    'Non payée': 'غير مدفوعة',
    'Payée partiellement': 'مدفوعة جزئياً',
    Affectée: 'مخصصة',
    Enregistrée: 'مسجلة',
    'Non affectée': 'غير مخصصة',
    'À déduire': 'للاقتطاع',
    Déduite: 'مقتطعة',
    'À approuver': 'للاعتماد',
    Terminé: 'منتهٍ',
    'En cours': 'قيد التنفيذ',
    Planifiée: 'مخططة',
    Réutilisable: 'قابلة لإعادة الاستخدام',
    'À contrôler': 'للمراقبة',
    Déclassée: 'مستبعدة',
    'En attente': 'في الانتظار',
    Réception: 'استلام',
    Sortie: 'صرف',
    Retour: 'إرجاع',
    Rendement: 'المردودية',
    Qualité: 'الجودة',
    Ponctualité: 'الالتزام بالمواعيد',
    Correction: 'تصحيح',
    Absence: 'غياب',
    Aucune: 'لا يوجد',
    Coupe: 'القص',
    Assemblage: 'التجميع',
    Finition: 'التشطيب',
    'Finition & contrôle': 'التشطيب والمراقبة',
    Emballage: 'التغليف',
    'À la pièce': 'بالقطعة',
    'À la journée': 'باليوم',
    'Salaire mensuel fixe': 'راتب شهري ثابت',
    'Salaire fixe': 'راتب ثابت',
    'Valeur du stock': 'قيمة المخزون',
    'Matières sous le seuil': 'المواد تحت الحد',
    'Mouvements enregistrés': 'الحركات المسجلة',
    'Au 20 sept.': 'في 20 سبتمبر',
    'Mois en cours': 'الشهر الحالي',
    Planifié: 'مخطط',
    Réalisé: 'منجز',
    Accepté: 'مقبول',
    Rejeté: 'مرفوض',
    'Quantité validée': 'الكمية المعتمدة',
    Période: 'الفترة',
    Ouvrier: 'العامل',
    Opération: 'العملية',
    'Lot de production': 'دفعة الإنتاج',
    Actions: 'الإجراءات',
    Article: 'المنتج',
    Validation: 'الاعتماد',
    'Équipe actuelle': 'الفريق الحالي',
    'Ouvriers archivés': 'العمال المؤرشفون',
    'Historique conservé': 'السجل محفوظ',
    'Profils à revoir': 'ملفات للمراجعة',
    'Cette période': 'هذه الفترة',
    'Opérations couvertes': 'العمليات المغطاة',
    'Opérations assignées': 'العمليات المعينة',
    'Lots suivis': 'الدفعات المتابعة',
    'À planifier': 'للتخطيط',
    Affectations: 'التعيينات',
    'Travail enregistré': 'العمل المسجل',
    'Travail validé': 'العمل المعتمد',
    '93 % des saisies': '93٪ من الإدخالات',
    '67 % des saisies': '67٪ من الإدخالات',
    'Équipe affichée': 'الفريق المعروض',
    'Sur les lots affichés': 'على الدفعات المعروضة',
    'Saisies affichées': 'الإدخالات المعروضة',
    'Cette page': 'هذه الصفحة',
    Affectation: 'تعيين',
    'Par le responsable': 'من طرف المسؤول',
    Actif: 'نشط',
    Archivé: 'مؤرشف',
    'Voir · Modifier · Archiver': 'عرض · تعديل · أرشفة',
    'Voir · Modifier': 'عرض · تعديل',
    Voir: 'عرض',
    Modifier: 'تعديل',
    Archiver: 'أرشفة',
    'En cours': 'قيد التنفيذ',
    Planifiée: 'مخططة',
    Validé: 'معتمد',
    'À valider': 'في انتظار الاعتماد',
    Quantité: 'الكمية',
  },
} as const

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'fr'
    return window.localStorage.getItem('gestateliar-language') === 'ar'
      ? 'ar'
      : 'fr'
  })

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem('gestateliar-language', nextLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) =>
        Object.prototype.hasOwnProperty.call(translations[language], key)
          ? translations[language][key as keyof typeof translations.fr]
          : key,
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context)
    throw new Error('useLanguage must be used within LanguageProvider.')
  return context
}
