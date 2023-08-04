export const PayAcceptList: string[] = [
  "https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png",
  "https://assets.x-kom.pl/public-spa/xkom/e51fb0a6ab97d090.png",
  "https://assets.x-kom.pl/public-spa/xkom/33dfc5a98f0f38a4.png",
  "https://assets.x-kom.pl/public-spa/xkom/73f77216756e0f1c.png",
  "https://assets.x-kom.pl/public-spa/xkom/d2cbf1eef4e6de73.png",
  "https://assets.x-kom.pl/public-spa/xkom/076d960cdaf096e1.png",
  "https://assets.x-kom.pl/public-spa/xkom/709b7294b9957695.png",
  "https://assets.x-kom.pl/public-spa/xkom/93e0b5378eed5aa5.png",
  "https://assets.x-kom.pl/public-spa/xkom/4ba359ebd3c94054.png",
  "https://assets.x-kom.pl/public-spa/xkom/c7fb289360e74bc3.png",
];

interface MethodType {
  name: string;
  price: number;
}

export const DeliveryMethod: MethodType[] = [
  { name: "Kurier - InPost,UPS,FedEx,DTS,PickPack", price: 20.0 },
  { name: "Odbiór w salonie", price: 0 },
  { name: "InPost Paczkomat 24/7", price: 9.9 },
  { name: "Odbiór w punkcie - Żabka,Poczta Polska i inne", price: 8.9 },
];

export const PaymentMethod: MethodType[] = [
  { name: "Płatność online", price: 0 },
  { name: "Karta płatnicza online", price: 0 },
  { name: "Blik", price: 0 },
  { name: "Przelew tradycyjny", price: 0 },
  { name: "Przy odbiorze", price: 5.0 },
  { name: "Raty", price: 0 },
];