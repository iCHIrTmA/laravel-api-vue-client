import { reactive, computed, ref } from 'vue'
import axios from 'axios';

const state = reactive({
    authenticated: false,
    user: {}
});

export default function useAuth() {
    const errors = ref({})

    const authenticated = computed(() => state.authenticated)

    const user = computed(() => state.user)

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated
    }

    const setUser = (user) => {
        state.user = user
    }

    const attempt = async () => {
        // console.log('attempt', errors);
        try {
            let response = await axios.get('/api/user')

            setAuthenticated(true)
            setUser(response.data)
            // console.log('attempt try', response)

            return response;
        } catch (e) {
            console.log('attempt catch block', e)

            // if (e.response.status == 422) {
            //     errors.value = e.response.data.errors
            // }

            // console.log('catch', errors.value)
            // console.log('catch', e.response.data)

            // return Promise.reject(null)
        }
    }


    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie')

        try {
            await axios.post('/login', credentials)
            return attempt()
        } catch (e) {
            // console.log(e)
            if (e.response.status == 422) {
                errors.value = e.response.data.errors
            }

            return Promise.reject(null)
        }
    }

    return {
        authenticated,
        user,
        login,
        attempt,
        errors
    }
}
