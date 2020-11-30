<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap-reverse ">
      <div class="w-full lg:w-12/12 px-4">
        <CardSettingPost />
      </div> 
    </div>
  </div>
</template>

<script>
import CardSettingPost from "@/components/Post/CardSettingPost"; 
export default {
  name: "setting-post-page",
  components: {
    CardSettingPost, 
  },
};
</script>