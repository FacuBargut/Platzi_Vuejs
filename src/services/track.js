import platziMusicService from './platzi-music'

const trackService = {}

    trackService.search = function (q){
        const type = 'track'
            return platziMusicService.get('/search',{
                    params: { q, type}
                    }).then(function (res){
                            return res.data
                    })
    }

export default trackService