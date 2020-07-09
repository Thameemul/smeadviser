const functions = require('firebase-functions');
const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendQueryEmail=functions.firestore.document('query/{docId}')
.onCreate((snap,context)=>{
    const querydata = snap.data();
    const smeFields = {
        'Technical': 'techSME',
        'Domain': 'domainSME',
        'Others': 'othersSME'
    };
    let sendQuery = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD
        }
    });
    functions.logger.log('smeFields', smeFields[querydata.category]);
    const userSkillRef = admin.firestore().collection('userskill').where(smeFields[querydata.category], '==', true);

    userSkillRef.get()
        .then(querySnapshot => {
            const emails = [];
            querySnapshot.forEach(doc => {
                emails.push(doc.data().email);
                //functions.logger.log(doc.id, ' => ', doc.data());
            });
            functions.logger.log('Emails', emails)
            return emails;
        })
        .then(emails => {
            //let toEmails = emails.join(';');
            let query = `<a href="https://smeadviser-2320c.web.app/contribution/query/${querydata.id}">Click here to check detailed query and post your answers</a> ${querydata.querydesc}`
           // functions.logger.log('Mail body', query)
            return sendQuery.sendMail({
                from: 'codeblitz.smeadviser@gmail.com',
                to: emails,
                subject: 'New Query created',
                html: query
                // template: 'index.handlebars'
            });
        }).then(() => {
            functions.logger.log('Email has been sent successfully')
            return true;
        })
        .catch(err => functions.logger.log('Error Occurred while sending email for new query creation', err));
    });
