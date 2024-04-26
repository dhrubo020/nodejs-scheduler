import * as schedule from 'node-schedule';
import { getListOfBirthdayUser } from '../user/user.service';

export function emailScheduler(cronSpec: string) {
  schedule.scheduleJob(cronSpec, scheduleBirthdayWish);
}

function scheduleBirthdayWish() {
  const userList = getListOfBirthdayUser();
  userList.map((e) => {
    const emailBody = getEmailBody(e.name);
    sendEmail(e.email, emailBody);
  });
}

export function getEmailBody(username: string) {
  return `Dear ${username ?? 'User'},
  Happy Birthday To You!
  May your day be filled with joy, laughter, and cherished moments!
  `;
}

export function sendEmail(toEmail: string, emailBody: string) {
  // send email using email service
  console.log('Sending email to', toEmail);
  console.log(emailBody);
}
