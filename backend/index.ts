import { App } from '@tinyhttp/app'

const app = new App();

app.listen(3000, () => {
    console.log('Server Rodando');
});