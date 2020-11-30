<template>
  <div class="relative pb-32 md:pt-12 mt-20">
    <div class="md:px-10 mx-auto w-full">
        <div>  
            <div class="flex flex-wrap mt-4 px-4">
                <TableManagePlace />
            </div>
            
        </div> 
    </div>
</div>
</template>

<script>   
import TableManagePlace from "@/components/Place/TableManagePlace.vue"; 
import { Vue } from "vue-property-decorator";

export default {
    name: "manageplace-page",
    components: {  
        TableManagePlace
    },

};
</script>