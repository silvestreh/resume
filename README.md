[![Build Status](https://travis-ci.org/silvestreh/resume.svg?branch=master)](https://travis-ci.org/silvestreh/resume)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d649f2d710f64a3082a69e4b0088d4a0)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=silvestreh/resume&amp;utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/silvestreh/resume/branch/master/graph/badge.svg)](https://codecov.io/gh/silvestreh/resume)

# Résumé

> A personal résumé/portfolio site

## Requirements

* Node >= 0.12

## Build Setup

There's a `server.js` file with a minimal Express server to handle e-mails and serve static files from `dist/`. You'll need to put these environment variables to get Mailgun working:

```shell
export RESUME_MAIL=your@email.com
export MAILGUN_DOMAIN=mailgundomain.com
export MAILGUN_KEY=yourMailgunAPIKey
```

```shell
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
