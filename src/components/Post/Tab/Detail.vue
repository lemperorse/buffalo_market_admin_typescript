<template>
<div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">รายละเอียดสินค้า</h6>
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
            <div class="flex flex-wrap">
                <div class="w-full  lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อผู้ประกาศสินค้า
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-address-card text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>

                    </div>
                </div>
                <div class="w-full  lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อสินค้า
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-tags text-lg text-gray-500"></i>
                            </span>
                            <input type="text" :class="$xinput" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>

                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ราคา
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-money-bill-wave text-lg text-gray-500"></i>
                            </span>
                            <input type="number" :class="$xinput" value="นายแดง" class="px-2 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                        </div>
                    </div>
                </div> 

                <div class="w-full lg:w-6/12  px-4">
                    <div class="relative w-full mb-3"> 
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมวดหมู่
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-tag text-lg text-gray-500"></i>
                            </span>
                            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-10" id="grid-state">
                                <option>ควาย</option>
                                <option>อาหารเสริม</option>
                                <option>ผลิตภัณฑ์จากฟาร์ม</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-6/12  px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ประะเภทประกาศ
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 mt-2 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 ">
                                <i class="fas fa-clipboard-list text-lg text-gray-500"></i>
                            </span>
                            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-10" id="grid-state">
                                <option>ประกาศซื้อ</option>
                                <option>ประกาศขาย</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-12/12  px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            คำอธิบายสินค้า
                        </label>
                        <textarea rows="4" class="w-full p-4 text-gray-500 resize-x border rounded-md" placeholder="รายละเอียดต่างๆ"></textarea>
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

export default class detail extends Vue {

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
