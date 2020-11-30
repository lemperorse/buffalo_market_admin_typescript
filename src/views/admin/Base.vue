<template>
  <div>
    <sidebar/>
    <div class="relative md:ml-64 bg-gray-100">
      <admin-navbar/>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view/>
        <footer-admin/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue"; 
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";

@Component({
  components: {
    AdminNavbar,
    Sidebar,
    FooterAdmin,
  },
  computed: {}
})

export default class Admin extends Vue {
 
}
</script>
