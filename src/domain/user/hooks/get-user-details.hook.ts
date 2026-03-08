import { useQuery } from "@tanstack/react-query";

import { UserKeys } from "../user.consts";
import { makeUserModule } from "../user.factory";

export const useGetUserDetails = () => {
  const { getUserDetailsUseCase } = makeUserModule();

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: [UserKeys.GET_DETAILS],
    queryFn: () => getUserDetailsUseCase.execute(),
  });
  return { data, isLoading, isError, isFetching, refetch };
};
