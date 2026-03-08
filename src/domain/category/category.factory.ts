import { httpClientFactory } from "@/infra";

import { CategoryService } from "./category.service";
import {
  GetAllCategoriesUseCase,
  GetAllCategoriesUseCaseImpl,
} from "./use-cases/get-all-categories.use-case";

interface CategoryModule {
  getAllCategoriesUseCase: GetAllCategoriesUseCase;
}

export function makeCategoryModule(): CategoryModule {
  const httpClient = httpClientFactory();
  const categoryService = new CategoryService(httpClient);

  const getAllCategoriesUseCase = new GetAllCategoriesUseCaseImpl(
    categoryService
  );

  return {
    getAllCategoriesUseCase: getAllCategoriesUseCase,
  };
}
