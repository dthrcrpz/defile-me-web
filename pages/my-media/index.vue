<template>
	<div :class="`page-my-media on-dashboard ${(showMobNav) ? 'narrow' : ''}`">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Name</th>
					<th>File Type</th>
					<th>Modified</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(media, key) in medias">
					<td class="thumbnail-cell">
						<img :src="media.path_resized">
					</td>
					<td>{{ media.path }}</td>
					<td>{{ media.type }}</td>
					<td>{{ properTime(media.updated_at) }}</td>
					<td class="actions">
						<div class="buttons-container">
							<a href="javascript:void(0)" class="view" @click="viewMedia(media.path, media.type)">
								<img src="/images/view.svg">
							</a>
							<a href="javascript:void(0)" class="delete">
								<img src="/images/delete.svg">
							</a>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
			<image-viewer :image="imageToView" v-if="imageToView != null"/>
		</transition>
		<transition name="fade">
			<video-viewer :video_path="videoToPlay" v-if="videoToPlay != null"/>
		</transition>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import ImageViewer from '~/components/globals/ImageViewer'
	import VideoViewer from '~/components/globals/VideoViewer'

	export default {
		computed: {
			...mapGetters({
				showMobNav: 'showMobNav'
			})
		},
		components: {
			ImageViewer, VideoViewer
		},
		data () {
			return {
				medias: [],
				imageToView: null,
				videoToPlay: null
			}
		},
		methods: {
			properTime (string) {
				return this.$moment(string).format('YYYY-MM-DD hh:mm:ss A')
			},
			viewMedia (path, type) {
				switch (type) {
					case 'image':
						this.imageToView = path
						break
					case 'video':
						this.videoToPlay = path
						break
				}

				this.$store.commit('toggleModal', true)
			}
		},
		asyncData ({ $axios, $auth }) {
			return $axios.get(`medias`, {}, {
				'Authorization': $auth.strategy.token.get()
			}).then(res => {
				return {
					medias: res.data.medias
				}
			})
		}
	}
</script>
