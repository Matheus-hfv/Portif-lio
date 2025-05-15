const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota de envio de formulário
app.post('/enviar-email', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Configura o transporter (exemplo usando Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'matheushfv13@gmail.com',       // <- coloque aqui seu email
      pass: '107419'     // <- use senha de app se for Gmail
    }
  });

  const mailOptions = {
    from: email,
    to: 'SEUEMAIL@gmail.com',          // <- seu email de novo
    subject: 'Nova mensagem do portfólio',
    text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar a mensagem.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


