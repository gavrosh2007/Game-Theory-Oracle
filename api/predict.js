// /api/predict.js
export default async function handler(req, res) {
  // Разрешаем только POST-запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;

  // Извлекаем поля
  const situation = data.situation || '';
  const players = data.players || '';
  const actions = data.actions || '';
  const resources = data.resources || '';
  const timeframe = data.timeframe || '';
  const gender = data.gender || '';
  const age = data.age || '';
  const education = data.education || '';
  const region = data.region || '';

  // ------------------- ПРОСТАЯ ЭВРИСТИЧЕСКАЯ ЛОГИКА -------------------
  let probability = 50; // базовый процент
  let reasoning = [];

  // 1. Анализ ситуации по ключевым словам
  const lowerSit = situation.toLowerCase();
  if (lowerSit.includes('война') || lowerSit.includes('конфликт') || lowerSit.includes('war')) {
    probability += 20;
    reasoning.push('Обнаружен конфликтный контекст → повышение вероятности эскалации.');
  } else if (lowerSit.includes('переговоры') || lowerSit.includes('договор') || lowerSit.includes('negotiation')) {
    probability -= 15;
    reasoning.push('Упоминание переговоров → снижение вероятности жёсткого сценария.');
  }

  if (lowerSit.includes('экономика') || lowerSit.includes('санкции') || lowerSit.includes('economy')) {
    probability += 10;
    reasoning.push('Экономические факторы влияют на долгосрочный прогноз.');
  }

  // 2. Анализ участников
  const lowerPlayers = players.toLowerCase();
  if (lowerPlayers.includes('сша') || lowerPlayers.includes('россия') || lowerPlayers.includes('китай') ||
      lowerPlayers.includes('usa') || lowerPlayers.includes('russia') || lowerPlayers.includes('china')) {
    probability += 15;
    reasoning.push('Крупные геополитические игроки → непредсказуемость выше.');
  }

  // 3. Анализ ресурсов
  const lowerResources = resources.toLowerCase();
  if (lowerResources.includes('нефть') || lowerResources.includes('газ') || lowerResources.includes('oil')) {
    probability -= 5;
    reasoning.push('Энергоресурсы могут служить рычагом давления.');
  }

  // 4. Временной горизонт
  if (timeframe.includes('год') || timeframe.includes('year')) {
    probability += 5;
    reasoning.push('Долгосрочный горизонт увеличивает неопределённость.');
  } else if (timeframe.includes('месяц') || timeframe.includes('неделя') || timeframe.includes('month')) {
    probability -= 5;
    reasoning.push('Краткосрочный прогноз более надёжен.');
  }

  // 5. Данные о пользователе – влияют на стиль, но не на сам прогноз (можно добавить вежливую фразу)
  let userProfile = '';
  if (age && education) {
    userProfile = `, с учётом вашего возраста (${age}) и образования (${education})`;
  } else if (age) {
    userProfile = `, с учётом вашего возраста (${age})`;
  } else {
    userProfile = '.';
  }

  // Ограничим вероятность диапазоном 0-100
  probability = Math.min(100, Math.max(0, probability));

  // Формируем оценку точности на основе полноты данных
  let filledFields = 0;
  if (situation) filledFields++;
  if (players) filledFields++;
  if (actions) filledFields++;
  if (resources) filledFields++;
  if (timeframe) filledFields++;
  let confidence = 50 + filledFields * 5;
  confidence = Math.min(95, confidence);

  // ------------------- ИСТОРИЧЕСКАЯ АНАЛОГИЯ (минимальная база) -------------------
  let historicalAnalog = '';
  if (lowerSit.includes('война') && (lowerPlayers.includes('сша') || lowerPlayers.includes('usa'))) {
    historicalAnalog = 'Аналогия: Вьетнамская война — затяжной конфликт с непредсказуемым исходом при вмешательстве сверхдержавы.';
  } else if (lowerSit.includes('конфликт') && lowerPlayers.includes('россия')) {
    historicalAnalog = 'Аналогия: Карибский кризис — прямая конфронтация была предотвращена дипломатией.';
  } else {
    historicalAnalog = 'Прямых исторических аналогий не найдено. Анализ основан на общей теории игр.';
  }

  // ------------------- ФОРМИРОВАНИЕ ФИНАЛЬНОГО ПРОГНОЗА -------------------
  let verdict = '';
  if (probability >= 70) {
    verdict = 'Высокая вероятность неблагоприятного исхода. Рекомендуется пересмотреть стратегию или привлечь посредника.';
  } else if (probability <= 30) {
    verdict = 'Низкая вероятность негативного сценария. Текущая стратегия выглядит устойчивой.';
  } else {
    verdict = 'Умеренная вероятность. Оптимальный ход — гибкая адаптация к действиям оппонента.';
  }

  const predictionText = `${verdict}\n\n`
    + `${historicalAnalog}\n\n`
    + `Обоснование: ${reasoning.join(' ')}\n`
    + `Прогнозная вероятность (по шкале 0-100): ${probability}%\n`
    + `Точность оценки (на основе полноты данных): ${confidence}%${userProfile}`;

  res.status(200).json({
    success: true,
    prediction: predictionText,
    probability: probability,
    confidence: confidence,
    reasoning: reasoning,
    historical: historicalAnalog
  });
}