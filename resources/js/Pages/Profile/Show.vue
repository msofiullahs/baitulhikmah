<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

defineProps({
    sessions: Array,
});
</script>

<template>
    <AdminLayout title="Profile">
        <div class="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div class="mb-6">
                <h2 class="text-2xl font-semibold text-gray-800">
                    Profile
                </h2>
            </div>

            <div class="bg-white shadow rounded-lg p-6 mb-6">
                <UpdateProfileInformationForm :user="$page.props.auth.user" />
            </div>

            <SectionBorder />

            <div class="bg-white shadow rounded-lg p-6 mt-6">
                <UpdatePasswordForm class="mt-0" />
            </div>
        </div>
    </AdminLayout>
</template>
