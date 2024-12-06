import useAuth from '@/composables/useAuth.js'

const { authenticated, user } = useAuth()

export default function redirectIfGuest({ next }) {
    if (authenticated.value) {
        return next({ name: 'dashboard'})
    }
    return next();
}
