const translations = {
  zh: {
    nav: { about: '關於我們', services: '服務項目', cases: '案例介紹', leader: '負責人', contact: '聯絡我們' },
    cta: '聯絡我們',
    hero: {
      kicker: '台日商務・觀光・物流・拓展日本市場',
      title1: 'Design the',
      title2: 'Decision',
      caseCta: '查看案例',
      desc: '決策的關鍵在於「結構」，而非「論點」。\nSynerSeed 透過建立「比較維度」與「評判標準」，讓決策能夠自然銜接到執行，真正推動商務落地。'
    },
    position: {
      title: 'SynerSeed 的三個核心',
      trustTitle: 'Trust｜信任', trustDesc: '建立日本商務中最重要的信任基礎，讓合作能被延伸、被介紹、被信任。',
      executionTitle: 'Execution｜執行', executionDesc: '從策略、溝通、物流到商務落地，將合作機會轉化為可執行成果。',
      partnerTitle: 'Partnership｜合夥人', partnerDesc: '不是外包，而是站在企業身邊，長期共同推進市場的 B2B Partnership。'
    },
    about: { title: 'Trust｜以信任為基礎的跨境合作', desc: 'SynerSeed 不是單純的仲介，也不是只提供建議的傳統顧問。我們協助企業理解日本市場、設計合作架構、整合物流與商務資源，並陪伴合作從初步接洽走向實際成果。' },
    services: { title: 'Execution｜驅動決策的設計', desc: '不只是提出構想，而是建立比較維度、評判標準與執行順序，讓決策能真正向前推進。' },
    execution: [
      { title: '策略設計 × 落地執行', desc: '不只停留在構想，而是轉化為可執行並能產生結果的實際行動。' },
      { title: '信任結構的建立', desc: '以日本介紹文化與協業模式為基礎，設計可被延伸的信任關係。' },
      { title: '機會發掘與優先順位', desc: '辨識市場切入點、合作順序與實作路線，讓商機不只停留在想法階段。' },
      { title: '推動決策前進', desc: '透過明確的比較維度與評判標準，提高商談中做出決策的成功率。' }
    ],
    cases: {
      title: '案例介紹',
      desc: 'SynerSeed 重視的不是短期交易，而是成為連接雙方企業信任的長期合作橋梁。在信任的基礎上，透過雙方人脈，持續拓展當地市場與全國性機會。',
      logistics: { title: '物流服務', subtitle: '信任帶來的成本優勢', desc: '在國際物流與冷鏈運輸領域，我們與日本大型宅配網絡及倉儲系統建立長期穩定的合作關係。面對全球運費高漲與供應鏈壓力，SynerSeed 並非依靠單次價格談判取得優勢，而是透過多年累積的信用與協作深度，維持具結構性的優遇條件。成本優勢的背後，是信任優勢。' },
      partner: { title: '企業合作', subtitle: '租車預約服務與介紹文化創造的新機會', desc: '在北海道租車事業的推進中，我們建立的不只是業績成長，更是與日本在地企業之間的長期信任關係。日本商務中，介紹文化具有高度價值，一個成功案例會自然延伸到下一個合作機會。真正的成長不是來自廣告曝光，而是被介紹、被認可、被信任。' }
    },
    leader: { title: 'Partnership｜負責人', desc: 'Sandy Lin 長期參與台日跨境合作、商務拓展、觀光與租車預約合作，以及商品與台日中英等國物流相關業務推進。\n\n在日本商務領域中，Sandy 擁有超過 20 年與日本企業及高階經營者的談判與合作經驗，能在專業理解與策略建議之下，協助企業發揮自身優勢，縮短雙方距離，促成雙贏的商務合作。\n\n顧問的價值不在於翻譯，而在於「理解」。我們重視的是運用日本思維的溝通方式，理解日本人每一句話背後所代表的立場、顧慮、商務邏輯與決策背景。\n\n基於專業與信任，SynerSeed 堅持每一種產業或商品僅服務一家公司，避免競業疑慮。這不是上下關係的顧問外包，而是深層且重要的 B2B Partnership。' },
    contact: { title: '歡迎與我們聯繫', desc: '針對台日商務合作、物流服務、觀光合作與拓展日本市場需求，歡迎來信洽詢。' }
  },
  ja: {
    nav: { about: '会社概要', services: 'サービス', cases: '事例紹介', leader: '責任者', contact: 'お問い合わせ' },
    cta: 'お問い合わせ',
    hero: { kicker: '台湾ビジネス・観光・物流・日本市場開拓支援', title1: 'Design the', title2: 'Decision', caseCta: '事例を見る', desc: '意思決定の鍵は「論点」ではなく「構造」にあります。\nSynerSeedは比較軸と判断基準を設計し、意思決定から実行までを滑らかにつなぎます。' },
    position: { title: 'SynerSeed の3つの軸', trustTitle: 'Trust｜信頼', trustDesc: '日本ビジネスに不可欠な信頼基盤を構築し、紹介される関係を育てます。', executionTitle: 'Execution｜実行', executionDesc: '戦略、商談、物流、事業実行まで、現場に即して伴走します。', partnerTitle: 'Partnership｜パートナー', partnerDesc: '外注ではなく、長期的に市場を共に開拓するB2Bパートナーです。' },
    about: { title: 'Trust｜信頼を基盤にした越境ビジネス', desc: 'SynerSeedは単なる仲介会社ではなく、一般的な助言型コンサルティング会社でもありません。日本市場への理解、提携設計、物流・商流の調整、そして実行までを伴走する実務型のビジネスパートナーです。' },
    services: { title: 'Execution｜意思決定を動かす設計', desc: '構想を並べるだけではなく、比較軸・判断基準・実行順序を設計し、意思決定が前に進む状態をつくります。' },
    execution: [
      { title: '戦略設計 × 実装', desc: '構想で止めず、実装まで落とし込み、成果が出る形へ転換します。' },
      { title: '信頼構造の設計', desc: '紹介文化と協業構造を前提に、信頼が連鎖する設計を行います。' },
      { title: '機会の発掘と優先順位', desc: '市場の切り口、優先順位、実装ロードマップを明確にし、事業機会を具体化します。' },
      { title: '意思決定を動かす', desc: '比較軸と判断基準を整え、初回商談から結論が動く確度を高めます。' }
    ],
    cases: { title: '事例紹介', desc: 'SynerSeedが重視するのは短期的な取引ではなく、双方の企業信頼をつなぐ長期的な協業の橋渡しです。信頼を基盤に、双方のネットワークを活かして現地市場全体への展開を支援します。', logistics: { title: '物流サービス', subtitle: '信頼がもたらすコスト優位性', desc: '国際物流およびコールドチェーン輸送の分野において、日本の大手宅配ネットワークおよび倉庫システムと、長期的かつ安定した協力関係を構築しています。長年にわたる信用の蓄積と協業の深度によって、構造的な優遇条件を維持しています。' }, partner: { title: '企業協業', subtitle: 'レンタカー予約サービスと紹介文化が生む新たな機会', desc: '北海道におけるレンタカー事業の展開を通じて、地域企業との長期的な信頼関係を構築しています。日本特有の紹介文化において、信頼は自然に連鎖します。' } },
    leader: { title: 'Partnership｜責任者', desc: 'Sandy Linは20年以上にわたり、日本企業および経営層との商談・交渉・事業推進に携わってきました。\n\n日本とのビジネスにおいて重要なのは、単なる語学力ではありません。顧問の価値は翻訳ではなく、「理解」にあります。日本的思考に基づくコミュニケーションを用い、日本企業の一言一言の背景にある意図、懸念、意思決定構造を読み解きます。\n\nSynerSeedは各業界・各商品領域において、原則として1社のみを支援します。これは上下関係のコンサルティング外注ではなく、信頼を基盤とした深いB2Bパートナーシップです。' },
    contact: { title: 'お問い合わせ', desc: '日台間のビジネス提携、物流、観光連携、日本市場開拓に関するご相談を歓迎します。' }
  },
  en: {
    nav: { about: 'About', services: 'Services', cases: 'Case Studies', leader: 'Leadership', contact: 'Contact' },
    cta: 'Contact Us',
    hero: { kicker: 'Taiwan-Japan Business / Tourism / Logistics / Japan Market Expansion', title1: 'Design the', title2: 'Decision', caseCta: 'View Cases', desc: 'The key to decision-making is structure, not argument.\nSynerSeed designs comparison dimensions and evaluation criteria, connecting decision-making directly to execution.' },
    position: { title: 'Three Core Pillars', trustTitle: 'Trust', trustDesc: 'Building the trust foundation required in Japanese business.', executionTitle: 'Execution', executionDesc: 'From strategy and negotiation to logistics and delivery.', partnerTitle: 'Partnership', partnerDesc: 'Not outsourcing, but a long-term B2B partnership.' },
    about: { title: 'Trust | Cross-border business built on trust', desc: 'SynerSeed is not just an intermediary or a conventional consulting firm. We help businesses understand the Japanese market, design partnership structures, coordinate logistics, and move from opportunity to execution.' },
    services: { title: 'Execution | Decision design that moves business forward', desc: 'We design comparison axes, decision criteria, and execution order so that business decisions can move forward.' },
    execution: [
      { title: 'Strategy Design × Implementation', desc: 'We turn concepts into executable structures that produce results.' },
      { title: 'Trust Structure Design', desc: 'We design collaboration structures where trust can continue and expand.' },
      { title: 'Opportunity Discovery', desc: 'We identify market openings, priorities, and implementation roadmaps.' },
      { title: 'Move the Decision', desc: 'We clarify comparison axes and judgment criteria to improve the chance of decision-making from the first meeting.' }
    ],
    cases: { title: 'Case Studies', desc: 'SynerSeed values more than short-term transactions. We serve as a bridge of long-term trust between companies, helping both sides use their networks to expand into local and national markets.', logistics: { title: 'Logistics Services', subtitle: 'Cost advantage built on trust', desc: 'Through long-term relationships with major Japanese delivery networks and warehousing systems, we maintain stable collaboration structures that help clients stay competitive in volatile markets.' }, partner: { title: 'Business Partnership', subtitle: 'New opportunities through relationship expansion', desc: 'Through car rental reservation partnerships in Hokkaido, we develop long-term trust with local businesses and expand opportunities through Japan’s referral-based business culture.' } },
    leader: { title: 'Partnership | Leadership', desc: 'Sandy Lin has over 20 years of experience working directly with Japanese companies and senior executives.\n\nThe value of advisory is not translation. It is understanding. What matters is the ability to communicate through Japanese business thinking and understand the intention, concern, risk awareness, and decision-making logic behind each statement.\n\nSynerSeed works with only one company per industry or product category to avoid conflicts of interest. It is a deep B2B partnership built on trust.' },
    contact: { title: "Let's start a conversation", desc: 'For Taiwan-Japan business collaboration, logistics, tourism partnerships, and Japan market expansion inquiries, please contact us directly.' }
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = key.split('.').reduce((obj, part) => obj && obj[part], dict);
    if (typeof value === 'string') el.textContent = value;
  });
  document.querySelectorAll('.language-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.language-switch button').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage('zh');
