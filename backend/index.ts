import { App } from '@tinyhttp/app'
import { responder } from './src/controller/user.controller';

const app = new App();

app.get('/:nome', responder);

app.listen(3000, () => {
    console.log('Server Rodando');
});