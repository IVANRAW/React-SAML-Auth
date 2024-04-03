const config = {
    saml: {
        cert: './source/config/saml.pem',
        entryPoint: 'https://trial-6104336.okta.com/app/trial-6104336_reactsamlintegration_1/exkcy5qfghTP4j2oe697/sso/saml',
        issuer: 'http://localhost:1337',
        options: {
            failureRedirect: '/login',
            failureFlash: true
        }
    },
    server: {
        port: 1337
    },
    session: {
        resave: false,
        secret: 'supersecretamazingpassword',
        saveUninitialized: true
    }
};

export default config;
