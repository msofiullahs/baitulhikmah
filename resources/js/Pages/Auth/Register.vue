<script setup>
import { useForm, Head, Link } from '@inertiajs/vue3';
// ... import komponen lain (AuthenticationCard, InputLabel, dll) ...

const form = useForm({
    name: '',
    username: '', // <-- Tambahkan ini
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});
</script>

<template>
    <Head title="Register" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <form @submit.prevent="form.post(route('register'))">
            <!-- Name -->
            <div>
                <InputLabel for="name" value="Name" />
                <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required autofocus autocomplete="name" />
                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <!-- Username (BARU) -->
            <div class="mt-4">
                <InputLabel for="username" value="Username" />
                <TextInput id="username" v-model="form.username" type="text" class="mt-1 block w-full" required autocomplete="username" />
                <InputError class="mt-2" :message="form.errors.username" />
            </div>

            <!-- Email (Opsional) -->
            <div class="mt-4">
                <InputLabel for="email" value="Email (Opsional)" />
                <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" autocomplete="username" />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <!-- Password -->
            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput id="password" v-model="form.password" type="password" class="mt-1 block w-full" required autocomplete="new-password" />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <TextInput id="password_confirmation" v-model="form.password_confirmation" type="password" class="mt-1 block w-full" required autocomplete="new-password" />
                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Already registered?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>