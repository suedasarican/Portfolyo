// Sevimli erkek kedi SVG maskot — CSS animasyonları ile hayat buluyor
export default function CatMascot({ size = 140 }) {
  return (
    <div
      className="cat-float select-none pointer-events-none"
      style={{ width: size, height: size * 1.1 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 140 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* ── KUYRUK ─────────────────────────────────── */}
        <g className="cat-tail" style={{ transformOrigin: '110px 135px' }}>
          <path
            d="M 108 135 Q 135 120 128 100 Q 122 82 110 90"
            stroke="#e8c4b8"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />
          {/* Kuyruk ucu beyaz tüy */}
          <circle cx="110" cy="90" r="6" fill="#fff5f0" />
        </g>

        {/* ── GÖVDE ──────────────────────────────────── */}
        <ellipse cx="72" cy="118" rx="36" ry="32" fill="#f4d0c4" />
        {/* Göğüs beyaz bölgesi */}
        <ellipse cx="72" cy="125" rx="20" ry="20" fill="#fff5f0" />

        {/* ── ARKA AYAKLAR ───────────────────────────── */}
        <ellipse cx="50" cy="147" rx="13" ry="8" fill="#e8c4b8" />
        <ellipse cx="94" cy="147" rx="13" ry="8" fill="#e8c4b8" />
        {/* Pençe çizgileri */}
        <line x1="44" y1="151" x2="44" y2="155" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="50" y1="152" x2="50" y2="156" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="56" y1="151" x2="56" y2="155" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="88" y1="151" x2="88" y2="155" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="94" y1="152" x2="94" y2="156" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="100" y1="151" x2="100" y2="155" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>

        {/* ── ÖN AYAKLAR ─────────────────────────────── */}
        <rect x="56" y="135" width="14" height="18" rx="7" fill="#f4d0c4" />
        <rect x="74" y="135" width="14" height="18" rx="7" fill="#f4d0c4" />
        {/* Ön pençe çizgileri */}
        <line x1="60" y1="150" x2="60" y2="154" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="64" y1="151" x2="64" y2="155" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="78" y1="150" x2="78" y2="154" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="82" y1="151" x2="82" y2="155" stroke="#d4a090" strokeWidth="1.5" strokeLinecap="round"/>

        {/* ── BAŞ ────────────────────────────────────── */}
        <circle cx="72" cy="80" r="35" fill="#f4d0c4" />

        {/* ── KULAKLAR ───────────────────────────────── */}
        {/* Sol kulak */}
        <g className="cat-ear-left">
          <polygon points="42,55 35,28 58,45" fill="#f4d0c4" />
          <polygon points="44,52 38,33 56,46" fill="#f9a8d4" />
        </g>
        {/* Sağ kulak */}
        <polygon points="102,55 109,28 86,45" fill="#f4d0c4" />
        <polygon points="100,52 106,33 88,46" fill="#f9a8d4" />

        {/* ── YÜZ - PATLAMA (çilli) ──────────────────── */}
        <circle cx="62" cy="72" r="2" fill="#e8a090" opacity="0.6" />
        <circle cx="82" cy="72" r="2" fill="#e8a090" opacity="0.6" />
        <circle cx="72" cy="69" r="1.5" fill="#e8a090" opacity="0.4" />

        {/* ── GÖZLER ─────────────────────────────────── */}
        {/* Sol göz */}
        <g className="cat-eye" style={{ transformOrigin: '60px 78px' }}>
          <ellipse cx="60" cy="78" rx="8" ry="8.5" fill="#3d2b1f" />
          <ellipse cx="60" cy="78" rx="4" ry="8" fill="#2a1a10" />
          {/* Göz parıltısı */}
          <circle cx="56" cy="74" r="2.5" fill="white" opacity="0.9" />
          <circle cx="62" cy="76" r="1.2" fill="white" opacity="0.6" />
          {/* İris */}
          <ellipse cx="60" cy="78" rx="5.5" ry="5" fill="#6b4c3b" opacity="0.5" />
        </g>
        {/* Sağ göz */}
        <g className="cat-eye" style={{ transformOrigin: '84px 78px' }}>
          <ellipse cx="84" cy="78" rx="8" ry="8.5" fill="#3d2b1f" />
          <ellipse cx="84" cy="78" rx="4" ry="8" fill="#2a1a10" />
          <circle cx="80" cy="74" r="2.5" fill="white" opacity="0.9" />
          <circle cx="86" cy="76" r="1.2" fill="white" opacity="0.6" />
          <ellipse cx="84" cy="78" rx="5.5" ry="5" fill="#6b4c3b" opacity="0.5" />
        </g>

        {/* ── BURUN ──────────────────────────────────── */}
        <ellipse cx="72" cy="90" rx="4" ry="3" fill="#f9a8d4" />

        {/* ── AĞIZ & BIYIKLAR ────────────────────────── */}
        <path d="M 72 93 Q 65 99 60 97" stroke="#c4706a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 72 93 Q 79 99 84 97" stroke="#c4706a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Bıyıklar - sol */}
        <line x1="44" y1="88" x2="62" y2="91" stroke="#d4b0a0" strokeWidth="1" strokeLinecap="round" opacity="0.8"/>
        <line x1="42" y1="93" x2="62" y2="93" stroke="#d4b0a0" strokeWidth="1" strokeLinecap="round" opacity="0.8"/>
        <line x1="44" y1="98" x2="62" y2="95" stroke="#d4b0a0" strokeWidth="1" strokeLinecap="round" opacity="0.8"/>
        {/* Bıyıklar - sağ */}
        <line x1="100" y1="88" x2="82" y2="91" stroke="#d4b0a0" strokeWidth="1" strokeLinecap="round" opacity="0.8"/>
        <line x1="102" y1="93" x2="82" y2="93" stroke="#d4b0a0" strokeWidth="1" strokeLinecap="round" opacity="0.8"/>
        <line x1="100" y1="98" x2="82" y2="95" stroke="#d4b0a0" strokeWidth="1" strokeLinecap="round" opacity="0.8"/>

        {/* ── YAKA BANT & ÇAN ────────────────────────── */}
        <rect x="54" y="108" width="36" height="8" rx="4" fill="#f9a8d4" />
        <circle cx="72" cy="118" r="5" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1" />
        <circle cx="72" cy="121" r="1.5" fill="#f59e0b" />
      </svg>
    </div>
  );
}
