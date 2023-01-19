DROP SCHEMA if exists TAZEDaily;
CREATE SCHEMA TAZEDaily;
USE TAZEDaily;
CREATE TABLE if not exists user(
    id BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    login CHARACTER VARYING(50) NOT NULL,
    password CHARACTER VARYING(60) NOT NULL,
    first_name CHARACTER VARYING(50),
    last_name CHARACTER VARYING(50),
    email CHARACTER VARYING(191),
    image_url CHARACTER VARYING(255)
);             
-- ALTER TABLE user ADD CONSTRAINT PK_user PRIMARY KEY(id);       
-- 2 +/- SELECT COUNT(*) FROM PUBLIC.user; 
INSERT INTO user VALUES(1, 'admin', '$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC', 'Administrator', 'Administrator', 'admin@localhost', '');     
INSERT INTO user VALUES(2, 'user', '$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K', 'User', 'User', 'user@localhost', '');         
CREATE TABLE if not exists authority(
    role CHARACTER VARYING(50) PRIMARY KEY NOT NULL
);     
-- ALTER TABLE authority ADD CONSTRAINT PK_authority PRIMARY KEY(NAME);           
-- 2 +/- SELECT COUNT(*) FROM PUBLIC.authority;            
INSERT INTO authority VALUES('admin');     
INSERT INTO authority VALUES('user');      
CREATE TABLE if not exists user_authority(
    login CHARACTER VARYING(50) PRIMARY KEY NOT NULL,
    authority_role CHARACTER VARYING(50) NOT NULL
);       
-- ALTER TABLE user_authority ADD CONSTRAINT CONSTRAINT_E PRIMARY KEY(user_id, authority_NAME);     
-- 3 +/- SELECT COUNT(*) FROM PUBLIC.user_authority;       
INSERT INTO user_authority VALUES('admin', 'admin');            
INSERT INTO user_authority VALUES('user', 'user');              
CREATE TABLE if not exists comment(
    id BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    body CHARACTER VARYING(255),
    author CHARACTER VARYING(255),
    time_stamp DATE,
    news_article_id BIGINT,
    user_id BIGINT
);     
-- ALTER TABLE comment ADD CONSTRAINT PK_comment PRIMARY KEY(id);               
-- 0 +/- SELECT COUNT(*) FROM PUBLIC.comment;             
CREATE TABLE if not exists news_article(
    id BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title CHARACTER VARYING(255),
    author CHARACTER VARYING(255),
    snip CHARACTER VARYING(500),
    article CHARACTER VARYING(1000),
    image CHARACTER VARYING(255),
    source CHARACTER VARYING(255),
    genre CHARACTER VARYING(255),
    date DATE,
    likes INTEGER
);               
-- ALTER TABLE news_article ADD CONSTRAINT PK_news_article PRIMARY KEY(id);               
-- 0 +/- SELECT COUNT(*) FROM PUBLIC.news_article;             
CREATE TABLE if not exists bookmark(
    id BIGINT,
    news_article_id BIGINT,
    user_id BIGINT
);

CREATE TABLE if not exists channel(
    id BIGINT PRIMARY KEY NOT NULL,
    user_id BIGINT,
    preferences CHARACTER VARYING(20)
);
-- ALTER TABLE bookmark ADD CONSTRAINT PK_bookmark PRIMARY KEY(id);       
-- 0 +/- SELECT COUNT(*) FROM PUBLIC.bookmark; 
ALTER TABLE user ADD CONSTRAINT user_login UNIQUE(login);
ALTER TABLE user ADD CONSTRAINT user_email UNIQUE(email);       
ALTER TABLE comment ADD CONSTRAINT FK_comment__news_article_id FOREIGN KEY(news_article_id) REFERENCES news_article(id);
ALTER TABLE comment ADD CONSTRAINT FK_comment__user_id FOREIGN KEY(user_id) REFERENCES user(id);    
ALTER TABLE user_authority ADD CONSTRAINT FK_user_login FOREIGN KEY(login) REFERENCES user(login);
ALTER TABLE user_authority ADD CONSTRAINT FK_authority_NAME FOREIGN KEY(authority_role) REFERENCES authority(role);       
ALTER TABLE bookmark ADD CONSTRAINT FK_bookmark__user_id FOREIGN KEY(user_id) REFERENCES user(id);            
ALTER TABLE bookmark ADD CONSTRAINT FK_bookmark__newsarticle_id FOREIGN KEY(news_article_id) REFERENCES news_article(id);
ALTER TABLE channel ADD CONSTRAINT FK_channel__user_id FOREIGN KEY(user_id) REFERENCES user(id);