import { useState, useMemo } from "react";
import { toast } from "react-toastify";
import { ICartData } from "@/constants/data";
import { useMutation } from "react-query";
import { getErrorMessage } from "../lib/utils";
import { placeOrder } from "../api/order/api.order";

export enum updateType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  REMOVE = "remove",
}

export enum purchaseType {
  ITEM = "item",
  CART = "cart",
}

enum Order {
  create = "create_order",
}

export const useCart = () => {
  const [cart, setCart] = useState<ICartData[]>([]);
  const [deliveryNote, setDeliveryNote] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryTip, setDeliveryTip] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const { mutate: createOrder, isLoading: createOrderLoading } = useMutation(Order.create, {
    mutationFn: placeOrder,
    onSuccess: ({ data }: any) => {
      toast.success("Order Placed Successfully!");
    },
    onError: (error: any) => {
      toast.error(getErrorMessage(error.response.data.message));
    },
  });

  const getTip = (tip: number): number => {
    return tip == 1 ? 200 : tip === 2 ? 500 : tip == 3 ? 1000 : 0;
  };

  const totalCart = useMemo(() => {
    const cartTotal = cart.reduce((total, item) => total + item.total, 0);
    setSubTotal(cartTotal);
    return cartTotal + getTip(deliveryTip);
  }, [cart, deliveryTip]);

  const addToCart = (item: ICartData) => setCart((prevState: ICartData[]) => [...prevState, { ...item, total: item.price * item.quantity }]);

  const removeFromCart = (item: ICartData): void => {
    const newCartData = cart.filter((data) => data.productId !== item.productId);
    setCart(newCartData);
  };

  const getQuantity = (quantity: number, type: updateType): number => {
    return type === updateType.DECREMENT ? Math.max(quantity - 1, 0) : quantity + 1;
  };

  const updateQuantity = (itemsData: ICartData[], item: ICartData, type: updateType, purchase_type: purchaseType) => {
    const newData = itemsData.map((data) => {
      if (data.productId === item.productId) {
        const newQuantity = getQuantity(data.quantity, type);
        return { ...data, quantity: newQuantity, total: newQuantity * data.price };
      }
      return data;
    }) as ICartData[];
    return purchase_type === purchaseType.CART ? setCart(newData) : newData;
  };

  const isCartData = (item: ICartData): boolean => {
    return cart.find((cartItem: ICartData) => cartItem.productId === item.productId) !== undefined;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    isCartData,
    totalCart,
    subTotal,
    getQuantity,
    updateQuantity,
    deliveryNote,
    setDeliveryNote,
    shippingAddress,
    setShippingAddress,
    paymentMethod,
    setPaymentMethod,
    deliveryTip,
    getTip,
    setDeliveryTip,
    createOrder,
    createOrderLoading,
  };
};
