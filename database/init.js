const connection = require('./connection');

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to database.');

    // Create table users
    const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )`;
    connection.query(createTableQuery, (error, result) => {
      if (error) {
        console.error('Error creating table:', error);
      } else {
        console.log('Table created successfully.');
      }
    });

    // Insert initial data
    const insertDataQuery = `INSERT INTO users (name, email, password) VALUES
      ('John Doe', 'john.doe@example.com', 'password123'),
      ('Jane Doe', 'jane.doe@example.com', 'password456')`;
    connection.query(insertDataQuery, (error, result) => {
      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully.');
      }
    });
  }
});