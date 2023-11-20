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

export interface InventoryRequest {
  currentPrice: number;
  productName: string;
  productId: string;
  quantityPurchased: number;
}

export interface IProductInput {
  name: string;
  category: string;
  manufacturer: string;
  productPhotoUrl: string;
  price: number;
  description: string;
  initialQuantityPurchased: number;
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
