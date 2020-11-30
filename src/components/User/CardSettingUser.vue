<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center ">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-purple-600 bg-white': openTab !== 1, 'text-white bg-purple-600': openTab === 1}">
            <i class="fas fa-user text-base mr-1"></i>ข้อมูลทั่วไป
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-purple-600 bg-white': openTab !== 2, 'text-white bg-purple-600': openTab === 2}">
            <i class="far fa-id-card text-base mr-1"></i> บัตรประชาชน
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-purple-600 bg-white': openTab !== 3, 'text-white bg-purple-600': openTab === 3}">
            <i class="far fa-address-book text-base mr-1"></i> ช่องทางการติดต่ออื่นๆ
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(4)" v-bind:class="{'text-purple-600 bg-white': openTab !== 4, 'text-white bg-purple-600': openTab === 4}">
            <i class="far fa-id-card text-base mr-1" ></i> ข้อมูลผู้ขาย
          </a>
        </li>

        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(5)" v-bind:class="{'text-purple-600 bg-white': openTab !== 5, 'text-white bg-purple-600': openTab === 5}">
            <i class="fas fa-cog text-base mr-1"></i> ตั้งค่า
          </a>
        </li>

      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <Profile v-if="openTab === 1" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <IDcard v-if="openTab === 2" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <Contact  v-if="openTab === 3" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
               <SellerDetail v-if="openTab === 4" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}">
               <Manager v-if="openTab === 5" />
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

import Profile from '@/components/User/Tab/Profile.vue';
import IDcard from '@/components/User/Tab/IDcard.vue';
import Contact from '@/components/User/Tab/Contact.vue';
import SellerDetail from '@/components/User/Tab/SellerDetail.vue';
import Manager from '@/components/User/Tab/Manager.vue';

@Component({
  components: {

    Profile, IDcard, Contact , SellerDetail , Manager,
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