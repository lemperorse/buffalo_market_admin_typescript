<template>
<div class="relative pb-32 md:pt-12 mt-20">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-t-4 border-purple-500">
        <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
                <h6 class="text-gray-800 text-xl font-bold pt-3">เพิ่มผู้ดูแลระบบ</h6>
                <button @click="$router.go(-1)" class=" rounded p-3 bg-red-500 hover:bg-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                    <div class="text-white"><i class="fas fa-arrow-left text-lg"></i> กลับ</div>
                </button>
            </div>
        </div>
        <AddAdmin />
    </div>

</div>
</template>

<script>
import AddAdmin from "@/components/Admin/AddAdmin";
export default {
    name: "addadmin-page",
    components: {
        AddAdmin,
    },
};
</script>
