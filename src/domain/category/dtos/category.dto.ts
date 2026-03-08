export interface CategoryResponseDTO {
  id: number;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type GetAllCategoriesResponseDTO = CategoryResponseDTO[];
