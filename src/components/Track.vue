<template>
        <div v-if="track && track.album" class="card" style="width: 18rem;">
            <img :src="track.album.images[0].url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ track.name}}</h5>
                <p class="card-text">{{ track.artists[0].name}}</p>
                <a href="#" class="btn btn-primary" @click="selectTrack">Play</a>
                <p>{{ track.duration_ms }}</p>
            </div>
        </div>
</template>
<script>
export default {
    props:{
        track:{
                type: Object, required:true
        }
    },
    methods:{
        selectTrack(){
            this.$emit('select', this.track.id)

            this.$bus.$emit('set-track', this.track)
        }
    }
}
</script>