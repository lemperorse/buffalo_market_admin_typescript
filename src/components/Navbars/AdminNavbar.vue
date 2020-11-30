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

        <!-- Form -->
        <form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div class="relative flex flex-wrap m-1">
                <div class="flex rounded border bg-gray-200 bg-white">
                    <input class="w-full rounded bg-gray-100 m-1 border-2" type="text" placeholder="ค้นหา">
                    <button>
                        <span class="w-auto flex rounded justify-end items-center text-black p-2 ">
                            <i class="fas fa-search text-xl"></i>
                        </span>
                    </button>
                </div>
            </div>
        </form>
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
