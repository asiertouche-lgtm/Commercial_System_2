import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  try {
    const {
      customerName,
      customerEmail,
      productName,
      configuration,
      orderId
    } = req.body;

    // EMAIL CLIENTE
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: customerEmail,
      subject: `Conferma ordine ${orderId}`,
      html: `
        <h1>Grazie per il tuo ordine</h1>

        <p><strong>Codice ordine:</strong> ${orderId}</p>
        <p><strong>Prodotto:</strong> ${productName}</p>

        <h3>Configurazione</h3>

        <pre>
${JSON.stringify(configuration, null, 2)}
        </pre>

        <p>Riceverai aggiornamenti sullo stato di produzione.</p>
      `
    });

    // EMAIL PRODUZIONE
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'giangirizzo.gold@gmail.com',
      subject: `NUOVA COMMESSA ${orderId}`,
      html: `
        <h1>Nuova commessa ricevuta</h1>

        <p><strong>Cliente:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Prodotto:</strong> ${productName}</p>

        <h3>Configurazione tecnica</h3>

        <pre>
${JSON.stringify(configuration, null, 2)}
        </pre>
      `
    });

    return res.status(200).json({
      success: true
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
