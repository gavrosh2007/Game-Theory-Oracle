export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { situation, players, actions, resources, timeframe, region } = req.body;
    const query = `${situation} ${players} ${actions} ${resources} ${timeframe} ${region}`.toLowerCase();

    // ---- ИНВЕСТИЦИИ (как заработать) ----
    if (query.includes('инвестиц') || query.includes('заработать') || query.includes('прибыль') || query.includes('доход')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Результат 1 (наиболее вероятный):** Рост в tech-секторе (AI, кванты) — 45%  
**Результат 2 (альтернативный):** Золото и защитные активы — 30%  
**Результат 3 (скрытый фактор):** Нефть и газ (краткосрочный спекулятивный рост) — 25%  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- НЕДВИЖИМОСТЬ ----
    if (query.includes('недвижим') || query.includes('квартир') || query.includes('дом') || query.includes('аренд')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Результат 1 (наиболее вероятный):** Рост цен в мегаполисах (дефицит предложения) — 40%  
**Результат 2 (альтернативный):** Стагнация в регионах (низкая ликвидность) — 35%  
**Результат 3 (скрытый фактор):** Ипотечный кризис (изменение ставок) — 25%  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ПОТРЕБИТЕЛЬСКАЯ КОРЗИНА / ЦЕНЫ ----
    if (query.includes('цен') || query.includes('инфляц') || query.includes('продукт') || query.includes('корзин')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Результат 1 (наиболее вероятный):** Рост цен на 8-12% из-за логистики — 45%  
**Результат 2 (альтернативный):** Сдерживание за счёт субсидий — 35%  
**Результат 3 (скрытый фактор):** Скачок на отдельные группы (зерно, мясо) — 20%  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- АЗАРТ / СПЕКУЛЯЦИИ (казино, рулетка, ставки) ----
    if (query.includes('казино') || query.includes('ставк') || query.includes('рулетк') || query.includes('шанс')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Результат 1 (наиболее вероятный):** Крупье/алгоритм перевешивает игрока — 50%  
**Результат 2 (альтернативный):** Временная удача (стрик) — 30%  
**Результат 3 (скрытый фактор):** Управление риском (мартингейл/лимиты) — 20%  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ТРЕНДЫ / МОДА / ПОТРЕБЛЕНИЕ ----
    if (query.includes('тренд') || query.includes('мод') || query.includes('потребл') || query.includes('бренд')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Результат 1 (наиболее вероятный):** Уход в минимализм и переработку — 40%  
**Результат 2 (альтернативный):** Рост люкса как инвестиции — 35%  
**Результат 3 (скрытый фактор):** Крах быстрой моды из-за регуляций — 25%  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- КОНФЛИКТЫ ----
    if (query.includes('украин') || query.includes('росси') || query.includes('войн') || query.includes('конфликт') || query.includes('санкци')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Результат 1 (наиболее вероятный):** Заморозка с периодическими обострениями — 45%  
**Результат 2 (альтернативный):** Прекращение огня с гарантиями — 35%  
**Результат 3 (скрытый фактор):** Вмешательство третьей стороны — 20%  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- СПОРТ ----
    if (query.includes('чемпионат') || query.includes('футбол') || query.includes('спорт')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Результат 1 (наиболее вероятный):** Фаворит (Испания, Франция) — 40%  
**Результат 2 (альтернативный):** Тёмная лошадка (США, Мексика) — 35%  
**Результат 3 (скрытый фактор):** Скандал/дисквалификация — 25%  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ОБЩИЙ СЛУЧАЙ ----
    const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Результат 1 (наиболее вероятный):** Недостаточно данных — 40%  
**Результат 2 (альтернативный):** Анализ по аналогии — 35%  
**Результат 3 (скрытый фактор):** Случайность / чёрный лебедь — 25%  
    `;
    return res.status(200).json({ success: true, prediction: prediction.trim() });
}