import { userProperties } from './constant';

function createUserList(users) {
  const userList = document.createElement('ul');
  users.forEach(user => {
    const listItem = document.createElement('li');
    userProperties.forEach(property => {
      const span = document.createElement('span');
      span.textContent = `${property}: ${user[property]}; `;
      listItem.appendChild(span);
    });
    userList.appendChild(listItem);
  });
  return userList;
}

export default createUserList;