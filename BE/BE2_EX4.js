const emmitC = require('./emmit');
function login() {
  const userId = Math.floor(Math.random() * 10) + 1;
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp}: USER_${userId} logged in`);
}
emmitC.on('logIN', login);
emmitC.on('LogOut', () => {
    const userId = Math.floor(Math.random() * 10) + 1;
  console.log(`User_${userId} logged out`);
});
setInterval(() => {
  emmitC.emit('logIN');
}, Math.random() * (2000 - 100) + 100);
setTimeout(() => {
  emmitC.emit('LogOut');
}, 5000);