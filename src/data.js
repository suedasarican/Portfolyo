import { Plane, Dna, Cloud, Microscope, Smartphone, Terminal, Gamepad2 } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "TEKNOFEST 2026 | Havacılıkta Yapay Zeka (İHA Nesne Tespiti)",
    content: "Ön Tasarım Raporu başarıyla geçildi; Albumentations ile zorlu hava koşulları için sentetik veri üretildi. YOLOv8 ile nesne tespiti sağlandı, Kalman Filtresi destekli ego-motion telafi stratejisi geliştirildi.",
    Icon: Plane,
    position: { top: '25%', left: '20%' },
    delay: 0,
  },
  {
    id: 2,
    title: "TEKNOFEST 2026 | Sağlıkta Yapay Zeka (Varyant Sınıflandırma)",
    content: "Proje Sunuş Raporu başarıyla geçildi; sınıf dengesizliği için CTGAN ile sentetik veri artırımı uygulandı. Overfitting riskine karşı XGBoost ve LightGBM tabanlı Stacking Ensemble mimarisi kurgulandı.",
    Icon: Dna,
    position: { top: '35%', left: '45%' },
    delay: 2,
  },
  {
    id: 3,
    title: "SmartClass AIoT Automation System",
    content: "ESP32 sensör verileri Firebase'e entegre edilerek, Keras/TensorFlow (LSTM) tabanlı proaktif kararlar alan bulut yapay zeka servisi geliştirildi. Çok disiplinli (EE & Bilgisayar) bir ekiple, otonom kararların izlendiği React tabanlı arayüz tasarlandı.",
    Icon: Cloud,
    position: { top: '25%', left: '70%' },
    delay: 4,
  },
  {
    id: 4,
    title: "Blood Cell Classification (AI Model)",
    content: "Kan hücresi görüntülerini yüksek doğrulukla sınıflandırmak üzere Python ile Konvolüsyonel Sinir Ağı (CNN) modeli tasarlandı.",
    Icon: Microscope,
    position: { top: '50%', left: '80%' },
    delay: 1,
  },
  {
    id: 5,
    title: "Web & Mobil Ürün Geliştirme (Yumi & CampusCareer)",
    content: "Yumi: Eğitici oyuncaklar için React, ASP.NET Core ve PostgreSQL kullanılarak geliştirilen full-stack e-ticaret platformu. CampusCareer: Öğrenciler için React Native ve Firebase (Firestore, Auth) kullanılarak geliştirilen, gerçek zamanlı mobil kariyer uygulaması.",
    Icon: Smartphone,
    position: { top: '55%', left: '35%' },
    delay: 3,
  },
  {
    id: 6,
    title: "42 Core Curriculum",
    content: "C dilinde bellek yönetimi ve sistem mimarisi odaklı projeler: Özel C kütüphanesi (Libft), bellek sızıntısız statik değişkenli dosya okuma (get_next_line), varyadik argüman yönetimi (ft_printf) ve O(n log n) karmaşıklığına sahip yığın (stack) tabanlı asimptotik sıralama algoritması (push_swap).",
    Icon: Terminal,
    position: { top: '75%', left: '50%' },
    delay: 5,
  },
  {
    id: 7,
    title: "Fragments of Time (GameJam)",
    content: "Yapay Zeka ve Teknoloji Akademisi kapsamında, 72 saat içinde Unity ve C# kullanılarak geliştirilen 2D oyun projesi.",
    Icon: Gamepad2,
    position: { top: '75%', left: '75%' },
    delay: 2.5,
  }
];

export const aboutData = {
  aboutMe: "Yapay zeka ve modern yazılım teknolojileriyle ilgilenen Bilgisayar Mühendisliği öğrencisiyim. Proje tabanlı öğrenmeye önem vererek derin öğrenme modelleri eğitiyor, web ve mobil platformlar için kod yazıyorum.",
  education: "İst. Medeniyet Üni. (Bilgisayar Müh. GPA: 3.59), 42 İstanbul (Ecole 42), Google Yapay Zeka Akademisi.",
  skills: "C, C#, Python, Java, JavaScript, TypeScript, React.js, React Native, ASP.NET Core.",
  ai: "Derin Öğrenme (CNN, YOLO), Computer Vision, ML, NumPy, Pandas, TensorFlow.",
  databases: "PostgreSQL, Oracle, Firebase (NoSQL).",
  certificates: "Google Proje Yönetimi Profesyonel Sertifikası, Yapay Zeka Eklentili Oyun Geliştirme.",
  languages: "İngilizce - B2"
};

export const contactData = {
  phone: "+905079000743",
  email: "suedanurssarican@gmail.com",
  location: "Üsküdar / İstanbul",
  linkedin: "www.linkedin.com/in/süeda-nur-sarıcan",
  github: "github.com/suedasarican"
};
