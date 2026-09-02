import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://pentaprizm.com',
    'https://www.pentaprizm.com',
    'https://pentaprizm.in',
    'https://www.pentaprizm.in',
  ],
  credentials: true,
}));
app.use(express.json());

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'pentaprizmofficial@gmail.com';
const SENDER_NAME = process.env.BREVO_SENDER_NAME || 'Penta Prizm';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'pentaprizmofficial@gmail.com';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildNotificationEmail(data) {
  return {
    sender: { email: SENDER_EMAIL, name: SENDER_NAME },
    to: [{ email: NOTIFICATION_EMAIL }],
    subject: `New Application: ${data.name}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,sans-serif;">
        <div style="max-width:600px;margin:0 auto;background-color:#111;border:1px solid #333;border-radius:12px;padding:32px;margin-top:20px;">
          <h1 style="color:#ff3b19;font-size:24px;margin:0 0 8px 0;text-transform:uppercase;">New Application Received</h1>
          <p style="color:#999;font-size:14px;margin:0 0 24px 0;">A new project inquiry has been submitted via the website.</p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;color:#777;font-size:13px;border-bottom:1px solid #222;width:140px;">Name</td>
              <td style="padding:10px 0;color:#fff;font-size:14px;border-bottom:1px solid #222;">${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#777;font-size:13px;border-bottom:1px solid #222;">Contact</td>
              <td style="padding:10px 0;color:#ff3b19;font-size:14px;border-bottom:1px solid #222;">${escapeHtml(data.contact)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#777;font-size:13px;border-bottom:1px solid #222;">Budget</td>
              <td style="padding:10px 0;color:#fff;font-size:14px;border-bottom:1px solid #222;">${escapeHtml(data.budget || 'Not specified')}</td>
            </tr>
          </table>

          ${data.comment ? `
          <div style="margin-bottom:24px;">
            <p style="color:#777;font-size:13px;margin:0 0 8px 0;text-transform:uppercase;letter-spacing:1px;">Project Description</p>
            <p style="color:#ccc;font-size:14px;line-height:1.6;background:#1a1a1a;border-radius:8px;padding:12px 16px;margin:0;">${escapeHtml(data.comment)}</p>
          </div>
          ` : ''}

          <hr style="border:none;border-top:1px solid #222;margin:24px 0;" />
          <p style="color:#555;font-size:11px;margin:0;text-align:center;">This email was sent from the Penta Prizm website application form.</p>
        </div>
      </body>
      </html>
    `,
  };
}

function buildConfirmationEmail(data) {
  return {
    sender: { email: SENDER_EMAIL, name: SENDER_NAME },
    to: [{ email: data.email }],
    subject: `Thanks ${data.name}! We received your project inquiry`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,sans-serif;">
        <div style="max-width:600px;margin:0 auto;background-color:#111;border:1px solid #333;border-radius:12px;padding:32px;margin-top:20px;">
          <h1 style="color:#ff3b19;font-size:24px;margin:0 0 8px 0;text-transform:uppercase;">Thank You, ${escapeHtml(data.name)}!</h1>
          <p style="color:#999;font-size:14px;margin:0 0 24px 0;">We've received your project inquiry and our team will review it shortly.</p>

          <div style="background:#1a1a1a;border-radius:8px;padding:20px;margin-bottom:24px;">
            <p style="color:#777;font-size:13px;margin:0 0 12px 0;text-transform:uppercase;letter-spacing:1px;">Your Submission Summary</p>
            <table style="width:100%;border-collapse:collapse;">
              ${data.budget ? `
              <tr>
                <td style="padding:6px 0;color:#777;font-size:13px;width:120px;">Budget</td>
                <td style="padding:6px 0;color:#fff;font-size:13px;">${escapeHtml(data.budget)}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <p style="color:#ccc;font-size:14px;line-height:1.7;margin:0 0 16px 0;">
            Our team will contact you at <strong style="color:#ff3b19;">${escapeHtml(data.contact)}</strong> within 24 hours with a tailored proposal for your project.
          </p>

          <p style="color:#ccc;font-size:14px;line-height:1.7;margin:0 0 24px 0;">
            If you have any questions in the meantime, feel free to reply to this email or reach us at <a href="mailto:${SENDER_EMAIL}" style="color:#ff3b19;text-decoration:none;">${SENDER_EMAIL}</a>.
          </p>

          <hr style="border:none;border-top:1px solid #222;margin:24px 0;" />
          <p style="color:#555;font-size:11px;margin:0;text-align:center;">Penta Prizm &mdash; Create Your Digital Identity</p>
        </div>
      </body>
      </html>
    `,
  };
}

function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

app.post('/api/submit-application', async (req, res) => {
  try {
    const { name, contact, budget, comment } = req.body;

    if (!name || !contact) {
      return res.status(400).json({ error: 'Name and Email/Phone are required.' });
    }

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not set in environment variables.');
      return res.status(500).json({ error: 'Email service not configured.' });
    }

    const headers = {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const notificationPayload = buildNotificationEmail({ name, contact, budget, comment });

    const emailPromises = [
      axios.post(BREVO_API_URL, notificationPayload, { headers }),
    ];

    if (isEmail(contact)) {
      const confirmationPayload = buildConfirmationEmail({ name, contact, budget, comment, email: contact });
      emailPromises.push(axios.post(BREVO_API_URL, confirmationPayload, { headers }));
    }

    await Promise.all(emailPromises);

    console.log(`Application submitted: ${name} (${contact})`);
    res.status(200).json({ success: true, message: 'Application submitted successfully.' });
  } catch (error) {
    console.error('Brevo API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
