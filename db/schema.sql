DROP DATABASE IF EXISTS localartDB;
CREATE DATABASE localartDB;

USE DATABASE localartDB;

-- Schema for dummy data, app will use sequelize to create tables--

CREATE TABLE regions (
    regionID INT NOT NULL AUTO_INCREMENT,
    region VARCHAR(50) NOT NULL,
    PRIMARY KEY (regionID)

);

CREATE TABLE locations (
    locationID INT NOT NULL AUTO_INCREMENT,
    location VARCHAR(50) NOT NULL,
    PRIMARY KEY (locationID),
    FOREIGN KEY (regionID) REFERENCES regions (regionID)

);

CREATE TABLE artists (
    artistID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    contact VARCHAR(100),
    PRIMARY KEY (artistID),
    FOREIGN KEY (location) REFERENCES locations (location)

);

CREATE TABLE artworks (
    artID INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    image VARCHAR(500),
    PRIMARY KEY (artID),
    FOREIGN KEY (name) REFERENCES artists (name)
);

CREATE TABLE comments (
    commentID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    contact VARCHAR(100) NULL,
    comment VARCHAR(500) NOT NULL,
    PRIMARY KEY (commentID)
);