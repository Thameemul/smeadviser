const functions = require('firebase-functions');
const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
//const hbs = require('nodemailer-express-handlebars');

admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

// Send Email when new post is created

exports.sendPostEmail=functions.firestore.document('post/{docId}')
.onCreate((snap,context)=>{
    const postdata=snap.data();
    let sendPost=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:SENDER_EMAIL,
            pass:SENDER_PASSWORD
        }
    });

// sendPostEmail.use('compile',hbs({
//     viewEngine : 'express-handlebars',
//     viewPath: './views/'
// }));


sendPost.sendMail({
         from: 'codeblitz.smeadviser@gmail.com',
         to: `${postdata.email}`,
         subject: 'New Post created',
         text: `${postdata.postdesc}`
        // template: 'index.handlebars'
    }).then(res=>console.log('successfully sent the mail for post')).catch(err=>console.log('Error Occurred while sending email for new post creation',err));
});

// Send Email when new query is created

exports.sendQueryEmail=functions.firestore.document('query/{docId}')
.onCreate((snap,context)=>{
    const querydata=snap.data();
    let sendQuery=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:SENDER_EMAIL,
            pass:SENDER_PASSWORD
        }
    });

sendQuery.sendMail({
         from: 'codeblitz.smeadviser@gmail.com',
         to: `${querydata.email}`,
         subject: 'Test mail triggered from firebase for NEW QUERY',
         text: `${querydata.querydesc}`,
    }).then(res=>console.log('successfully sent the mail for query')).catch(err=>console.log('Error Occurred while sending email for new query creation',err));
});
