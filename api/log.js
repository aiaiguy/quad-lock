// Password gate + pageview logger for the Quad Lock proposal site.
// Logs to Vercel function console (viewable in dashboard) and fires a
// push notification to an unguessable ntfy.sh topic.

const NTFY_TOPIC = 'justin-quadlock-proposal-9a23617986cf0d9a';

module.exports = (req, res) => {
  // CORS (allow the proxied domain + the direct alias)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || req.headers['x-real-ip']
    || 'unknown';
  const country = req.headers['x-vercel-ip-country'] || 'unknown';
  const region = req.headers['x-vercel-ip-country-region'] || 'unknown';
  const city = req.headers['x-vercel-ip-city']
    ? decodeURIComponent(req.headers['x-vercel-ip-city'])
    : 'unknown';
  const ua = req.headers['user-agent'] || 'unknown';
  const referer = req.headers['referer'] || 'direct';

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {}

  const event = body.event || (body.success ? 'password_success' : 'password_fail');
  const entry = {
    timestamp: new Date().toISOString(),
    event,
    ip,
    country,
    region,
    city,
    ua,
    referer,
  };

  // Shows up in Vercel → Deployments → Functions → Logs
  console.log('[QUADLOCK_GATE]', JSON.stringify(entry));

  // Fire-and-forget push to ntfy.sh. Justin subscribes on his phone.
  const titleMap = {
    password_success: 'Quad Lock: ACCESS',
    password_fail: 'Quad Lock: FAILED ATTEMPT',
    pageview: 'Quad Lock: PAGE VIEW',
  };
  const tagsMap = {
    password_success: 'unlock,white_check_mark',
    password_fail: 'lock,warning',
    pageview: 'eyes',
  };

  const message = `${country}/${city} · ${ip}\n${ua.slice(0, 100)}`;

  try {
    fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: 'POST',
      headers: {
        'Title': titleMap[event] || `Quad Lock: ${event}`,
        'Tags': tagsMap[event] || 'bell',
        'Priority': event === 'password_success' ? '4' : '3',
      },
      body: message,
    }).catch(() => {});
  } catch (e) {}

  return res.status(200).json({ ok: true });
};
