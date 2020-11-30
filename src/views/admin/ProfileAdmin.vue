<template>
  <div class="relative pb-32 md:pt-12 mt-20">
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