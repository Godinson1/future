export interface OrderLineItems {
  productId: string;
  quantity: number;
  price: number;
}

export interface CartOrderRequest {
  userId: string;
  orderLineItems: OrderLineItems[];
  paymentInfo: PaymentInfo;
  deliveryInfo: DeliveryInfo;
  subTotal: number;
  total: number;
}

export interface DeliveryInfo {
  pickUpAddress: string;
  shippingAddress: string;
  tipAmount: number;
  deliveryNote: string;
}

export interface PaymentInfo {
  type: string;
}
