<template>
    <div class="modal-container">
        <div class="modal video-viewer" v-click-outside="closeModal">
            <video ref="videoPlayer" class="video-js"></video>
        </div>
    </div>
</template>

<script>
    import videojs from 'video.js'
    import 'video.js/dist/video-js.css'

    export default {
        props: ['video_path'],
        data () {
            return  {
                player: null,
                videoOptions: {
                    autoplay: true,
                    controls: true,
                    sources: [
                        {
                            src: this.video_path,
                            type: "video/mp4"
                        }
                    ]
                }
            }
        },
        methods: {
            closeModal () {
                this.$parent.videoToPlay = null
                this.$store.commit('toggleModal', false)
            }
        },
        mounted() {
            this.player = videojs(this.$refs.videoPlayer, this.videoOptions, function onPlayerReady() {
                console.log('onPlayerReady', this)
            })
        },
        beforeDestroy() {
            if (this.player) {
                this.player.dispose()
            }
        }
    }
</script>