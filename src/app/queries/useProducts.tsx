import { useQuery } from "@tanstack/react-query";
import { getAllDetails } from "../ben-holmes/components/test-suspense";

export const useProducts = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllDetails,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export const useClientProducts = () => {
  const { isLoading, data = [] } = useQuery({
    queryKey: ["client-products"],
    queryFn: getAllDetails,
  });

  return {
    isLoading,
    data,
  };
};
