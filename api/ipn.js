export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const payment = req.body;
    const crypto = require('crypto');

    // Проверка подписи (HMAC-SHA256)
    const secret = process.env.NOWPAYMENTS_IPN_SECRET;
    if (!secret) {
        console.error('NOWPAYMENTS_IPN_SECRET not set');
        return res.status(500).json({ error: 'Server misconfiguration' });
    }

    const signature = req.headers['x-nowpayments-sig'];
    if (!signature) {
        console.error('Missing signature');
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const payload = JSON.stringify(payment);
    const computedSignature = crypto.createHmac('sha256', secret).update(payload).digest('hex');

    if (signature !== computedSignature) {
        console.error('Invalid signature');
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Логируем платёж
    console.log('=== IPN received ===');
    console.log('Status:', payment.payment_status);
    console.log('Order ID:', payment.order_id);
    console.log('Payment ID:', payment.payment_id);
    console.log('Amount:', payment.pay_amount, payment.pay_currency);

    // Обработка статуса
    if (payment.payment_status === 'finished') {
        console.log('✅ Платёж успешен! Order ID:', payment.order_id);
        // Здесь можно обновить базу данных, отправить email, активировать доступ
    } else if (payment.payment_status === 'failed') {
        console.error('❌ Платёж не удался:', payment.order_id);
    } else if (payment.payment_status === 'expired') {
        console.warn('⚠️ Счёт просрочен:', payment.order_id);
    }

    return res.status(200).json({ received: true });
}