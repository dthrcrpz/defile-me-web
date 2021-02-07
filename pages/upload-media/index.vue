<template>
	<div :class="`page-upload-files on-dashboard ${(showMobNav) ? 'narrow' : ''}`">
		<dropzone id="foo" ref="el" :options="dropzoneOptions" :destroyDropzone="true"></dropzone>
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
				}
			}
		},
		methods: {
			initializeDropzone () {
			    const instance = this.$refs.el.dropzone
			}
		},
		mounted () {
			this.initializeDropzone()
		}
	}
</script>