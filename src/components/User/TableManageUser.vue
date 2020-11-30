<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded border-t-4 border-blue-500 " :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full md:px-4 xl:px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-gray-800">
                    ตารางจัดการข้อมูลผู้ใช้
                </h3>
            </div>

            <!-- ค้นหา --> 
            <div class="relative flex flex-wrap m-1">
                <div class="flex rounded border bg-gray-200 bg-white">
                    <input class="w-full rounded bg-gray-100 m-1 border-2" type="text" placeholder="ค้นหา">
                    <button>
                        <span class="w-auto flex rounded justify-end items-center text-grey p-2 ">
                            <i class="fas fa-search text-xl"></i>
                        </span>
                    </button>
                </div>
            </div>
            <div class="relative flex flex-wrap m-1">
                <!-- <button @click="$router.push('/admin/adduser/')" class="ma-2 text-white py-2 px-4 rounded ring-4 transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110">
                    <i class="fas fa-user-plus"></i> เพิ่มผู้ใช้
                </button>  -->
                <button @click="$router.push('/admin/adduser/')" class="rounded p-3 bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                    <div class="text-white"><i class="fas fa-user-plus"></i> เพิ่มผู้ใช้</div>
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
                        เลขบัตรประชาชน
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ชื่อ-นามสกุล
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        เบอร์โทรศัพท์
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
                        จัดการผู้ใช้
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        1234567890123
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        นายแดง มีชัย
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        0123456789
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        พะเยา
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="$router.push('/admin/profileuser')" class="m-1 text-xs rounded p-3 bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                                <div class="text-white"><i class="far fa-eye"></i> รายละเอียด</div>
                            </button>
                            <button class="m-1 text-xs rounded p-3 bg-red-500 hover:bg-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                                <div class="text-white"><i class="fas fa-eraser"></i> ลบ</div>
                            </button>
                        </div>
                    </td>
                </tr>

                <tr v-for="i in 4">
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        0123456789123
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        นายดำ โชคมีชัย
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        0123456789
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        พะเยา
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="$router.push('/admin/profileuser')" class="m-1 text-xs rounded p-3 bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                                <div class="text-white"><i class="far fa-eye"></i> รายละเอียด</div>
                            </button>
                            <button class="m-1 text-xs rounded p-3 bg-red-500 hover:bg-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                                <div class="text-white"><i class="fas fa-eraser"></i> ลบ</div>
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
.g1 { 
  background: linear-gradient(to right, red, purple); 
}
.box-2 {
  border-top: 8px solid;
  
  border-image: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1;
}
</style>
