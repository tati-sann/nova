import type { ComputedRef, Ref } from "vue";
import type {UserModel} from "@/stores/modules/user/model/user.model";

type UserStore = {
    user: Ref<UserModel | null>,

    isAuthenticated: ComputedRef<boolean>;

    login: () => Promise<void>;
    logout: () => Promise<void>;
    fetchUser: () => Promise<UserModel>;
}

export { UserStore };