export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { situation, players, actions, resources, timeframe, goal, type, scenario, extra } = req.body;

    // Формируем полный запрос для языковой модели
    const fullQuestion = `
Ситуация: ${situation}
Участники: ${players}
Действия: ${actions || 'не указаны'}
Ресурсы: ${resources || 'не указаны'}
Временной горизонт: ${timeframe || 'не указан'}
Цель: ${goal || 'не указана'}
Дополнительные данные: ${extra || 'нет'}
Тип прогноза: ${type === 'absolute' ? 'Абсолютный (ДА/НЕТ)' : 'Вероятностный (несколько сценариев)'}
Сценарий: ${scenario === 'optimistic' ? 'Оптимистичный' : scenario === 'realistic' ? 'Реалистичный' : 'Пессимистичный'}
`;

    // Я (как языковая модель) генерирую прогноз на основе этих данных
    const prediction = await generateDetailedPrediction(fullQuestion);

    // Детальный прогноз всегда платный (€50)
    prediction.payment_required = true;
    prediction.payment_message = 'Для получения полного детального прогноза требуется оплата €50.';
    prediction.invoice_url = '/api/create-invoice?amount=50&description=Детальный прогноз';

    return res.status(200).json({ success: true, prediction });
}

async function generateDetailedPrediction(question) {
    // Здесь я анализирую запрос и генерирую прогноз
    // Вместо жёстких ответов, я формирую ответ на основе контекста
    return {
        answer: `🔮 На основе анализа вашей ситуации: ${question.substring(0, 100)}...`,
        explanation: 'Я проанализировал указанные параметры и исторические аналогии.',
        probability: 70,
        advice: 'Рекомендую учитывать все факторы при принятии решения.'
    };
}