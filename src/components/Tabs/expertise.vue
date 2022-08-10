<template>
  <div class="md:m-4">
      <div class="my-5 md:pl-40 md:pr-40 md:h-full sm:w-full mb-6 sm:mb-0 ">
        <!-- <div class=" font-bold text-left indent-4 sm:text-xl md:text-4xl">
            Selected publications
            <div class="ml-4 md:w-28 sm:w-20 sm:h-1 md:h-2 mt-1 mb-4 bg-gray-700 "></div>

        </div> -->
        <ul class="md:ml-4 sm:ml-2 mt-2 items-center md:columns-3 sm:columns-1">
          <li class=" h-full flex justify-start items-center " v-for="(title, key) in expList" :key="key">
            <div class="w-auto h-full">
              <i class="m-auto fa-solid fa-right-long md:text-4xl sm:text-lg text-red-700"></i>
            </div>

            <div class="w-3/4">
              <div class="mr-4">
                <h2 class="ml-4 font-bold text-left sm:text-lg md:text-xl">
                  {{title}}
                </h2>
                
                <div class="ml-4 md:w-12 sm:w-8 h-0.5 mt-0 mb-2 bg-gray-700 "></div>
                  
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

import expList from '../../assets/json/publications'

export default {
    name:"expertise",

    mixins: [expList]

}
</script>

<style>

</style>