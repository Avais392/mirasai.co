const LANGUAGES = [
  ["سرائیکی", "Saraiki"], ["اردو", "Urdu"], ["هزارگی", "Hazargi"],
  ["پښتو", "Pashto"], ["বাংলা", "Bengali"], ["پنجابی", "Punjabi"],
  ["سنڌي", "Sindhi"], ["हिन्दी", "Hindi"], ["براہوئی", "Brahui"],
  ["தமிழ்", "Tamil"], ["ಕನ್ನಡ", "Kannada"], ["کھوار", "Khowar"],
  ["بلوچی", "E. Balochi"], ["توروالی", "Torwali"], ["دری", "Dari"],
  ["فارسی", "Persian"], ["తెలుగు", "Telugu"], ["ગુજરાતી", "Gujarati"],
  ["मराठी", "Marathi"], ["চাটগাঁইয়া", "Chittagonian"],
  ["নোয়াখাইল্লা", "Noakhalian"], ["রংপুরী", "Rangpuri"],
  ["রোহিঙ্গা", "Rohingya"], ["ছিলটী", "Sylheti"], ["گوجری", "Gojri"],
  ["شینا", "Kohistani Shina"], ["بلوچی", "W. Balochi"],
  ["گاوری", "Gawri"], ["മലയാളം", "Malayalam"],
] as const;

export default function LanguageConstellation() {
  return (
    <div className="language-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {LANGUAGES.map(([nativeName, englishName], index) => {
        const row = Math.floor(index / 6);
        const column = index % 6;
        const left = 7 + column * 17 + (row % 2);
        const top = 7 + row * 20;

        return (
          <div
            key={englishName}
            className="language-token"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${-(index % 9) * 0.7}s`,
              animationDuration: `${7 + (index % 5)}s`,
            }}
          >
            <span className="language-native" dir="auto">
              {nativeName}
            </span>
            <span className="language-english">
              {englishName}
            </span>
          </div>
        );
      })}
      <div
        className="language-token"
        style={{
          right: "4%",
          bottom: "5%",
          animationDelay: "-3.2s",
          animationDuration: "10s",
        }}
      >
        <span className="language-native" dir="auto">नेपाली</span>
        <span className="language-english">Nepali</span>
      </div>
    </div>
  );
}
