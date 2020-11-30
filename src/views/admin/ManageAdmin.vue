<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="px-4 md:px-10 mx-auto w-full">
        <div>  
            <div class="flex flex-wrap mt-4 px-4">
                <TableManageAdmin />
            </div>
            
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