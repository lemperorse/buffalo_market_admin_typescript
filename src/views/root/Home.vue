<template>
<div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                <div class="rounded-t mb-0 px-6 py-6">
                    <div class="text-center mb-3">
                        <h6 class="text-gray-600 text-sm font-bold">
                            Sign in with
                        </h6>
                    </div>
                    <div class="btn-wrapper text-center">
                        <button class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                            <img alt="..." class="w-5 mr-1" src="" />
                            Github
                        </button>
                        <button class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                            <img alt="..." class="w-5 mr-1" src="" />
                            Google
                        </button>
                    </div>
                    <hr class="mt-6 border-b-1 border-gray-400" />
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div class="text-gray-500 text-center mb-3 font-bold">
                        <small>Or sign in with credentials</small>
                    </div>
                    <form @submit.prevent="login">
<!--                        <div class="relative w-full mb-3">-->
<!--                            <v-text-field label="ชื่อผู้ใช้" solo v-model="form.username" required></v-text-field>-->
<!--                        </div>-->
                        <div class="mb-6 pt-3 rounded bg-white">
                          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3">ชื่อผู้ใช้</label>
                          <input v-model="form.username" type="text" class="bg-white rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                        </div>

<!--                        <div class="relative w-full mb-3">-->
<!--                            <v-text-field type="password" label="รหัสผ่าน" solo v-model="form.password" required></v-text-field>-->
<!--                        </div>-->

                        <div class="mb-6 pt-3 rounded bg-white ">
                          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3 ">รหัสผ่าน</label>
                          <input v-model="form.password" type="password" class="bg-white rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                        </div>

                        <div class="text-center mt-6">
                            <button :class="$btn" type="submit">
                                เข้าสู่ระบบ
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="flex flex-wrap mt-6 relative">
                <div class="w-1/2">
                    <router-link to="/re-password" class="text-gray-300">
                        <small>ลืมรหัสผ่าน</small>
                    </router-link>
                </div>
                <div class="w-1/2 text-right">
                    <router-link to="/register" class="text-gray-300">
                        <small>สมัครสมาชิก</small>
                    </router-link>
                </div>
            </div>
        </div>


    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator'; 

@Component({
    components: {  },
    computed: {}
})

export default class Home extends Vue { 
}
</script>

<style>

</style>
