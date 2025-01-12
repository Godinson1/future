export interface IStaff {
  fullName: string;
  email: number;
  id: string;
  futureId: string;
  status: number;
  type: string;
}

interface HeaderCell {
  disablePadding: boolean;
  id: keyof IStaff;
  label: string;
  numeric: boolean;
}

const StaffHeaderCell: readonly HeaderCell[] = [
  {
    id: "fullName",
    numeric: false,
    disablePadding: false,
    label: "Name",
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
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];

export { StaffHeaderCell };
