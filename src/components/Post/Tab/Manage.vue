<template>
<div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ตั้งค่า</h6>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0"> 
        <hr class="mt-6 border-b-1 border-gray-400"  />
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase" >
            ลบสินค้า
        </h6>

        <div class="flex flex-wrap" >
            <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                    <button @click="disableUser" class="bg-red-500 f-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        ลบสินค้า
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
