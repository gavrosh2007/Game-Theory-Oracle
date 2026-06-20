<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>HM&amp;GO — Опросник</title>
    <link rel="manifest" href="manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="HM&amp;GO">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#F48D01">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: #F48D01; font-family: system-ui, 'Segoe UI', 'Cormorant Garamond', serif; color: #000000; line-height: 1.5; padding: 2rem 1.5rem; min-height: 100vh; position: relative; }
        .logo { margin-bottom: 15px; }
        .logo h1 { font-size: 1.8rem; color: #000000; font-family: 'Courier New', 'American Typewriter', monospace; background: transparent; padding: 0; display: inline-block; }
        .bg-layers { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
        .bg-layer { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; background-repeat: no-repeat; }
        .bg-domino { background-image: url('domino.png'); filter: grayscale(100%) brightness(196%) contrast(300%) blur(0px); opacity: 1.0; }
        .bg-graph { background-image: url('graph.png'); filter: grayscale(48%) brightness(79%) contrast(300%) blur(0px); opacity: 0.57; }
        .container { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; }
        .lang-switch { display: flex; justify-content: flex-end; gap: 0.75rem; margin-bottom: 2rem; background: rgba(135, 206, 235, 0.25); backdrop-filter: blur(8px); padding: 0.75rem 1.5rem; border-radius: 60px; }
        .lang-btn { background: rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.3); padding: 0.4rem 1rem; border-radius: 40px; font-weight: 600; font-size: 0.9rem; cursor: pointer; color: #000000; transition: 0.2s; }
        .lang-btn.active { background: #000000; color: #b0d9b1; border-color: #000000; }
        .lang-btn:hover { background: rgba(0,0,0,0.5); color: white; }
        .form-container { background: rgba(244, 141, 1, 0.85); backdrop-filter: blur(2px); border-radius: 2rem; padding: 2rem; margin-bottom: 2rem; color: #ffffff; }
        .form-group { margin-bottom: 1rem; }
        label { display: block; margin-bottom: 0.3rem; font-weight: bold; }
        input, select, textarea { width: 100%; padding: 0.5rem; border-radius: 1rem; border: none; background: rgba(255,255,255,0.8); color: #000; }
        .submit-btn { background: #000000; color: #b0d9b1; border: none; padding: 0.8rem 2rem; border-radius: 2rem; font-weight: bold; font-size: 1.2rem; cursor: pointer; margin-top: 1rem; width: 100%; }
        .result-box { background: #000000; color: #b0d9b1; padding: 1.5rem; border-radius: 1.5rem; margin-top: 2rem; display: none; white-space: pre-wrap; }
        .home-btn { background: #000000; color: #b0d9b1; border: none; padding: 0.6rem 1.5rem; border-radius: 2rem; cursor: pointer; font-weight: bold; margin-top: 1rem; display: inline-block; text-decoration: none; text-align: center; }
        footer { text-align: center; margin-top: 2rem; font-size: 0.85rem; background: rgba(255,255,255,0.3); backdrop-filter: blur(4px); padding: 1.5rem; border-radius: 2rem; }
        .lang-content { display: none; }
        .lang-content.active { display: block; }
        @media (max-width: 700px) { body { padding: 1rem; } }
    </style>
</head>
<body>
<div class="bg-layers">
    <div class="bg-layer bg-domino"></div>
    <div class="bg-layer bg-graph"></div>
</div>

<div class="container">
    <div class="logo"><h1>HM&amp;GO</h1></div>

    <div class="lang-switch">
        <button class="lang-btn" data-lang="ru">🇷🇺 Русский</button>
        <button class="lang-btn" data-lang="en">🇬🇧 English</button>
    </div>

    <div id="ru-form" class="lang-content active">
        <div class="form-container">
            <form id="predictFormRu">
                <div class="form-group">
                    <label>Опишите ситуацию (что прогнозируем?)</label>
                    <textarea name="situation" rows="2" required></textarea>
                </div>
                <div class="form-group">
                    <label>Участники (стороны) через запятую</label>
                    <input name="players" required>
                </div>
                <div class="form-group">
                    <label>Возможные действия каждой стороны</label>
                    <textarea name="actions" rows="1"></textarea>
                </div>
                <div class="form-group">
                    <label>Ресурсы / ограничения (экономические, военные и др.)</label>
                    <textarea name="resources" rows="1"></textarea>
                </div>
                <div class="form-group">
                    <label>Временной горизонт (дни, месяцы, годы)</label>
                    <input name="timeframe">
                </div>
                <div class="form-group">
                    <label>Что именно вы хотите узнать? (суть прогноза)</label>
                    <input name="goal" placeholder="Например: победителя, дату окончания, вероятность">
                </div>
                <div class="form-group">
                    <label>Тип прогноза</label>
                    <select name="type">
                        <option value="absolute">Абсолютный (ДА/НЕТ с процентом уверенности)</option>
                        <option value="probabilistic" selected>Вероятностный (три варианта событий с процентами)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Какой сценарий вас интересует?</label>
                    <select name="scenario">
                        <option value="optimistic">Оптимистичный</option>
                        <option value="realistic" selected>Реалистичный</option>
                        <option value="pessimistic">Пессимистичный</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Есть ли у вас дополнительные данные, которые могут повлиять на прогноз?</label>
                    <textarea name="extra" rows="1" placeholder="Например: слухи, инсайды, личные наблюдения"></textarea>
                </div>
                <button type="button" class="submit-btn" id="submitRu">🔮 Получить прогноз</button>
            </form>
            <div id="resultRu" class="result-box"></div>
            <div style="text-align: center; margin-top: 1rem;">
                <a href="index.html" class="home-btn">🏠 На главную</a>
            </div>
        </div>
    </div>

    <div id="en-form" class="lang-content">
        <div class="form-container">
            <form id="predictFormEn">
                <div class="form-group">
                    <label>Describe the situation (what to predict?)</label>
                    <textarea name="situation" rows="2" required></textarea>
                </div>
                <div class="form-group">
                    <label>Participants (sides) comma separated</label>
                    <input name="players" required>
                </div>
                <div class="form-group">
                    <label>Possible actions of each side</label>
                    <textarea name="actions" rows="1"></textarea>
                </div>
                <div class="form-group">
                    <label>Resources / constraints (economic, military, etc.)</label>
                    <textarea name="resources" rows="1"></textarea>
                </div>
                <div class="form-group">
                    <label>Time horizon (days, months, years)</label>
                    <input name="timeframe">
                </div>
                <div class="form-group">
                    <label>What exactly do you want to know? (essence of the prediction)</label>
                    <input name="goal" placeholder="e.g.: winner, end date, probability">
                </div>
                <div class="form-group">
                    <label>Type of prediction</label>
                    <select name="type">
                        <option value="absolute">Absolute (YES/NO with confidence percentage)</option>
                        <option value="probabilistic" selected>Probabilistic (three scenarios with percentages)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Which scenario interests you?</label>
                    <select name="scenario">
                        <option value="optimistic">Optimistic</option>
                        <option value="realistic" selected>Realistic</option>
                        <option value="pessimistic">Pessimistic</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Do you have any additional data that could affect the forecast?</label>
                    <textarea name="extra" rows="1" placeholder="e.g.: rumors, insider info, personal observations"></textarea>
                </div>
                <button type="button" class="submit-btn" id="submitEn">🔮 Get prediction</button>
            </form>
            <div id="resultEn" class="result-box"></div>
            <div style="text-align: center; margin-top: 1rem;">
                <a href="index.html" class="home-btn">🏠 Home</a>
            </div>
        </div>
    </div>

    <footer>
        <div id="footer-ru" style="display: block;">
            <p>© HM&amp;GO — прогноз на основе теории игр</p>
        </div>
        <div id="footer-en" style="display: none;">
            <p>© HM&amp;GO — prediction based on game theory</p>
        </div>
    </footer>
</div>

<script>
    async function handleSubmit(formId, resultId, lang) {
        const form = document.getElementById(formId);
        const data = {};
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(inp => { if (inp.name) data[inp.name] = inp.value; });
        const resultDiv = document.getElementById(resultId);
        resultDiv.innerText = lang === 'ru' ? 'Обработка запроса...' : 'Processing request...';
        resultDiv.style.display = 'block';

        try {
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.success) {
                resultDiv.innerText = result.prediction;
            } else {
                resultDiv.innerText = lang === 'ru' ? 'Ошибка при получении прогноза.' : 'Error receiving prediction.';
            }
        } catch (err) {
            resultDiv.innerText = lang === 'ru' ? 'Сетевая ошибка. Попробуйте позже.' : 'Network error. Try again later.';
        }
    }

    document.getElementById('submitRu')?.addEventListener('click', () => handleSubmit('predictFormRu', 'resultRu', 'ru'));
    document.getElementById('submitEn')?.addEventListener('click', () => handleSubmit('predictFormEn', 'resultEn', 'en'));

    function setLanguage(lang) {
        document.getElementById('ru-form').classList.toggle('active', lang === 'ru');
        document.getElementById('en-form').classList.toggle('active', lang === 'en');
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        document.getElementById('footer-ru').style.display = (lang === 'ru') ? 'block' : 'none';
        document.getElementById('footer-en').style.display = (lang === 'en') ? 'block' : 'none';
        localStorage.setItem('hmgo_lang', lang);
    }

    const savedLang = localStorage.getItem('hmgo_lang');
    const initialLang = (savedLang === 'ru' || savedLang === 'en') ? savedLang : 'ru';
    setLanguage(initialLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
</script>
</body>
</html>