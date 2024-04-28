import * as schedule from 'node-schedule';
import { getListOfBirthdayUser } from '../user/user.service';

export function emailScheduler(cronSpec: string) {
  try {
    schedule.scheduleJob(cronSpec, scheduleBirthdayWish);
  } catch (error) {
    console.log('Error in initializing birthday email scheduler');
  }
}

function scheduleBirthdayWish() {
  // using batch process will be more efficient
  const userList = getListOfBirthdayUser();
  // send in bulk will be better
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
  try {
    // send email using email service
    console.log('Sending email to', toEmail);
    console.log(emailBody);
  } catch (error) {
    // save the email and retry later
    console.log('Can not send email to', toEmail);
  }
}
