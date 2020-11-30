<template>
<div class="relative pb-32 md:pt-12 mt-20">
    <div class="md:px-10 mx-auto w-full">
        <div class="text-xl px-4 pb-2">รายงานจำนวนผู้ใช้ในปัจจุบัน</div>
        <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-6/12 px-4 xl:pb-4">
                <card-stats statSubtitle="จำนวนผู้ใช้ทั้งหมด" statTitle="500 คน" statIconName="fas fa-users" statIconColor="bg-yellow-500" class=" hover:shadow-inner border-t-4 border-yellow-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-6/12 px-4 xl:pb-4">
                <card-stats statSubtitle="จำนวนผู้ใช้ในปัจจุบัน" statTitle="276 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-purple-500" class=" hover:shadow-inner border-t-4 border-purple-500 "/>
            </div>
        </div>
        <div class="text-xl px-4 pb-2 pt-4">กราฟ</div>
        <div class="flex flex-wrap mt-4">
            <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
                <CardBarChart statSubtitle="จำนวนผู้ใช้ทั้งหมด" class=" hover:shadow-inner border-t-4 border-yellow-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
                <CardLineChart statSubtitle="จำนวนผู้ใช้ในปัจจุบัน" class=" hover:shadow-inner border-t-4 border-purple-500 "/>
            </div>
        </div> 
    </div>
</div>
</template>

<script>
  import CardStats from "@/components/Cards/CardStats.vue";
  import CardStatWithBtn from "@/components/Cards/CardStatWithBtn.vue";
  import CardBarChart from "@/components/Cards/CardBarChart.vue";
  import CardLineChart from "@/components/Cards/CardLineChart.vue";
  import { Vue } from "vue-property-decorator";

  export default {
      name: "reportuser-page",
      components: {
          CardStats,
          CardStatWithBtn,
          CardBarChart,
          CardLineChart,
      },

  };
</script>
