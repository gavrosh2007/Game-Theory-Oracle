export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { situation, players, actions, resources, timeframe, goal, type, scenario, extra } = req.body;
    const query = `${situation} ${players} ${actions} ${resources} ${timeframe} ${goal} ${extra}`.toLowerCase();

    // ---- КОНФЛИКТЫ (Украина-РФ) ----
    if (query.includes('украин') && query.includes('росси')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

${type === 'absolute' ? '**Ответ:** ДА — 55%, НЕТ — 45%' : 
'**Варианты:**\n1. Заморозка в 2026–2027 — 45%\n2. Прекращение огня с гарантиями — 35%\n3. Затягивание на 20+ лет — 20%'}

**Основание:** конфликт элит (средний возраст ~60 лет). Историческая аналогия — Кипр (1974).
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- СПОРТ (ЧМ, футбол) ----
    if (query.includes('футбол') || query.includes('чемпионат') || query.includes('спорт')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

${type === 'absolute' ? '**Ответ:** ДА, победитель будет определён — 85%' : 
'**Варианты:**\n1. Испания — 40%\n2. Франция — 30%\n3. США/Мексика (тёмная лошадка) — 30%'}

**Основание:** анализ составов, формы и скрытых факторов (организаторский интерес США).
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ИНВЕСТИЦИИ ----
    if (query.includes('инвестиц') || query.includes('заработать') || query.includes('прибыль')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

${type === 'absolute' ? '**Ответ:** ДА, возможность есть — 60%' : 
'**Варианты:**\n1. Tech-сектор (AI, кванты) — 45%\n2. Золото (защита) — 30%\n3. Нефть/газ (спекуляция) — 25%'}

**Основание:** анализ рыночных трендов и политической нестабильности.
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- БИЗНЕС ----
    if (query.includes('бизнес') || query.includes('сделк') || query.includes('рынок')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

${type === 'absolute' ? '**Ответ:** ДА, сделка возможна — 55%' : 
'**Варианты:**\n1. Успешное завершение — 50%\n2. Поглощение — 30%\n3. Конкуренция — 20%'}

**Основание:** анализ рыночных условий и теории игр.
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ОБЩИЙ СЛУЧАЙ ----
    const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

${type === 'absolute' ? '**Ответ:** НЕТ, недостаточно данных — 40%' : 
'**Варианты:**\n1. Оптимистичный сценарий — 40%\n2. Реалистичный сценарий — 35%\n3. Пессимистичный сценарий — 25%'}

**Основание:** уточните тему (война, бизнес, спорт, инвестиции).
    `;
    return res.status(200).json({ success: true, prediction: prediction.trim() });
}