<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px  last:mr-0 flex-auto text-center ">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-black bg-white': openTab === 1}">
            <i class="fas fa-tractor text-base mr-1"></i>ข้อมูลสถานที่
          </a>
        </li> 
      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <Profile v-if="openTab === 1" />
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

import Profile from '@/components/Place/Tab/Profile.vue'; 

@Component({
  components: {

    Profile 
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