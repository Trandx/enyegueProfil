<template>
  
<nav class=" w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
    <div class="w-full flex flex-wrap justify-between items-center mx-auto">
        <!-- <a href="https://flowbite.com/" class="flex items-center">
            <img src="../../assets/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Profile</span>
        </a> -->
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Profile</span>
        <div class=" mx-5 flex justify-content-left ">

        <div class="hidden">
            <div class=" flex items-center md:order-2 ">
            <!-- <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-12 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                id="user-menu-button">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="../../assets/logo.png" alt="user photo">
            </button> -->
            <!-- Dropdown menu -->
            <div class=" z-50 top-10 my-5 text-base list-none bg-primary dark:bg-gray-900 rounded divide-y divide-gray-200 shadow shadow-zinc-100 dark:divide-gray-600 absolute md:top-10 md:my-8 right-5 " 
                id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                <!-- <div class="py-3 px-4">
                <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div> -->
                <ul class="py-1" aria-labelledby="user-menu-button">
                <li>
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">About</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Research</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Teaching</a>
                </li>
                <!-- <li>
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li> -->
                </ul>
            </div>
            <button @click="openOrCloseDropDown"  data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <i class="fa-solid w-8 fa-bars text-xl text-white"></i>
                <!-- <svg class="w-6 h-6 text-white"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg> -->
            </button>
        </div>
        
        </div>
        <!-- <div :class="!show?'hidden':false"  class=" hidden sm:absolute sm:z-50 sm:top-10 sm:my-0 sm:right-10 md:relative md:top-0  md:mx-12 justify-between items-center md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li
                    v-for="tab in tabs"
                    :key="tab"
                    
                
                >
                    <a @click="currentTab = tab" :class="currentTab === tab&&active" class=" cursor-pointer block py-2 pr-4 pl-3 hover:underline hover:font-bold  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 text-white   dark:border-gray-700">
                        {{ tab }}
                    </a>
                </li>
            </ul>
        </div> -->
        </div>
  </div>
</nav>

</template>

<script>
  export default {
     name: 'NavBar',
     data(){
        return {
            show: false,
            currentTab: this.activeTab||'About',
            tabs: ["About", "Research", "Teaching"],
            active: "text-red-700 font-bold underline"
        }
    },

    watch:{
        currentTab:{
            handler(newval){
                //console.log(newval);
                this.$emit('emitActiveTab', newval)
            }
        } 
    },

    methods: {
        openOrCloseDropDown(){
            this.show = !this.show

            console.log(this.show);
        }
    },

  }
</script>

<style lang="css" scoped>

</style>