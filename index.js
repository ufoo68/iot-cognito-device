import awsIot from 'aws-iot-device-sdk'
import dotenv from 'dotenv'

dotenv.config()

const device = new awsIot.device({
  keyPath: process.env.KEY_PATH,
  certPath: process.env.CERT_PATH,
  caPath: process.env.CA_PATH,
  clientId: process.env.CLIENT_ID,
  host: process.env.HOST,
})

device
  .on('connect', () => {
    console.log('connect')
    device.subscribe(process.argv[2])
  })

device
  .on('message', (topic, payload) => {
    console.log('message', topic, payload.toString())
  })