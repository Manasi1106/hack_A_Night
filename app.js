/**
 * AEGIS-VERITAS: Unified Evidence & Judicial Record Integrity System
 * Multilingual Engine, Web Crypto SHA-256 Verifier & Tamper Simulator
 */

// ==========================================================================
// Multilingual Translations Dictionary
// ==========================================================================
const TRANSLATIONS = {
  en: {
    brand_sub: "Inter-Agency Cryptographic Case Integrity Grid • Police | FSL Labs | Judiciary",
    nav_cases: "Case Dossiers",
    nav_tamper: "Tamper Simulator Lab",
    nav_matrix: "How It Works & Matrix",
    system_synced: "MERKLE ROOT SYNCHRONIZED",
    btn_cert: "Sec 65B / 63 Certificate",
    lang_label: "Language:",

    // How It Works Walkthrough
    how_title: "How It Works: Protecting Justice in 3 Simple Steps",
    how_step1_title: "1. Police Registration",
    how_step1_desc: "The officer files the FIR and logs physical evidence bags. A permanent cryptographic SHA-256 fingerprint is stamped instantly.",
    how_step2_title: "2. Forensic Examination",
    how_step2_desc: "The lab verifies the physical seal upon receipt, conducts ballistics or chemical tests, and digitally seals the final report.",
    how_step3_title: "3. Court Admissibility",
    how_step3_desc: "The judge views the complete, untampered record. If any word or number was altered in transit, an alert triggers immediately.",

    // Crisis Banner
    crisis_tag: "Systemic Legal Vulnerability Addressed",
    crisis_meta: "RFC 3161 TSA • SHA-256 Merkle Provenance",
    crisis_title: "Eliminating Undetected Tampering Across Law Enforcement, Forensic Labs & Judicial Bodies",
    crisis_desc: "Law enforcement agencies, forensic laboratories, and courts handle voluminous, mission-critical case records—such as First Information Reports (FIRs), sworn witness testimonies, charge sheets, and forensic findings—using fragmented legacy systems and physical paperwork, exposing evidence to undetected tampering.",
    stat_zero_title: "0 Silent Tampering",
    stat_zero_desc: "Every single keystroke or page swap invalidates the cryptographic Merkle root instantly",
    stat_handover_title: "3.2 Seconds",
    stat_handover_desc: "Digital evidence handover between Police, Lab and Court (vs 14.8 days courier transit)",
    stat_prov_title: "100% Provenance",
    stat_prov_desc: "Court-admissible certificate under Section 65B Evidence Act / Section 63 BSA",
    stat_hsm_title: "Hardware Sealed",
    stat_hsm_desc: "HSM-backed Officer & Scientist Key Pairs with biometrically tied non-repudiation",

    // Metrics
    metric_records: "Sealed Case Records",
    metric_records_sub: "FIRs, ballistic logs, post-mortems & chargesheets",
    metric_custody: "Chain of Custody Score",
    metric_custody_sub: "Zero broken custody links across regional labs",
    metric_tamper: "Tamper Attempts Blocked",
    metric_tamper_sub: "Record substitution & hash mismatch alarms flagged",
    metric_speed: "Inter-Agency Sync Speed",
    metric_speed_sub: "Replaces 14-day postal & dispatch transit times",

    // Agency Switcher
    agency_title: "Inter-Agency Sector Perspectives",
    agency_desc: "Filter records, audits, and custody steps by authority domain",
    agency_all: "All Unified Systems",
    agency_police: "Law Enforcement (Police)",
    agency_forensic: "Forensic Labs (CFSL / FSL)",
    agency_court: "Judicial Bodies (Courts)",

    // Case List
    search_placeholder: "Search FIR, Section, Officer, Judge...",
    filter_all: "All Cases",
    filter_trial: "In Trial",
    filter_secured: "Secured",
    filter_flagged: "Tamper Alert",

    // Dossier Tabs
    tab_timeline: "Chain of Custody Flow",
    tab_docs: "Evidence Vault & FIR Records",
    tab_tamper: "Live Tamper Simulator",
    btn_verify: "Verify Merkle Proof",

    // Tamper Lab
    lab_banner_title: "Live Tamper Simulation & Cryptographic Breakpoint Station",
    lab_banner_desc: "Experience first-hand why physical paperwork and fragmented legacy silos expose evidence to undetected tampering. Modify any word, ballistic serial number, or witness deposition below to observe how Aegis-Veritas calculates SHA-256 in real time via the browser's native Web Crypto engine and instantly detects unauthorized modification!",
    select_doc_label: "Select Active Document:",
    editor_title: "Simulated Record Editor (Type or Inject Tampering)",
    preset_title: "PRESET TAMPER ATTACKS (CLICK TO SIMULATE CORRUPTION):",
    btn_tamper_weapon: "Tamper Weapon Serial & Striation",
    btn_tamper_witness: "Retract Sec 164 Witness ID",
    btn_tamper_narcotics: "Dilute Contraband & Mass",
    btn_tamper_timestamp: "Forge FIR Alibi Timestamp",
    btn_restore: "Restore Authentic Text",
    recalc_title: "Real-Time Cryptographic Verification",
    hash_orig_label: "Authentic Ledger Ingestion Hash (SHA-256 Sealed at FIR Intake):",
    hash_recalc_label: "Current Live Computed Document Hash (Browser Web Crypto API):",
    status_verified: "INTEGRITY VERIFIED (MERKLE PROOF VALID)",
    status_tampered: "CRITICAL ALARM: CRYPTOGRAPHIC TAMPER DETECTED!",

    // Side-by-side
    legacy_outcome_title: "Fragmented Legacy Silo Outcome",
    legacy_p1: "Silent alteration: Physical page swapped in court file or local police database.",
    legacy_p2: "No cryptographic checksum or historical change audit exists.",
    legacy_p3: "Case collapses in court due to disputed authenticity or corrupted evidence.",
    modern_outcome_title: "Aegis-Veritas Ledger Defense",
    modern_p1: "Instant Breakpoint: Merkle root mismatch triggers instant forensic alert.",
    modern_p2: "Officer & Lab HSM digital signatures cannot be forged or backdated.",
    modern_p3: "Court relies on mathematically verifiable evidence certified under Sec 65B/63.",

    // Architecture Comparison
    arch_title: "Comprehensive Structural Analysis: Legacy Silos vs. Unified Integrity Ledger",
    arch_desc: "Examining the 4 critical vectors of evidence exposure—from physical transit to siloed SQL databases—and how decentralized cryptographic anchoring guarantees non-repudiation across law enforcement, forensic science, and the judiciary.",
    legacy_title: "Current Fragmented Legacy Framework",
    legacy_badge: "Vulnerable to Undetected Tampering",
    modern_title: "Aegis-Veritas Cryptographic Ledger",
    modern_badge: "Mathematically Non-Repudiable"
  },

  hi: {
    brand_sub: "अंतर-विभागीय क्रिप्टोग्राफ़िक साक्ष्य अखंडता ग्रिड • पुलिस | फोरेंसिक लैब | न्यायपालिका",
    nav_cases: "केस फ़ाइलें (डोज़ियर)",
    nav_tamper: "छेड़छाड़ सिमुलेटर लैब",
    nav_matrix: "यह कैसे काम करता है",
    system_synced: "मर्कल रूट सिंक्रनाइज़्ड (सुरक्षित)",
    btn_cert: "धारा 65B / 63 प्रमाणपत्र",
    lang_label: "भाषा (Language):",

    // How It Works Walkthrough
    how_title: "यह कैसे काम करता है: 3 आसान चरणों में न्याय की सुरक्षा",
    how_step1_title: "1. पुलिस पंजीकरण",
    how_step1_desc: "अधिकारी प्राथमिकी (FIR) दर्ज करता है और साक्ष्य बैग सील करता है। तुरंत एक स्थायी डिजिटल SHA-256 फिंगरप्रिंट बन जाता है।",
    how_step2_title: "2. फोरेंसिक प्रयोगशाला परीक्षण",
    how_step2_desc: "प्रयोगशाला भौतिक सील की पुष्टि करती है, बैलिस्टिक या रासायनिक परीक्षण करती है, और रिपोर्ट को डिजिटल रूप से सील करती है।",
    how_step3_title: "3. न्यायालय में साक्ष्य स्वीकृति",
    how_step3_desc: "न्यायाधीश पूर्ण, बिना छेड़छाड़ वाला रिकॉर्ड देखते हैं। यदि रास्ते में कोई शब्द या तारीख बदली गई, तो तुरंत चेतावनी जारी होती है।",

    // Crisis Banner
    crisis_tag: "सुलझाई गई कानूनी व प्रणालीगत समस्या",
    crisis_meta: "RFC 3161 TSA • SHA-256 मर्कल प्रामाणिकता",
    crisis_title: "पुलिस, फोरेंसिक लैब और अदालतों में साक्ष्यों के साथ अनपेक्षित छेड़छाड़ की रोकथाम",
    crisis_desc: "कानून प्रवर्तन एजेंसियां, फोरेंसिक लैब और न्यायिक निकाय खंडित पुरानी प्रणालियों और कागजी फाइलों का उपयोग करके प्राथमिकी (FIR), गवाहों के बयान, चार्जशीट और फोरेंसिक निष्कर्ष जैसे महत्वपूर्ण रिकॉर्ड संभालते हैं, जिससे साक्ष्य के साथ गुप्त छेड़छाड़ का भारी जोखिम रहता है।",
    stat_zero_title: "0 गुप्त छेड़छाड़",
    stat_zero_desc: "कागज़ के पन्ने बदलने या शब्द बदलने पर तुरंत मर्कल रूट अमान्य हो जाता है",
    stat_handover_title: "3.2 सेकंड",
    stat_handover_desc: "पुलिस, लैब और अदालत के बीच साक्ष्य का त्वरित डिजिटल हस्तांतरण",
    stat_prov_title: "100% प्रामाणिकता",
    stat_prov_desc: "भारतीय साक्ष्य अधिनियम धारा 65B एवं BSA धारा 63 के तहत मान्य प्रमाणपत्र",
    stat_hsm_title: "हार्डवेयर सीलबंद",
    stat_hsm_desc: "अधिकारियों और वैज्ञानिकों के बायोमेट्रिक व HSM कुंजी द्वारा सुरक्षित",

    // Metrics
    metric_records: "सील किए गए केस रिकॉर्ड",
    metric_records_sub: "प्राथमिकी, बैलिस्टिक, पोस्टमार्टम व आरोप-पत्र",
    metric_custody: "कस्टडी अखंडता स्कोर",
    metric_custody_sub: "18 क्षेत्रीय प्रयोगशालाओं में शून्य विसंगति",
    metric_tamper: "रोके गए छेड़छाड़ प्रयास",
    metric_tamper_sub: "अवैध बदलाव व हैश विसंगति तुरंत पकड़ी गई",
    metric_speed: "विभागों के बीच समन्वय गति",
    metric_speed_sub: "14 दिनों की डाक देरी को 3 सेकंड में बदला",

    // Agency Switcher
    agency_title: "विभाग के अनुसार देखें",
    agency_desc: "अधिकार क्षेत्र के अनुसार रिकॉर्ड और कस्टडी चरण फ़िल्टर करें",
    agency_all: "सभी एकीकृत प्रणालियां",
    agency_police: "पुलिस विभाग (Law Enforcement)",
    agency_forensic: "फोरेंसिक विज्ञान लैब (CFSL/FSL)",
    agency_court: "न्यायालय व पीठ (Judiciary)",

    // Case List
    search_placeholder: "FIR, धारा, अधिकारी या न्यायाधीश खोजें...",
    filter_all: "सभी मामले",
    filter_trial: "अदालत में जारी",
    filter_secured: "सुरक्षित",
    filter_flagged: "चेतावनी (छेड़छाड़)",

    // Dossier Tabs
    tab_timeline: "कस्टडी श्रृंखला प्रवाह (Chain of Custody)",
    tab_docs: "साक्ष्य वॉल्ट व FIR दस्तावेज़",
    tab_tamper: "लाइव छेड़छाड़ सिमुलेटर",
    btn_verify: "मर्कल प्रमाण सत्यापित करें",

    // Tamper Lab
    lab_banner_title: "लाइव छेड़छाड़ परीक्षण व क्रिप्टोग्राफ़िक सुरक्षा स्टेशन",
    lab_banner_desc: "स्वयं अनुभव करें कि कैसे कागजी फाइलों में बदलाव आसानी से हो जाता था, लेकिन एजिस-वेरिटास के साथ जैसे ही आप कोई शब्द या नंबर बदलते हैं, ब्राउज़र का SHA-256 इंजन तुरंत अवैध बदलाव पकड़ लेता है!",
    select_doc_label: "सक्रिय दस्तावेज़ चुनें:",
    editor_title: "सिमुलेटेड रिकॉर्ड संपादक (बदलाव करके देखें)",
    preset_title: "तैयार छेड़छाड़ हमले (क्लिक करके परीक्षण करें):",
    btn_tamper_weapon: "हथियार सीरियल नंबर व बैलिस्टिक रिपोर्ट बदलें",
    btn_tamper_witness: "धारा 164 गवाह का बयान पलटें",
    btn_tamper_narcotics: "मादक पदार्थ का वजन व शुद्धता घटाएं",
    btn_tamper_timestamp: "FIR की तारीख व समय बदलें",
    btn_restore: "मूल प्रामाणिक रूप बहाल करें",
    recalc_title: "वास्तविक समय क्रिप्टोग्राफ़िक सत्यापन",
    hash_orig_label: "मूल दर्ज हैश (SHA-256 सीलबंद):",
    hash_recalc_label: "वर्तमान गणना किया गया हैश (लाइव ब्राउज़र इंजन):",
    status_verified: "अखंडता सत्यापित (रिकॉर्ड 100% प्रामाणिक है)",
    status_tampered: "गंभीर चेतावनी: अनधिकृत छेड़छाड़ पकड़ी गई!",

    // Side-by-side
    legacy_outcome_title: "पुरानी कागजी प्रणाली का परिणाम",
    legacy_p1: "गुप्त बदलाव: अदालत की फाइल या थाने के रजिस्टर में पन्ना बदल दिया गया।",
    legacy_p2: "कोई डिजिटल फिंगरप्रिंट या ऑडिट लॉग मौजूद नहीं होता।",
    legacy_p3: "अदालत में साक्ष्य दूषित होने के कारण आरोपी बरी हो जाता है।",
    modern_outcome_title: "एजिस-वेरिटास प्रणाली का बचाव",
    modern_p1: "त्वरित चेतावनी: हैश बदलते ही न्यायाधीश और लैब निदेशक को अलर्ट भेजा जाता है।",
    modern_p2: "अधिकारी के डिजिटल हस्ताक्षर को मिटाया या बदला नहीं जा सकता।",
    modern_p3: "अदालत गणितीय रूप से सिद्ध साक्ष्य के आधार पर निष्पक्ष न्याय करती है।",

    // Architecture Comparison
    arch_title: "तुलनात्मक विश्लेषण: पुरानी कागजी प्रणाली बनाम एकीकृत क्रिप्टोग्राफ़िक लेज़र",
    arch_desc: "जांचें कि कैसे भौतिक फाइलों से लेकर अलग-थलग डेटाबेस तक की कमियों को दूर करके पूर्ण अखंडता सुनिश्चित की जाती है।",
    legacy_title: "वर्तमान खंडित पुरानी व्यवस्था",
    legacy_badge: "गुप्त छेड़छाड़ के प्रति असुरक्षित",
    modern_title: "एजिस-वेरिटास क्रिप्टोग्राफ़िक लेज़र",
    modern_badge: "गणितीय रूप से अपरिवर्तनीय व सुरक्षित"
  },

  es: {
    brand_sub: "Red Criptográfica de Integridad de Pruebas • Policía | Laboratorios | Tribunales",
    nav_cases: "Expedientes del Caso",
    nav_tamper: "Simulador de Alteración",
    nav_matrix: "Cómo Funciona",
    system_synced: "RAÍZ MERKLE SINCRONIZADA",
    btn_cert: "Certificado Judicial",
    lang_label: "Idioma:",

    how_title: "Cómo Funciona: Protegiendo la Justicia en 3 Simples Pasos",
    how_step1_title: "1. Registro Policial",
    how_step1_desc: "El agente registra la denuncia y sella las bolsas de evidencia con una huella digital SHA-256 permanente.",
    how_step2_title: "2. Examen Forense",
    how_step2_desc: "El laboratorio verifica los precintos físicos, realiza análisis balísticos o químicos y sella el informe oficial.",
    how_step3_title: "3. Admisión Judicial",
    how_step3_desc: "El juez inspecciona el registro inmutable. Si se altera cualquier palabra o fecha, se emite una alerta inmediata.",

    crisis_tag: "Vulnerabilidad Legal Crítica Resuelta",
    crisis_meta: "RFC 3161 TSA • Procedencia Criptográfica",
    crisis_title: "Eliminación de Alteraciones Ocultas en Policías, Laboratorios y Tribunales",
    crisis_desc: "Las fuerzas de seguridad, laboratorios forenses y juzgados manejan expedientes críticos usando sistemas fragmentados y papel físico, exponiendo las pruebas a alteraciones no detectadas.",
    stat_zero_title: "0 Alteraciones Ocultas",
    stat_zero_desc: "Cualquier cambio de texto o sustitución de página invalida la raíz Merkle de inmediato",
    stat_handover_title: "3.2 Segundos",
    stat_handover_desc: "Entrega digital de evidencia entre Policía, Laboratorio y Juzgado",
    stat_prov_title: "100% Procedencia",
    stat_prov_desc: "Certificado admisible en juicio con valor probatorio legal",
    stat_hsm_title: "Sellado por Hardware",
    stat_hsm_desc: "Firmas electrónicas mediante módulo de seguridad HSM y biometría",

    metric_records: "Expedientes Sellados",
    metric_records_sub: "Denuncias, balística, autopsias y acusaciones",
    metric_custody: "Puntaje de Custodia",
    metric_custody_sub: "Cero eslabones rotos en laboratorios regionales",
    metric_tamper: "Alteraciones Bloqueadas",
    metric_tamper_sub: "Alarmas por discrepancia de hash activadas",
    metric_speed: "Velocidad de Sincronización",
    metric_speed_sub: "Reemplaza 14 días de correo postal en segundos",

    agency_title: "Perspectivas por Sector Institucional",
    agency_desc: "Filtre expedientes y pasos de custodia según el ámbito de autoridad",
    agency_all: "Todos los Sistemas",
    agency_police: "Fuerzas Policiales",
    agency_forensic: "Laboratorios Forenses",
    agency_court: "Órganos Judiciales",

    search_placeholder: "Buscar expediente, delito, oficial, juez...",
    filter_all: "Todos",
    filter_trial: "En Juicio",
    filter_secured: "Asegurado",
    filter_flagged: "Alerta",

    tab_timeline: "Cadena de Custodia",
    tab_docs: "Bóveda de Pruebas",
    tab_tamper: "Simulador de Alteración",
    btn_verify: "Verificar Prueba Merkle",

    lab_banner_title: "Laboratorio Interactivo de Simulación de Alteraciones",
    lab_banner_desc: "Modifique cualquier palabra o número de serie abajo para observar cómo Aegis-Veritas detecta instantáneamente la alteración no autorizada mediante cálculo SHA-256 en tiempo real.",
    select_doc_label: "Seleccionar Documento:",
    editor_title: "Editor de Registro Simulado (Escriba o Inyecte Cambios)",
    preset_title: "ATAQUES PREDEFINIDOS (HAGA CLIC PARA PROBAR):",
    btn_tamper_weapon: "Alterar Serie del Arma y Balística",
    btn_tamper_witness: "Retractar Declaración del Testigo",
    btn_tamper_narcotics: "Diluir Peso y Pureza de Sustancia",
    btn_tamper_timestamp: "Falsificar Hora de la Denuncia",
    btn_restore: "Restaurar Texto Original",
    recalc_title: "Verificación Criptográfica en Tiempo Real",
    hash_orig_label: "Hash Original Registrado (SHA-256):",
    hash_recalc_label: "Hash Calculado en Vivo en el Navegador:",
    status_verified: "INTEGRIDAD VERIFICADA (REGISTRO AUTÉNTICO)",
    status_tampered: "¡ALARMA CRÍTICA: ALTERACIÓN DETECTADA!",

    legacy_outcome_title: "Resultado en Sistemas de Papel Tradicionales",
    legacy_p1: "Alteración silenciosa: Página sustituida en el expediente físico sin rastro.",
    legacy_p2: "No existe suma de control criptográfica ni registro de auditoría.",
    legacy_p3: "El caso se desestima en juicio debido a pruebas contaminadas.",
    modern_outcome_title: "Defensa con Aegis-Veritas",
    modern_p1: "Detección instantánea: El cambio de hash notifica al juez de inmediato.",
    modern_p2: "Las firmas criptográficas de los peritos no pueden falsificarse.",
    modern_p3: "Pruebas científicas con certeza matemática irrefutable.",

    arch_title: "Análisis Estructural: Archivos Tradicionales vs. Registro Criptográfico",
    arch_desc: "Comparación técnica de los puntos críticos de vulnerabilidad y la protección moderna.",
    legacy_title: "Marco Tradicional Fragmentado",
    legacy_badge: "Vulnerable a Manipulación",
    modern_title: "Registro Criptográfico Aegis-Veritas",
    modern_badge: "Matemáticamente No Repudiable"
  },

  fr: {
    brand_sub: "Réseau d'Intégrité des Preuves Judiciaires • Police | Laboratoires | Justice",
    nav_cases: "Dossiers Judiciaires",
    nav_tamper: "Simulateur d'Altération",
    nav_matrix: "Fonctionnement",
    system_synced: "RACINE DE MERKLE SYNCHRONISÉE",
    btn_cert: "Certificat Légal",
    lang_label: "Langue:",

    how_title: "Fonctionnement : Protéger la Justice en 3 Étapes Simples",
    how_step1_title: "1. Enregistrement Police",
    how_step1_desc: "L'officier rédige le procès-verbal et scelle les pièces à conviction avec une empreinte numérique SHA-256 permanente.",
    how_step2_title: "2. Analyse Forensique",
    how_step2_desc: "Le laboratoire vérifie l'intégrité des scellés, réalise les expertises balistiques ou toxicologiques et signe le rapport.",
    how_step3_title: "3. Admission au Tribunal",
    how_step3_desc: "Le magistrat consulte le dossier certifié. Toute modification ultérieure déclenche immédiatement une alerte rouge.",

    crisis_tag: "Vulnérabilité Judiciaire Résolue",
    crisis_meta: "RFC 3161 TSA • Traçabilité SHA-256",
    crisis_title: "Élimination des Falsifications Silencieuses dans les Procédures Pénales",
    crisis_desc: "Les services d'enquête, laboratoires de police scientifique et tribunaux gèrent des dossiers cruciaux avec des systèmes morcelés et des liasses papier, exposant les pièces à des altérations indétectables.",
    stat_zero_title: "0 Falsification",
    stat_zero_desc: "Toute modification d'un mot ou d'une date invalide la racine de Merkle instantanément",
    stat_handover_title: "3,2 Secondes",
    stat_handover_desc: "Transmission numérique sécurisée entre Police, Laboratoire et Tribunal",
    stat_prov_title: "100% Authentique",
    stat_prov_desc: "Certificat de preuve numérique pleinement recevable devant la cour",
    stat_hsm_title: "Scellé Matériel",
    stat_hsm_desc: "Clés cryptographiques sur module HSM avec signature biométrique",

    metric_records: "Dossiers Scellés",
    metric_records_sub: "Procès-verbaux, balistique, autopsies et réquisitoires",
    metric_custody: "Indice de Traçabilité",
    metric_custody_sub: "Zéro rupture de chaîne de détention",
    metric_tamper: "Falsifications Bloquées",
    metric_tamper_sub: "Alertes automatiques pour divergence d'empreinte",
    metric_speed: "Vitesse de Transmission",
    metric_speed_sub: "Remplace 14 jours d'acheminement postal physique",

    agency_title: "Perspectives par Autorité Compétente",
    agency_desc: "Filtrez les pièces et les étapes de garde à vue par juridiction",
    agency_all: "Systèmes Intégrés",
    agency_police: "Police Judiciaire",
    agency_forensic: "Laboratoire Forensique (INPS)",
    agency_court: "Tribunal & Magistrats",

    search_placeholder: "Rechercher numéro, infraction, enquêteur, juge...",
    filter_all: "Tous",
    filter_trial: "À l'Audience",
    filter_secured: "Scellé",
    filter_flagged: "Alerte",

    tab_timeline: "Chaîne de Traçabilité",
    tab_docs: "Coffre-fort des Pièces",
    tab_tamper: "Simulateur d'Altération",
    btn_verify: "Vérifier la Preuve Merkle",

    lab_banner_title: "Atelier Interactif de Simulation de Falsification",
    lab_banner_desc: "Modifiez un mot, un numéro de calibre ou un aveu ci-dessous pour observer comment Aegis-Veritas recalcule instantanément le hash SHA-256 et déclenche l'alarme pour protéger la justice.",
    select_doc_label: "Document Actif :",
    editor_title: "Éditeur de Pièce Procédurale (Saisissez ou Injectez une Altération)",
    preset_title: "ATTAQUES PRÉCONFIGURÉES (CLIQUEZ POUR TESTER) :",
    btn_tamper_weapon: "Falsifier le Numéro d'Arme et Balistique",
    btn_tamper_witness: "Rétracter le Témoignage Clé",
    btn_tamper_narcotics: "Diluer la Masse et Pureté des Stupéfiants",
    btn_tamper_timestamp: "Falsifier l'Horodatage du Procès-Verbal",
    btn_restore: "Restaurer le Texte Authentique",
    recalc_title: "Contrôle Cryptographique en Temps Réel",
    hash_orig_label: "Empreinte d'Origine Enregistrée (SHA-256) :",
    hash_recalc_label: "Empreinte Calculée en Direct dans le Navigateur :",
    status_verified: "INTÉGRITÉ VÉRIFIÉE (PIÈCE 100% AUTHENTIQUE)",
    status_tampered: "ALERTE CRITIQUE : FALSIFICATION DÉTECTÉE !",

    legacy_outcome_title: "Conséquence dans les Systèmes Papier Morcelés",
    legacy_p1: "Altération discrète : Feuillet physique interverti dans le classeur sans traçabilité.",
    legacy_p2: "Aucune somme de contrôle ni historique des modifications.",
    legacy_p3: "La procédure s'effondre à l'audience en raison de preuves viciées.",
    modern_outcome_title: "Protection Garantie par Aegis-Veritas",
    modern_p1: "Rupture immédiate : L'incohérence du hash prévient immédiatement le président du tribunal.",
    modern_p2: "Les signatures électroniques des experts sont infalsifiables.",
    modern_p3: "Justice rendue sur la base de preuves mathématiquement incontestables.",

    arch_title: "Analyse Comparée : Papier Traditionnel vs. Registre Numérique",
    arch_desc: "Examen des failles des classeurs traditionnels et de la sécurité cryptographique moderne.",
    legacy_title: "Système Traditionnel Fragile",
    legacy_badge: "Exposé aux Manipulations",
    modern_title: "Registre Cryptographique Aegis-Veritas",
    modern_badge: "Mathématiquement Non Répudiable"
  },

  mr: {
    brand_sub: "आंतर-विभागीय पुरावा अखंडता प्रणाली • पोलीस | फॉरेन्सिक लॅब | न्यायालये",
    nav_cases: "केस फाइल्स",
    nav_tamper: "छेडछाड सिम्युलेटर",
    nav_matrix: "कसे कार्य करते",
    system_synced: "मर्कल रूट सुरक्षित (सिंक्रोनाइझ्ड)",
    btn_cert: "कलम 65B / 63 प्रमाणपत्र",
    lang_label: "भाषा:",

    how_title: "कसे कार्य करते: ३ सोप्या टप्प्यांत न्यायाचे रक्षण",
    how_step1_title: "१. पोलीस नोंदणी",
    how_step1_desc: "अधिकारी एफआयआर नोंदवून पुरावा पिशवी सील करतो. लगेच एक डिजिटल SHA-256 फिंगरप्रिंट तयार होते.",
    how_step2_title: "२. फॉरेन्सिक तपासणी",
    how_step2_desc: "प्रयोगशाळा सील तपासून बॅलिस्टिक किंवा रासायनिक विश्लेषण करते आणि रिपोर्ट डिजिटल स्वाक्षरीने सील करते.",
    how_step3_title: "३. न्यायालयीन स्वीकृती",
    how_step3_desc: "न्यायाधीश सुरक्षित नोंद पाहतात. वाटेत कोणताही शब्द किंवा तारीख बदलल्यास लगेच अलर्ट येतो.",

    crisis_tag: "महत्त्वपूर्ण कायदेशीर समस्येवर तोडगा",
    crisis_meta: "RFC 3161 TSA • SHA-256 मर्कल पुरावा",
    crisis_title: "पोलीस, फॉरेन्सिक लॅब आणि न्यायालयांमध्ये पुराव्यांची छेडछाड रोखणे",
    crisis_desc: "पोलीस, न्यायवैद्यक प्रयोगशाळा आणि न्यायालये कागदी फायली व वेगवेगळ्या संगणक प्रणालींवर एफआयआर, जबाब आणि फॉरेन्सिक रिपोर्ट हाताळतात, ज्यामुळे पुराव्यांमध्ये गुप्त छेडछाडीचा धोका असतो.",
    stat_zero_title: "० गुप्त छेडछाड",
    stat_zero_desc: "कोणताही शब्द किंवा पान बदलल्यास मर्कल रूट लगेच अमान्य ठरते",
    stat_handover_title: "३.२ सेकंद",
    stat_handover_desc: "पोलीस, लॅब आणि कोर्ट दरम्यान तात्काळ पुरावा हस्तांतरण",
    stat_prov_title: "१००% प्रामाणिकता",
    stat_prov_desc: "पुरावा कायदा कलम 65B आणि BSA कलम 63 अंतर्गत कोर्टात ग्राह्य प्रमाणपत्र",
    stat_hsm_title: "हार्डवेअर सीलबंद",
    stat_hsm_desc: "अधिकारी आणि शास्त्रज्ञांच्या बायोमेट्रिक व डिजिटल की द्वारे सुरक्षित",

    metric_records: "सील केलेले केस रेकॉर्ड्स",
    metric_records_sub: "एफआयआर, बॅलिस्टिक, शवविच्छेदन व आरोपपत्र",
    metric_custody: "कस्टडी अखंडता गुण",
    metric_custody_sub: "१८ प्रादेशिक प्रयोगशाळांमध्ये शून्य तफावत",
    metric_tamper: "अडवलेले छेडछाड प्रयत्न",
    metric_tamper_sub: "बदलांचे अलर्ट तात्काळ नोंदवले गेले",
    metric_speed: "विभाग समन्वय गती",
    metric_speed_sub: "१४ दिवसांचा टपाल विलंब काही सेकंदांवर आणला",

    agency_title: "विभागानुसार पहा",
    agency_desc: "पोलीस, लॅब किंवा न्यायालयानुसार केस रेकॉर्ड्स निवडा",
    agency_all: "सर्व विभाग एकत्र",
    agency_police: "पोलीस विभाग",
    agency_forensic: "फॉरेन्सिक लॅब (FSL)",
    agency_court: "न्यायालय (Judiciary)",

    search_placeholder: "FIR, कलम, तपास अधिकारी किंवा कोर्ट शोधा...",
    filter_all: "सर्व प्रकरणे",
    filter_trial: "कोर्टात चालू",
    filter_secured: "सुरक्षित",
    filter_flagged: "छेडछाड अलर्ट",

    tab_timeline: "कस्टडी साखळी प्रवाह",
    tab_docs: "पुरावा व्हॉल्ट व दस्तऐवज",
    tab_tamper: "लाइव्ह छेडछाड सिम्युलेटर",
    btn_verify: "मर्कल पुरावा तपासा",

    lab_banner_title: "लाइव्ह छेडछाड चाचणी व सुरक्षा स्टेशन",
    lab_banner_desc: "कागदी फाइल्समध्ये छेडछाड कशी पकडली जात नाही आणि एजिस-वेरिटास प्रणालीमध्ये एखादा शब्द बदलल्यास लगेच सिस्टीम कशी लाल होते, ते येथे प्रत्यक्ष अनुभवून पहा!",
    select_doc_label: "सक्रिय दस्तऐवज निवडा:",
    editor_title: "रेकॉर्ड संपादक (येथे बदल करून पहा)",
    preset_title: "तयार हल्ले (क्लिक करून पहा):",
    btn_tamper_weapon: "बंदुकीचा नंबर व बॅलिस्टिक रिपोर्ट बदला",
    btn_tamper_witness: "कलम १६४ साक्ष फिरवा",
    btn_tamper_narcotics: "जप्त अमली पदार्थांचे वजन व शुद्धता कमी करा",
    btn_tamper_timestamp: "गुन्ह्याची वेळ बदला (खोटा पुरावा तयार करा)",
    btn_restore: "मूळ मजकूर पूर्ववत करा",
    recalc_title: "रिअल-टाइम क्रिप्टोग्राफिक तपासणी",
    hash_orig_label: "मूळ नोंदवलेला हॅश (SHA-256):",
    hash_recalc_label: "सध्या मोजलेला हॅश (ब्राउझर इंजिन):",
    status_verified: "अखंडता प्रमाणित (दस्तऐवज १००% मूळ स्थितीत आहे)",
    status_tampered: "धोक्याचा इशारा: अनधिकृत छेडछाड उघडकीस आली!",

    legacy_outcome_title: "पारंपरिक कागदी प्रणालीचा तोटा",
    legacy_p1: "गुप्त बदल: कोर्टाच्या फायलीतील पान बदलले तरी कोणालाही समजत नाही.",
    legacy_p2: "कोणतीही डिजिटल पडताळणी किंवा इतिहास उपलब्ध नसतो.",
    legacy_p3: "कोर्टात पुरावा संशयास्पद ठरल्याने खटला कोसळतो.",
    modern_outcome_title: "एजिस-वेरिटास प्रणालीचा फायदा",
    modern_p1: "तात्काळ इशारा: हॅश बदलताच न्यायाधीशांना अलर्ट जातो.",
    modern_p2: "अधिकाऱ्यांची डिजिटल स्वाक्षरी बदलणे किंवा खोटे करणे अशक्य.",
    modern_p3: "गणितीय खात्रीवर आधारित निष्पक्ष न्यायदान शक्य होते.",

    arch_title: "रचनात्मक तुलना: कागदी फाइल्स विरुद्ध क्रिप्टोग्राफिक लेजर",
    arch_desc: "पारंपरिक पद्धतींमधील त्रुटी आणि आधुनिक सुरक्षिततेची तुलना.",
    legacy_title: "सध्याची जुनी पद्धत",
    legacy_badge: "छेडछाडीस असुरक्षित",
    modern_title: "एजिस-वेरिटास क्रिप्टोग्राफिक लेजर",
    modern_badge: "अपरिवर्तनीय व खात्रीशीर"
  }
};

let currentLang = "en";

// ==========================================================================
// Comprehensive Mission-Critical Case Database
// ==========================================================================
const CASES_DATA = [
  {
    id: "FIR-2026-1194-HOM",
    title: "State vs. K. R. Mehra (High-Profile Homicide & Ballistics)",
    dateFiled: "2026-09-14 02:15 IST",
    status: "trial",
    statusLabel: "In Court Trial",
    policeStation: "Cyber-Central Special Crime Branch",
    investigatingOfficer: "ACP Vikramaditya Singh (ID: SCB-8802)",
    court: "Hon'ble Special Sessions Court 04, National Capital",
    presidingJudge: "Hon'ble Justice Renuka S. Desai",
    fslLab: "Central Forensic Science Laboratory (CFSL) - Ballistics Div.",
    fslScientist: "Dr. Ananya Roy, Principal Ballistics Examiner",
    summary: "Investigation into fatal shooting during targeted burglary. Crucial evidence includes seized 9mm semi-automatic pistol, 3 spent cartridges, Section 164 CrPC judicial witness testimony, and digital ballistics striation matching.",
    merkleRoot: "7e9b4a1f6804e339d2ca1e49bbf870fa4519965a3962b9a712c49e2dcbe53911",
    agenciesInvolved: ["Police", "Forensic Lab", "Court"],
    documents: [
      {
        id: "DOC-FIR-1194",
        type: "First Information Report (FIR)",
        category: "police",
        code: "Sec 302, 397 IPC / Sec 103, 311 BNS & Sec 25/27 Arms Act",
        hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        originalHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        verified: true,
        author: "Inspector Devendra Rao (Badge #9011)",
        timestamp: "2026-09-14T02:40:00Z",
        content: `FIRST INFORMATION REPORT (Under Section 154 Cr.P.C.)
FIR No: 1194/2026 | Police Station: Special Crime Branch
Date & Time of Occurrence: 13-Sept-2026 at 23:45 Hours
Date & Time Reported to PS: 14-Sept-2026 at 02:15 Hours

Place of Occurrence: Residence #42, Belvedere Greens, Sector 18.
Complainant: Security Supervisor Manjit K.
Accused: K. R. Mehra (Arrested at 04:30 Hours near Toll Plaza 03)

Brief Statement:
On 13-Sept-2026 at approximately 23:45 hours, the complainant heard multiple gunshots inside bungalow #42. Two individuals were observed escaping via the rear garden gate. Victim Anand Vardhan found collapsed in study room with penetrating thoracic bullet wounds. 

Seizure Memo #SM-01:
- Recovered 1x Glock 19 9x19mm handgun (Serial #GK-9821-XP) from rear garden hedge.
- Recovered 3x spent 9mm cartridge cases stamped 'KF-2024'.
- All physical exhibits packaged in Barcode Tamper-Evident Bag #TEB-88194 and sealed under Police Wax Seal SCB-88. Transferred to CFSL Ballistics Division under strict digital chain of custody.`
      },
      {
        id: "DOC-WIT-882",
        type: "Section 164 Witness Deposition",
        category: "police",
        code: "Recorded before Metropolitan Magistrate",
        hash: "a4f10287113cdbc67e3820a4b0d0c39f157f49cb6e11894d03e9df259e902bca",
        originalHash: "a4f10287113cdbc67e3820a4b0d0c39f157f49cb6e11894d03e9df259e902bca",
        verified: true,
        author: "Metropolitan Magistrate S. K. Narang",
        timestamp: "2026-09-17T11:30:00Z",
        content: `STATEMENT OF WITNESS RECORDED UNDER SECTION 164 Cr.P.C.
Court of the Judicial Magistrate First Class | Case: State vs. K.R. Mehra
Deponent: Rajesh Verma (Eye-witness / Private Chauffeur)

Statement recorded under oath:
"I was parked in the driveway facing the study room window at 23:40 hours. The garden floodlights were on. I distinctly saw accused K. R. Mehra engaged in a heated altercation with Mr. Anand Vardhan regarding property deed certificates. At 23:44 hours, I saw accused Mehra draw a dark pistol from his jacket and discharge three shots at point-blank range into the victim's chest. I observed him drop the weapon in the hedge while scrambling over the rear fence. I have identified the accused in the Test Identification Parade without hesitation."`
      },
      {
        id: "DOC-FSL-409",
        type: "Forensic Ballistics & Striation Analysis",
        category: "forensic",
        code: "CFSL-BAL-2026-409 | NABL Accredited ISO/IEC 17025",
        hash: "5d41402abc4b2a76b9719d911017c592b21b764fe06d9b047528e1462de5f37f",
        originalHash: "5d41402abc4b2a76b9719d911017c592b21b764fe06d9b047528e1462de5f37f",
        verified: true,
        author: "Dr. Ananya Roy (Chief Ballistics Examiner)",
        timestamp: "2026-09-24T16:15:00Z",
        content: `CENTRAL FORENSIC SCIENCE LABORATORY - BALLISTICS DIVISION
Report Ref: CFSL/BAL/2026/409 | Agency Ref: FIR 1194/2026

Physical Integrity Verification upon Ingestion:
Tamper-Evident Bag #TEB-88194 received intact on 15-Sept-2026 at 09:20 AM. Police seal SCB-88 verified against AegisChain cryptographic manifest #AEG-8910. Hash matches perfectly.

Scientific Findings:
1. Firearm Exhibit A1: 9x19mm Semi-automatic Pistol (Serial #GK-9821-XP). Barrel exhibits 6 right-hand parabolic grooves with land-width of 2.45mm.
2. Spent Cartridges Exhibit C1-C3: Firing pin impressions and breach-face striation marks on all three recovered cases match test-fires fired from Exhibit A1 under Comparison Microscope 400x magnification.
3. Micro-spectrophotometry confirms trace gunshot residue (lead styphnate, barium nitrate) on accused Mehra's right cuff swatch Exhibit G1.

Conclusion:
Cartridge cases C1-C3 recovered from crime scene were conclusively fired from the seized weapon GK-9821-XP.`
      },
      {
        id: "DOC-CHG-102",
        type: "Final Investigation Charge Sheet",
        category: "court",
        code: "Charge Sheet No. 44/2026 under Sec 173 Cr.P.C.",
        hash: "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
        originalHash: "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
        verified: true,
        author: "Superintendent of Police & Public Prosecutor",
        timestamp: "2026-10-02T10:00:00Z",
        content: `FINAL FORM REPORT UNDER SECTION 173 Cr.P.C.
Before the Hon'ble Court of Sessions | State vs. K. R. Mehra

Summary of Evidence Submitted:
1. FIR No. 1194/2026 registered promptly with cryptographic timestamp.
2. Eye-witness testimony recorded under Section 164 CrPC affirming accused presence and act.
3. CFSL Ballistics Report CFSL/BAL/2026/409 establishing direct microscopic match of crime scene cartridges to recovered weapon.
4. Call Detail Records (CDR) and cell tower triangulation placing accused at Sector 18 at 23:45 hrs.

Prayer:
It is prayed that cognizance of offences under Sections 302, 397 IPC and Sections 25/27 Arms Act be taken against the accused, and trial be expedited with evidence secured on AegisChain tamper-proof ledger.`
      }
    ],
    chainOfCustody: [
      {
        step: 1,
        agency: "Police",
        action: "First Response & Physical Evidence Seizure",
        actor: "SI Tarun Joshi (Patrol Unit 9)",
        timestamp: "2026-09-14 00:20 IST",
        location: "Sector 18 Crime Scene (GPS: 28.5355° N, 77.3910° E)",
        hash: "a09f3e...b819",
        details: "Weapon and 3 fired shell casings placed into tamper-evident bags TEB-88194. Sealed with wax impression and registered into local mobile station terminal."
      },
      {
        step: 2,
        agency: "Police",
        action: "Digital FIR & Cryptographic Ingestion",
        actor: "Inspector Devendra Rao (Duty Officer)",
        timestamp: "2026-09-14 02:40 IST",
        location: "Central Crime Branch Station",
        hash: "e3b0c4...b855",
        details: "FIR #1194/2026 digitized and signed via Police Officer Cryptographic Token. Ingested into AegisChain Merkle tree. Immediate audit copy sent to Duty Magistrate."
      },
      {
        step: 3,
        agency: "Forensic Lab",
        action: "CFSL Evidence Intake & Cryptographic Handover",
        actor: "Custody Officer N. K. Sharma (CFSL Reception)",
        timestamp: "2026-09-15 09:20 IST",
        location: "CFSL Evidence Intake Vault B",
        hash: "c18d99...44a1",
        details: "Physical bag barcode scanned; seal integrity verified under digital microscope. Handover receipt countersigned digitally by Police Courier and FSL Custodian. Zero seal discrepancy."
      },
      {
        step: 4,
        agency: "Forensic Lab",
        action: "Ballistics Examination & Scientific Report Sealing",
        actor: "Dr. Ananya Roy (Principal Examiner)",
        timestamp: "2026-09-24 16:15 IST",
        location: "CFSL Ballistics Comparison Microscopy Suite",
        hash: "5d4140...f37f",
        details: "Striation comparison confirmed matching breech-face marks. Report sealed with FSL Hardware Security Module (HSM) private key. Hash broadcast to Judicial Ledger."
      },
      {
        step: 5,
        agency: "Court",
        action: "Charge Sheet Scrutiny & Judicial Exhibit Acceptance",
        actor: "Chief Judicial Clerk & Sessions Registrar",
        timestamp: "2026-10-02 11:30 IST",
        location: "Courtroom 04, Sessions Judiciary",
        hash: "7e9b4a...3911",
        details: "Charge Sheet No. 44/2026 and Exhibits Ex-P1 to Ex-P5 admitted into court docket. All four underlying cryptographic hashes validated against decentralized Merkle root. Exhibit integrity certified under Sec 65B/63 BSA."
      }
    ]
  },
  {
    id: "CR-2026-0842-CYB",
    title: "National Financial Switch Ransomware & Server Tampering",
    dateFiled: "2026-08-19 14:10 IST",
    status: "secured",
    statusLabel: "Secured & Verified",
    policeStation: "Cyber Crime Cell - HQ Division",
    investigatingOfficer: "DCP Maya Sengupta (ID: CYB-1090)",
    court: "Special Designated Cyber Tribunal Court 01",
    presidingJudge: "Hon'ble Special Judge K. L. Sundaram",
    fslLab: "National Digital Forensics & Cyber Center (NDFC)",
    fslScientist: "Vikram Malhotra, Lead Digital Forensics Auditor",
    summary: "Sophisticated intrusion into banking gateway core databases. Memory dumps, router syslog records, and encrypted ransom payload preserved on tamper-proof cryptographic ledger preventing insider database manipulation.",
    merkleRoot: "3c82ef998246d812301abccf5529948d31294801fe582194ca81928491024810",
    agenciesInvolved: ["Police", "Forensic Lab", "Court"],
    documents: [
      {
        id: "DOC-CYB-FIR",
        type: "Cyber Incident FIR",
        category: "police",
        code: "Sec 43, 66, 66F IT Act 2000 & Sec 420 IPC",
        hash: "112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00",
        originalHash: "112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00",
        verified: true,
        author: "Inspector Sameer Khan (Cyber Cell)",
        timestamp: "2026-08-19T14:30:00Z",
        content: `CYBER CRIME SPECIAL INCIDENT REPORT
Crime Cell Case: CR-2026-0842-CYB | Date: 19-Aug-2026

Complainant: Chief Information Security Officer (Apex Bank)
Incident Summary:
At 03:14 UTC, unauthorized elevated root access detected across database cluster DB-SRV-09. Malicious kernel module 'k_stealth.ko' executed to alter transaction audit tables and insert unauthorized wire instructions totaling $14.2M.

Digital Seizure:
- Physical server blade sealed in Faraday enclosure #FAR-401.
- Volatile RAM dump (64 GB) captured in read-only write-blocked hardware state.
- Bit-stream disk image SHA-256 computed on-site: 112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00.`
      },
      {
        id: "DOC-CYB-FSL",
        type: "Digital Forensics Memory & Log Analysis",
        category: "forensic",
        code: "NDFC-DF-2026-781 | ISO 27037 Digital Evidence Admissibility",
        hash: "2233445566778899aabbccddeeff00112233445566778899aabbccddeeff0011",
        originalHash: "2233445566778899aabbccddeeff00112233445566778899aabbccddeeff0011",
        verified: true,
        author: "Vikram Malhotra (Lead Digital Forensics Auditor)",
        timestamp: "2026-08-28T18:00:00Z",
        content: `NATIONAL DIGITAL FORENSICS CENTER (NDFC)
Certificate of Digital Forensic Examination

Forensic Disk Imaging Verification:
Dual raw E01 bit-stream image verified against original seizure hash. 0 bit discrepancies detected. Hardware write-blocker Tableau T8u active throughout ingestion.

Forensic Discoveries:
1. Reverse engineering of 'k_stealth.ko' reveals hardcoded VPN endpoint terminating in rogue proxy server.
2. Memory dump recovered unencrypted SSH session key tied to rogue contractor terminal IP 192.168.4.112.
3. Database tamper attempt was halted before final settlement batch run.`
      }
    ],
    chainOfCustody: [
      {
        step: 1,
        agency: "Police",
        action: "Digital Write-Blocked Image Seizure",
        actor: "Cyber Squad Lead DCP Maya Sengupta",
        timestamp: "2026-08-19 14:10 IST",
        location: "Apex Bank Datacenter Vault 3",
        hash: "112233...ff00",
        details: "Server blade detached, hardware Faraday cage sealed, bit-stream SHA-256 calculated on dedicated crypto hardware."
      },
      {
        step: 2,
        agency: "Forensic Lab",
        action: "Digital Forensic Memory Carving",
        actor: "NDFC Examiner Vikram Malhotra",
        timestamp: "2026-08-28 18:00 IST",
        location: "NDFC Cleanroom Laboratory Alpha",
        hash: "223344...0011",
        details: "Forensic image examined under write-block; volatile memory artifacts extracted without altering disk state."
      },
      {
        step: 3,
        agency: "Court",
        action: "Judicial Preservation Order Under Sec 65B",
        actor: "Special Judge K. L. Sundaram",
        timestamp: "2026-09-02 11:00 IST",
        location: "Designated Cyber Tribunal",
        hash: "3c82ef...4810",
        details: "Electronic evidence docket sealed. Cryptographic hashes registered to the National Judicial Data Grid."
      }
    ]
  },
  {
    id: "NDPS-2026-0312-INT",
    title: "Interstate Narcotics Interception: Chemical Purity Discrepancy",
    dateFiled: "2026-07-11 19:40 IST",
    status: "flagged",
    statusLabel: "Tamper Alert Flagged",
    policeStation: "Narcotics Control Bureau (NCB) Field Unit",
    investigatingOfficer: "Superintendent R. K. Bishnoi",
    court: "Special NDPS Court 02",
    presidingJudge: "Hon'ble Special Judge G. V. Patwardhan",
    fslLab: "Regional Chemical Examiner's Laboratory",
    fslScientist: "Dr. Pratibha Joshi, Chemical Examiner Grade-I",
    summary: "Seizure of 18.5 kg suspect contraband from highway container. Physical custody handover logs showed unverified transit delay, triggering automated tamper detection alerts on sample weight discrepancy.",
    merkleRoot: "99aa88bb77cc66dd55ee44ff3300112288337744665522119900aabbccddeeff",
    agenciesInvolved: ["Police", "Forensic Lab", "Court"],
    documents: [
      {
        id: "DOC-NDPS-FIR",
        type: "NCB Seizure Panchnama & FIR",
        category: "police",
        code: "Sections 8(c), 21(c), 29 NDPS Act 1985",
        hash: "33445566778899aabbccddeeff00112233445566778899aabbccddeeff001122",
        originalHash: "33445566778899aabbccddeeff00112233445566778899aabbccddeeff001122",
        verified: true,
        author: "Superintendent R. K. Bishnoi",
        timestamp: "2026-07-11T20:10:00Z",
        content: `NARCOTICS CONTROL BUREAU - SEIZURE PANCHNAMA
Case: NDPS-2026-0312-INT | Place: National Highway Intercept Point #14

Seizure Particulars:
Vehicle #DL-01-AB-9844 intercepted. Concealed compartment yielded 18.5 kg off-white granular powder suspected to be high-grade Diacetylmorphine (Heroin).
Two representative samples of 50g each (Marked S-1 and S-2) drawn, placed in heat-sealed polybags, and stamped with NCB Brass Seal #08. Weight recorded on calibrated Mettler-Toledo scale: 50.00g each.`
      },
      {
        id: "DOC-NDPS-FSL",
        type: "Chemical Toxicology & Purity Certificate",
        category: "forensic",
        code: "FSL-CHEM-2026-904",
        hash: "445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233",
        originalHash: "445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233",
        verified: false,
        author: "Dr. Pratibha Joshi",
        timestamp: "2026-07-22T14:20:00Z",
        content: `REGIONAL FORENSIC SCIENCE LABORATORY - CHEMICAL DIVISION
Report: FSL/CHEM/2026/904

CRITICAL CHAIN OF CUSTODY ANOMALY DETECTED:
Sample S-1 received on 19-July-2026 (8 days post-seizure; acceptable transit window: 72 hrs).
Physical weight of sample upon FSL receipt: 41.20g (Discrepancy: -8.80g from Seizure Panchnama). Outer wax impression showed evidence of thermal re-heating and mechanical tampering.

Gas Chromatography-Mass Spectrometry (GC-MS):
Sample shows dilution with paracetamol and chalk powder. Purity: 14.2% (vs 88.5% field kit test).

ALERT:
Discrepancy logged to AegisChain. Automated non-conformance ticket dispatched to Special NDPS Judge.`
      }
    ],
    chainOfCustody: [
      {
        step: 1,
        agency: "Police",
        action: "Highway Contraband Interception",
        actor: "NCB Field Unit Team Alpha",
        timestamp: "2026-07-11 19:40 IST",
        location: "Highway Checkpost 14",
        hash: "334455...1122",
        details: "Physical sample S-1 drawn, sealed under Brass Seal 08."
      },
      {
        step: 2,
        agency: "Forensic Lab",
        action: "Weight Discrepancy & Seal Mismatch Flagged",
        actor: "Dr. Pratibha Joshi (Chemical Examiner)",
        timestamp: "2026-07-22 14:20 IST",
        location: "FSL Chemical Reception Vault",
        hash: "445566...2233",
        details: "Sample arrived 8 days late with missing 8.8g mass and compromised wax seal. Automated tamper breach recorded."
      },
      {
        step: 3,
        agency: "Court",
        action: "Custodial Inquiry & Transit Subpoena Issued",
        actor: "Special Judge G. V. Patwardhan",
        timestamp: "2026-07-25 11:30 IST",
        location: "NDPS Courtroom 02",
        hash: "99aa88...eeff",
        details: "Court initiated Section 340 inquiry into police courier transit team based on AegisChain cryptographic audit flag."
      }
    ]
  },
  {
    id: "ECIR-2026-0049-COR",
    title: "State Infrastructure Procurement Tender Manipulation",
    dateFiled: "2026-06-03 10:15 IST",
    status: "secured",
    statusLabel: "Secured & Verified",
    policeStation: "Anti-Corruption Branch (ACB)",
    investigatingOfficer: "SP Vikramaditya Chawla",
    court: "Special Anti-Corruption Court 01",
    presidingJudge: "Hon'ble Special Judge M. S. Gill",
    fslLab: "Forensic Document Examination Division (QD)",
    fslScientist: "P. R. Krishnan, Chief Questioned Documents Examiner",
    summary: "Investigation into substitution of technical bid evaluation sheets in a $45M bridge construction project. Cryptographic document hashing prevented defense claim of accidental misplacement.",
    merkleRoot: "fa0182649b10938472658193a029384756281938475629103847561928374651",
    agenciesInvolved: ["Police", "Forensic Lab", "Court"],
    documents: [
      {
        id: "DOC-ACB-FIR",
        type: "ACB Vigilance Complaint & FIR",
        category: "police",
        code: "Prevention of Corruption Act Sec 13(1)(b) & Sec 468, 471 IPC",
        hash: "7788990011223344556677889900112233445566778899001122334455667788",
        originalHash: "7788990011223344556677889900112233445566778899001122334455667788",
        verified: true,
        author: "SP Vikramaditya Chawla",
        timestamp: "2026-06-03T11:00:00Z",
        content: `ANTI-CORRUPTION BRANCH - OFFICIAL VIGILANCE INQUIRY
Case ECIR-2026-0049-COR | Date: 03-June-2026

Allegation:
Officials in State Infrastructure Department secretly swapped Page 14 of the Technical Bid Evaluation Matrix on 28-May-2026 to artificially disqualify the lowest bidder (L1) and award a $45M bridge contract to a favoured contractor (L2).

Original Scanned Ingestion:
Hardcopy tender files were scanned and digitally hashed onto AegisChain on 22-May-2026. Hash token: 778899001122...7788. Any subsequent substitution will fail Merkle validation.`
      },
      {
        id: "DOC-QD-FSL",
        type: "Questioned Documents & Ink Chromatography Report",
        category: "forensic",
        code: "CFSL-QD-2026-118",
        hash: "8899001122334455667788990011223344556677889900112233445566778899",
        originalHash: "8899001122334455667788990011223344556677889900112233445566778899",
        verified: true,
        author: "P. R. Krishnan (Chief Questioned Documents Examiner)",
        timestamp: "2026-06-18T15:45:00Z",
        content: `FORENSIC DOCUMENT EXAMINATION REPORT
Laboratory Ref: CFSL/QD/2026/118

Analysis of Questioned Tender Page 14:
1. Video Spectral Comparator (VSC-8000) reveals different paper optical brightener in questioned Page 14 compared to Pages 1-13 and 15-40.
2. Thin Layer Chromatography (TLC) of ballpoint ink signatures on Page 14 confirms different chemical formulation from the original committee signatures on Page 13.
3. Cryptographic hash comparison with AegisChain 22-May ingestion proves questioned physical page was introduced 6 days later.`
      }
    ],
    chainOfCustody: [
      {
        step: 1,
        agency: "Police",
        action: "Seizure of Physical Tender Docket",
        actor: "ACB Inspector Rajesh Khanna",
        timestamp: "2026-06-03 10:15 IST",
        location: "State Secretariat Infrastructure Wing",
        hash: "778899...7788",
        details: "Tender dossier seized, scanned with cryptographic timestamp and secure watermarking."
      },
      {
        step: 2,
        agency: "Forensic Lab",
        action: "Spectroscopic & Ink Chromatography Confirmation",
        actor: "Chief QD Examiner P. R. Krishnan",
        timestamp: "2026-06-18 15:45 IST",
        location: "CFSL Document Examination Wing",
        hash: "889900...8899",
        details: "Ink TLC and VSC optical analysis confirmed document page swapping attempt."
      },
      {
        step: 3,
        agency: "Court",
        action: "Direct Judicial Framing of Charges",
        actor: "Special Judge M. S. Gill",
        timestamp: "2026-06-30 11:00 IST",
        location: "Special Anti-Corruption Court 01",
        hash: "fa0182...4651",
        details: "Accused officials remanded; tampering defense rejected based on immutable Merkle root proof."
      }
    ]
  }
];

// ==========================================================================
// Application State
// ==========================================================================
let currentCaseId = "FIR-2026-1194-HOM";
let currentAgencyFilter = "all";
let currentSearchTerm = "";
let currentStatusFilter = "all";
let activeDossierTab = "timeline";
let selectedDocumentForTamper = null;
let currentDocumentOriginalText = "";
let currentSimulatedText = "";

// ==========================================================================
// Web Crypto Cryptographic Utility
// ==========================================================================
async function calculateSha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// ==========================================================================
// Multilingual Engine
// ==========================================================================
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;

  const t = TRANSLATIONS[lang];

  // Update all DOM elements marked with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update placeholders
  const searchInput = document.getElementById("case-search-input");
  if (searchInput && t.search_placeholder) {
    searchInput.placeholder = t.search_placeholder;
  }

  // Update active state in tamper lab
  evaluateTamperState();

  // Re-render views with new language
  renderCaseList();
  renderCaseDossier(currentCaseId);

  const langNames = { en: "English", hi: "हिन्दी", es: "Español", fr: "Français", mr: "मराठी" };
  showToast(`Language set to: ${langNames[lang] || lang}`, "success");
}

// ==========================================================================
// Initialization & DOM Setup
// ==========================================================================
document.addEventListener("DOMContentLoaded", async () => {
  setupNavigation();
  setupAgencyFilterPills();
  setupSearchAndFilters();
  setupDossierTabs();
  setupModalHandlers();
  setupLanguageDropdown();
  
  // Render initial views
  renderCaseList();
  renderCaseDossier(currentCaseId);
  setupTamperLabWithFirstDoc();

  showToast("AEGIS-VERITAS Ready: Clean Light Theme & Multilingual Enabled", "success");
});

function setupLanguageDropdown() {
  const select = document.getElementById("language-select");
  if (select) {
    select.value = currentLang;
    select.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }
}

// ==========================================================================
// Navigation & Agency Switching
// ==========================================================================
function setupNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetView = btn.dataset.view;

      if (targetView === "dashboard") {
        document.getElementById("main-cases-view").style.display = "grid";
        document.getElementById("arch-comparison-view").style.display = "none";
      } else if (targetView === "tamper-lab") {
        document.getElementById("main-cases-view").style.display = "grid";
        document.getElementById("arch-comparison-view").style.display = "none";
        switchDossierTab("tamper-lab");
      } else if (targetView === "architecture") {
        document.getElementById("main-cases-view").style.display = "none";
        document.getElementById("arch-comparison-view").style.display = "block";
      }
    });
  });
}

function setupAgencyFilterPills() {
  const pills = document.querySelectorAll(".agency-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.className = "agency-pill");
      const agency = pill.dataset.agency;
      currentAgencyFilter = agency;

      if (agency === "all") pill.classList.add("active-all");
      else if (agency === "police") pill.classList.add("active-police");
      else if (agency === "forensic") pill.classList.add("active-forensic");
      else if (agency === "court") pill.classList.add("active-court");

      renderCaseList();
      renderCaseDossier(currentCaseId);
      showToast(`Filter: ${agency.toUpperCase()}`, "success");
    });
  });
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById("case-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value.toLowerCase();
      renderCaseList();
    });
  }

  const filterBtns = document.querySelectorAll(".case-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentStatusFilter = btn.dataset.status;
      renderCaseList();
    });
  });
}

function setupDossierTabs() {
  const tabBtns = document.querySelectorAll(".subtab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      switchDossierTab(tab);
    });
  });
}

function switchDossierTab(tab) {
  activeDossierTab = tab;
  document.querySelectorAll(".subtab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });

  const timelineContainer = document.getElementById("dossier-timeline-content");
  const docsContainer = document.getElementById("dossier-docs-content");
  const tamperContainer = document.getElementById("dossier-tamper-content");

  if (timelineContainer) timelineContainer.style.display = tab === "timeline" ? "block" : "none";
  if (docsContainer) docsContainer.style.display = tab === "documents" ? "block" : "none";
  if (tamperContainer) {
    tamperContainer.style.display = tab === "tamper-lab" ? "block" : "none";
    if (tab === "tamper-lab") {
      setupTamperLabWithFirstDoc();
    }
  }
}

// ==========================================================================
// Rendering: Case Explorer (Left Column)
// ==========================================================================
function renderCaseList() {
  const container = document.getElementById("case-items-list");
  if (!container) return;

  const filteredCases = CASES_DATA.filter(c => {
    if (currentAgencyFilter !== "all") {
      const agencyName = currentAgencyFilter === "police" ? "Police" : currentAgencyFilter === "forensic" ? "Forensic Lab" : "Court";
      if (!c.agenciesInvolved.includes(agencyName)) return false;
    }
    if (currentStatusFilter !== "all" && c.status !== currentStatusFilter) {
      return false;
    }
    if (currentSearchTerm) {
      const matchId = c.id.toLowerCase().includes(currentSearchTerm);
      const matchTitle = c.title.toLowerCase().includes(currentSearchTerm);
      const matchOfficer = c.investigatingOfficer.toLowerCase().includes(currentSearchTerm);
      const matchCourt = c.court.toLowerCase().includes(currentSearchTerm);
      return matchId || matchTitle || matchOfficer || matchCourt;
    }
    return true;
  });

  if (filteredCases.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-dim);">
        <p style="font-size: 0.85rem;">No matching case records found.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredCases.map(c => {
    const isSelected = c.id === currentCaseId;
    let statusClass = "status-secured";
    if (c.status === "trial") statusClass = "status-trial";
    else if (c.status === "fsl-analysis") statusClass = "status-fsl-analysis";
    else if (c.status === "flagged") statusClass = "status-flagged";

    return `
      <div class="case-card ${isSelected ? "selected" : ""}" onclick="selectCase('${c.id}')">
        <div class="case-card-header">
          <span class="case-id">${c.id}</span>
          <span class="case-status-badge ${statusClass}">${c.statusLabel}</span>
        </div>
        <div class="case-card-title">${c.title}</div>
        <div class="case-card-meta">
          <span>${c.dateFiled}</span>
          <span style="font-family: var(--font-mono); color: var(--accent-blue); font-weight: 700;">ROOT: ${c.merkleRoot.substring(0, 8)}...</span>
        </div>
        <div class="case-badges-row">
          <span class="mini-agency-tag">Police: ${c.investigatingOfficer.split(" ")[0]}</span>
          <span class="mini-agency-tag">FSL Lab</span>
          <span class="mini-agency-tag">Court Bench</span>
        </div>
      </div>
    `;
  }).join("");
}

function selectCase(caseId) {
  currentCaseId = caseId;
  renderCaseList();
  renderCaseDossier(caseId);
  setupTamperLabWithFirstDoc();
}

// ==========================================================================
// Rendering: Case Dossier & Chain of Custody (Right Column)
// ==========================================================================
function renderCaseDossier(caseId) {
  const caseItem = CASES_DATA.find(c => c.id === caseId);
  if (!caseItem) return;

  const titleEl = document.getElementById("dossier-case-title");
  const metaEl = document.getElementById("dossier-case-meta");
  if (titleEl) {
    titleEl.innerHTML = `
      ${caseItem.title}
      <span class="badge-veritas">
        ${caseItem.id}
      </span>
    `;
  }
  if (metaEl) {
    metaEl.innerHTML = `
      <span><strong>Presiding:</strong> ${caseItem.presidingJudge}</span>
      <span><strong>Investigator:</strong> ${caseItem.investigatingOfficer}</span>
      <span><strong>Forensics:</strong> ${caseItem.fslLab}</span>
    `;
  }

  // Chain of Custody Timeline
  const timelineContent = document.getElementById("dossier-timeline-content");
  if (timelineContent) {
    let filteredChain = caseItem.chainOfCustody;
    if (currentAgencyFilter !== "all") {
      const agencyName = currentAgencyFilter === "police" ? "Police" : currentAgencyFilter === "forensic" ? "Forensic Lab" : "Court";
      filteredChain = caseItem.chainOfCustody.filter(step => step.agency === agencyName);
    }

    timelineContent.innerHTML = `
      <div class="chain-timeline">
        ${filteredChain.map(step => {
          let markerClass = "marker-police";
          let badgeClass = "badge-police";
          if (step.agency === "Forensic Lab") { markerClass = "marker-forensic"; badgeClass = "badge-forensic"; }
          else if (step.agency === "Court") { markerClass = "marker-court"; badgeClass = "badge-court"; }

          return `
            <div class="timeline-step">
              <div class="timeline-node-marker ${markerClass}">
                <div style="width: 6px; height: 6px; background: #ffffff; border-radius: 50%;"></div>
              </div>
              <div class="step-header">
                <div class="step-actor-info">
                  <span class="step-agency-badge ${badgeClass}">${step.agency}</span>
                  <span class="step-title">${step.action}</span>
                </div>
                <span class="step-time">${step.timestamp}</span>
              </div>
              <div class="step-body">
                <p><strong>Actor:</strong> ${step.actor} | <strong>Location:</strong> ${step.location}</p>
                <p style="margin-top: 4px; color: var(--text-body);">${step.details}</p>
              </div>
              <div class="step-crypto-footer">
                <div>
                  <span class="crypto-hash-label">HASH: </span>
                  <span class="crypto-hash-val">${step.hash}</span>
                </div>
                <div class="verification-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>LEDGER CONFIRMED</span>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // Documents Grid
  const docsContent = document.getElementById("dossier-docs-content");
  if (docsContent) {
    let filteredDocs = caseItem.documents;
    if (currentAgencyFilter !== "all") {
      filteredDocs = caseItem.documents.filter(doc => doc.category === currentAgencyFilter);
    }

    docsContent.innerHTML = `
      <div class="doc-cards-grid">
        ${filteredDocs.map(doc => {
          let catColor = "var(--police-color)";
          let catBg = "var(--police-bg)";
          if (doc.category === "forensic") { catColor = "var(--forensic-color)"; catBg = "var(--forensic-bg)"; }
          else if (doc.category === "court") { catColor = "var(--court-color)"; catBg = "var(--court-bg)"; }

          return `
            <div class="doc-tile" onclick="openDocumentModal('${caseItem.id}', '${doc.id}')">
              <div class="doc-tile-top">
                <div class="doc-icon-box" style="background: ${catBg}; color: ${catColor};">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <span class="subtab-badge" style="color: ${catColor}; border: 1px solid ${catColor};">${doc.category.toUpperCase()}</span>
              </div>
              <h3>${doc.type}</h3>
              <p>${doc.code}</p>
              <div class="doc-tile-meta">
                <span>By ${doc.author.split("(")[0]}</span>
                <span class="doc-hash-preview">${doc.hash.substring(0, 10)}...</span>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }
}

// ==========================================================================
// Interactive Tamper Simulator Lab
// ==========================================================================
function setupTamperLabWithFirstDoc() {
  const caseItem = CASES_DATA.find(c => c.id === currentCaseId);
  if (!caseItem || !caseItem.documents.length) return;

  const docSelect = document.getElementById("tamper-doc-select");
  if (docSelect) {
    docSelect.innerHTML = caseItem.documents.map(d => `
      <option value="${d.id}">${d.type} (${d.category.toUpperCase()})</option>
    `).join("");

    docSelect.value = caseItem.documents[0].id;
    loadDocumentIntoTamperStation(caseItem.documents[0]);

    docSelect.onchange = (e) => {
      const selected = caseItem.documents.find(d => d.id === e.target.value);
      if (selected) loadDocumentIntoTamperStation(selected);
    };
  }
}

function loadDocumentIntoTamperStation(doc) {
  selectedDocumentForTamper = doc;
  currentDocumentOriginalText = doc.content;
  currentSimulatedText = doc.content;

  const textarea = document.getElementById("tamper-input-text");
  const origHashEl = document.getElementById("tamper-original-hash");
  const recalcHashEl = document.getElementById("tamper-recalc-hash");

  if (textarea) textarea.value = currentSimulatedText;
  if (origHashEl) origHashEl.textContent = doc.originalHash;
  if (recalcHashEl) recalcHashEl.textContent = doc.originalHash;

  updateTamperUIState(true);

  if (textarea) {
    textarea.oninput = async (e) => {
      currentSimulatedText = e.target.value;
      await evaluateTamperState();
    };
  }
}

async function evaluateTamperState() {
  const newHash = await calculateSha256(currentSimulatedText);
  const recalcHashEl = document.getElementById("tamper-recalc-hash");
  const isIdentical = currentSimulatedText.trim() === currentDocumentOriginalText.trim();

  if (recalcHashEl) recalcHashEl.textContent = newHash;

  updateTamperUIState(isIdentical);
}

function updateTamperUIState(isVerified) {
  const statusBanner = document.getElementById("tamper-integrity-status");
  const rightCard = document.getElementById("tamper-recalc-card");
  const recalcHashBox = document.getElementById("tamper-recalc-hash-box");
  const textarea = document.getElementById("tamper-input-text");
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  if (isVerified) {
    if (statusBanner) {
      statusBanner.className = "alert-badge";
      statusBanner.style.background = "var(--accent-emerald-light)";
      statusBanner.style.borderColor = "#a7f3d0";
      statusBanner.style.color = "var(--accent-emerald)";
      statusBanner.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${t.status_verified}</span>
      `;
    }
    if (rightCard) rightCard.className = "tamper-card verified";
    if (recalcHashBox) recalcHashBox.className = "hash-box match";
    if (textarea) textarea.classList.remove("flagged");
  } else {
    if (statusBanner) {
      statusBanner.className = "alert-badge";
      statusBanner.style.background = "var(--accent-rose-light)";
      statusBanner.style.borderColor = "#fca5a5";
      statusBanner.style.color = "var(--accent-rose)";
      statusBanner.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>${t.status_tampered}</span>
      `;
    }
    if (rightCard) rightCard.className = "tamper-card tampered";
    if (recalcHashBox) recalcHashBox.className = "hash-box mismatch";
    if (textarea) textarea.classList.add("flagged");
  }
}

// Preset Tamper Injections
window.injectTamperScenario = async function(type) {
  const textarea = document.getElementById("tamper-input-text");
  if (!textarea || !selectedDocumentForTamper) return;

  let text = textarea.value;

  if (type === "weapon") {
    text = text.replace(/GK-9821-XP/g, "UNREGISTERED-PISTOL-0000");
    text = text.replace(/conclusively fired from the seized weapon/g, "INCONCLUSIVE and unlinked to seized weapon");
    showToast("Tamper Simulated: Altered forensic weapon serial & ballistic match!", "alert");
  } else if (type === "witness") {
    text = text.replace(/without hesitation/g, "WITH EXTREME HESITATION and admitted poor visibility");
    text = text.replace(/I distinctly saw accused K. R. Mehra/g, "I could NOT identify the person");
    showToast("Tamper Simulated: Substituted eyewitness testimony!", "alert");
  } else if (type === "narcotics") {
    text = text.replace(/18.5 kg/g, "0.5 kg (Personal Consumption)");
    text = text.replace(/Purity: 14.2%/g, "Purity: 0.0% (Non-Narcotic Sugar)");
    showToast("Tamper Simulated: Diluted contraband weight & chemical purity!", "alert");
  } else if (type === "timestamp") {
    text = text.replace(/23:45 Hours/g, "17:30 Hours (Accused was in transit)");
    showToast("Tamper Simulated: Shifted FIR occurrence time to forge alibi!", "alert");
  }

  textarea.value = text;
  currentSimulatedText = text;
  await evaluateTamperState();
};

window.resetTamperClean = async function() {
  if (!selectedDocumentForTamper) return;
  const textarea = document.getElementById("tamper-input-text");
  if (textarea) {
    textarea.value = currentDocumentOriginalText;
    currentSimulatedText = currentDocumentOriginalText;
    await evaluateTamperState();
    showToast("Document restored to authentic original state.", "success");
  }
};

// ==========================================================================
// Modals
// ==========================================================================
function setupModalHandlers() {
  const overlay = document.getElementById("doc-modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");
  if (overlay && closeBtn) {
    closeBtn.addEventListener("click", () => overlay.classList.remove("open"));
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  }

  const certModal = document.getElementById("cert-modal-overlay");
  const certCloseBtn = document.getElementById("cert-close-btn");
  if (certModal && certCloseBtn) {
    certCloseBtn.addEventListener("click", () => certModal.classList.remove("open"));
    certModal.addEventListener("click", (e) => {
      if (e.target === certModal) certModal.classList.remove("open");
    });
  }
}

window.openDocumentModal = function(caseId, docId) {
  const caseItem = CASES_DATA.find(c => c.id === caseId);
  if (!caseItem) return;
  const doc = caseItem.documents.find(d => d.id === docId);
  if (!doc) return;

  const overlay = document.getElementById("doc-modal-overlay");
  const titleEl = document.getElementById("modal-doc-title");
  const bodyEl = document.getElementById("modal-doc-body");
  const hashEl = document.getElementById("modal-doc-hash");
  const signerEl = document.getElementById("modal-doc-signer");

  if (titleEl) titleEl.textContent = `${doc.type} (${doc.code})`;
  if (bodyEl) bodyEl.textContent = doc.content;
  if (hashEl) hashEl.textContent = doc.hash;
  if (signerEl) signerEl.textContent = `${doc.author} [Timestamp: ${doc.timestamp}]`;

  if (overlay) overlay.classList.add("open");
};

window.openCertificateModal = function() {
  const caseItem = CASES_DATA.find(c => c.id === currentCaseId);
  if (!caseItem) return;

  const certModal = document.getElementById("cert-modal-overlay");
  const caseIdEl = document.getElementById("cert-case-id");
  const courtEl = document.getElementById("cert-court");
  const rootEl = document.getElementById("cert-merkle-root");
  const officerEl = document.getElementById("cert-officer");
  const fslEl = document.getElementById("cert-fsl");

  if (caseIdEl) caseIdEl.textContent = caseItem.id;
  if (courtEl) courtEl.textContent = caseItem.court;
  if (rootEl) rootEl.textContent = caseItem.merkleRoot;
  if (officerEl) officerEl.textContent = caseItem.investigatingOfficer;
  if (fslEl) fslEl.textContent = `${caseItem.fslScientist} (${caseItem.fslLab})`;

  if (certModal) certModal.classList.add("open");
};

window.printCertificate = function() {
  window.print();
};

// ==========================================================================
// Toast Notification
// ==========================================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  `;
  if (type === "alert") {
    icon = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    `;
  }

  toast.innerHTML = `
    ${icon}
    <div style="flex: 1;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
