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
  price: string;
}

export const DeliveryMethod: MethodType[] = [
  { name: "Kurier - InPost,UPS,FedEx,DTS,PickPack", price: "(20.00zł)" },
  { name: "Odbiór w salonie", price: "(bezpłatnie)" },
  { name: "InPost Paczkomat 24/7", price: "9.90zł" },
  { name: "odbiór w punkcie - Żabka,Poczta Polska i inne", price: "(8.90zł)" },
];

export const PaymentMethod: MethodType[] = [
  { name: "Płatność online", price: "(bezpłatnie)" },
  { name: "Karta płatnicza online", price: "(bezpłatnie)" },
  { name: "Blik", price: "(bezpłatnie)" },
  { name: "Przelew tradycyjny", price: "(bezpłatnie)" },
  { name: "Przy odbiorze", price: "(5.00zł)" },
  { name: "Raty", price: "(bezpłatnie)" },
];
