import users from "./data.js";
import  createUserList  from "./components/module.js";

const userList = createUserList(users);
document.getElementById('app').appendChild(userList);
