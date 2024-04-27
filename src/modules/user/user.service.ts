import { IUser } from '../../interfaces/user.interface';
import { users } from './userlist';

const userTable: IUser[] = [];

function filterUser(user: IUser) {
  // Get today's date and month
  var today = new Date();
  var todayDay = today.getDate();
  var todayMonth = today.getMonth() + 1;

  // Parse the date string
  var dateParts = user.birthday.split('-');
  var dateYear = parseInt(dateParts[0]);
  var dateMonth = parseInt(dateParts[1]);
  var dateDay = parseInt(dateParts[2]);

  // Check if the date and month match today's date and month
  if (dateMonth === todayMonth && dateDay === todayDay) {
    return true;
  } else {
    false;
  }
}

// filtering birthday users
export function getListOfBirthdayUser(): IUser[] {
  const list = userTable.filter((e) => filterUser(e));
  return list;
}

// check is user email is already exist
export function isEmailExist(email: string): boolean {
  const isExist = userTable.find((e) => e.email === email);
  if (isExist) {
    return true;
  }
  return false;
}

// save user data while register
export function saveUser(userData: IUser): boolean {
  userTable.push(userData);
  return true;
}

// get all user data
export function getAllUser() {
  return userTable;
}

// add many user from route: /insert-many
export function addManyUser() {
  users.map((e) => userTable.push(e));
  return userTable;
}
