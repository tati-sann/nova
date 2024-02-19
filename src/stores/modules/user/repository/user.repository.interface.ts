import type {UserModel} from "@/stores/modules/user/model/user.model";

interface IUserRepository {
  login(): Promise<UserModel>;
  logout(): Promise<void>;
  fetchUser(): Promise<void>
}

export type { IUserRepository };
