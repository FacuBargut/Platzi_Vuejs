<template>
    <div class="jumbotron">
        <div class="header">
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <li class="nav-item active">
                    Platzi Music
                </li>
                <li class="nav-item active">
                    Platzi Music
                </li>
            </nav>
            </div>
        </div>
        <div class="header-body">
            <div class="container">
                <h1>Platzi Music!</h1>
                <h3>Canciones que estan Vue-nisimas</h3>
                <pm-player></pm-player> 
            </div>
        </div>
    </div>
</template>
<script>

import PmPlayer from '../Player.vue'

export default {
    components:{
        PmPlayer
    }
}

</script>