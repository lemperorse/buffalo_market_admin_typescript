<template>
<footer class="block py-1">
    <div class=" mx-auto px-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="opacity1">
            <path fill="#240046" fill-opacity="1" d="M0,96L40,106.7C80,117,160,139,240,138.7C320,139,400,117,480,96C560,75,640,53,720,74.7C800,96,880,160,960,192C1040,224,1120,224,1200,192C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>

        <hr class="mb-4 border-b-1 border-gray-300 mt-1" />
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
    components: {},
    data() {
        return {
            date: new Date().getFullYear(),
        };
    },
};
</script>

<style scoped>
.opacity1 {
    opacity: 0.8;
}
</style>
