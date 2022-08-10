<template>
  <div class="md:flex ">         
        <div class=" md:relative md:order-1 m-5 md:mr-12">
            <div class="font-bold sm:text-2xl md:text-4xl">
                Contact Information
            </div>
            <div class="py-5 px-4 space-y-5 rounded-md  bg-gray-800 text-white text-left ">
                
                <div class="flex justify-left items-center">
                    <i class="md:text-3xl md:mr-4 sm:mr-2 sm:text-xl fa-solid fa-location-dot"></i>
            
                    <div class="font-bold sm:text-xl md:text-2xl">
                        University of Yaoundé I, Extention 3, Door 152
                    </div>
                </div>

                <div class="flex justify-left items-center">
                    <i class="md:text-3xl md:mr-4 sm:mr-2 sm:text-xl fa-solid fa-square-envelope"></i>
            
                    <a href="mailto:france2019@yahoo.com" class=" sm:text-xl md:text-2xl underline hover:text-indigo-700 hover:font-bold ">
                        france2019@yahoo.com
                    </a>
                </div>

                <div class="flex justify-left items-center">
                    <i class="md:text-3xl md:mr-4 sm:mr-2 sm:text-xl fa-solid fa-phone"></i>
                    <div>
                        <a href="tel:+237699-558-165" class=" sm:text-xl md:text-2xl underline hover:text-indigo-700 hover:font-bold ">
                            (237) 699-558-165
                        </a> 
                        <br>
                        <a href="tel:+237672-382-982" class=" pl-14  sm:text-xl md:text-2xl underline hover:text-indigo-700 hover:font-bold ">
                            672-382-982
                        </a>
                    </div>
                    
                </div>

                <div class="flex justify-left items-center">
                    <i class="md:text-3xl md:mr-4 sm:mr-2 sm:text-xl fa-solid fa-file-lines"></i>
                    
                    <router-link :to="{name:'cv'}" class=" pl-14  sm:text-xl md:text-2xl underline hover:text-indigo-700 hover:font-bold ">
                        CV
                    </router-link>
                    
                    
                </div>
                
            </div>
        </div>

        <div class="my-5 md:ml-40 md:h-full sm:w-full mb-6 sm:mb-0 ">
            <div class=" font-bold text-left indent-4 sm:text-xl md:text-4xl">
                Summary
                <div class="ml-4 md:w-28 sm:w-20 sm:h-1 md:h-2 mt-1 mb-4 bg-gray-700 "></div>

            </div>
            <p class=" text-left indent-8 md:text-2xl sm:text-lg">
                I have a Doctoral Thesis / Ph. D in Physics option Geophysics and Geo-exploration defended at the Faculty of Sciences of the University of Yaoundé I, 
                with very honorable mention and congratulations from the jury. Since 2007 I have as center of interest, the study of the dynamics of the lithosphere, 
                variation of the thickness of the continental crust and interest of its irregularities, structuring and formation of the sedimentary basins and applications 
                (in particular relation with the field mining), circulation of fluids (in particular deep) in basins, Impact of the exploitation of underground 
                resources on the surface of the earth.    
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style>

</style>