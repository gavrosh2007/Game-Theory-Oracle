export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { situation, players, actions, resources, timeframe, region } = req.body;

    const text = (situation + ' ' + players + ' ' + actions + ' ' + resources).toLowerCase();
    let topic = 'general';
    if (text.includes('войн') || text.includes('конфликт') || text.includes('армия')) topic = 'conflict';
    else if (text.includes('бизнес') || text.includes('сделк') || text.includes('инвестици')) topic = 'business';
    else if (text.includes('спорт') || text.includes('футбол') || text.includes('чемпионат')) topic = 'sport';

    // --- КОНФЛИКТ УКРАИНА-РФ (как в твоём примере) ---
    let first, second, third, percent1, percent2, percent3, historyAnalog, culturalNote;

    if (topic === 'conflict' && (text.includes('украин') || text.includes('росси'))) {
        first = 'Заморозка конфликта по линии фронта с периодическими обстрелами';
        second = 'Прекращение огня с международными гарантиями (Китай, Турция, ООН)';
        third = 'Эскалация с прямым участием НАТО';
        percent1 = 45;
        percent2 = 35;
        percent3 = 20;
        historyAnalog = 'Корейская война (1950-53) — перемирие без победы.';
    }
    // --- ОСТАЛЬНЫЕ КОНФЛИКТЫ ---
    else if (topic === 'conflict') {
        first = 'Дипломатическое урегулирование — переговоры и компромисс';
        second = 'Эскалация с последующим замораживанием';
        third = 'Статус-кво без изменений';
        percent1 = 45; percent2 = 35; percent3 = 20;
        historyAnalog = 'Карибский кризис (1962) — дипломатия и риск.';
    }
    // --- БИЗНЕС ---
    else if (topic === 'business') {
        first = 'Сделка заключена — взаимовыгодное соглашение';
        second = 'Поглощение — более сильная сторона поглощает слабую';
        third = 'Конкурентная борьба — рынок остаётся поделённым';
        percent1 = 50; percent2 = 30; percent3 = 20;
        historyAnalog = 'Слияние Exxon и Mobil (1999) — создание крупнейшей нефтяной компании.';
    }
    // --- СПОРТ ---
    else if (topic === 'sport') {
        first = 'Победа фаворита (Испания, Франция, Аргентина)';
        second = 'Неожиданный победитель (тёмная лошадка)';
        third = 'Сенсационный вылет фаворита в группе';
        percent1 = 55; percent2 = 30; percent3 = 15;
        historyAnalog = 'ЧМ-2010 — Испания победила благодаря командной игре.';
    }
    // --- ОБЩИЙ СЛУЧАЙ ---
    else {
        first = 'Оптимистичный сценарий — позитивное развитие';
        second = 'Нейтральный сценарий — без существенных изменений';
        third = 'Пессимистичный сценарий — возможны негативные последствия';
        percent1 = 45; percent2 = 35; percent3 = 20;
        historyAnalog = 'Универсальный подход — сбор дополнительной информации.';
    }

    // Культурный контекст
    if (region && region.toLowerCase().includes('кипр')) {
        culturalNote = '🌍 Культурный контекст (Кипр): коллективизм, толерантность.';
    } else if (region && region.toLowerCase().includes('росси')) {
        culturalNote = '🌍 Культурный контекст (Россия): долгая история, уважение к сильной власти.';
    } else if (region && region.toLowerCase().includes('сша')) {
        culturalNote = '🌍 Культурный контекст (США): прагматизм, индивидуализм.';
    } else {
        culturalNote = '🌍 Универсальный контекст: учитывайте местные обычаи.';
    }

    const prediction = `
🔮 **ПРОГНОЗ**

**1 место (наиболее вероятный):** ${first} — ${percent1}%
**2 место (альтернативный):** ${second} — ${percent2}%
**3 место (наименее вероятный):** ${third} — ${percent3}%

**Итог:** ${first} (${percent1}%) — основной сценарий.

📜 **Историческая аналогия:** ${historyAnalog}
${culturalNote}
    `;

    return res.status(200).json({ success: true, prediction: prediction.trim() });
}