const express = require("express");
const { Client } = require("pg");

const app = express();

const client = new Client({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "testWithNodejs",
});

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
    const createTableUser = `
    DROP TABLE IF EXISTS users;
    create table users (
        id int,
        name varchar(255)
    )
    `;
    client.query(createTableUser);

    const INSERTTableUser = `
    INSERT INTO users ( id, name) values ('1', 'Huns Paul');
    `;
    return client.query(INSERTTableUser);
  })
  .catch((err) => {
    console.log("Error connecting to PostgreSQL database", err);
  });

app.listen(8080, () => {
  console.log("server is running port 8000");
});
