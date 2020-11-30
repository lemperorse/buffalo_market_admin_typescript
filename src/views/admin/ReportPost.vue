<template>
<div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="px-4 md:px-10 mx-auto w-full">
        <div>

            <!-- <ReportPost /> -->
            <div class="text-xl px-4 pb-2 pt-4">จำนวนประกาศในปัจจุบัน</div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศในปัจจุบัน" statTitle="257 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-green-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศในปัจจุบัน(ประกาศซื้อ)" statTitle="140 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-purple-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศในปัจจุบัน(ประกาศขาย)" statTitle="117 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-blue-500" />
                </div>
            </div>
            <div class="text-xl px-4 pb-2 pt-4">จำนวนประกาศรายวัน</div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศรายวัน" statTitle="257 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-orange-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศรายวัน(ประกาศซื้อ)" statTitle="140 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-yellow-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศรายวัน(ประกาศขาย)" statTitle="117 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-red-500" />
                </div>
            </div>
            <div class="text-xl px-4 pb-2 pt-4">จำนวนประกาศรายเดือน</div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศรายเดือน" statTitle="257 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-pink-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศรายเดือน(ประกาศซื้อ)" statTitle="140 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-gray-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="จำนวนประกาศรายเดือน(ประกาศขาย)" statTitle="117 ประกาศ" statIconName="fas fa-clipboard-list" statIconColor="bg-green-800" />
                </div>
            </div>
            <!-- <div class="text-xl px-4 pb-2 pt-4">กราฟ</div>
            <div class="flex flex-wrap mt-4">
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardBarChart statSubtitle="จำนวนประกาศทั้งหมด" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardLineChart statSubtitle="จำนวนประกาศในปัจจุบัน" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardRadarChart statSubtitle="จำนวนประกาศการขายที่ยังประกาศอยู่" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardRadarChart1 statSubtitle="จำนวนประกาศรับซื้อที่ยังประกาศอยู่" />
                </div>
            </div> -->

        </div>
    </div>
</div>
</template>

<script>
import ReportPost from "@/components/Report/ReportPost.vue"
import CardStats from "@/components/Cards/CardStats.vue";
import CardStatWithBtn from "@/components/Cards/CardStatWithBtn.vue";
import CardBarChart from "@/components/Cards/CardBarChart.vue";
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardRadarChart from "@/components/Cards/CardRadarChart.vue";
import CardRadarChart1 from "@/components/Cards/CardRadarChart1.vue";
import { Vue } from "vue-property-decorator";

export default {
    name: "reportpost-page",
    components: {
        ReportPost,
        CardStats,
        CardStatWithBtn,
        CardBarChart,
        CardLineChart,
        CardRadarChart,
        CardRadarChart1
    },

};
</script>
