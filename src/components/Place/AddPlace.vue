<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">เพิ่มสถานที่</h6>
            <button @click="$router.go(-1)" class="ma-2 text-white py-2 px-4 rounded ring-4 ring-red-500 ring-opacity-50 transition duration-500 ease-in-out bg-red-500 hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110" type="button">
                <i class="fas fa-arrow-left text-lg"></i> กลับ
            </button>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
            <div class="flex flex-wrap">

                <div class="w-full  lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อสถานที่
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-home text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>

                    </div>
                </div>

                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ที่อยู่
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-home text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" value="" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ตำบล
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-map-pin text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" value="" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12  px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            อำเภอ
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-map-pin text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12  px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            จังหวัด
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-map-pin text-lg text-gray-500"></i>
                            </span>
                            <input type="number" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12  px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            รหัสไปรษณีย์
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-map-marker-alt text-lg text-gray-500"></i>
                            </span>
                            <input type="number" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ที่ตั้งสถานที่
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 mb-6">
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-6/12 ">
                            <Map />
                        </div>
                    </div>
                </div>
                <div class="w-full  lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            พิกัด GPS ละติจูด
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-map-marked-alt text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>

                    </div>
                </div>
                <div class="w-full  lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            พิกัด GPS ลองจิจูด
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-map-marked-alt text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex justify-center mt-6">
                <button class="ma-2 text-white py-2 px-4 rounded ring-4 ring-green-500 ring-opacity-50 transition duration-500 ease-in-out bg-green-500 hover:bg-green-800 transform hover:-translate-y-1 hover:scale-110" type="submit">
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
import moment from "moment";
import Map from "@/components/Maps/Map.vue"
@Component({
    components: { Map },
    computed: {},

})

export default class Addadmin extends Vue {

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
