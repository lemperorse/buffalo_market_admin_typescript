<template>
<div>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-4/12 xl:pb-4 ">
            <div class="flex rounded border bg-gray-200 bg-white ">
                <input class="w-full rounded bg-gray-100 m-1 border-2" type="text" placeholder="ค้นหา">
                <button>
                    <span class="w-full flex rounded justify-end items-center text-grey p-2 ">
                        <i class="fas fa-search text-xl"></i>ค้นหา
                    </span>
                </button>
            </div>
        </div>

        <div class="w-full lg:w-6/12 xl:w-2/12 xl:pb-4 ">
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

        <div class="w-full lg:w-6/12 xl:w-2/12 xl:pb-4 ">
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

        <div class="w-full lg:w-6/12 xl:w-2/12 xl:pb-4 ">
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

        <div class="w-full lg:w-6/12 xl:w-2/12 xl:pb-4 ">
            <div class="relative flex flex-wrap">
                <button class="rounded p-3 bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                    <div class="text-white"><i class="fas fa-search"></i> ค้นหา</div>
                </button>
            </div>
        </div>

    </div>
    <div class="bg-white border-t-4 border-purple-700 rounded shadow-xl p-2 mt-6">
        <div class="flex flex-col md:flex-row items-center">
            <GmapMap class="sizemap" :center="center" :zoom="7" map-type-id="roadmap">
                <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center = m.position" />
            </GmapMap>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            center: {
                lat: 19.1664466,
                lng: 99.9019888,
            },
            markers: [{
                    position: {
                        lat: 19.1664466,
                        lng: 99.9019888,
                    },
                },
                {
                    position: {
                        lat: 20.0,
                        lng: 99.9019888,
                    },
                },
                {
                    position: {
                        lat: 19.3,
                        lng: 100.9019888,
                    },
                },
                {
                    position: {
                        lat: 20.3,
                        lng: 100.9019888,
                    },
                },
            ],

        }
    }

}
</script>

<style scoped>
.sizemap {
    width: 1000px;
    height: 300px;
}
</style>
