<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap-reverse ">
      <div class="w-full lg:w-8/12 px-4">
        <CardSettingPlace />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <CardProfilePlace />
      </div>
    </div>
  </div>
</template>

<script>
import CardSettingPlace from "@/components/Place/CardSettingPlace";
import CardProfilePlace from "@/components/Place/CardProfilePlace";
export default {
  name: "profile-place-page",
  components: {
    CardSettingPlace,
    CardProfilePlace
  },
};
</script>