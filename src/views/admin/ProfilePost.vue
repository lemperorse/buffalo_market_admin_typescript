<template>
  <div class="relative pb-32 md:pt-12 mt-20">
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