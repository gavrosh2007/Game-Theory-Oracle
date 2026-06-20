export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { situation, players, actions, resources, timeframe, region } = req.body;
    const query = `${situation} ${players} ${actions} ${resources} ${timeframe} ${region}`.toLowerCase();

    // ---- БИНАРНЫЙ ВОПРОС (ДА/НЕТ) ----
    if (query.includes('будет') || query.includes('случится') || query.includes('закончится')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**ДА — 55%**  
**НЕТ — 45%**  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- КОНФЛИКТ (Украина-РФ + Запад) ----
    if (query.includes('украин') && query.includes('росси')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**РФ — 35%**  
**Украина — 25%**  
**Запад (США/ЕС) — 30%**  
**Третья сторона (Китай/Турция) — 10%**  

**Скрытый фактор:** психология Востока (коллективизм) vs Запада (индивидуализм). Атомная бомба — символ западного сумасшествия, Восток осторожен.  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ВОЙНЫ ВООБЩЕ (любой конфликт) ----
    if (query.includes('войн') || query.includes('конфликт') || query.includes('санкци')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Сторона А (инициатор) — 40%**  
**Сторона Б (защитник) — 30%**  
**Запад (вмешательство) — 20%**  
**Третья сила (нейтралы, переговоры) — 10%**  

**Скрытый фактор:** Восток — осторожность, коллективная безопасность. Запад — риск, технологическое безумие.  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- СПОРТ (ЧМ, Олимпиада) ----
    if (query.includes('чемпионат') || query.includes('футбол') || query.includes('спорт')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Испания — 35%**  
**Франция — 30%**  
**Аргентина — 20%**  
**Тёмная лошадка (USA/Мексика) — 15%**  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ИНВЕСТИЦИИ ----
    if (query.includes('инвестиц') || query.includes('заработать') || query.includes('прибыль')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Tech (AI, кванты) — 45%**  
**Золото (защита) — 30%**  
**Нефть/газ (спекуляция) — 25%**  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- НЕДВИЖИМОСТЬ ----
    if (query.includes('недвижим') || query.includes('квартир') || query.includes('дом')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Мегаполисы (рост) — 40%**  
**Регионы (стагнация) — 35%**  
**Ипотечный кризис (падение) — 25%**  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ПОТРЕБИТЕЛЬСКИЕ ЦЕНЫ ----
    if (query.includes('цен') || query.includes('инфляц') || query.includes('продукт')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Рост 8-12% (логистика) — 45%**  
**Сдерживание субсидиями — 35%**  
**Скачок на отдельные группы (зерно, мясо) — 20%**  
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ОБЩИЙ СЛУЧАЙ ----
    const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**ДА — 45%**  
**НЕТ — 35%**  
**НЕОПРЕДЕЛЕННО (чёрный лебедь) — 20%**  
    `;
    return res.status(200).json({ success: true, prediction: prediction.trim() });
}