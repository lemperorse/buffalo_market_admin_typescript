<template>
<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 flex justify-center">
                <div class="relative">
                    <img ref="profileImage" alt="..." src="https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg" class="shadow-xl h-40 w-40 rounded-full align-middle border-none -mt-16 w-48 h-48" />
                    <div class="flex justify-center mt-4" >
                        <input type="file" ref="profile" @change="profileChange" style="display:none;" />

                        <button class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            อัพโหลดรูปภาพ
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-12" > 
            <div class="text-lg leading-normal mt-0 mb-2 text-gray-500 font-bold  ">
                <i class="fas fa-user mr-2 text-lg text-gray-500"></i>
                first_name &nbsp; last_name
            </div>

            <div class="mb-2 text-purple-500 ">
                <i class="fas fa-phone mr-2 text-lg text-purple-500"></i>
                Phone
            </div>
            <div class="mb-2 text-green-500 ">
                <i class="far fa-envelope mr-2 text-lg text-green-500"></i>
                Email
            </div>
            <br><br>
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

export default class ImageClass extends Vue {

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
