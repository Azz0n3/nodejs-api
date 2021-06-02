const request = require('supertest');
const app = require('./index');
const crypto = require('crypto');


describe('Users Controller Tests', () => {
    it('Should insert an user', async () => {
        const response = await request(app)
        .post('/createUser')
        .send({
            "username": crypto.randomBytes(5).toString('hex'),
            "password": "Workshop",
            "email": "gabriel.azzone@gmail.com"
        })

        expect(response.statusCode).toEqual(200);
        expect(response.body[0]).toHaveProperty('id');
    });

    it('Should not insert an user', async () => {
        const response = await request(app)
        .post('/createUser')
        .send({
            "password": "Workshop",
            "email": "gabriel.azzone@gmail.com"
        })

        expect(response.statusCode).toEqual(400);
    });

    it('Should return array of users', async () => {
        const response = await request(app)
        .get('/getUsers');

        expect(response.statusCode).toEqual(200);
        expect(response.body[0]).toHaveProperty('id');
    });

    it('Should delete an user', async () => {
        const createUserResponse = await request(app)
        .post('/createUser')
        .send({
            "username": crypto.randomBytes(5).toString('hex'),
            "password": "12345",
            "email": "gabriel.azzone@gmail.com"
        });

        const user = createUserResponse.body[0].id

        const response = await request(app)
        .delete(`/deleteUser/${user}`);

        expect(response.statusCode).toEqual(200);
    });


    it('Should update an user', async () => {
        const createUserResponse = await request(app)
        .post('/createUser')
        .send({
            "username": crypto.randomBytes(5).toString('hex'),
            "password": "12345",
            "email": "gabriel.azzone@gmail.com"
        });

        const user = createUserResponse.body[0].id;

        const response = await request(app)
        .put('/updateUser')
        .send({
            "id": user,
            "username": "NewUsername",
            "password": "12345",
            "email": "gabriel.azzone@gmail.com"
        });

        expect(response.body).toEqual({
            "username": "NewUsername",
            "email": "gabriel.azzone@gmail.com"
        });
    });
});
