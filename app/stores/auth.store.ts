export const useAuthStore = defineStore(
    "auth",
    () => {
        const token = ref<string | undefined>();
        const email = ref<string | undefined>();

        function setToken(value: string) {
            token.value = value;
        }

        function setEmail(value: string) {
            email.value = value;
        }

        function clearToken() {
            token.value = undefined;
        }

        return { token, email, setToken, setEmail, clearToken };
    },
    {
        persist: true,
    },
);
