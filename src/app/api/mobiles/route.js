const {NextResponse} = require("next/server")

export function GET(request){

    // const { NextResponse } = require("next/server")

   
    const Mobiles =  [
        {
          "id": "11",
          "name": "SAMSUNG Galaxy F15 5G (Jazzy Green, 128 GB)  (6 GB RAM)",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/e/f/-original-imagymhw8g7tdyhk.jpeg?q=70&crop=false",
          "price": 14499,
          "storage": "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
          "camara": "50MP + 5MP | 13MP Front Camera"
        },
        {
          "id": "12",
          "name": "SAMSUNG Galaxy A14 5G (Dark Red, 128 GB)  (6 GB RAM)#JustHere",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/6/c/5/-original-imagmefcgvntdtha.jpeg?q=70&crop=false",
          "price": 15999,
          "storage": "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
          "camara": "50MP + 2MP | 13MP Front Camera"
        },
        {
          "id": "13",
          "name": "SAMSUNG Galaxy F54 5G (Stardust Silver, 256 GB)  (8 GB RAM)#JustHere",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70&crop=false",
          "price": 24999,
          "storage": "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB",
          "camara": "108MP + 8MP + 2MP | 32MP Front Camera"
        },
        {
          "id": "14",
          "name": "vivo T2x 5G (Marine Blue, 128 GB)  (6 GB RAM)#JustHere      ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70&crop=false",
          "price": 12999,
          "storage": "6 GB RAM | 128 GB ROM",
          "camara": "50MP + 2MP | 8MP Front Camera"
        },
        {
          "id": "15",
          "name": "vivo T2 Pro 5G (Dune Gold, 256 GB)  (8 GB RAM)      ",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70&crop=false",
          "price": 24999,
          "storage": "8 GB RAM | 256 GB ROM      ",
          "camara": "64MP + 2MP | 16MP Front Camera"
        },
        {
          "id": "16",
          "name": "vivo V29 5G (Red, 128 GB)  (8 GB RAM)",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/q/f/-original-imagtyw2vfzzwzgs.jpeg?q=70&crop=false",
          "price": 32999,
          "storage": "8 GB RAM | 128 GB ROM",
          "camara": "50MP + 8MP + 2MP | 50MP Front Camera"
        },
        {
          "id": "17",
          "name": "vivo X100 (Stargaze Blue, 256 GB)  (12 GB RAM)",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/i/i/-original-imagwyhjupspqhhp.jpeg?q=70&crop=false",
          "price": 63999,
          "storage": "12 GB RAM | 256 GB ROM",
          "camara": "50MP + 50MP + 64MP | 32MP Front Camera"
        },
        {
          "id": "18",
          "name": "Apple iPhone 13 (Starlight, 128 GB) ",
          "image": "https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70&crop=false",
          "price": 52999,
          "storage": "128 GB ROM",
          "camara": "12MP + 12MP | 12MP Front Camera "
        },
        {
          "id": "19",
          "name": "Apple iPhone 14 (Blue, 128 GB)",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70&crop=false",
          "price": 58999,
          "storage": "128 GB ROM ",
          "camara": "12MP + 12MP | 12MP Front Camera "
        },
        {
          "id": "20",
          "name": "Apple iPhone 15 (Black, 128 GB)",
          "image": "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false",
          "price": 72999,
          "storage": "128 GB ROM      ",
          "camara": "48MP + 12MP | 12MP Front Camera "
        }
      ]
      return NextResponse.json(Mobiles)
}