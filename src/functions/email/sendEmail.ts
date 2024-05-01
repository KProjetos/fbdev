const apiKey: string = `${process.env.SENDGRID_API_KEY}`;
const apiUrl: string = 'https://api.sendgrid.com/v3/mail/send';

export const sendEmail = async (to: string, from: string, subject: string, text: string) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: from },
      subject: subject,
      content: [{ type: 'text/plain', value: text }],
    }),
  });

  if (response.ok) {
    console.log('Email enviado com sucesso!');
  } else {
    console.error('Erro ao enviar email:', await response.json());
  }
};