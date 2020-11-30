<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full md:px-4 xl:px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-gray-800">
                    ตารางจัดการข้อมูลสถานที่ที่เกี่ยวข้อง
                </h3>
            </div>

            <!-- ค้นหา -->
            <div class="relative flex flex-wrap ">
                <input type="text" placeholder="ค้นหา" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <div class="relative flex flex-wrap ">
                <button @click="$router.push('/admin/addplace/')" class="ma-2 text-white py-2 px-4 rounded ring-4 transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110">
                    <i class="fas fa-map-marked-alt"></i> เพิ่มสถานที่
                </button>
            </div> 

        </div>
    </div>
    <!-- table -->
    <div class="block w-full overflow-x-auto">
        <table class="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th class="px-6  align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ชื่อสถานที่
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ที่อยู่
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ตำบล
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        อำเภอ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        จังหวัด
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        จัดการสถานที่
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        ตลาดควายแม่กา
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        เลขที่ 11 หมู่2
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        แม่กา
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        เมืองพะเยา
                    </td> 
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        พะเยา
                    </td> 
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="$router.push('/admin/profileplace')" class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                รายละเอียด
                            </button>
                            <button class="bg-red-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                ลบ
                            </button>
                        </div>
                    </td>
                </tr>

                <tr v-for="i in 4">
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        ตลาดควายแม่กา
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        เลขที่ 111 หมู่3
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        แม่กา
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        เมืองพะเยา
                    </td> 
                   <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        พะเยา
                    </td> 
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="$router.push('/admin/profileplace')" class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                รายละเอียด
                            </button>
                            <button class="bg-red-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                ลบ
                            </button>
                        </div>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>

    <!-- pagination -->
    <div class="py-2 mb-4">
        <nav class="block">
            <ul class="flex justify-center pl-0 rounded list-none flex-wrap">
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                        <i class="fas fa-chevron-left -ml-px"></i>
                        <i class="fas fa-chevron-left -ml-px"></i>
                    </a>
                </li>
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                        <i class="fas fa-chevron-left -ml-px"></i>
                    </a>
                </li>
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 text-white bg-indigo-500">
                        1
                    </a>
                </li>
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                        2
                    </a>
                </li>
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                        3
                    </a>
                </li>
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                        4
                    </a>
                </li>
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                        5
                    </a>
                </li>
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                        <i class="fas fa-chevron-right -mr-px"></i>
                    </a>
                </li>
                <li>
                    <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                        <i class="fas fa-chevron-right -mr-px"></i>
                        <i class="fas fa-chevron-right -mr-px"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

</div>
</template>

<script>
import team3 from "@/assets/img/team-3-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
    data() {
        return {
            team3,
            team2,
        };
    },
    components: {},
    props: {
        color: {
            default: "light",
            validator: function (value) {
                // The value must match one of these strings
                return ["light", "dark"].indexOf(value) !== -1;
            },
        },
    },
};
</script>

<style>
.f-white {
    color: white !important;
}
</style>
