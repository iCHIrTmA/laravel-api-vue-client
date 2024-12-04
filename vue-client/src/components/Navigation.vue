<script setup>
import useAuth from '@/composables/useAuth';

const { authenticated, user } = useAuth();

</script>

<template>
    <div v-if="authenticated">
        {{ user.name }}
    </div>
</template>