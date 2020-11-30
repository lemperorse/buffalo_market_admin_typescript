<template>
<div class="relative pb-32 md:pt-12 mt-20">
    <div class="md:px-10 mx-auto w-full">
        <div class="flex flex-wrap mt-4 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded border-t-4 border-blue-500 " :class="[color === 'light' ? 'bg-white' : 'bg-white text-black']">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full md:px-4 xl:px-4 max-w-full flex-grow flex-1">
                            <h3 class="font-semibold text-base text-gray-800">
                                ตารางจัดการรหัสผ่าน
                            </h3>
                        </div>
                    </div>
                </div>
                <TableManagePassword />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { Vue } from "vue-property-decorator";
import TableManagePassword from '@/components/PasswordReq/TableManagePassword.vue';

export default {
    name: "managepost-page",
    components: {
        TableManagePassword
    },

};
</script>
