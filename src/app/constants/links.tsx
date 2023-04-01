import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineStock, AiOutlineBarChart } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { BsKanban } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";

export const SIDEBAR_LINKS = [
  {
    title: "Dashboard",
    links: [
      {
        name: "overview",
        icon: <FiHome />,
        path: "/dashboard/overview",
      },
    ],
  },
  {
    title: "User",
    links: [
      {
        name: "purchase",
        icon: <AiOutlineShoppingCart />,
        path: "/dashboard/purchase",
      },
      {
        name: "payments",
        icon: <IoMdContacts />,
        path: "/dashboard/payments",
      },
      {
        name: "transactions",
        icon: <RiContactsLine />,
        path: "/dashboard/transactions",
      },
    ],
  },
  {
    title: "Admin",
    links: [
      {
        name: "payments",
        icon: <IoMdContacts />,
        path: "/dashboard/process-payments",
      },
      {
        name: "staffs",
        icon: <RiContactsLine />,
        path: "/dashboard/staffs",
      },
      {
        name: "clients",
        icon: <RiContactsLine />,
        path: "/dashboard/clients",
      },
      {
        name: "inventory",
        icon: <BsKanban />,
        path: "/dashboard/inventory",
      },
    ],
  },
  {
    title: "Analytics",
    links: [
      {
        name: "finance",
        icon: <AiOutlineStock />,
        path: "/dashboard/analytics-finance",
      },
      {
        name: "users",
        icon: <AiOutlineBarChart />,
        path: "/dashboard/analytics-users",
      },
    ],
  },
];

export const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-[#7c66da] text-white text-md m-2";
export const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5  rounded-lg text-md text-gray-700 dark:text-gray-200 m-2";
