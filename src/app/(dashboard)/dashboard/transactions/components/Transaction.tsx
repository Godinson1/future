import DataTable from "src/app/components/ui/Lists/CustomTable";
import { useTransactions } from "../hooks/useTransactions";

import { TextField } from "@mui/material";
import { useStateContext } from "@/contexts/ContextProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import styles from "@/styles/dashboard.module.css";

const Transaction = () => {
  const { filteredData, columns, search, setSearch, handleRowClick, handleDateChange } = useTransactions();
  const { inputWidth } = useStateContext();

  return (
    <div className={styles.dashboard}>
      <div className='flex gap-7'>
        <TextField onChange={(e: any) => setSearch(e.target.value)} label='Search by Name' value={search} sx={{ width: inputWidth }} variant='standard' size='small' />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className='flex gap-5'>
            <DatePicker onChange={handleDateChange} className={styles.date_range} label='From' />
            <DatePicker label='To' disableFuture />
          </div>
        </LocalizationProvider>
      </div>
      <DataTable handleRowClick={handleRowClick} rows={filteredData} columns={columns} />
    </div>
  );
};

export default Transaction;
