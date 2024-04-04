import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: 'auth',
  actions: {
    async authUser(ctx) {
      const { username, password } = ctx.params;
      if (username === 'admin' && password === 'password') {
        return {
          success: true,
          message: 'Authentication Accepted',
        };
      } else {
        return {
          success: false,
          message: 'Authentication Rejected'
        };        
      }
      console.log(`Sending email to ${recipient} concerning ${subject}`);
      console.log(`Content: ${content}`);
      return `Email sent to ${recipient}`;
    },
  },
});

export default broker;
