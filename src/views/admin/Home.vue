<template>
  <div class="relative pb-32 md:pt-12 mt-20 ">
    <div class="px-4 md:px-10 mx-auto w-full">
        <div>
            <div class="text-xl px-4 pb-2">แดชบอร์ด</div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนผู้ใช้ทั้งหมด" statTitle="257 คน" statIconName="fas fa-users" statIconColor="bg1" class=" hover:shadow-inner border-t-4 border-yellow-500 " />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศทั้งหมด" statTitle="276 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bgpurple1" class=" hover:shadow-inner border-t-4 border-purple-800" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศขาย" statTitle="107 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bggreen1" class=" hover:shadow-inner border-t-4 border-green-400" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศซื้อ" statTitle="102 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-blue-500" class=" hover:shadow-inner border-t-4 border-blue-500" />
                </div>
            </div>
            <div class="text-xl px-4 pb-2 pt-4">กราฟ</div>
            <div class="flex flex-wrap mt-4">
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardBarChart statSubtitle="จำนวนผู้ใช้ทั้งหมด" statRoute="#" class=" hover:shadow-inner border-t-4 border-yellow-500 "/>
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardLineChart statSubtitle="จำนวนประกาศทั้งหมด" class=" hover:shadow-inner border-t-4 border-purple-800"/>
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardRadarChart statSubtitle="จำนวนประกาศขาย" class=" hover:shadow-inner border-t-4 border-green-400"/>
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardRadarChart1 statSubtitle="จำนวนประกาศซื้อ" class=" hover:shadow-inner border-t-4 border-blue-500"/>
                </div>
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
    name: "dashboard-page",
    components: { 
        CardStats,
        CardStatWithBtn,
        CardBarChart,
        CardLineChart,
        CardRadarChart,
        CardRadarChart1,
    },

};
</script>
<style>
.bg1{
    background-color : #FFD166;
}
.bgpurple1{
    background-color : #6930C3;
}
.bggreen1{
    background-color :#06D6A0;
}
</style>
