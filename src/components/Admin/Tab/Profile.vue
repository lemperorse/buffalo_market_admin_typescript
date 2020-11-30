<template>
<div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ข้อมูลทั่วไป(ผู้ดูแลระบบ)</h6>
            <button class="bg-orange-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> แก้ไข
            </button>
            <!-- <button class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> ยกเลิกการแก้ไข
            </button> -->
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
            <!-- <h6 class="text-gray-500 text-sm mb-6 font-bold uppercase">
                ข้อมูลส่วนตัว
            </h6> -->
            <div class="flex flex-wrap">
                <div class="w-full  lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อผู้ใช้งาน
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-user text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>

                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อ
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" value="นายแดง" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            นามสกุล
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" value="มีโชค" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12  px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            เบอร์โทร
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-mobile-alt text-lg text-gray-500"></i>
                            </span>
                            <input type="number" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12  px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            Email
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="far fa-envelope text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

                
            </div>

            <div class="flex justify-center mt-6">
                <button class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                    <i class="fas fa-save text-lg"></i> บันทึกข้อมูล
                </button>
            </div>

        </form>

    </div>

</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Watch,
} from 'vue-property-decorator';

@Component({
    components: {},
    computed: {}
})

export default class Profile extends Vue {

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
