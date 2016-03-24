'use strict';

var faker = require('faker');

module.exports = () => {
  let message = [];
  let room    = [];
  let user    = [];
  let friend  = [];

  const randomNum = () => {
    return Math.floor(Math.random() * 30 + 1);
  };

  const generate = () => {
    user.push({
      username: 'Anonymous Aardvark',
      email: faker.internet.email(),
      password: faker.internet.password(),
      profilePicUrl: faker.image.imageUrl(),
      createdAt: faker.date.past(), 
      updatedAt: faker.date.recent()
    });
    user.push({
      username: 'Anonymous Bear',
      email: faker.internet.email(),
      password: faker.internet.password(),
      profilePicUrl: faker.image.imageUrl(),
      createdAt: faker.date.past(), 
      updatedAt: faker.date.recent()
    });
    user.push({
      username: 'Anonymous Cheetah',
      email: faker.internet.email(),
      password: faker.internet.password(),
      profilePicUrl: faker.image.imageUrl(),
      createdAt: faker.date.past(), 
      updatedAt: faker.date.recent()
    });
    user.push({
      username: 'Anonymous Elephant',
      email: faker.internet.email(),
      password: faker.internet.password(),
      profilePicUrl: faker.image.imageUrl(),
      createdAt: faker.date.past(), 
      updatedAt: faker.date.recent()
    });
    user.push({
      username: 'Anonymous Giraffe',
      email: faker.internet.email(),
      password: faker.internet.password(),
      profilePicUrl: faker.image.imageUrl(),
      createdAt: faker.date.past(), 
      updatedAt: faker.date.recent()
    });
    user.push({
      username: 'Anonymous Hippo',
      email: faker.internet.email(),
      password: faker.internet.password(),
      profilePicUrl: faker.image.imageUrl(),
      createdAt: faker.date.past(), 
      updatedAt: faker.date.recent()
    });
    
    for (let i = 0; i < 30; i++) {
      user.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        profilePicUrl: faker.image.imageUrl(),
        createdAt: faker.date.past(), 
        updatedAt: faker.date.recent()
      });

      room.push({
        name: faker.lorem.words(),
        hash: faker.internet.password(),
        protected: faker.random.boolean(),
        extended: faker.random.boolean(),
        userId: randomNum(),
        createdAt: faker.date.past(), 
        updatedAt: faker.date.recent()
      });

      message.push({
        text: faker.lorem.sentence(),
        userId: randomNum(),
        roomHash: faker.internet.password(),
        createdAt: faker.date.past(), 
        updatedAt: faker.date.recent()
      });

      friend.push({
        userId: randomNum(),
        friendId: randomNum(),
        createdAt: faker.date.past(), 
        updatedAt: faker.date.recent()
      });
    };
  };

  generate();

  return { message, room, user, friend };
}