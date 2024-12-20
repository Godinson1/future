import { useState, useMemo } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ICartData } from "src/app/constants/data";
import { useMutation } from "react-query";
import { getErrorMessage } from "../lib/utils";
import { placeOrder } from "../api/order/api.order";
// import { usePayment } from "./usePayment";
import { useStateContext } from "../contexts/ContextProvider";

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

export const tipMapper: { [index: string]: number } = {
  0: 0,
  1: 200,
  2: 500,
  3: 1000,
};

export const useCart = () => {
  const [cart, setCart] = useState<ICartData[]>([]);
  const [deliveryNote, setDeliveryNote] = useState<string>("");
  const [shippingAddress, setShippingAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [deliveryTip, setDeliveryTip] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(2);
  const [activeSteps, setActiveSteps] = useState<null | number>(null);

  const totalCart = useMemo(() => {
    const cartTotal = cart.reduce((total, item) => total + item.total, 0);
    setSubTotal(cartTotal);
    return cartTotal + tipMapper[deliveryTip];
  }, [cart, deliveryTip]);
  // const { handlePayment, closePaymentModal } = usePayment(totalCart);

  const { mutate: createOrder, isLoading: createOrderLoading } = useMutation(Order.create, {
    mutationFn: placeOrder,
    onSuccess: ({ data }: any) => {
      toast.success("Order Placed Successfully!");
      // handlePayment({
      //   callback: (response) => {
      //     console.log(response);
      //     closePaymentModal();
      //     setIsClicked(initialState);
      //     setActiveSteps(1);
      //     setCart([]);
      //   },
      //   onClose: () => router.push("/purchase"),
      // });
    },
    onError: (error: any) => {
      toast.error(getErrorMessage(error.response.data.message));
    },
  });

  const addToCart = (item: ICartData) => setCart((prevState: ICartData[]) => [...prevState, { ...item, total: item.price * (item.quantity || 1) }]);

  const removeFromCart = (item: ICartData): void => {
    const newCartData = cart.filter((data) => data._id !== item._id);
    setCart(newCartData);
  };

  const getQuantity = (quantity: number, type: updateType): number => {
    return type === updateType.DECREMENT ? Math.max(quantity - 1, 0) : quantity + 1;
  };

  const updateQuantity = (itemsData: ICartData[], item: ICartData, type: updateType, purchase_type: purchaseType) => {
    const newData = itemsData.map((data) => {
      if (data._id === item._id) {
        const newQuantity = getQuantity(data.quantity ?? 1, type);
        return { ...data, quantity: newQuantity, total: newQuantity * data.price };
      }
      return data;
    }) as ICartData[];
    return purchase_type === purchaseType.CART ? setCart(newData) : newData;
  };

  const isCartData = (item: ICartData): boolean => {
    return cart.find((cartItem: ICartData) => cartItem._id === item._id) !== undefined;
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
    setDeliveryTip,
    createOrder,
    createOrderLoading,
    activeSteps,
  };
};
