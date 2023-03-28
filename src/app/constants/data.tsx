import { FiCreditCard } from "react-icons/fi";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";

import avatar from "@/assets/avatar.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.jpg";
import product5 from "@/assets/product5.jpg";
import product6 from "@/assets/product6.jpg";
import product7 from "@/assets/product7.jpg";
import { StaticImageData } from "next/image";

export interface ICartData {
  id: number;
  name: string;
  image: StaticImageData | string;
  price: number;
  category: string;
  quantity: number;
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

export const cartData: ICartData[] = [
  {
    id: 1,
    image: product5,
    name: "butterscotch ice-cream and beans",
    category: "Milk product",
    price: 250,
    quantity: 1,
    total: 0,
  },
  {
    id: 2,
    image: product6,
    name: "Supreme fresh tomato",
    category: "Vegetable Item",
    price: 450,
    quantity: 1,
    total: 0,
  },
  {
    id: 3,
    image: product7,
    name: "Red color candy",
    category: "Food Item",
    price: 190,
    quantity: 1,
    total: 0,
  },
  {
    id: 4,
    image: product5,
    name: "Cake Cafe",
    category: "Food Item",
    price: 690,
    quantity: 1,
    total: 0,
  },
  {
    id: 5,
    image: product5,
    name: "butterscotch ice-cream and beans",
    category: "Milk product",
    price: 250,
    quantity: 1,
    total: 0,
  },
  {
    id: 6,
    image: product6,
    name: "Supreme fresh tomato",
    category: "Vegetable Item",
    price: 450,
    quantity: 1,
    total: 0,
  },
  {
    id: 7,
    image: product7,
    name: "Red color candy",
    category: "Food Item",
    price: 190,
    quantity: 1,
    total: 0,
  },
  {
    id: 8,
    image: product5,
    name: "Cake Cafe",
    category: "Food Item",
    price: 690,
    quantity: 1,
    total: 0,
  },
];
