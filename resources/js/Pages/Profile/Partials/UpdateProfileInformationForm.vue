<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ActionMessage from '@/Components/ActionMessage.vue';

const props = defineProps({
    user: Object,
});

const form = useForm({
    name: props.user.name,
    username: props.user.username,
    email: props.user.email,
});

const updateProfileInformation = () => {
    form.put(route('user-profile-information.update'), {
        errorBag: 'updateProfileInformation',
        preserveScroll: true,
    });
};

const sendEmailVerification = () => {
    // Email verification logic can be added here if needed
};
</script>

<template>
    <div>
        <h3 class="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
        <p class="text-sm text-gray-600 mb-6">Update your account's profile information.</p>

        <form @submit.prevent="updateProfileInformation" class="space-y-4">
            <!-- Name -->
            <div>
                <InputLabel for="name" value="Name" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autocomplete="name"
                />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <!-- Username -->
            <div>
                <InputLabel for="username" value="Username" />
                <TextInput
                    id="username"
                    v-model="form.username"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autocomplete="username"
                />
                <InputError :message="form.errors.username" class="mt-2" />
            </div>

            <!-- Email -->
            <div>
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    autocomplete="email"
                />
                <InputError :message="form.errors.email" class="mt-2" />
            </div>

            <div class="flex items-center gap-3 pt-4">
                <ActionMessage :on="form.recentlySuccessful" class="me-3">
                    Saved.
                </ActionMessage>

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Save
                </PrimaryButton>
            </div>
        </form>
    </div>
</template>
