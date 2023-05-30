# 09-Mailsender-API-Node.js

This is project 9/50 of my Node.js projects series. It's an API that allows users to send emails using gmail.

POST /sendEmail => Will send an email to the specified user or array of users with the subject, text and attachments submitted.

## The request body
to (required) => The user or array of users that will get the email.

subject (required) => The title of the email.

text (required) => The email body sent to the email reciever.

attachments (optional) => Will be an array containing all attachments sent with the email in the format of [{ filename: 'any name', path: 'url to the attachments' }]

## Topics covered
Node.js, express.js, nodemailer
