import { useQuery } from "@tanstack/react-query";

import { CategoryKeys } from "../category.consts";
import { makeCategoryModule } from "../category.factory";

export const useGetAllCategories = () => {
  const { getAllCategoriesUseCase } = makeCategoryModule();

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: [CategoryKeys.GET_ALL],
    queryFn: () => getAllCategoriesUseCase.execute(),
  });
  return { data, isLoading, isError, isFetching, refetch };
};
