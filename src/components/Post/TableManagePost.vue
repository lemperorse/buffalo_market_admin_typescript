<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full md:px-4 xl:px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-gray-800">
                    ตารางจัดการประกาศ
                </h3>
            </div>

            <!-- ค้นหา -->
            <div class="relative flex flex-wrap ">
                <input type="text" placeholder="ค้นหา" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>ประกาศซื้อ</option>
                    <option>ประกาศขาย</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
            <div class="relative flex flex-wrap ">
                <button  class="ma-2 bg-blue-600 text-white py-2 px-4 rounded">
                    <i class="fas fa-search"></i> ค้นหา
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
                        เลขที่ประกาศ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ชื่อผู้ประกาศ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ชื่อสินค้า
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        หมวดหมู่
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ราคา
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ประเภทประกาศ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        จัดการประกาศ
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        1
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        นาย ตาล ยาวงค์
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        ควายเผือก
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        ควาย
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        20000 บาท
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        ประกาศขาย
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="$router.push('/admin/profilepost')" class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
                        2
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        นาย ตาล ยาวงค์
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        ควาย
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        ควาย
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        20000 บาท
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        ประกาศซื้อ
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="$router.push('/admin/profilepost')" class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
export default {
    data() {
        return { 
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
