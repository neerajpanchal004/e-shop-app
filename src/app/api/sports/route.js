const {NextResponse} = require('next/server')

export function Get(request){
    const Sports =[
        {
          "id":"21",
          "name":"BOLDFIT Tummy Trimmer for Men Women Double Spring Tummy Exercise Equipment Machine Gym Ab Exerciser  (Yellow)",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/ab-exerciser/b/9/r/tummy-trimmer-for-men-women-double-spring-tummy-exercise-original-imagygyzg3knmnw2.jpeg?q=70&crop=false",
          "price":1399,
          "rating":4
        },
        {
          "id":"22",
          "name":"MRF Genius Cricket Bat Kashmir Willow with Red Leather Ball, Bat Cover| | Leather bat | English Willow Cricket Bat  (1.25 kg)",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/bat/9/d/q/1-25-cricket-bat-kashmir-willow-with-red-leather-ball-bat-cover-original-imagyftsc5hewyz4.jpeg?q=70&crop=false",
          "price":1186,
          "rating":5
        },{
          "id":"23",
          "name":"JOJOMART CLUB SET OF 1 GENUINE LEATHER BALLS 2 PART Cricket Leather Ball  (Pack of 1, Yellow, Red)      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/klcmoi80/ball/b/q/e/100-150-standard-5-club-4-na-cricket-leather-ball-labh-traders-original-imagyhzme7ezbfxr.jpeg?q=70&crop=false",
          "price":299,
          "rating":3
        },{
          "id":"24",
          "name":"YONEX Astrox Attack 9 Purple Strung Badminton Racquet  (Pack of: 1, 80 g)      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/racquet/l/e/h/-original-imagwu9f4racarfd.jpeg?q=70&crop=false",
          "price":1419,
          "rating":4
        },{
          "id":"25",
          "name":"apacs Badminton Kitbag (2 compartments) Soft padded shoulder strap | Durable Polyester  (Kit Bag) ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/sport-bag/g/g/v/badminton-kitbag-2-compartments-soft-padded-shoulder-strap-original-imagy7965hthhtkh.jpeg?q=70&crop=false",
          "price":469,
          "rating":5
        },{
          "id":"26",
          "name":"LEADER Beast 26T MultiSpeed (7 Speed) Bike with FS & DD Brake 26 T Mountain Cycle  (7 Gear, Black)      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/cycle/d/l/a/beast-26t-multispeed-7-speed-mountain-bike-with-fs-dd-brake-26-original-imaggxzzzymmt9ry.jpeg?q=70&crop=false",
          "price":6999,
          "rating":5
        },{
          "id":"27",
          "name":"Adrenex by Flipkart EB-102 for HomeGym,Weight Loss Cycle with contact resistance Indoor Upright Stationary Exercise Bike  (Red, Black)",
          "image":"https://rukminim2.flixcart.com/image/832/832/l5fnhjk0/exercise-bike/y/l/o/eb-102-for-homegym-weight-loss-cycle-with-contact-resistance-original-imagg4yshftjn4rh.jpeg?q=70&crop=false",
          "price":6489,
          "rating":5
        },{
          "id":"28",
          "name":"COSCO Kick Football - Size: 5  (Pack of 1, Blue)      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/kr2e3680/ball/a/9/0/380-420-22-5-kick-1-101smufb01-football-cosco-original-imag4xhfvcdgn4gz.jpeg?q=70&crop=false",
          "price":399,
          "rating":4
        },{
          "id":"29",
          "name":"RJ Gallery Large 32 inches wooden with 24 crystal coins, striker and powder 80 cm Carrom Board  (Beige)      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/kq43iq80/board/m/4/i/large-32-inches-wooden-carrom-board-with-24-crystal-coins-original-imag47gydh3pkfz2.jpeg?q=70&crop=false",
          "price":768,
          "rating":3
        },{
          "id":"30",
          "name":"VVG TRADERS HAND GLOVES LIGHT Archery Gloves (Black) Archery Gloves  (Black)",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/sport-glove/o/u/9/both-l-hand-gloves-light-archery-gloves-black-hand-gloves-light-original-imagy9tzduggacvh.jpeg?q=70&crop=false",
          "price":391,
          "rating":5
        }
      ]
      return NextResponse.json(Sports)
}