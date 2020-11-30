<template>
<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div class="px-6">
        <div class="w-full lg:w-12/12 mb-6">
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 ">
                    <Map1 class="-mt-12 "/>
                    <!-- <div class="relative flex justify-center w-full">
                        <img ref="farmImage" id="farmImage" class="w-128 h-48 -mt-8 rounded-lg" src="https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                    </div> -->
                </div>
            </div>
        </div>

        <div class="w-full lg:w-12/12  ">
            <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                    พิกัดฟาร์มตามระบบ GPS (ละติจูด)
                </label>
                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <span class="z-10 m-1 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                        <i class="fas fa-thumbtack text-lg text-gray-500"></i>
                    </span>
                    <input type="text" :class="$xinput" class="px-2 py-3 text-gray-700 relative bg-gray-100 rounded text-sm  border-t-4 border-green-500 w-full pl-10" />
                </div>
            </div>
        </div>

        <div class="w-full lg:w-12/12 ">
            <div class="relative w-full mb-6">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                    พิกัดฟาร์มตามระบบ GPS (ลองจิจูด)
                </label>
                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <span class="z-10 m-1 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                        <i class="fas fa-thumbtack text-lg text-gray-500"></i>
                    </span>
                    <input type="text" :class="$xinput" class="px-2 py-3 text-gray-700 relative bg-gray-100 rounded text-sm  border-t-4 border-green-500 w-full pl-10" />
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-6 mb-6">
                <button class="rounded p-3 bg-green-500 hover:bg-green-800 hover:shadow-lg-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                    <div class="text-white"><i class="fas fa-save text-lg"></i> บันทึกข้อมูล</div>
                </button>
            </div>
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
import Map1 from "@/components/Maps/Map1.vue"
@Component({
    components: { Map1 },
    computed: {}
})

export default class ImageClass extends Vue {

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
