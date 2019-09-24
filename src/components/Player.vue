<template>
    <div v-if="track && track.album" class="container">
        <img :src="track.album.images[0].url" alt="">
        <p>
            <strong>{{ track.name}}</strong>
            <small>{{ track.duration_ms}}</small>
        </p>
        <p>
            <audio :src="track.preview_url" controls></audio>
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            track: {}
        }
    },
    created(){

        this.$bus.$on('set-track', (track) => {
            this.track = track
        })

        
    }
}
</script>
<style scoped>
img{
    width: 128px;
    border-radius:50%;
}
</style>