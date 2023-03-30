export interface IProduct {
  name: string;
  price: number;
  image: number;
  status: number;
  quantity_purchased: number;
  quantity_consumed: number;
  quantity_remaining: number;
  category: number;
  total: number;
}

interface HeaderCell {
  disablePadding: boolean;
  id: keyof IProduct;
  label: string;
  numeric: boolean;
}

const InventoryHeaderCell: readonly HeaderCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "category",
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "image",
    numeric: true,
    disablePadding: false,
    label: "Image",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "quantity_purchased",
    numeric: true,
    disablePadding: false,
    label: "Quantity Purchased",
  },
  {
    id: "quantity_consumed",
    numeric: true,
    disablePadding: false,
    label: "Quantity Consumed",
  },
  {
    id: "quantity_remaining",
    numeric: true,
    disablePadding: false,
    label: "Quantity Remaining",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total Price",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total Price",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total Price",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total Price",
  },
];

export { InventoryHeaderCell };
