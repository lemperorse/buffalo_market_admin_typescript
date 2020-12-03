<template>
<div>
    <div class="rounded-t bg-white mb-0 px-1 py-6">
        <div class="text-center flex flex-wrap justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ข้อมูลทั่วไป</h6>
            <button class="rounded w-full md:w-1/6 p-2 bg-yellow-500 hover:bg-yellow-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                <div class="text-white"><i class="fas fa-pencil-alt"></i> แก้ไข</div>
            </button> 
        </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
        <form> 
            <div class="flex flex-wrap">
                <div class="w-full  lg:w-6/12 px-1">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            รหัสผ่านใหม่
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-1 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-key text-lg text-gray-500"></i>
                            </span>
                            <input type="password" placeholder="โปรดระบุรหัสผ่านใหม่" :class="$xinput" class=" px-2 py-3 text-gray-700 relative bg-gray-100 rounded text-sm  border-t-2 border-purple-500 w-full pl-10 hover:shadow-lg" />
                        </div>

                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-1">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ยืนยันรหัสผ่าน
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-1 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-key text-lg text-gray-500"></i>
                            </span>
                            <input type="password" placeholder="โปรดระบุรหัสผ่านใหม่" :class="$xinput" value="" class=" px-2 py-3 text-gray-700 relative bg-gray-100 rounded text-sm  border-t-2 border-purple-500 w-full pl-10 hover:shadow-lg" />
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

export default class Profile extends Vue {

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
