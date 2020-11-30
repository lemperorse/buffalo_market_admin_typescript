<template>
<div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <AddUser />
</div>
</template>

<script>
import AddUser from "@/components/User/AddUser"; 
export default {
  name: "adduser-page",
  components: {
    AddUser, 
  },
};
</script>