<template>
<div>
    <div class="rounded-t bg-white mb-0 px-1 py-6">
        <div class="text-center flex flex-wrap justify-between">
            <h6 class="text-gray-800 text-xl font-bold">บัตรประชาชน</h6>
            <button class="rounded w-full md:w-1/6 p-2 bg-yellow-500 hover:bg-yellow-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                <div class="text-white"><i class="fas fa-pencil-alt"></i> แก้ไข</div>
            </button> 
            <!-- <button class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-1 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> ยกเลิกการแก้ไข
            </button> -->
        </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
        <form>
            <div class="w-full lg:w-12/12  px-1">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                        เลขบัตรประจำตัวประชาชน
                    </label>

                    <div class="relative flex w-full flex-wrap items-stretch mb-3">
                        <span class="z-10 mt-1 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                            <i class="far fa-address-card text-lg text-gray-500"></i>
                        </span>
                        <input type="number" placeholder="โปรดระบุเลขบัตรประจำตัวประชาชน"  class=" px-2 py-3 text-gray-700 relative bg-gray-100 rounded text-sm  border-t-2 border-purple-500 w-full pl-10 hover:shadow-lg" />
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-12/12  px-1">
                <hr class="mt-6 border-b-1 border-gray-400" />
                <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ภาพถ่ายบัตรประจำตัวประชาชน
                </h6>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-1">
                        <div class="relative flex justify-center w-full">
                            <img ref="farmImage" id="farmImage" class="w-128 h-48" src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                        </div>
                        <div class="flex justify-center mt-6">
                            <input type="file" ref="personal" @change="personalChange">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-6">
                <button class="rounded p-3 bg-green-500 hover:bg-green-800 hover:shadow-lg-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                    <div class="text-white"><i class="fas fa-save text-lg"></i> บันทึกข้อมูล</div>
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

export default class ImageClass extends Vue {}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
