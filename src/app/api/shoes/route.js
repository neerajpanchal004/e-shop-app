const {NextResponse} = require("next/server")

export function GET(request){
    const Shoes =  [
        {
          "id": "1",
          "name": "CRYSTA PRO Running Shoes For Men  (Black)",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/e/x/-original-imagyk4zqwynphcx.jpeg?q=70&crop=true",
          "company": "CAMPUS",
          "price": 549,
          "rating": 4,
          "size": [
            7,
            8,
            9,
            10
          ]
        },
        {
          "id": "2",
          "name": "Sneaker Casual Shoes for Men | Soft Cushioned Insole, Slip-Resistance Sneakers For Men  (Blue)",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/5/x/6-rsl045-red-tape-blue-original-imagwmgyca6vtz2h.jpeg?q=70&crop=true",
          "company": "RED TAPE ",
          "price": 1299,
          "rating": 4,
          "size": [
            7,
            8,
            9,
            10
          ]
        },
        {
          "id": "3",
          "name": "Running Shoes For Men  (White)      ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/1/0/p/9-bullet-9-go-ride-white-original-imagqmnsfsk9jzpm.jpeg?q=70&crop=true",
          "company": "GO RIDE",
          "price": 1006,
          "rating": 5,
          "size": []
        },
        {
          "id": "4",
          "name": "Casual Sneakers Shoes for Men | Soft Cushioned Insole, Slip-Resistance Sneakers For Men  (Blue, Grey)      ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/w/0/z/8-rsl049-red-tape-blue-grey-original-imagxwynuptsdfv8.jpeg?q=70&crop=false",
          "company": "RED TAPE       ",
          "price": "1,179",
          "rating": 3,
          "size": [
            6,
            7,
            8
          ]
        },
        {
          "id": "5",
          "name": "Signature Sports shoes, Running, Walking, Lightweight, Gym, Stylish For Men  (White, Blue) ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/x/n/0/7-signature-7-jqr-b-wht-wave-blu-original-imaguvfefezpngeu.jpeg?q=70&crop=true",
          "company": "JQR  ",
          "price": 1427,
          "rating": 5,
          "size": [
            7,
            8,
            9
          ]
        },
        {
          "id": "6",
          "name": "Lace Up For Men  (Black)",
          "image": "https://rukminim2.flixcar.com/image/832/832/xif0q/shoe/o/m/y/-original-imagzry3gugpvqty.jpeg?q=70&crop=true",
          "company": "Bata       ",
          "price": "679",
          "rating": 4,
          "size": [
            7,
            8
          ]
        },
        {
          "id": "7",
          "name": "Trending Stylish Casual Outdoor Shoes For Men Sneakers For Men  (White, Black)      ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=70&crop=true",
          "company": "URBANBOX       ",
          "price": "299",
          "rating": 3,
          "size": [
            7,
            8,
            10
          ]
        },
        {
          "id": "8",
          "name": "HAKKEL RED CASUAL SHOES FOR MEN LIGHTWEIGHT SHOES Casuals For Men  (Red) ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/l/i/8-sneaker-hakkel-red-original-imagwhnw4hxpnvzg.jpeg?q=70&crop=true",
          "company": "HAKKEL       ",
          "price": "849",
          "rating": 4,
          "size": [
            7,
            8,
            9
          ]
        },
        {
          "id": "9",
          "name": "Lazer Evo Casuals For Men  (Blue)      ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/s/x/-original-imagy96c9eh3x6qq.jpeg?q=70&crop=true",
          "company": "PUMA",
          "price": "1047",
          "rating": 5,
          "size": [
            7,
            8,
            9
          ]
        },
        {
          "id": "10",
          "name": "Loafers For Men  (Brown)      ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/m/y/a/-original-imaghhz3mzfrghf3.jpeg?q=70&crop=true",
          "company": "Bata",
          "price": 559,
          "rating": 4,
          "size": [
            7,
            8,
            9
          ]
        }
      ]
      return NextResponse.json(Shoes)
}