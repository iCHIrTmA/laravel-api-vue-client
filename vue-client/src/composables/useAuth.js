import { reactive, computed } from 'vue'

const state = reactive({
    name: '',
});

export default function useAuth() {
    const getName = computed(() => state.name)
    const setName = (name) => {
        console.log('setName', name)
        state.name = name
    }

    return {
        setName,
        getName
    }
}
