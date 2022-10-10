var express = require('express');
var router = express.Router();

// program to generate random strings
// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


/* GET collection list. */
router.get('/', function(req, res, next) {
  res.json([
    {
      collectiontype: "home",
      collectionid: generateString(32)
    },
    {
      collectiontype: "landing",
      collectionid: generateString(32)
    },
    {
      collectiontype: "news",
      collectionid: generateString(32)
    }
  ]);
});

/* GET news feed by collection ID. */
router.get('/:id', function(req, res, next) {
  const collectionID = req.params.id;
  res.json([
    {
      collectionId: collectionID,
      Title: "LIVE: Rollercoaster victim was struck following another family tragedy",
      Imageurl: "https://content.api.news/v3/images/bin/87b10609b0a3213d00154f5abfab1a87",
      Tag: "SAD UPDATE",
      Intro: "Devastating insight into the heartbreak Shylah Rodden’s family have been dealing with has been shared by a close friend of the injured Melbourne woman.",
      Published: "2m",
      Comment: "0"
    },
    {
      collectionId: collectionID,
      Title: "‘Terrorist attack’: Furious Putin unleashes",
      Imageurl: "https://content.api.news/v3/images/bin/7c8db58514536304189857a681524a22",
      Tag: "EXCLUSIVE",
      Intro: "Vladimir Putin wasted no time in pointing the finger at Ukraine for blowing up the Crimea bridge – a key transport link for Russian soldiers.",
      Published: "2h",
      Comment: "34"
    },
    {
      collectionId: collectionID,
      Title: "‘Malicious’ attack: More Aussie data stolen",
      Imageurl: "https://content.api.news/v3/images/bin/5ed7a0ca5aca6f13eb6ad6c7252d31da?width=150",
      Tag: "",
      Intro: "",
      Published: "8m",
      Comment: "6"
    },
    {
      collectionId: collectionID,
      Title: "Beautiful twist after disabled man fired",
      Imageurl: "https://content.api.news/v3/images/bin/c0df034fa0eceda3cd063117d33e051c?width=150",
      Tag: "",
      Intro: "",
      Published: "12m",
      Comment: "4"
    },
    {
      collectionId: collectionID,
      Title: "$370m NFL star becomes laughing stock",
      Imageurl: "https://content.api.news/v3/images/bin/7c90d406c37f0dcb9813b37f013ee0d6?width=150",
      Tag: "",
      Intro: "",
      Published: "30m",
      Comment: "2"
    }
  ]);
});

module.exports = router;
