<template>
  <div class="relative pb-32 md:pt-12 mt-20">
    <div class="flex flex-wrap-reverse ">
      <div class="w-full lg:w-8/12 px-2">
        <CardSettingUser />
      </div>
      <div class="w-full lg:w-4/12 px-2">
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