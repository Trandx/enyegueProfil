<template>
  <div class="m-4">

      <div class="my-5 md:pl-40 md:pr-40 md:h-full sm:w-full mb-6 sm:mb-0 ">
        <!-- <div class=" font-bold text-left indent-4 sm:text-xl md:text-4xl">
            Selected publications
            <div class="ml-4 md:w-28 sm:w-20 sm:h-1 md:h-2 mt-1 mb-4 bg-gray-700 "></div>

        </div> -->
        <ul class="md:ml-4 sm:ml-2 mt-2 md:space-x-4 md:flex md:justify-between sm:columns-1 w-full">
          <li class="my-4 columns-1 h-full md:w-1/4" v-for="(teach, key) in teachList" :key="key">
            <div class="w-full border-2 border-gray-800 rounded-t-lg text-center">
              <h2 class="ml-4 font-bold sm:text-2xl md:text-4xl">
                  {{teach.level}}
              </h2>
            </div>
            <div class=" h-full flex justify-start items-center border-2 border-gray-800 bg-gray-800 text-white p-2" v-for="(cours, key) in teach.courses" :key="key">
              <div class="w-auto h-full">
                <i class="m-auto fa-solid fa-right-long text-4xl text-red-700"></i>
              </div>

              <div class="w-10/12">
                <div class="mr-4">
                  <h2 class=" pl-2 font-bold text-left sm:text-lg md:text-xl">
                    {{cours}}
                  </h2>
                  
                  <div class="ml-2 md:w-12 sm:w-8 h-0.5 mt-0 mb-2 bg-gray-500 "></div>
                    
                </div>
              </div>
            </div>
            
            
          </li>
        </ul>
        <p class=" text-left indent-8 md:text-2xl sm:text-lg">
            
            
        </p>
    </div>
  </div>
</template>

<script>

import teachList from '../../assets/json/publications'

export default {
    name: "Teaching",
     mixins: [teachList]
}
</script>

<style>

</style>