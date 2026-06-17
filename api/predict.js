export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { situation, players, actions, resources, timeframe, region } = req.body;

    // Определяем тему запроса (на основе ключевых слов)
    const text = (situation + ' ' + players + ' ' + actions + ' ' + resources).toLowerCase();
    let topic = 'general';
    if (text.includes('войн') || text.includes('конфликт') || text.includes('армия')) topic = 'conflict';
    else if (text.includes('бизнес') || text.includes('сделка') || text.includes('инвестици')) topic = 'business';
    else if (text.includes('спорт') || text.includes('футбол') || text.includes('чемпионат')) topic = 'sport';
    else if (text.includes('личное') || text.includes('отношени') || text.includes('здоровье')) topic = 'personal';

    // --- Формируем три варианта с процентами (сумма = 100%) ---
    let first, second, third, percent1, percent2, percent3;

    if (topic === 'sport') {
        first = 'СБОРНАЯ ИСПАНИИ — молодая, сыгранная, фаворит турнира.';
        second = 'СБОРНАЯ ФРАНЦИИ — самый дорогой состав, опыт финалов.';
        third = 'СБОРНАЯ АРГЕНТИНЫ — действующий чемпион, но возраст и «проклятие чемпиона».';
        // Проценты: Испания 55%, Франция 30%, Аргентина 15%
        percent1 = 55; percent2 = 30; percent3 = 15;
    } else if (topic === 'conflict') {
        first = 'Дипломатическое урегулирование — стороны садятся за стол переговоров.';
        second = 'Военное вмешательство — эскалация с последующим замораживанием.';
        third = 'Статус-кво — конфликт остаётся нерешённым без активных действий.';
        percent1 = 60; percent2 = 25; percent3 = 15;
    } else if (topic === 'business') {
        first = 'Сделка заключена — стороны приходят к взаимовыгодному соглашению.';
        second = 'Поглощение — более сильная сторона поглощает слабую.';
        third = 'Конкурентная борьба — рынок остаётся поделённым.';
        percent1 = 50; percent2 = 30; percent3 = 20;
    } else if (topic === 'personal') {
        first = 'Успех — ситуация разрешается в вашу пользу.';
        second = 'Компромисс — результат будет приемлемым, но не идеальным.';
        third = 'Тупик — изменений не произойдёт, потребуется новый подход.';
        percent1 = 55; percent2 = 30; percent3 = 15;
    } else {
        first = 'Оптимистичный сценарий — ситуация развивается в позитивном ключе.';
        second = 'Нейтральный сценарий — существенных изменений не произойдёт.';
        third = 'Пессимистичный сценарий — возможны негативные последствия.';
        percent1 = 50; percent2 = 30; percent3 = 20;
    }

    // Убеждаемся, что сумма = 100%
    const total = percent1 + percent2 + percent3;
    if (total !== 100) {
        // Нормализуем
        const factor = 100 / total;
        percent1 = Math.round(percent1 * factor);
        percent2 = Math.round(percent2 * factor);
        percent3 = 100 - percent1 - percent2;
    }

    // Культурный контекст
    let culturalNote = '';
    if (region && region.toLowerCase().includes('кипр')) {
        culturalNote = '🌍 Культурный контекст (Кипр): коллективизм, толерантность, православие — важно сохранять лицо.';
    } else if (region && region.toLowerCase().includes('росси')) {
        culturalNote = '🌍 Культурный контекст (Россия): индивидуализм в бизнесе, коллективизм в кризис.';
    } else if (region && region.toLowerCase().includes('сша')) {
        culturalNote = '🌍 Культурный контекст (США): прагматизм, скорость, индивидуализм.';
    } else {
        culturalNote = '🌍 Универсальный контекст: учитывайте местные обычаи и религиозные нормы.';
    }

    // Историческая аналогия
    let historyAnalog = '';
    if (topic === 'sport') {
        historyAnalog = '📜 Историческая аналогия: ЧМ-2010 — Испания победила благодаря командной игре.';
    } else if (topic === 'conflict') {
        historyAnalog = '📜 Историческая аналогия: Карибский кризис 1962 года — дипломатия и риск.';
    } else if (topic === 'business') {
        historyAnalog = '📜 Историческая аналогия: IPO Google — стратегический выход на рынок.';
    } else {
        historyAnalog = '📜 Историческая аналогия: Хельсинкские соглашения 1975 года — диалог и компромисс.';
    }

    const prediction = `
🔮 **ПРОГНОЗ**

**1 место (наиболее вероятный):** ${first} — ${percent1}%
**2 место (альтернативный):** ${second} — ${percent2}%
**3 место (наименее вероятный):** ${third} — ${percent3}%

**Итог:** ${first} (${percent1}%) — основной сценарий.

${historyAnalog}
${culturalNote}

⚡ **Важно:** прогноз основан на анализе ситуации. События могут развиваться по любому сценарию, но наиболее вероятный — первый.
    `;

    return res.status(200).json({ success: true, prediction: prediction.trim() });
}