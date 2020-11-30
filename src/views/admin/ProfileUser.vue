<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap-reverse ">
      <div class="w-full lg:w-8/12 px-4">
        <CardSettingUser />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <CardProfileUser />
      </div>
    </div>
  </div>
</template>

<script>
import CardSettingUser from "@/components/User/CardSettingUser";
import CardProfileUser from "@/components/User/CardProfileUser";
export default {
  name: "profile-user-page",
  components: {
    CardSettingUser,
    CardProfileUser
  },
};
</script>