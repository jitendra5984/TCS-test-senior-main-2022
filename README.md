
# TCS-test-senior-main-2022

This is submitted solution for TCS senior developer interview test. Asked task is in folder named "code-test-senior-main"

Converted html and css design is in folder named "html".
Final solution is in folder named "vanilla-js".





## Express Js Server

Please refer Express Js server folder named "TCS-API" for fetching data.
Open the folder in any node envirnoment and run following commands.

npm install (to install the dependencies)

npm start (to start the server)



Default port is 3000, if you want to change it please do before npm start.

API 1: http://localhost:3000/collection
(to fetch list of collections)

API 2: http://localhost:3000/collection/ZKXSpAvFhSM4bERoS3YqOdHS67TRbr2d (to fetch list of news data via collection ID)


Note: currently its return only 5 news articles and data is static taken from news.com.au website.

## Vanilla Js Solution

There were too many ways to do this webpage, I have choosen vanilla js to provide easy and simplest solution.
It's done using plain html, css and javascript. fetch api is used to get data from collection apis. no template enginge is used html is merged in the same page as used in function.