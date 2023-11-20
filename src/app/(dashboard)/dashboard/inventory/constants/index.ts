export interface IInventory {
  productName: string;
  currentPrice: number;
  id: string;
  // image: string;
  productId: string;
  status: number;
  quantityPurchased: number;
  quantitySold: number;
  quantityRemaining: number;
  category: string;
  // total: number;
}

interface HeaderCell {
  disablePadding: boolean;
  id: keyof IInventory;
  label: string;
  numeric: boolean;
}

const InventoryHeaderCell: readonly HeaderCell[] = [
  {
    id: "productName",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "productId",
    numeric: false,
    disablePadding: false,
    label: "Product ID",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "currentPrice",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  // {
  //   id: "image",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Image",
  // },

  {
    id: "quantityPurchased",
    numeric: true,
    disablePadding: false,
    label: "Quantity Purchased",
  },
  {
    id: "quantitySold",
    numeric: true,
    disablePadding: false,
    label: "Quantity Consumed",
  },
  {
    id: "quantityRemaining",
    numeric: true,
    disablePadding: false,
    label: "Quantity Remaining",
  },
  // {
  //   id: "total",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "Total Price",
  // },
];

export { InventoryHeaderCell };
