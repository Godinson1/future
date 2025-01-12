import { useQuery } from "react-query";
import { IFutureClient } from "../constants/clients.constant";
import { getUsers } from "@/api/user/api.user";

export const useFutureClient = () => {
  const { data: clientsData, isLoading: clientsDataLoading } = useQuery("inventories", getUsers);

  console.log("check", clientsData);
  const handleSelectedInput = (input: IFutureClient): void => {};

  return {
    clientsData,
    clientsDataLoading,
    handleSelectedInput,
  };
};
