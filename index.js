import UserService from './services/user.service.js';

async function startApp() {
  await UserService.start();
  try {
    const newUser = await UserService.call('user.createUser', {
      username: 'Lenny',
      email: 'lenny@cats.com',
    });
    console.log('New user created: ', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All Users: ', users)
  } catch (error) {
    console.log('Error: ', error);
  } finally {
    await UserService.stop();
  }
}

startApp();