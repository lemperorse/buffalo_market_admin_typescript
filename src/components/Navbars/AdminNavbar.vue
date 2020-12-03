<template>
<!-- Navbar -->
<nav class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4 text-white relative md:bg-white  md:shadow-lg">
    <div class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
        <!-- Brand -->
        <div class="hidden md:flex text-black">
            <button @click="$router.go(-1)">
                <i class="fas fa-chevron-circle-left text-3xl"></i>
            </button>
        </div>
 
        <!-- User -->
        <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
            <user-dropdown />
        </ul>
    </div>
</nav>
<!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
    components: {
        UserDropdown,
    },
};
</script>
