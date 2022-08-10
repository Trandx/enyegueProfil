<template>
<div class="md:m-4">
  <div class="my-5 md:pl-40 md:pr-40 md:h-full sm:w-full mb-6 sm:mb-0 ">
      <div class=" font-bold text-left indent-4 sm:text-xl md:text-4xl">
          Research focus
          <div class="ml-4 md:w-28 sm:w-20 sm:h-1 md:h-2 mt-1 mb-4 bg-gray-700 "></div>

      </div>
      <p class="ml-2 text-left indent-8 md:text-2xl sm:text-lg">
        My work focused on the axes below: <br />
        <br/> • The mechanical behavior of the lithosphere, in particular the study of the irregularity of the thickness of the crust and its consequences in the isostatic equilibrium;
        <br /> • The detection and dynamics of underground flows, particularly the exploration and exploitation of underground resources;
        <br/> • Impact of the exploitation of underground resources on the surface of the earth.
      </p>
  </div>

  <div class="my-5 md:pl-40 md:pr-40 md:h-full sm:w-full mb-6 sm:mb-0 ">
      <div class=" font-bold text-left indent-4 sm:text-xl md:text-4xl">
          Selected Papers
          <div class="ml-4 md:w-28 sm:w-20 sm:h-1 md:h-2 mt-1 mb-4 bg-gray-700 "></div>

      </div>
      <ul class="md:ml-4 mt-2">
        <li class="flex justify-start items-center p-2" v-for="(pub, key) in pubList" :key="key">
          <div class="w-auto h-full">
            <i class="m-auto fa-solid fa-right-long md:text-4xl sm:text-lg text-red-700"></i>
          </div>

          <div class="w-3/4">
            <div class="mr-4">
              <h2 class="ml-4 font-bold text-left sm:text-sm md:text-lg">
                {{pub.title}}
              </h2>
              
              <div class="ml-4 md:w-28 sm:w-20 sm:h-0.5 md:h-1 mt-0 mb-2 bg-gray-700 "></div>
                
            </div>
            <div class=" indent-4 text-base text-left">
              click
              <i>
                <a :href="pub.link" class="font-bold hover:underline text-red-700"> here</a>
              </i>
              for more
            </div>
          </div>
          <div>{{pub.date}}</div>
          
        </li>
      </ul>
      <p class=" text-left indent-8 md:text-2xl sm:text-lg">
          
          
      </p>
  </div>

</div>
  
</template>

<script>
import pubList from '../../assets/json/publications'
export default {
    name: "Research",

    mixins: [pubList]
}
</script>

<style>

</style>