<template>
<div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="px-4 md:px-10 mx-auto w-full">
        <div> 
            <ReportPlace />
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="สถานที่ทั้งหมด" statTitle="55 แห่ง" statIconName="fas fa-map-marked-alt" statIconColor="bg-green-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="สถานที่ตั้งของผู้ขาย" statTitle="25 แห่ง" statIconName="fas fa-map-marked-alt" statIconColor="bg-purple-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4">
                    <card-stats statSubtitle="สถานที่สำคัญที่เกี่ยวข้อง" statTitle="30 แห่ง" statIconName="fas fa-map-marked-alt" statIconColor="bg-blue-500" />
                </div>
            </div>
            <div class="text-xl px-4 pb-2 pt-4">แผนที่</div>
            <div class="flex flex-wrap mt-4">
                <div class="w-full lg:w-12/12 xl:w-12/12 px-4">
                    <MapPlace />
                </div> 
            </div>

        </div>
    </div>
</div>
</template>

<script> 
import ReportPlace from "@/components/Report/ReportPlace.vue"
import CardStats from "@/components/Cards/CardStats.vue"; 
import CardBarChart from "@/components/Cards/CardBarChart.vue";
import MapPlace from "@/components/Maps/Map.vue"
import { Vue } from "vue-property-decorator";

export default {
    name: "reportplace-page",
    components: { 
        ReportPlace,
        CardStats, 
        CardBarChart,
        MapPlace
    },

};
</script>
