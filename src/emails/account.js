const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
  sgMail.send({
    to: email,
    from: 'vaibhavsathawane11@gmail.com',
    subject: 'Welcome to Task Manager',
    text: `Welcome to the app, ${name}, Happy to serve You`
  })
}

const sendCancelEmail = (email,name) =>{
  sgMail.send({
    to: email,
    from: 'vaibhavsathawane11@gmail.com',
    subject: 'Account Deleted',
    text: `Bye ${name} , hope to see you soon`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}