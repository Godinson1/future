import { IStaff } from "../constants/staffs.constant";

export const useStaffs = () => {
  const staffsData: any = [];
  const handleSelectedInput = (input: IStaff): void => {};

  return {
    staffsData,
    handleSelectedInput,
  };
};
