<template>
<div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <AddPlace />
</div>
</template>

<script>
import AddPlace from "@/components/Place/AddPlace"; 
export default {
  name: "addadmin-page",
  components: {
    AddPlace, 
  },
};
</script>