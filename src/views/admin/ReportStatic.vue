<template>
<div class="relative pb-32 md:pt-12 mt-20">
    <div class="md:px-10 mx-auto w-full">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                <card-stats statSubtitle="จำนวนประกาศทั้งหมด" statTitle="257 คน" statIconName="fas fa-clipboard-list" statIconColor="bg-green-500" class=" hover:shadow-inner border-t-4 border-green-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                <card-stats statSubtitle="จำนวนประกาศในปัจจุบัน" statTitle="276 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-purple-500" class=" hover:shadow-inner border-t-4 border-purple-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                <card-stats statSubtitle="จำนวนประกาศการขาย" statTitle="276 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-blue-500" class=" hover:shadow-inner border-t-4 border-blue-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                <card-stats statSubtitle="ปิดการขาย" statTitle="276 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-red-500" class=" hover:shadow-inner border-t-4 border-red-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                <card-stats statSubtitle="จำนวนประกาศรับซื้อ" statTitle="276 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-yellow-700" class=" hover:shadow-inner border-t-4 border-yellow-700 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                <card-stats statSubtitle="ปิดการรับซื้อ" statTitle="276 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-yellow-500" class=" hover:shadow-inner border-t-4 border-yellow-500 "/>
            </div>
        </div>
        <div class="text-xl px-4 pb-2 pt-4">กราฟ</div>
        <div class="flex flex-wrap mt-4">
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardBarChart statSubtitle="จำนวนประกาศทั้งหมด" class=" hover:shadow-inner border-t-4 border-green-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardLineChart statSubtitle="จำนวนประกาศในปัจจุบัน" class=" hover:shadow-inner border-t-4 border-purple-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardRadarChart statSubtitle="จำนวนประกาศการขาย" class=" hover:shadow-inner border-t-4 border-blue-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardRadarChart1 statSubtitle="ปิดการขาย" class=" hover:shadow-inner border-t-4 border-red-500 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardBarChart statSubtitle="จำนวนประกาศรับซื้อ" class=" hover:shadow-inner border-t-4 border-yellow-700 "/>
            </div>
            <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardBarChart statSubtitle="ปิดการรับซื้อ" class=" hover:shadow-inner border-t-4 border-yellow-500 "/>
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
 import CardRadarChart from "@/components/Cards/CardRadarChart.vue";
 import CardRadarChart1 from "@/components/Cards/CardRadarChart1.vue";
 import { Vue } from "vue-property-decorator";

 export default {
     name: "reportstatic-page",
     components: {
         CardStats,
         CardStatWithBtn,
         CardBarChart,
         CardLineChart,
         CardRadarChart,
         CardRadarChart1
     },

 };
</script>
