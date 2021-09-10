const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-1' })

const sm = new AWS.SecretsManager()

async function recuperarClave (key) {
  const params = {
    SecretId: key
  }

  try {
    const secret = await sm.getSecretValue(params).promise()
    console.log(secret)
  } catch (err) {
    console.error('No se pudo recuperar', err)
  }
}

if (process.argv.length < 3) {
  console.log('Ingrese un secreto')
  process.exit(0)
}

const keyArg = process.argv[2]
recuperarClave(keyArg)