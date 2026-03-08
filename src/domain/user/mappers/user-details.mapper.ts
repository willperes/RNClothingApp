import { UserDetailsResponseDto } from "../dtos/user-details.dto";
import { UserDetails } from "../models/user-details.model";

export const userDetailsMapper = {
  fromDTO: (dto: UserDetailsResponseDto): UserDetails => {
    return {
      id: dto.id,
      fullName: dto.full_name,
      email: dto.email,
      phoneNumber: dto.phone_number,
      profilePicture: dto.profile_picture ?? null,
    };
  },
};
