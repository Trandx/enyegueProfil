<template>
   <div class="w-full  ">
        <div class=" h-2/6 my-5 flex justify-between items-center">
           
            <div class=" sm:w-auto md:w-full  flex justify-end mr-8">
                <div class="w-1/2 h-full sm:hidden md:block ">

                </div>
                <div class="w-full sm:pl-2 md:pl-10 text-left " >
                   <h1 class=" md:text-7xl sm:text-2xl font-semibold text-gray-900">
                    ENYEGUE A NYAM 
                    </h1>
                    <h3 class=" md:text-5xl sm:text-lg font-semibold text-gray-900">
                        Françoise Martine
                    </h3>
                    <div class=" w-40 h-3 mt-5 bg-gray-900 "></div> 

                    <div class=" mt-3 ">
                        <i>
                        Professor, Departement of Physics    
                        </i>
                    </div> 
                </div>
            </div>
            <div class="md:w-2/3 sm:w- h-full flex justify-start md:ml-10 ">    
                <img class=" p-1 md:w-80 md:h-80 sm:w-36 sm:h-36 rounded-full " src="../../assets/img/profil.png" />  
            </div>
        </div>

        <div class=" h-3/6 px-5">
            <div class="w-full py-2 my-4 border-b-4 border-gray-900">
                <ul class="flex flex-wrap md:mx-5 items-center mb-6 text-lg text-gray-900 sm:mb-0">
                    <li
                        v-for="tab in tabs"
                        :key="tab"
                        :class="currentTab === tab&&active"
                    >
                        <a  @click="currentTab = tab" class=" cursor-pointer px-1 text-we hover:underline md:mr-6 hover:text-red-700 hover:font-bold ">
                           {{ tab }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="w-full">
                <component :is="currentTab" class="tab"></component>
            </div>

            
        </div>

        <div class="mt-2 h-1/5 py-4 border-b-2 border-white w-full bg-gray-900 rounded-t-lg text-white ">
            <div class="md:text-4xl sm:text-2xl text-left ml-5 mb-4 font-bold">
                Statistics
                <div class="ml-0 md:w-28 sm:w-20 sm:h-1 md:h-2 mt-1 bg-white "></div>
            </div>
            
            <div class="w-full flex justify-between items-center">
                <div class="w-1/3">
                
                    <div class="w-full ">
                        <div class="m-auto mb-2 w-24 h-24 rounded-full bg-white flex items-center ">
                            <i class="text-7xl text-gray-800 fa-solid fa-file-lines m-auto"></i> 
                        </div>
                    </div>
                
                </div>
                <div class="w-1/3">
                
                    <div class="w-full ">
                        <div class="m-auto mb-2 w-24 h-24 rounded-full bg-white flex items-center ">
                            <i class="text-7xl text-gray-800 fa-solid fa-graduation-cap m-auto"></i> 
                        </div>
                    </div>
                
                </div>
                <div class="w-1/3">
                
                    <div class="w-full ">
                        <div class="m-auto mb-2 w-24 h-24 rounded-full bg-white flex items-center ">
                            <i class="text-7xl text-gray-800 fa-solid fa-user m-auto"></i> 
                        </div>
                    </div>
                
                </div>
            </div>
            <div class="w-full flex justify-between mx-2 space-x-1">

                <div class="w-1/3 h-full text-center">

                    <h2 class="font-bold text-2xl">15</h2>
                    <h2 class=" md:text-2xl sm:text-base">Papers</h2>
                </div>

                <div class="w-1/3 h-full text-center">

                    <h2 class="font-bold text-2xl">12</h2>
                    <h2 class=" md:text-2xl sm:text-base">Students framed in Thesis</h2>
                </div>
                <div class="w-1/3 h-full text-center">

                    <h2 class="font-bold text-2xl">32</h2>
                    <h2 class=" md:text-2xl sm:text-base">Students framed in Master</h2>
                </div>

            </div>
           
            
        </div>
        
   </div>
  
</template>

<script>
import About from '../Tabs/about.vue'
import Research from '../Tabs/research.vue'
import Teaching from '../Tabs/Teaching.vue'
import Expertise from '../Tabs/expertise.vue'




export default {
    name: 'Main',
    components: {
        About,
        Research,
        Teaching,
        Expertise

    },

    data(){
        return {
            currentTab: this.activeTab||'About',
            tabs: ["About", "Research", "Expertise", "Teaching"],
            active: "text-red-700 font-bold"
        }
    },
    watch:{
        activeTab:{
            handler(newval){
                console.log(newval);
                //this.$emit('emitActiveTab', newval)
            }
        } 
    },

    // inject: ['activeTab']

//:class=" ['tab-button', { active: currentTab === tab }]" 

}
</script>

<style>

</style>