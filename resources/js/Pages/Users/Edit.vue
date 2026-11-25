<script setup>
import UserForm from './Create.vue';

defineProps({
    user: Object,
    roles: Array,
});
</script>

<template>
    <UserForm :user="user" :roles="roles" />
</template>
