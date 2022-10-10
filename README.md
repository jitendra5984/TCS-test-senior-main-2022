
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
```JSON
[
  {
    "collectiontype": "home",
    "collectionid": "sdt3q3g2PD1HGktzAWZX21O6PYvcGsxK"
  },
  {
    "collectiontype": "landing",
    "collectionid": "MUODExV44k1gRUp2EniU6Shx7JHW6PkW"
  },
  {
    "collectiontype": "news",
    "collectionid": "gztyHKDA83S5EXTOYKmsse33m0tEfEj1"
  }
]
```

API 2: http://localhost:3000/collection/ZKXSpAvFhSM4bERoS3YqOdHS67TRbr2d (to fetch list of news data via collection ID)
```JSON
[
  {
    "collectionId": "ZKXSpAvFhSM4bERoS3YqOdHS67TRbr2d",
    "Title": "LIVE: Rollercoaster victim was struck following another family tragedy",
    "Imageurl": "https://content.api.news/v3/images/bin/87b10609b0a3213d00154f5abfab1a87",
    "Tag": "SAD UPDATE",
    "Intro": "Devastating insight into the heartbreak Shylah Rodden’s family have been dealing with has been shared by a close friend of the injured Melbourne woman.",
    "Published": "2m",
    "Comment": "0"
  },
  {
    "collectionId": "ZKXSpAvFhSM4bERoS3YqOdHS67TRbr2d",
    "Title": "‘Terrorist attack’: Furious Putin unleashes",
    "Imageurl": "https://content.api.news/v3/images/bin/7c8db58514536304189857a681524a22",
    "Tag": "EXCLUSIVE",
    "Intro": "Vladimir Putin wasted no time in pointing the finger at Ukraine for blowing up the Crimea bridge – a key transport link for Russian soldiers.",
    "Published": "2h",
    "Comment": "34"
  },
  {
    "collectionId": "ZKXSpAvFhSM4bERoS3YqOdHS67TRbr2d",
    "Title": "‘Malicious’ attack: More Aussie data stolen",
    "Imageurl": "https://content.api.news/v3/images/bin/5ed7a0ca5aca6f13eb6ad6c7252d31da?width=150",
    "Tag": "",
    "Intro": "",
    "Published": "8m",
    "Comment": "6"
  },
  {
    "collectionId": "ZKXSpAvFhSM4bERoS3YqOdHS67TRbr2d",
    "Title": "Beautiful twist after disabled man fired",
    "Imageurl": "https://content.api.news/v3/images/bin/c0df034fa0eceda3cd063117d33e051c?width=150",
    "Tag": "",
    "Intro": "",
    "Published": "12m",
    "Comment": "4"
  },
  {
    "collectionId": "ZKXSpAvFhSM4bERoS3YqOdHS67TRbr2d",
    "Title": "$370m NFL star becomes laughing stock",
    "Imageurl": "https://content.api.news/v3/images/bin/7c90d406c37f0dcb9813b37f013ee0d6?width=150",
    "Tag": "",
    "Intro": "",
    "Published": "30m",
    "Comment": "2"
  }
]
```

Note: currently its return only 5 news articles and data is static taken from news.com.au website.

## Responsive Layout

### Desktop Layout

![Screenshot](https://github.com/jitendra5984/TCS-test-senior-main-2022/blob/main/screenshots/desktop%20screenshot.JPG)

### Tablet Layout

![Screenshot](https://github.com/jitendra5984/TCS-test-senior-main-2022/blob/main/screenshots/tablet%20screenshot.JPG)

### Mobile Layout

![Screenshot](https://github.com/jitendra5984/TCS-test-senior-main-2022/blob/main/screenshots/mobile%20screenshot.JPG)
## Vanilla Js Solution

There were too many ways to do this webpage, I have choosen vanilla js to provide easy and simplest solution.
It's done using plain html, css and javascript. fetch api is used to get data from collection apis. no template enginge is used html is merged in the same page as used in function.