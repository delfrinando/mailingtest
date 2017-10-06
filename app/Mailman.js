const Mail = require('../models/mail');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

class Mailman {
  constructor() {
    console.log('delfrinando pranata');
    this.init();
    this.setTransporter();
    this.job = null;
  }

  init() {
    Mail.getAllMails((err, rows) => {
      if (err) {
        console.log(err);
      } else {
        const today = new Date()
        const twoDaysAgo = new Date(+(new Date()) - 2 * 24 * 60 * 60 * 1000)
        const fourDaysAgo = new Date(+(new Date()) - 4 * 24 * 60 * 60 * 1000)

        console.log('today', today)

        rows.forEach(function (row) {
          if (row.last_login >= fourDaysAgo) {
            console.log('not responsive')
            console.log('not responsive', row.last_login)
            console.log('not responsive', fourDaysAgo)
          }
          if (row.last_login >= twoDaysAgo && row.last_login < fourDaysAgo) {
            console.log('inactive')
            console.log('inactive', row.last_login)
            console.log('inactive', twoDaysAgo)
          }
          if (row.last_login < twoDaysAgo) {
            console.log('active')
            console.log('active', row.last_login)
            console.log('active', twoDaysAgo)
          }
        });
      }
    });
  }

  startCronJob() {
    this.job = new CronJob('* * * * * *', () => {
      
    }, null, true, 'Asia/Jakarta');

  }

  setTransporter() {
    return new Promise((resolve, reject) => {
      this.transporter = nodemailer.createTransport(smtpTransport({
        host: 'HOST HERE',
        port: 'PORT HERE',
      }));
      this.transporter.verify((err) => {
        if (err) return reject(err);
        this.logger.info('[MailMan Notifier] Succeed set up transporter');

        return resolve(true);
      });
    });
  }

  sendMail(document) {
    if (!document) return null;

    this.job.stop();

    const mailOptions = {
      from: document.from,
      to: document.to,
      subject: document.requestedBy,
    };

    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error) => {
        return resolve(document);
      });
    });
  }
}

module.exports = Mailman;