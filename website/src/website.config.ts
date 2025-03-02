import payloadConfig from '@payload/payload.config'

export default Promise.resolve(true)
  .then(async () => await payloadConfig)
  .then((config) => ({
    ...config,
    gtm: {
      id: process.env.GTM_ID,
    },
    app: {
      logo: 'https://res.cloudinary.com/ivanistao/image/upload/t_Profile/v1740834460/aisuckhoe/logo/logo-light_a53s1a.png',
    },
  }))
