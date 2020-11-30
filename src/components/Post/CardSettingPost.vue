<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center ">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-white bg-green-600': openTab === 1}">
            <i class="fas fa-tags text-base mr-1"></i>รายละเอียดสินค้า
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-600 bg-white': openTab !== 2, 'text-white bg-green-600': openTab === 2}">
            <i class="fas fa-camera-retro text-base mr-1"></i> รูปภาพ
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-green-600 bg-white': openTab !== 3, 'text-white bg-green-600': openTab === 3}">
            <i class="fas fa-video text-base mr-1"></i> วีดีโอ
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(4)" v-bind:class="{'text-green-600 bg-white': openTab !== 4, 'text-white bg-green-600': openTab === 4}">
            <i class="fas fa-cog text-base mr-1" ></i> ตั้งค่า
          </a>
        </li> 

      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <Detail v-if="openTab === 1" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <Images v-if="openTab === 2" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <Video  v-if="openTab === 3" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
               <Manager v-if="openTab === 4" />
            </div>
 
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
} from 'vue-property-decorator';

import Detail from '@/components/Post/Tab/Detail.vue';
import Images from '@/components/Post/Tab/Images.vue';
import Video from '@/components/Post/Tab/Video.vue';
import Manager from '@/components/Post/Tab/Manage.vue';

@Component({
  components: {

    Detail, Images, Video , Manager,
  },
  computed: {},
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  }
})

export default class Table extends Vue {

  private openTab : number = 1


  private async created() {

  }
  toggleTabs(tabNumber:number){
    this.openTab = tabNumber
  }




}
</script>


<style>
.f-white {
  color: white !important;
}
</style>