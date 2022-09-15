exports.sqlConfig = {
    user: '---',
    password: '--',
    server: '--',
    database: '---',
    port:1433,
    options: {
        trustServerCertificate: true , 
        encrypt: false,
        cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
        }
    }
  }


