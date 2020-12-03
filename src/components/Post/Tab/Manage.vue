<template>
<div>
    <div class="rounded-t bg-white mb-0 px-1 py-6">
        <div class="text-center flex flex-wrap justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ตั้งค่า</h6>
        </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0"> 
        <hr class="mt-6 border-b-1 border-gray-400"  />
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase" >
            ลบสินค้า
        </h6>

        <div class="flex flex-wrap" >
            <div class="w-full lg:w-6/12 px-1">
                <div class="relative w-full mb-3">
                    <button  class="m-1 text-xs rounded p-3 bg-red-500 hover:bg-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                        <div class="text-white"><i class="fas fa-eraser"></i> ลบข้อมูลประกาศ</div>
                    </button>
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
    Watch,
} from 'vue-property-decorator';
import moment from "moment";
@Component({
    components: {},
    computed: {}
})

export default class ManagerClass extends Vue {}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
