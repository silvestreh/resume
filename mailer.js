const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const data = {
        from: `${req.body.name} <${req.body.email}>`,
        to: process.env.RESUME_MAIL,
        subject: 'Contact from Résumé',
        text: req.body.message
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) return res.status(500).json({ ok: false });
        res.status(200).json({ ok: true });
    });
});

app.listen(3000);
