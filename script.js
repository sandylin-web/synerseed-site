document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    zh: {
      "nav.who":"關於我們","nav.what":"服務內容","nav.value":"合作方式","nav.experience":"案例介紹","nav.leadership":"負責人","nav.contact":"聯絡我們",
      "cta.contact":"聯絡我們",
      "hero.line":"決策的關鍵在於結構。","hero.desc":"我們建立信任、設計結構，並陪伴企業將台日之間的商務機會推進到執行與成長。",
      "trust.lead":"從信任出發，讓價值持續擴張。","trust.desc":"我們以信任為起點，設計合作結構，推進具體執行，讓一次合作延伸為長期成長。",
      "trust.step1.title":"建立信任","trust.step1.desc":"理解合作雙方，建立可被相信的商務基礎。",
      "trust.step2.title":"設計結構","trust.step2.desc":"整理條件與角色，形成可執行的合作方式。",
      "trust.step3.title":"推進執行","trust.step3.desc":"將討論轉化為行動，協助成果落地。",
      "trust.step4.title":"擴張價值","trust.step4.desc":"讓合作關係延伸，創造長期成長。",
      "service.bd.title":"事業開發支援","service.bd.desc":"協助企業看見日本市場中的事業機會，從合作假設、夥伴溝通到商務推進，建立可成長的合作路徑。",
      "service.sc.title":"策略顧問","service.sc.desc":"分析市場、競合與商務條件，協助企業設計能夠實際執行的日本市場策略。",
      "service.sp.title":"策略合作關係","service.sp.desc":"協助企業與可信任的合作方建立深層合作，而不是停留在表面的媒合或單次介紹。",
      "service.ln.title":"物流網絡","service.ln.desc":"連結日本物流網絡與冷鏈資源，協助建立穩定、可信任且可持續的物流合作體系。",
      "exp.bd":"日本企業事業開發支援","exp.logistics":"冷鏈物流合作",
      "leader.p1":"Sandy Lin 長期參與台日跨境合作、商務拓展、觀光與租車預約合作，以及商品與台日中英等國物流相關業務推進。",
      "leader.p2":"她的核心價值不是翻譯，而是運用日本思維的溝通方式，理解每一句話背後真正的商務意義，協助雙方形成可執行的合作共識。",
      "leader.p3":"SynerSeed 原則上每一種產業或商品只服務一家公司，避免競業疑慮，建立深層且重要的 B2B Partnership。",
      "contact.title":"Let’s discuss your next opportunity in Japan."
    },
    ja: {
      "nav.who":"私たちについて","nav.what":"事業内容","nav.value":"協業の進め方","nav.experience":"実績紹介","nav.leadership":"代表者","nav.contact":"お問い合わせ",
      "cta.contact":"お問い合わせ",
      "hero.line":"決策の鍵は構造。","hero.desc":"信頼を築き、構造を設計し、台湾と日本の間にある事業機会を実行と成長へつなげます。",
      "trust.lead":"信頼から、価値は拡張する。","trust.desc":"信頼を起点に、構造を設計し、実行へ移し、ひとつの協業を長期的な成長へつなげます。",
      "trust.step1.title":"信頼を築く","trust.step1.desc":"双方を理解し、信頼される商務基盤を築きます。",
      "trust.step2.title":"構造を設計する","trust.step2.desc":"条件と役割を整理し、実行可能な協業の形にします。",
      "trust.step3.title":"実行へ進める","trust.step3.desc":"議論を行動へ変え、成果の実現を支援します。",
      "trust.step4.title":"価値を拡張する","trust.step4.desc":"協業関係を発展させ、長期的な成長を創出します。",
      "service.bd.title":"事業開発支援","service.bd.desc":"日本市場での事業機会を見極め、仮説設計、パートナーとの対話、商務推進まで伴走します。",
      "service.sc.title":"戦略コンサルティング","service.sc.desc":"市場、競合、商務条件を分析し、実行可能な日本市場戦略を設計します。",
      "service.sp.title":"戦略的パートナーシップ","service.sp.desc":"信頼できるパートナーとの深い協業関係を設計し、長期的な価値創出を支援します。",
      "service.ln.title":"物流ネットワーク","service.ln.desc":"日本の物流ネットワークと冷鏈資源を連携し、安定した物流協業体制を構築します。",
      "exp.bd":"日方企業との事業開発支援","exp.logistics":"コールドチェーン物流連携",
      "leader.p1":"Sandy Lin は長期にわたり、台日間のビジネス開発、観光・レンタカー予約連携、商品および冷鏈関連業務の推進に関わってきました。",
      "leader.p2":"彼女の価値は翻訳ではなく、日本の思考や商習慣、コミュニケーションの背景を理解し、言葉の奥にある本質的な商務意思を捉え、双方が実行できる合意形成を支援することにあります。",
      "leader.p3":"SynerSeed は原則として、同一業種・同一商品において一社のみを支援し、競合の懸念を排除しながら、深く信頼される B2B パートナーシップを築きます。",
      "contact.title":"日本での次の事業機会についてご相談ください。"
    },
    en: {
      "nav.who":"About","nav.what":"Services","nav.value":"Approach","nav.experience":"Experience","nav.leadership":"Leadership","nav.contact":"Contact",
      "cta.contact":"Contact Us",
      "hero.line":"The key to decisions is structure.","hero.desc":"We build trust, design business structures, and move opportunities between Taiwan and Japan into execution and growth.",
      "trust.lead":"From trust, value multiplies.","trust.desc":"Starting from trust, we design collaboration structures, move into execution and extend each opportunity into long-term growth.",
      "trust.step1.title":"Build Trust","trust.step1.desc":"Understand both sides and build a reliable business foundation.",
      "trust.step2.title":"Design Structure","trust.step2.desc":"Clarify conditions and roles to create an executable collaboration model.",
      "trust.step3.title":"Drive Execution","trust.step3.desc":"Turn discussions into action and help results take shape.",
      "trust.step4.title":"Multiply Value","trust.step4.desc":"Extend partnerships and create long-term growth.",
      "service.bd.title":"Business Development","service.bd.desc":"We identify business opportunities in Japan and support companies from partnership hypotheses to business execution.",
      "service.sc.title":"Strategic Consulting","service.sc.desc":"We analyze markets, competitors and commercial conditions to design executable Japan market strategies.",
      "service.sp.title":"Strategic Partnership","service.sp.desc":"We help companies build deep collaboration with trusted partners, beyond surface-level matching or one-time introductions.",
      "service.ln.title":"Logistics Network","service.ln.desc":"We connect Japanese logistics networks and cold-chain resources to build stable and trusted logistics partnerships.",
      "exp.bd":"Business development support with Japanese companies","exp.logistics":"Cold-chain logistics collaboration",
      "leader.p1":"Sandy Lin has long been involved in Taiwan-Japan cross-border collaboration, business development, tourism and rent-a-car reservation partnerships, as well as product and cold-chain related business initiatives.",
      "leader.p2":"Her value is not translation. It lies in understanding Japanese business thinking, communication context and the real commercial intent behind each sentence, helping both sides form executable alignment.",
      "leader.p3":"SynerSeed supports only one company per industry or product category in principle, avoiding conflicts of interest and building deep, trusted B2B partnerships.",
      "contact.title":"Let’s discuss your next opportunity in Japan."
    }
  };

  const items = document.querySelectorAll("[data-i18n]");
  const buttons = document.querySelectorAll("[data-lang]");
  const globe = document.querySelector(".globe-button");
  const panel = document.querySelector(".language-panel");
  const current = document.querySelector(".current-lang");

  function setLang(lang){
    const dict = translations[lang] || translations.zh;
    items.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if(dict[key]) el.textContent = dict[key];
    });
    buttons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
    current.textContent = lang === "ja" ? "日本語" : lang === "en" ? "EN" : "繁中";
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : lang;
    localStorage.setItem("synerseed-lang", lang);
  }

  globe.addEventListener("click", () => {
    panel.classList.toggle("open");
    globe.setAttribute("aria-expanded", panel.classList.contains("open") ? "true" : "false");
  });

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      panel.classList.remove("open");
      globe.setAttribute("aria-expanded","false");
    });
  });

  document.addEventListener("click", e => {
    if(!e.target.closest(".language-menu")) {
      panel.classList.remove("open");
      globe.setAttribute("aria-expanded","false");
    }
  });

  setLang(localStorage.getItem("synerseed-lang") || "zh");
});
