<template>
<div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <AddAdmin />
</div>
</template>

<script>
import AddAdmin from "@/components/Admin/AddAdmin"; 
export default {
  name: "addadmin-page",
  components: {
    AddAdmin, 
  },
};
</script>