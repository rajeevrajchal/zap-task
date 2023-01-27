# zap-task

None of these steps are mandatory, but try to complete as many as possible.

## Instructions

1. Clone this repo
2. Push your work
3. Send us an email with the link to your public repository

## Code

1. add a `/zaptic` route that will return the Zaptic logo like below
![zaptic-logo](docs/zaptic_route.jpg)


2. create error handling middleware that returns the message below when you navigate to an inexistent route

    `Seems like you're lost😱. Do you need some help?🕵️`

3. add functionality to read in data from `users.csv` (`src/data/users.csv`) and convert it to json


4. create user api endpoints in the `src/api` folder under the route `api/v1/users` to interact with data read from the csv file in the previous step.
   - `GET` - `api/v1/users/<id>` - get user by id
   - `POST` `api/v1/users` - create a new user


5. secure the `POST` endpoint with a password


## SQL

Given the following SQL statements:

```sql
drop table if exists users;
CREATE TABLE users (
    id int UNIQUE,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    job_title varchar(255),
    star boolean
);
INSERT into users(id, first_name, last_name, email, job_title, star) values
(1,'Terry','Medhurst','terry.medhurst@gmail.com','Corporate Operations Engineer',false),
(2,'John','Allcot','john.allcot@gmail.com','Dynamic Intranet Analyst',false),
(3,'Alan','Wattson','alan.wattson@gmail.com','National Identity Orchestrator',true),
(4,'Anna','Bishop','anna.bishop@gmail.com','Regional Integration Executive',false),
(5,'Samuel','Sharp','samuel.sharp@gmail.com','Future Resonance Architect',false);

drop table if exists products;
CREATE TABLE products (
    id int UNIQUE,
    title varchar(255),
    description varchar(255),
    price int
);
INSERT into products(id,title,description,price) values 
(1, 'iPhone 14', 'the newest iPhone', 000), 
(2, 'Chocolate Muffin', 'the best desert there is', 000),
(3, 'Philosophers stone', 'Mythic alchemical substance capable of turning base metals such as mercury into gold', 9999);

drop table if exists purchases;
CREATE TABLE purchases (
    id int,
    product int references products(id),
    buyer int references users(id),
    count int
);
INSERT into purchases(id,product,buyer,count) values 
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 2),
(4, 1, 5, 1),
(5, 2, 1, 2),
(6, 3, 1, 1),
(7, 2, 2, 5),
(8, 2, 4, 3),
(9, 2, 3, 2),
(10, 2, 3, 4);

```

You can use https://www.db-fiddle.com/ to test your SQL code.
Provide screenshots of the db-fiddle page (make sure query and results are visible) as proof for each of the following tasks. Please save them in a folder called `proof` along with a separate `.sql` file for the query you wrote in each task.

1. write an SQL statement to get all attributes except `id` of products that have the word “stone” in their title
2. list all user `emails` who purchased at least one `iPhone 14`
3. list all purchases of `star` users (users which have `star = true`) in the following format:
```
purchase id, product name, count, buyer email
```