<template>
  <div class="relative pb-32 md:pt-12 mt-20">
    <div class="md:px-10 mx-auto w-full"> 
            <div class="flex flex-wrap mt-4 px-4">
                <TableManagePost />
            </div> 
    </div>
</div>
</template>

<script>   
import TableManagePost from "@/components/Post/TableManagePost.vue"; 
import { Vue } from "vue-property-decorator";

export default {
    name: "managepost-page",
    components: {  
        TableManagePost
    },

};
</script>