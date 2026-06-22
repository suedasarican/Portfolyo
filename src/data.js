// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "YUMI",
    subtitle: "Full-Stack E-Ticaret Platformu",
    description:
      "Eğitici oyuncaklar için React, ASP.NET Core ve PostgreSQL ile kurgulanan modern bir full-stack e-ticaret platformu. Ürün yönetimi, sepet, ödeme akışı ve admin paneli içerir. RESTful API tasarımı ile güçlü bir backend mimarisi kurgulandı.",
    tech: ["React.js", "ASP.NET Core", "PostgreSQL", "Tailwind CSS"],
    color: "from-pink-300 to-rose-300",
    accent: "#f9a8d4",
    image: "https://placehold.co/600x400/fce7f3/be185d?text=YUMI+Platform&font=nunito",
    emoji: "🧸",
  },
  {
    id: 2,
    title: "CampusCareer",
    subtitle: "Mobil Kariyer Platformu",
    description:
      "React Native ve Firebase ile geliştirilen, öğrenciler için tasarlanmış gerçek zamanlı veri akışına sahip mobil kariyer platformu. Firestore ile anlık veri senkronizasyonu, Firebase Auth ile güvenli kimlik doğrulama sağlandı.",
    tech: ["React Native", "Firebase", "Firestore", "Firebase Auth"],
    color: "from-blue-200 to-sky-300",
    accent: "#93c5fd",
    image: "/images/campuscareer.png",
    emoji: "📱",
  },
  {
    id: 3,
    title: "SmartClass AIoT",
    subtitle: "Otonom Sınıf Otomasyon Sistemi",
    description:
      "ESP32 sensör verileri Firebase'e entegre edilerek, Keras/TensorFlow ile LSTM tabanlı proaktif kararlar alan bulut yapay zeka servisi geliştirildi. Çok disiplinli (EE & Bilgisayar) bir ekiple, otonom kararların izlendiği React tabanlı arayüz tasarlandı.",
    tech: ["ESP32", "Firebase", "LSTM", "TensorFlow", "React"],
    color: "from-violet-200 to-purple-300",
    accent: "#c4b5fd",
    image: "https://placehold.co/600x400/ede9fe/6d28d9?text=SmartClass+AIoT&font=nunito",
    emoji: "🏫",
  },
  {
    id: 4,
    title: "Fragments of Time",
    subtitle: "72 Saatlik GameJam Oyunu",
    description:
      "Yapay Zeka ve Teknoloji Akademisi kapsamında, 72 saat içinde Unity ve C# kullanılarak geliştirilen AI tabanlı 2D oyun projesi. Zaman manipülasyonu mekaniği ve procedural level generation ile özgün bir oyun deneyimi sunuldu.",
    tech: ["Unity", "C#", "AI", "2D Game Design"],
    color: "from-amber-200 to-orange-300",
    accent: "#fcd34d",
    image: "https://placehold.co/600x400/fef3c7/b45309?text=Fragments+of+Time&font=nunito",
    emoji: "🎮",
  },
  {
    id: 5,
    title: "TEKNOFEST AI",
    subtitle: "Havacılık & Sağlık Yapay Zeka",
    description:
      "İki ayrı TEKNOFEST projesi: (1) YOLOv8 ile ego-motion telafili nesne tespiti — Albumentations ile sentetik veri artırımı ve Kalman Filtresi destekli strateji. (2) CTGAN/XGBoost ile genomik varyant sınıflandırma — Stacking Ensemble mimarisi.",
    tech: ["YOLOv8", "CTGAN", "XGBoost", "Kalman Filter", "Python"],
    color: "from-teal-200 to-cyan-300",
    accent: "#5eead4",
    image: "https://placehold.co/600x400/ccfbf1/0f766e?text=TEKNOFEST+AI&font=nunito",
    emoji: "✈️",
  },
  {
    id: 6,
    title: "42 Core Curriculum",
    subtitle: "Sistem Programlama & Algoritmalar",
    description:
      "C dilinde bellek yönetimi ve sistem mimarisi odaklı projeler: Özel C kütüphanesi (Libft), bellek sızıntısız statik değişkenli dosya okuma (get_next_line), varyadik argüman yönetimi (ft_printf) ve O(n log n) yığın tabanlı asimptotik sıralama algoritması (push_swap).",
    tech: ["C", "Memory Management", "Algorithms", "Linux"],
    color: "from-slate-200 to-zinc-300",
    accent: "#94a3b8",
    image: "https://placehold.co/600x400/f1f5f9/334155?text=42+Core+Curriculum&font=nunito",
    emoji: "⚙️",
  },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    year: "2022 – Devam",
    school: "İstanbul Medeniyet Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    detail: "GPA: 3.59 / 4.00",
    color: "#f9a8d4",
    icon: "🎓",
  },
  {
    id: 2,
    year: "2024 – Devam",
    school: "42 İstanbul (Ecole 42)",
    degree: "Yazılım Mühendisliği",
    detail: "Proje tabanlı ve akran öğrenmesine dayalı, C ve sistem programlama eğitimi.",
    color: "#93c5fd",
    icon: "🏫",
  },
  {
    id: 3,
    year: "2024",
    school: "Google Yapay Zeka Akademisi",
    degree: "AI & Oyun Geliştirme",
    detail: "Unity ve C# ile yapay zeka destekli simülasyon geliştirme ve proje yönetimi.",
    color: "#6ee7b7",
    icon: "🤖",
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: "Web & Mobil",
    color: "#f9a8d4",
    bgColor: "from-pink-200 to-rose-200",
    skills: [
      { name: "React.js", level: 88 },
      { name: "React Native", level: 80 },
      { name: "ASP.NET Core", level: 75 },
    ],
  },
  {
    category: "Programlama Dilleri",
    color: "#93c5fd",
    bgColor: "from-blue-200 to-sky-200",
    skills: [
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "C# (Unity)", level: 72 },
    ],
  },
  {
    category: "Yapay Zeka & Veri",
    color: "#c4b5fd",
    bgColor: "from-violet-200 to-purple-200",
    skills: [
      { name: "Derin Öğrenme (CNN, YOLO)", level: 82 },
      { name: "Computer Vision", level: 78 },
      { name: "Makine Öğrenmesi", level: 75 },
    ],
  },
  {
    category: "Veritabanı & Araçlar",
    color: "#6ee7b7",
    bgColor: "from-emerald-200 to-teal-200",
    skills: [
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase", level: 85 },
      { name: "Linux & Git", level: 80 },
    ],
  },
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const contactData = {
  phone: "+90 507 900 07 43",
  email: "suedanurssarican@gmail.com",
  location: "Üsküdar / İstanbul",
  linkedin: "linkedin.com/in/süeda-nur-sarıcan",
  linkedinUrl: "https://www.linkedin.com/in/s%C3%BCeda-nur-sar%C4%B1can",
  github: "github.com/suedasarican",
  githubUrl: "https://github.com/suedasarican",
};
