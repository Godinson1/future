export interface IProduct {
  name: string;
  price: number;
  image: string;
  status: number;
  quantity_purchased: number;
  quantity_consumed: number;
  quantity_remaining: number;
  category: string;
  total: number;
}

interface HeaderCell {
  disablePadding: boolean;
  id: keyof IProduct;
  label: string;
  numeric: boolean;
}

function createData(
  name: string,
  price: number,
  category: string,
  image: string,
  status: number,
  quantity_purchased: number,
  quantity_consumed: number,
  quantity_remaining: number,
  total: number
): IProduct {
  return {
    name,
    category,
    price,
    image,
    status,
    quantity_purchased,
    quantity_consumed,
    quantity_remaining,
    total,
  };
}

const rows = [
  createData("Cupcake", 305, "hello", "image_url", 67, 4.3, 20, 30, 45),
  createData("Donut", 452, "hello", "image_url", 51, 4.9, 20, 30, 45),
  createData("Eclair", 262, "hello", "image_url", 24, 6.0, 20, 30, 45),
  createData("Frozen yoghurt", 159, "hello", "image_url", 24, 4.0, 20, 30, 45),
  createData("Gingerbread", 356, "hello", "image_url", 49, 3.9, 20, 30, 45),
  createData("Honeycomb", 408, "hello", "image_url", 87, 6.5, 20, 30, 45),
  createData("Ice cream sandwich", 237, "hello", "image_url", 37, 4.3, 20, 30, 45),
  createData("Jelly Bean", 375, "hello", "image_url", 94, 0.0, 20, 30, 45),
  createData("KitKat", 518, "hello", "image_url", 65, 7.0, 20, 30, 45),
  createData("Lollipop", 392, "hello", "image_url", 98, 0.0, 20, 30, 45),
  createData("Marshmallow", 318, "hello", "image_url", 81, 2.0, 20, 30, 45),
  createData("Nougat", 360, "hello", "image_url", 9, 37.0, 20, 30, 45),
  createData("Oreo", 437, "hello", "image_url", 63, 4.0, 20, 30, 45),
];

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
    numeric: false,
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
];

export { InventoryHeaderCell, rows };
