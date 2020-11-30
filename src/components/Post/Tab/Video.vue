<template>
<div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">อัพโหลดวีดีโอ</h6>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4 mt-10">  
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-12/12 px-4">
                            <div class="relative flex justify-center w-full">
                                <img ref="farmImage" id="farmImage" class="w-128 h-48" src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                            </div>
                            <div class="flex justify-center mt-6">
                                <input type="file" ref="personal" @change="personalChange">
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="flex justify-center mt-12">
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

export default class Images extends Vue {

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
