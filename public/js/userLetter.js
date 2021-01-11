const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: 'key-87ac7b216c1df3991287e5fe1dc410bc',
    domain: 'sandboxd744086323834c6db9734b9ee622b68a.mailgun.org',
  },
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendEmail = (username, userEmail, userProject, userMessage, cb) => {
  const mailOptions = {
    from: userEmail,
    to: 'legenda1200@gmail.com',
    subject: 'My name is: ' + username + ' and my project ' + userProject,
    text: userMessage,
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, data)
    }
  })
}

module.exports = sendEmail
