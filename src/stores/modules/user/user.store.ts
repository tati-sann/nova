import {defineStore} from "pinia";
import type {UserStore} from "@/stores/modules/user/user.store.type";
import type {Ref} from "vue";
import type {UserModel} from "@/stores/modules/user/model/user.model";
import {computed, ref} from "vue";
import {UserRepository} from "@/stores/modules/user/repository/user.repository";
import {name} from "axios";

export const useUserStore = defineStore("user", (): UserStore => {
    const user: Ref<UserModel | null> = ref(null);

    const isAuthenticated = computed(() => !!user.value);

    const $resetUser = () => {
        user.value = null
    }

    const fetchUser = async () => {
        user.value = await new UserRepository().fetchUser();
    }

    const login = async () => {
        user.value = await new UserRepository().login({name: name, password: password});
    }

    const logout = async () => {
        await new UserRepository().logout();
        $resetUser();
    }


    return  {
        user,
        isAuthenticated,
        fetchUser,
        login,
        logout
    }
})