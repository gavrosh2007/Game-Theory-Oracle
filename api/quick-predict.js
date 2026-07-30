export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { question } = req.body;
    const lower = question.toLowerCase();

    // ---- КАТЕГОРИИ С ВЕСАМИ ----
    const categories = {
        hockey: { keywords: ['кубок стэнли', 'хоккей', 'nhl'], prob: 78, answer: '🏆 С вероятностью 78% победителем Кубка Стэнли 2026 станет команда с самым сбалансированным составом.' },
        football: { keywords: ['футбол', 'чемпионат', 'евро', 'лига'], prob: 65, answer: '⚽ Наиболее вероятный победитель турнира — команда, которая выиграла матч открытия.' },
        weather: { keywords: ['погода', 'дождь', 'солнце', 'температура'], prob: 82, answer: '🌤️ В ближайшие дни ожидается переменная облачность без осадков.' },
        health: { keywords: ['здоровье', 'симптом', 'болит', 'лечение', 'врач'], prob: 70, answer: '🏥 Ваше состояние, скорее всего, связано с образом жизни и стрессом.' },
        investments: { keywords: ['инвестиц', 'прибыль', 'акции', 'бизнес'], prob: 60, answer: '📈 Рынок демонстрирует умеренный рост. Возможна коррекция в ближайшие 2-3 месяца.' },
        politics: { keywords: ['война', 'конфликт', 'санкции', 'президент', 'выборы'], prob: 55, answer: '🕊️ Конфликт, скорее всего, перейдет в фазу заморозки или длительных переговоров.' }
    };

    // ---- ВЫБОР НАИБОЛЕЕ РЕЛЕВАНТНОЙ КАТЕГОРИИ (ВЗВЕШЕННЫЙ) ----
    let bestCategory = null;
    let bestScore = 0;
    for (const [key, cat] of Object.entries(categories)) {
        let score = 0;
        for (const word of cat.keywords) {
            if (lower.includes(word)) score += 2;
        }
        // Если вопрос длинный — возможно, он сложнее, повышаем вес
        if (question.length > 30) score += 1;
        if (score > bestScore) {
            bestScore = score;
            bestCategory = key;
        }
    }

    let prediction;
    if (bestCategory && bestScore > 1) {
        const cat = categories[bestCategory];
        prediction = {
            answer: cat.answer,
            explanation: 'Быстрый прогноз на основе ключевых слов.',
            probability: cat.prob,
            advice: 'Для более точного прогноза заполните детальную анкету (платно).',
            is_free: true
        };
    } else {
        // ---- НЕИЗВЕСТНЫЙ ЗАПРОС: ЧЕСТНЫЙ ОТВЕТ, БЕЗ СЛУЧАЙНЫХ ЧИСЕЛ ----
        prediction = {
            answer: '🔮 Недостаточно данных для быстрого прогноза.',
            explanation: 'Попробуйте уточнить вопрос или перейти к детальному прогнозу (платно).',
            probability: null, // Нет вероятности
            advice: 'Заполните анкету для получения точного прогноза.',
            is_free: true
        };
    }

    return res.status(200).json({ success: true, prediction });
}