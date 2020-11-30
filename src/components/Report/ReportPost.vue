<template>
<div class="flex flex-wrap">
    
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:pb-4 sm:pb-2">
        <div class="relative">
            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>ประกาศทั้งหมด</option>
                <option>ประกาศซื้อ</option>
                <option>ประกาศขาย</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    </div>
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:pb-4 sm:pb-2">
        <div class="relative">
            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>เดือน</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    </div>
    <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:pb-4 sm:pb-2">
        <div class="relative">
            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>วัน</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    </div>

    <div class="w-full lg:w-6/12 xl:w-3/12 px-4 xl:pb-4 sm:pb-2">
        <div class="relative flex flex-wrap ">
            <button class="ma-2 bg-blue-600 text-white py-2 px-4 rounded">
                <i class="fas fa-search"></i> ค้นหา
            </button>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
