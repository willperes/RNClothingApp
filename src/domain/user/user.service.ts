import { HttpClient } from "@/infra/http";

import { UserDetailsResponseDto } from "./dtos/user-details.dto";
import { userDetailsMapper } from "./mappers/user-details.mapper";
import { UserDetails } from "./models/user-details.model";

export class UserService {
  private readonly baseURL = "/user";

  constructor(private readonly httpClient: HttpClient) {}

  getUserDetails: () => Promise<UserDetails> = async () => {
    const response = await this.httpClient.request<UserDetailsResponseDto>({
      url: `${this.baseURL}/details`,
      method: "get",
    });
    return userDetailsMapper.fromDTO(response.data);
  };
}
