// import { httpClientFactory } from "@/infra";

import { GetUserDetailsUseCase } from "./use-cases/get-user-details.use-case";
// import { UserService } from "./user.service";

interface UserModule {
  getUserDetailsUseCase: GetUserDetailsUseCase;
}

export function makeUserModule(): UserModule {
  // const httpClient = httpClientFactory();
  // const userService = new UserService(httpClient);

  // const getUserDetailsUseCase = new GetUserDetailsUseCaseImpl(userService);

  /**
   * TODO: Remove this fake implementation and use the real implementation when the API is ready
   */
  const fakeGetUserDetailsUseCase: GetUserDetailsUseCase = {
    execute: async () => {
      return {
        id: "c20d1857-da58-489a-bc2d-5ba8af4f59af",
        fullName: "Willian Peres",
        email: "willian.peres@example.com",
        phoneNumber: "+55 11 99999-9999",
        profilePicture: "https://github.com/willperes.png",
      };
    },
  };

  return {
    getUserDetailsUseCase: fakeGetUserDetailsUseCase,
  };
}
