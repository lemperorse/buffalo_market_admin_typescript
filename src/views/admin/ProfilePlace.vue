<template>
  <div class="relative pb-32 md:pt-12 mt-20">
    <div class="flex flex-wrap-reverse ">
      <div class="w-full lg:w-8/12 px-2">
        <CardSettingPlace />
      </div>
      <div class="w-full lg:w-4/12 px-2">
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