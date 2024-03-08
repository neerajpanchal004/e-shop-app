const {NextResponse}= require('next/server')
 export function GET(request){
    const Menwear =[
        {
          "id":"31",
          "name":"Men Solid Mandarin Collar Cotton Blend Yellow T-Shirt",
          "image":"https://rukminim2.flixcart.com/image/832/832/l58iaa80/t-shirt/j/2/t/l-ausk0131-ausk-original-imagfyghzvtsga4r.jpeg?q=70&crop=false",
          "price":259,
          "rating":"4.7",
          "size":["S","M","L","XL"]
    
        },
        {
          "id":"32",
          "name":"Men Regular Fit Checkered Spread Collar Casual Shirt      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/1/j/u/l-st28-vebnor-original-imagts6q3zu7gzzp.jpeg?q=70&crop=false",
          "price":299,
          "rating":"3.6",
          "size":["M","L","XL"]   
        },
        {
          "id":"33",
          "name":"Men Printed Round Neck Polyester Grey T-Shirt#JustHere      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/l/h/x/s-ts12-vebnor-original-imagm6zvj4wrmyng.jpeg?q=70&crop=false",
          "price":255,
          "rating":"4.1",
          "size":["S","M","XL"]   
        }, {
          "id":"34",
          "name":"Men Regular Fit Checkered Spread Collar Casual Shirt ",
          "image":"https://rukminim2.flixcart.com/image/832/832/k55n0y80/shirt/u/r/e/44-10398025-roadster-original-imafnwy9ydgbmcdg.jpeg?q=70&crop=false",
          "price":377,
          "rating":"4.5",
          "size":["S","M","L","XL"]   
        }, {
          "id":"35",
          "name":"Men Regular Fit Solid Spread Collar Formal Shirt#JustHere      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/kwzap3k0/shirt/g/q/9/m-lstr-grey-p-v-creations-original-imag9jggsvfcgpp4.jpeg?q=70&crop=false",
          "price":399,
          "rating":"4.6",
          "size":["S","M","L","XL"]   
        }, {
          "id":"36",
          "name":"Men Striped Round Neck Cotton Blend White, Red, Blue, Yellow T-Shirt      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/w/e/x/xxl-ausk0390-ausk-original-imagqtpqdec3t4wg.jpeg?q=70&crop=false",
          "price":269,
          "rating":3.8,
          "size":["S","M","L"]   
        }, {
          "id":"37",
          "name":"Men Regular Fit Solid Spread Collar Casual Shirt  (Pack of 2) ",
          "image":"https://rukminim2.flixcart.com/image/832/832/kevpwnk0-0/shirt/p/n/m/m-ak508-blue-martin-original-imafvgkjekqsxymu.jpeg?q=70&crop=false",
          "price":499,
          "rating":"4.6",
          "size":["S","L","XL"]   
        }, {
          "id":"38",
          "name":"Men Slim Fit Printed Spread Collar Casual Shirt",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/6/v/i/xl-srt-fs-314-paisley-black-lewel-original-imagnpgp2vrhvj2e.jpeg?q=70&crop=false",
          "price":379,
          "rating":"4.3",
          "size":["S","M","L","XL"]   
        }, {
          "id":"39",
          "name":"Men Slim Fit Checkered Spread Collar Casual Shirt      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/9/9/m/xxl-0422-sh193-03-the-indian-garage-co-original-imagg22jdcd5nzqk.jpeg?q=70&crop=false",
          "price":455,
          "rating":"4.3",
          "size":["M","L","XL"]   
        }, {
          "id":"40",
          "name":"Men Slim Fit Checkered Spread Collar Casual Shirt ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/f/m/z/-original-imagngz33h2fyzzn.jpeg?q=70&crop=false",
          "price":799,
          "rating":"3.2",
          "size":["S","M","L","XL"]   
        }, {
          "id":"41",
          "name":"Men Slim Fit Striped Cut Away Collar Casual Shirt      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/8/n/i/xxl-0722-sh302-01-the-indian-garage-co-original-imagmzhgksuamgcc.jpeg?q=70&crop=false",
          "price":999,
          "rating":"4.7",
          "size":["S","M","L","XL"]   
        }, {
          "id":"42",
          "name":"Men Regular Mid Rise Grey Jeans      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/jean/h/i/5/32-pjdnpotbq93471-peter-england-original-imagx8hrb5g2shtk.jpeg?q=70&crop=false",
          "price":911,
          "rating":"3.2",
          "size":["28","30","32","34"]   
        },
        {
          "id" : "43",
          "name" : "Men Regular Mid Rise Black Jeans      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/xif0q/jean/p/1/8/34-baggy1-bwolves-original-imagxzg4fkch25kk.jpeg?q=70&crop=false",
          "price":999,
          "rating":"4.1",
          "size":["28","30","32","34"]   
        },
        {
          "id" : "44",
          "name" : "Men Slim Fit Light Green Cotton Blend Trousers      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=70&crop=false",
          "price":499,
          "rating":"3.7",
          "size":["28","30","32","34"]   
        },
        {
          "id" : "45",
          "name" : "Men Skinny Mid Rise Blue Jeans      ",
          "image":"https://rukminim2.flixcart.com/image/832/832/jwxuvm80/jean/d/g/w/26-8962399-roadster-original-imafhh87qt8hhqvf.jpeg?q=70&crop=false",
          "price":"520",
          "rating":"4.5",
          "size":["28","30","32","34"]   
        }
      ]
      return NextResponse.json(Menwear)
 }