-- creating role to manage DB
CREATE USER fitwork_admin WITH LOGIN PASSWORD 'fitwork';

-- Creating DB
CREATE DATABASE fitwork OWNER fitwork_admin;
