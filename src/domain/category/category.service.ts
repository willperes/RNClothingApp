import { HttpClient } from "@/infra/http";

import { GetAllCategoriesResponseDTO } from "./dtos/category.dto";
import { categoryMapper } from "./mappers/category.mapper";
import { Category } from "./models/category.model";

export class CategoryService {
  private readonly baseURL = "/category";

  constructor(private readonly httpClient: HttpClient) {}

  getAllCategories: () => Promise<Category[]> = async () => {
    const response = await this.httpClient.request<GetAllCategoriesResponseDTO>(
      {
        url: this.baseURL,
        method: "get",
      }
    );
    return response.data.map(categoryMapper.fromDTO);
  };
}
