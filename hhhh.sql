1. Create the users Table

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL, 
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

2. Insert a New User

INSERT INTO users (username, password, email)
VALUES ('shila', '12345678', 'shila@gmail.com');
VALUES ('Sharmin', '12345678', 'sharmin@gmail.com');
VALUES ('Dipu', '12345678', 'dipu@gmail.com');
VALUES ('Mamun', '12345678', 'mamun@gmail.com');
VALUES ('Fahim doe', '12345678', 'fahim@gmail.com');

3. Update an Existing User

UPDATE users
SET username = 'shila', email = 'shila.mbstu@gmail.com'
WHERE id = 1;

4. Delete a User
DELETE FROM users
WHERE id = 1;

5. Authenticate a User

SELECT * FROM users
WHERE username = 'shila' AND password = '12345678';

