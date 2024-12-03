<script setup>
import useAuth from '@/composables/useAuth';

const { getName } = useAuth();

</script>

<template>
{{ getName }}
</template>