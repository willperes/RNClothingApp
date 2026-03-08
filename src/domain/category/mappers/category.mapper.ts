import { CategoryResponseDTO } from "../dtos/category.dto";
import { Category } from "../models/category.model";

export const categoryMapper = {
  fromDTO: (dto: CategoryResponseDTO): Category => {
    return {
      id: dto.id,
      title: dto.title,
      image: dto.image,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    };
  },
};
