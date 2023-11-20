import { FiCreditCard } from "react-icons/fi";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";

import avatar from "@/assets/avatar.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.jpg";
import product5 from "@/assets/product5.jpg";
import product6 from "@/assets/product6.jpg";
import product7 from "@/assets/product7.jpg";
import product8 from "@/assets/product8.jpg";
import product4 from "@/assets/product4.jpg";
import { StaticImageData } from "next/image";

export interface ICartData {
  _id: string;
  name: string;
  image: StaticImageData | string;
  price: number;
  category: string;
  quantity: number;
  total: number;
}

export interface ICartData {
  productId: string;
  name: string;
  image: StaticImageData | string;
  price: number;
  category: string;
  initialQuantityPurchased: number;
  total: number;
}

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

// export const cartData: ICartData[] = [
//   {
//     productId: "646ddb9d0f6f319e20988e6d",
//     image: product6,
//     name: "Supreme Fresh Tomato",
//     category: "Vegetable",
//     price: 300,
//     quantity: 1,
//     total: 0,
//   },
//   {
//     productId: "646ddb9d0f6f319e20988e6e",
//     image: product8,
//     name: "Yummy Candy",
//     category: "Sweet",
//     price: 500,
//     quantity: 1,
//     total: 0,
//   },
//   {
//     productId: "646ddb9d0f6f319e20988e6f",
//     image: product7,
//     name: "Cold Stone Ice Cream",
//     category: "Desert",
//     price: 300,
//     quantity: 1,
//     total: 0,
//   },
//   {
//     productId: "646ddb9d0f6f319e20988e70",
//     image: product5,
//     name: "Pizza",
//     category: "Snack",
//     price: 1200,
//     quantity: 1,
//     total: 0,
//   },
//   {
//     productId: "646ddb9d0f6f319e20988e71",
//     image: product4,
//     name: "Hollandia",
//     category: "Drink",
//     price: 300,
//     quantity: 1,
//     total: 0,
//   },
// ];
