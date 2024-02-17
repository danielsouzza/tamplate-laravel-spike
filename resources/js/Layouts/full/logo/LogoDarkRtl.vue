<script setup>
import {Link} from "@inertiajs/vue3";
</script>
<template>
    <div class="logo">
        <Link :href="route('home')">
            <img src="/assets/images/logos/logo-dark-rtl.svg" alt="home" />
        </Link>
    </div>
</template>
