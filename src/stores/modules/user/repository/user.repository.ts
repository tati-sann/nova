import type {IUserRepository} from "@/stores/modules/user/repository/user.repository.interface";
import type {UserLoginRequestDto} from "@/stores/modules/user/dto/user-login.request.dto";
import type {UserResponseDto} from "@/stores/modules/user/dto/user.response.dto";
import type {UserModel} from "@/stores/modules/user/model/user.model";

class UserRepository implements IUserRepository {
    async login(formDto: UserLoginRequestDto): Promise<UserModel> {
        const dto: UserResponseDto = await $http.post("/auth", formDto);

        return {
            id: dto.id,
            email: dto.email,
            name: dto.name,
        }
    };

    async logout(): Promise<void> {
        await $http.delete("/auth");
    };

    async fetchUser(): Promise<UserModel> {
        const dto: UserResponseDto = await $http.get("auth");

        return {
            id: dto.id,
            email: dto.email,
            name: dto.name,
        }
    }
}

export { UserRepository };