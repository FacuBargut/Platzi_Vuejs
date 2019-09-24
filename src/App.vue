<template>
  <div id="app">
    <pm-header></pm-header>
    <pm-notification v-show="showNotification">
        <p slot="body">No se encontraron resultados</p>
    </pm-notification>
    <div class="section">
        <div class="nav">
            <div class="container">
                <input v-model="searchQuery"
                       type="text"
                       class="form-control"
                       placeholder="Buscar canciones"
                >
                <a role="button"
                   class="btn btn-primary"
                   @click="search()">
                   Buscar
                </a>
                <a role="button" class="btn btn-danger">&times;</a>
            </div>

        </div>
        <div class="container">
          <div class="row">
              <p>
                  <small> {{searchMessage}} </small>
              </p>


          </div>

        </div>
        <pm-loader v-show="isLoading">
        

        </pm-loader>
        <div v-show="!isLoading" class="container col-md-12">
            <div v-for = "t in tracks" class="col-sm-12 col-md-4 d-inline-flex">
                <pm-track :track="t"
                          @select="setSelectedTrack"
                          :class="{ 'is-active' : t.id === selectedTrack }"
                          ></pm-track>
            </div>
            
        </div>
    </div>

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
  data () {
    return {
        name: '',
        formatedName: '',
        searchQuery: '',
        tracks: [],
        isLoading: false,
        showNotification: false,
        selectedTrack: ''
        
    }
  },
  components:{
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader,
    PmNotification
  }
  ,
  computed: {
      searchMessage(){
        return "Encontrados: "+ this.tracks.length
      }
  }
  ,
  methods:{
      search(){
                this.isLoading = true
                if(!this.searchQuery){
                  this.isLoading = false
                  return false
                }else{
                  
                  trackService.search(this.searchQuery).then(res=>{
                  this.tracks = res.tracks.items
                  this.showNotification = res.tracks.total === 0
                  this.isLoading = false
                  console.log(res)
                  })
                }

               
      },
      setSelectedTrack(id){
        this.selectedTrack = id
      }
    },
  watch:{
      showNotification(){
          if(this.showNotification){
            setTimeout(() => {
                this.showNotification = false
            }, 3000);
          }
      }
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
