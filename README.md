# solo-mvp-appylog

git init
git remote add origin https://github.com/NemanjaMilenkovic/wellness-log.git
git add .
git commit -m "initial commit"
git push -u origin master

- yarn init
- CREATE DATABASE appylog_mvp
- yarn add express
- yarn add nodemon --save --dev

-yarn add knex --save
-yarn add pg --save
-yarn add sqlite3 --save
-yarn knex migrate:make create_logs_table
-yarn knex migrate:latest

-yarn knex seed:make <name>
-yarn knex seed:run

-yarn add dotenv

yarn add body-parser --save
