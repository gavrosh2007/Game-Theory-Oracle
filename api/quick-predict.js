export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { question } = req.body;

    // Здесь я (как языковая модель) генерирую ответ на основе вопроса
    // Вместо жёстких категорий, я анализирую вопрос и даю осмысленный прогноз

    // Пример: я генерирую ответ на основе вопроса
    const prediction = await generatePrediction(question);

    return res.status(200).json({ success: true, prediction });
}

async function generatePrediction(question) {
    // Здесь будет логика генерации ответа с использованием языковой модели
    // Например, вызов OpenAI API или локальной модели
    // Пока что возвращаем пример ответа
    return {
        answer: `🔮 Анализирую ваш вопрос: "${question}"`,
        explanation: 'Я использую теорию игр и исторические аналогии для прогноза.',
        probability: 75,
        advice: 'Следите за развитием событий.'
    };
}