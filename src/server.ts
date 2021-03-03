import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
 
    response.json([
        'Victor',
        'Rosas'
    ]);
});

app.post('/users' , (request, response) => {
    const user = {
        name: 'Victor',
        email: 'victor.rosas.96@homail.com'
    }

    return response.json
});

app.listen(3333);