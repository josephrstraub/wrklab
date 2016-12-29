var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
 
// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails) 
var auth = {
  auth: {
    api_key: 'key-d2158f1cc8a6ba3ec108de1e9cdce688',
    domain: 'sandboxbad6ebf7a0ac47d99b5bb2af1fe5f37c.mailgun.org'
  }
}
 
var nodemailerMailgun = nodemailer.createTransport(mg(auth));


export const sendEmail = (formData) => {
  return nodemailerMailgun.sendMail({
    from: 'Wrklab <mailgun@sandboxbad6ebf7a0ac47d99b5bb2af1fe5f37c.mailgun.org>',
    to: formData.email.value, // An array if you have multiple recipients. 
    subject: 'Thanks for reaching out!',
    //You can use "text:" to send plain-text content. It's oldschool! 
    html: `<p>Hello ${formData.name.value}, Thank you for your interest in our services. We have received your information and will reach out to you shortly.</p>`
  })
    .then(res => {
      console.log(res)
      return res
    })
    .catch(err => {
      console.log(err)
      return err
    })
} 
