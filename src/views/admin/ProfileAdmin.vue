<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap-reverse ">
      <div class="w-full lg:w-8/12 px-4">
        <CardSettingAdmin />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <CardProfileAdmin />
      </div>
    </div>
  </div>
</template>

<script>
import CardSettingAdmin from "@/components/Admin/CardSettingAdmin";
import CardProfileAdmin from "@/components/Admin/CardProfileAdmin";
export default {
  name: "profile-admin-page",
  components: {
    CardSettingAdmin,
    CardProfileAdmin
  },
};
</script>