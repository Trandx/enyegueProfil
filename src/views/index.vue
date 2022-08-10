<template>
  <div>
    <Header @emit-active-tab="getActiveTab"></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>


<script>
//import HelloWorld from './components/HelloWorld.vue'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default {
  name: 'MainView',
  components: {
    Header,
    Main,
    Footer
  },

  data(){
    return {
      activeTab: null,
    }
  },

  methods:{
    getActiveTab(data){
      //console.log(data);
      this.activeTab = data
    }
  },

  provide() {
    return {
      activeTab: this.activeTab
    }
  }
}
</script>

<style scoped>

</style>