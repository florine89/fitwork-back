-- creating role to manage DB
CREATE USER fitwork_admin WITH PASSWORD 'fitwork';

-- Creating DB
CREATE DATABASE oblog OWNER fitwork_admin;
