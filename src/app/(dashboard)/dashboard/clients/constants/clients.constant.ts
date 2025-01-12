export interface IFutureClient {
  firstName: string;
  lastName: string;
  email: number;
  id: string;
  futureId: string;
  active: number;
  type: string;
}

interface HeaderCell {
  disablePadding: boolean;
  id: keyof IFutureClient;
  label: string;
  numeric: boolean;
}

const FutureClientHeaderCell: readonly HeaderCell[] = [
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "First Name",
  },
  {
    id: "lastName",
    numeric: false,
    disablePadding: false,
    label: "Last Name",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "futureId",
    numeric: false,
    disablePadding: false,
    label: "Future Id",
  },
  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "User Type",
  },

  {
    id: "active",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];

export { FutureClientHeaderCell };
