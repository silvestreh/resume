const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/dist'));

app.post('/', (req, res) => {
    if (!req.body.email || !req.body.name ||
        !req.body.message || !mailRegex.test(req.body.email)) {
        return res.status(500).json({ ok: false });
    }

    const data = {
        from: `${req.body.name} <${req.body.email}>`,
        to: process.env.RESUME_MAIL,
        subject: `Contact from Résumé – ${req.body.name}`,
        text: req.body.message
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            return res.status(500).json({ ok: false });
        }
        res.status(200).json({ ok: true });
    });
});

app.listen(3000);
