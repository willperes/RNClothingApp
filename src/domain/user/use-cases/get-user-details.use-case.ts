import { UserDetails } from "../models/user-details.model";
import { UserService } from "../user.service";

export interface GetUserDetailsUseCase {
  execute: () => Promise<UserDetails>;
}

export class GetUserDetailsUseCaseImpl implements GetUserDetailsUseCase {
  constructor(private readonly service: UserService) {}

  execute: () => Promise<UserDetails> = async () => {
    const response = await this.service.getUserDetails();
    return response;
  };
}
