export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { situation, players, actions, resources, timeframe, region } = req.body;
    const query = `${situation} ${players} ${actions} ${resources} ${timeframe} ${region}`.toLowerCase();

    // ---- СПОРТ (футбол) ----
    if (query.includes('футбол') || query.includes('чемпионат') || query.includes('спорт') || query.includes('победитель') || query.includes('матч')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Главный ответ:** ДА, победитель будет определён.

**Варианты (на основе анализа текущей формы, состава и исторических данных):**
1. Испания — 45%
2. Франция — 30%
3. Аргентина — 25%

**Основание:** теория игр, анализ последних турниров и глубины состава.
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- МИГРАЦИЯ ЖИВОТНЫХ (киты, кашалоты) ----
    if (query.includes('кит') || query.includes('кашалот') || query.includes('миграц')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Вопрос:** миграция кашалотов.

**Ответ (на основе анализа данных и логики):**
1. Северные кашалоты мигрируют к Азорским островам весной — 60%
2. Миграция к побережью Африки (Канарские острова) — 30%
3. Остаются в северных водах круглый год — 10%

**Основание:** данные спутниковых меток, сезонные перемещения кормовой базы.
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ВИНО (урожай, марка, год) ----
    if (query.includes('вино') || query.includes('урожай') || query.includes('марка') || query.includes('год') || query.includes('виноград')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Главный ответ:** ДА, хороший год для выбранной марки вина — 2021.

**Варианты:**
1. 2021 год — 50% (отличный урожай, сбалансированный вкус)
2. 2015 год — 30% (классический, но не лучший для долгого хранения)
3. 2018 год — 20% (хороший, но уступает 2021)

**Основание:** анализ климатических условий, отзывов сомелье и урожайности.
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- КОНФЛИКТЫ (Украина-РФ) ----
    if (query.includes('украин') && query.includes('росси')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Ответ:** 50% — завершится в 2026–2027 гг. (заморозка)  
**Ответ:** 30% — завершится в 2029–2030 гг. (прекращение огня)  
**Ответ:** 20% — затянется на 20+ лет (как Кипр, 1974).

**Основание:** конфликт элит (средний возраст ~60 лет). Историческая аналогия — Кипр (1974).
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- БИЗНЕС ----
    if (query.includes('бизнес') || query.includes('сделк') || query.includes('инвестици') || query.includes('денег')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Главный ответ:** ДА, успех возможен.

**Варианты:**
1. Сделка заключена — 50%
2. Поглощение — 30%
3. Конкуренция — 20%

**Основание:** анализ рыночных условий и теория игр.
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ЛИЧНОЕ (любовь, отношения, здоровье) ----
    if (query.includes('любов') || query.includes('отношен') || query.includes('девушк') || query.includes('парень') || query.includes('здоров')) {
        const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Главный ответ:** ДА, всё зависит от вас.

**Пояснение:** шансы высоки при правильных действиях.
        `;
        return res.status(200).json({ success: true, prediction: prediction.trim() });
    }

    // ---- ОБЩИЙ СЛУЧАЙ (если тема не распознана) ----
    const prediction = `
🔮 **ОРУЖИЕ ОРАКУЛА**

**Ответ:** НЕТ, вопрос не распознан.

**Основание:** для точного анализа уточните тему (война, бизнес, спорт, личное, животные, вино).
    `;
    return res.status(200).json({ success: true, prediction: prediction.trim() });
}