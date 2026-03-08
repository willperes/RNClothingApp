import { CategoryService } from "../category.service";
import { Category } from "../models/category.model";

export interface GetAllCategoriesUseCase {
  execute: () => Promise<Category[]>;
}

export class GetAllCategoriesUseCaseImpl implements GetAllCategoriesUseCase {
  constructor(private readonly service: CategoryService) {}

  execute: () => Promise<Category[]> = async () => {
    const response = await this.service.getAllCategories();
    return response;
  };
}
