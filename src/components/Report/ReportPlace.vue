<template>
<div class="flex flex-wrap">
    <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:pb-4 sm:pb-2">
        <div class="relative">
            <input type="text" placeholder="ค้นหา" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i class="fas fa-search"></i>
            </span>
        </div>
    </div>
    <div class="w-full lg:w-6/12 xl:w-2/12 px-4 xl:pb-4 sm:pb-2">
        <div class="relative">
            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>ตำบล</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    </div>
    <div class="w-full lg:w-6/12 xl:w-2/12 px-4 xl:pb-4 sm:pb-2">
        <div class="relative">
            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>อำเภอ</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    </div>
    <div class="w-full lg:w-6/12 xl:w-2/12 px-4 xl:pb-4 sm:pb-2">
        <div class="relative">
            <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>จังหวัด</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    </div>

    <div class="w-full lg:w-6/12 xl:w-2/12 px-4 xl:pb-4 sm:pb-2">
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
