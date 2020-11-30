<template>
<nav class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg">
    <div class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        <!-- Toggler -->
        <button class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')">
            <i class="fas fa-bars"></i>
        </button>
        <!-- Brand -->
        <router-link to="/admin/" class="border-2 md:block text-center text-white mr-0 inline-block whitespace-no-wrap uppercase font-bold p-4 px-0" >
            <i class="fas fa-paw"></i> ตลาดควายไทย
        </router-link>
        <!-- User -->
        <ul class="md:hidden items-center flex flex-wrap list-none">
            <li class="inline-block relative">
                <notification-dropdown />
            </li>
            <li class="inline-block relative">
                <user-dropdown />
            </li>
        </ul>
        <!-- Collapse -->
        <div class="md:flex md:flex-col  md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded" v-bind:class="collapseShow">
            <!-- Collapse header -->
            <div class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300 ">
                <div class="flex flex-wrap ">
                    <div class="w-6/12">
                        <router-link class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0" >
                            ตลาดควายไทย
                        </router-link>
                    </div>
                    <div class="w-6/12 flex justify-end">
                        <button type="button" class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" v-on:click="toggleCollapseShow('hidden')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Form -->
            <form class="mt-6 mb-4 md:hidden">
                <div class="mb-3 pt-0">
                    <input type="text" placeholder="Search" class="px-3 py-2 h-12 border border-solid border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal" />
                </div>
            </form>

            <!-- Divider -->
            <hr class="my-4 md:min-w-full" />
            <!-- Heading --> 
            
            <h6 class="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                ทั่วไป
            </h6>

            <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                <li class="items-center">
                    <router-link to="/admin/" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-tv mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            แดชบอร์ด
                        </a>
                    </router-link>
                </li>

                
            </ul>

            <!-- Divider -->
            <hr class="my-4 md:min-w-full" />
            <!-- Heading -->
            <h6 class="md:min-w-full  text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                การจัดการ
            </h6>
            <!-- Navigation -->

            <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li class="items-center">
                    <router-link to="/admin/manageuser" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-user mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            จัดการข้อมูลผู้ใช้
                        </a>
                    </router-link>
                </li>

                <li class="items-center">
                    <router-link to="/admin/manageadmin" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-user-secret mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            จัดการผู้ดูแล
                        </a>
                    </router-link>
                </li>

                <li class="items-center">
                    <router-link to="/admin/manageplace" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-map-marked mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            จัดการสถานที่
                        </a>
                    </router-link>
                </li>
                <li class="items-center">
                    <router-link to="/admin/managepost" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-clipboard-list mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            จัดการประกาศ
                        </a>
                    </router-link>
                </li>
                <li class="items-center">
                    <router-link to="/admin/passwordreq" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-key mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            คำขอเปลี่ยนรหัสผ่าน
                        </a>
                    </router-link>
                </li>
            </ul>

            <!-- Divider -->
            <hr class="my-4 md:min-w-full" />
            <!-- Heading -->
            <h6 class="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                รายงาน
            </h6>
            <!-- Navigation -->

            <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li class="items-center">
                    <router-link to="/admin/reportuser" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-user mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            รายงานจำนวนผู้ใช้ปัจจุบัน
                        </a>
                    </router-link>
                </li>
                <li class="items-center">
                    <router-link to="/admin/reportpost" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-clipboard-list mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            รายงานประกาศในปัจจุบัน
                        </a>
                    </router-link>
                </li>
                <li class="items-center">
                    <router-link to="/admin/reportplace" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-map-marked-alt mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            ตำแหน่งที่ตั้งของสถานที่
                        </a>
                    </router-link>
                </li>
                <li class="items-center">
                    <router-link to="/admin/reportstatic" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-clipboard-list mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            รายงานสถิติการประกาศ
                        </a>
                    </router-link>
                </li>
            </ul>

             <!-- Divider -->
            <hr class="my-4 md:min-w-full" />
            <!-- Heading -->
            <h6 class="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                ออกจากระบบ
            </h6>
            <!-- Navigation -->

            <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li class="items-center">
                    <router-link to="/admin/" v-slot="{ href, route, navigate, isActive }">
                        <a :href="href" @click="navigate" class="text-xs uppercase py-3 font-bold block" :class="[
                  isActive
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-gray-200',
                ]">
                            <i class="fas fa-sign-out-alt mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-white']"></i>
                            ออกจากระบบ
                        </a>
                    </router-link>
                </li>
            </ul>
 
        </div>
    </div>
</nav>
</template>

); }

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
    components:{
        
    },
    data() {
        return {
            collapseShow: "hidden",
            
        };
    },
    methods: {
        toggleCollapseShow: function (classes) {
            this.collapseShow = classes;
        },
    },
    components: {
        NotificationDropdown,
        UserDropdown,
    },
};
</script>
<style scoped>
.bg{
    background-color: #3E1F47;
}

</style>
