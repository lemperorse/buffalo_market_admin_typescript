<template>
<footer class="pb-6" :class="[absolute ? 'absolute w-full bottom-0 bg-gray-900' : 'relative']">
    <div class="container mx-auto px-4">
        <hr class="mb-6 border-b-1 border-gray-700" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4">
                <!-- <div class="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                    ลิขสิทธิ์ © 2563
                    <a href="https://www.creative-tim.com?ref=vn-footer-admin" class="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1">
                        โดย ชยุต ดงปาลีธรรม และ คณะ
                    </a>
                </div> -->
            </div>
            <div class="w-full md:w-8/12 px-4">
                <ul class="flex flex-wrap list-none md:justify-end justify-center">
                    <div class="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                        ลิขสิทธิ์ © 2563
                        <a href="https://www.creative-tim.com?ref=vn-footer-admin" class="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1">
                            โดย ชยุต ดงปาลีธรรม และ คณะ
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    data() {
        return {
            date: new Date().getFullYear(),
        };
    },
    props: {
        absolute: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
