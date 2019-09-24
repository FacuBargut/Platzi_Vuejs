<template>
  <div id="app">
    <pm-header></pm-header>

    <router-view></router-view>

    <pm-footer></pm-footer>
  </div>
</template>



<script>
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//Servicios
import trackService from './services/track'
//Layout
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

//Components
import PmTrack from './components/Track.vue'

//Share
import PmLoader from './components/share/Loader.vue'
import PmNotification from './components/share/Notification.vue'


export default {
  name: 'app',
  components:{
    PmFooter,
    PmHeader
  }
}
  
</script>

<style lang="scss">
.container{
  margin-top:10px;
}

.is-active{
  border: 3px #23d160 solid;
}
</style>
