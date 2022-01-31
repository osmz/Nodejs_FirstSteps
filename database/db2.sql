CREATE DATABASE rey_de_copas;

USE rey_de_copas;

-- USER TABLES
CREATE TABLE users(
    id INt NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL    
);

ALTER TABLE users
    ADD  PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

-- PRODUCT TABLES
CREATE TABLE product (
    id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    descripcion TEXT,
    user_id INT,
    create_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE product
    ADD PRIMARY KEY (id);

ALTER TABLE product
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;