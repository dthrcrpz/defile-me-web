<template>
	<div :class="`page-upload-files on-dashboard ${(showMobNav) ? 'narrow' : ''}`">
		<dropzone id="foo" ref="el" :options="dropzoneOptions" :destroyDropzone="false"></dropzone>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Dropzone from 'nuxt-dropzone'
	import 'nuxt-dropzone/dropzone.css'

	export default {
		computed: {
			...mapGetters({
				showMobNav: 'showMobNav'
			})
		},
		components: {
			Dropzone
		},
		data () {
			return {
				dropzoneOptions: {
					url: `${process.env.API_URL}medias`,
					thumbnailWidth: 150,
					acceptedFiles: 'image/*, video/mp4',
					headers: {
						'Authorization': this.$auth.strategy.token.get()
					},
					addRemoveLinks: true
				}
			}
		},
		methods: {
			initializeDropzone () {
			    const instance = this.$refs.el.dropzone

			    instance.on('success', (file, res) => {
			    	// add the media id to the preview link dom
			    	file.previewElement.setAttribute('media_id', res.media.id)
			    })

			    instance.on('removedfile', (file) => {
			    	// get the media id of the target file
			    	let mediaId = file.previewElement.getAttribute('media_id')

			    	// call the delete media api
			    	this.$axios.delete(`medias/${mediaId}`).then(res => {
			    		console.log(res.data)
			    	}).catch(err => {
			    		console.log(err)
			    	})
			    })
			}
		},
		mounted () {
			this.initializeDropzone()
		}
	}
</script>