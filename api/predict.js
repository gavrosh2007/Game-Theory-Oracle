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

    // --- Детализированные сценарии ---
    let first, second, third, percent1, percent2, percent3, historyAnalog;

    if (topic === 'conflict') {
        // Определяем тип конфликта
        let conflictType = 'general';
        if (text.includes('украин') || text.includes('росси')) conflictType = 'ukraine';
        else if (text.includes('израиль') || text.includes('палестин')) conflictType = 'israel';
        else if (text.includes('китай') || text.includes('тайван')) conflictType = 'taiwan';

        const scenarios = {
            ukraine: {
                first: 'Заморозка конфликта по линии фронта с периодическими обстрелами',
                second: 'Прекращение огня с международными гарантиями (Китай, Турция, ООН)',
                third: 'Эскалация с прямым участием НАТО',
                p1: 45, p2: 35, p3: 20,
                history: 'Корейская война (1950-53) — перемирие без победы.'
            },
            israel: {
                first: 'Долгосрочное перемирие с периодическими обострениями',
                second: 'Полное прекращение огня с гарантиями США и Египта',
                third: 'Региональная война с участием Ирана',
                p1: 50, p2: 30, p3: 20,
                history: 'Война Судного дня (1973) — эскалация, затем разрядка.'
            },
            taiwan: {
                first: 'Статус-кво с экономическим давлением со стороны Китая',
                second: 'Эскалация в воздухе/на море без высадки',
                third: 'Полномасштабный конфликт с вмешательством США',
                p1: 55, p2: 30, p3: 15,
                history: 'Кубинский ракетный кризис (1962) — балансирование на грани войны.'
            },
            general: {
                first: 'Дипломатическое урегулирование — переговоры и компромисс',
                second: 'Эскалация с последующим замораживанием',
                third: 'Статус-кво без изменений',
                p1: 45, p2: 35, p3: 20,
                history: 'Карибский кризис (1962) — дипломатия и риск.'
            }
        };

        const sc = scenarios[conflictType] || scenarios.general;
        first = sc.first;
        second = sc.second;
        third = sc.third;
        percent1 = sc.p1;
        percent2 = sc.p2;
        percent3 = 100 - percent1 - percent2;
        historyAnalog = sc.history;
    } else if (topic === 'business') {
        first = 'Сделка заключена — взаимовыгодное соглашение';
        second = 'Поглощение — более сильная сторона поглощает слабую';
        third = 'Конкурентная борьба — рынок остаётся поделённым';
        percent1 = 50; percent2 = 30; percent3 = 20;
        historyAnalog = 'Слияние Exxon и Mobil (1999) — создание крупнейшей нефтяной компании.';
    } else if (topic === 'sport') {
        first = 'Победа фаворита (Испания, Франция, Аргентина)';
        second = 'Неожиданный победитель (тёмная лошадка)';
        third = 'Сенсационный вылет фаворита в группе';
        percent1 = 55; percent2 = 30; percent3 = 15;
        historyAnalog = 'ЧМ-2010 — Испания победила благодаря командной игре.';
    } else {
        first = 'Оптимистичный сценарий — позитивное развитие';
        second = 'Нейтральный сценарий — без существенных изменений';
        third = 'Пессимистичный сценарий — возможны негативные последствия';
        percent1 = 45; percent2 = 35; percent3 = 20;
        historyAnalog = 'Универсальный подход — сбор дополнительной информации.';
    }

    // Культурный контекст
    let culturalNote = '';
    if (region && region.toLowerCase().includes('кипр')) {
        culturalNote = '🌍 Культурный контекст (Кипр): коллективизм, толерантность.';
    } else if (region && region.toLowerCase().includes('росси')) {
        culturalNote = '🌍 Культурный контекст (Россия): долгая история, уважение к сильной власти.';
    } else if (region && region.toLowerCase().includes('сша')) {
        culturalNote = '🌍 Культурный контекст (США): прагматизм, индивидуализм.';
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