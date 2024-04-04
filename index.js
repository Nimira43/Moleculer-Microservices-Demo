import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';
import AuthService from './services/auth.service.js';

async function startApp() {
  await UserService.start();
  await EmailService.start();
  await AuthService.start();
  try {
    const newUser = await UserService.call('user.createUser', {
      username: 'Lenny',
      email: 'lenny@cats.com',
    });
    console.log('New user created: ', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All Users: ', users);
    
    const emailResult = await EmailService.call('email.sendEmail', {
      recipient: newUser.email,
      subject: 'Hamilton signs for Ferrari',
      content: 'Lewis Hamilton has signed for Ferrari and will join them in 2025.'
    });
    console.log(emailResult);

    const authResult = await AuthService.call('auth.authUser', {
      username: newUser.username,
      password: 'password'
    })
    console.log('Authentication Result: ', authResult)
    
  } catch (error) {
    console.log('Error: ', error);
  } finally {
    await UserService.stop();
    await EmailService.stop();
    await AuthService.stop();
  }
}

startApp();