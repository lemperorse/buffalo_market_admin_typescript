<template>
<div class="relative pb-32 md:pt-12 mt-20">
    <div class="md:px-10 mx-auto w-full">
        <div class="flex flex-wrap mt-4 px-4">
            <TableManageAdmin />
        </div>

    </div>
</div>
</template>

<script>
   import TableManageAdmin from "@/components/Admin/TableManageAdmin.vue";
   import { Vue } from "vue-property-decorator";

   export default {
       name: "manageadmin-page",
       components: {
           TableManageAdmin
       },

   };
</script>
