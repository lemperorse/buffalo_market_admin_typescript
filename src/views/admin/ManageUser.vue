<template>
<div class="relative pb-32 md:pt-12 mt-20">
    <div class="md:px-10 mx-auto w-full">
        <div class="text-xl px-4 pb-2">สรุปข้อมูลผู้ใช้</div>
        <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-6/12 px-4 xl:pb-4">
                <card-stats statSubtitle="จำนวนผู้ใช้ทั้งหมด" statTitle="257 คน" statIconName="fas fa-users" statIconColor="bg-yellow-500" class="hover:shadow-inner border-t-4 border-yellow-500" />
            </div>
            <div class="w-full lg:w-6/12 xl:w-6/12 px-4 xl:pb-4">
                <card-stats statSubtitle="สมาชิกใหม่ในเดือนนี้" statTitle="276 คน" statIconName="fas fa-users" statIconColor="bg-purple-500" class="hover:shadow-inner border-t-4 border-purple-700" />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 px-4">
            <TableManageUser />
        </div>
    </div>
</div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import CardStatWithBtn from "@/components/Cards/CardStatWithBtn.vue";
import TableManageUser from "@/components/User/TableManageUser.vue";
import { Vue } from "vue-property-decorator";

export default {
    name: "manageuser-page",
    components: {
        CardStats,
        CardStatWithBtn,
        TableManageUser
    },

};
</script>

<style> 
</style>
