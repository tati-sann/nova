import type { UserResponseDto } from "@/stores/modules/user/dto/user.response.dto";
import type { UserModel } from "@/stores/modules/user/model/user.model";

abstract class UserModelFactory {
    static fromResponseDto(dto: UserResponseDto): UserModel {
        return {
            id: dto.id,
            name: dto.name,
            email: dto.email,
        }
    }
 }

export { UserModelFactory };
