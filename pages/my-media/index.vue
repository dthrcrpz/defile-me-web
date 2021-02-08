<template>
	<div :class="`page-my-media on-dashboard ${(showMobNav) ? 'narrow' : ''}`">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Modified</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(media, key) in medias">
					<td>{{ media.path }}</td>
					<td>{{ properTime(media.updated_at) }}</td>
					<td class="actions">
						<a href="javascript:void(0)" class="view">
							<img src="/images/view.svg">
						</a>
						<a href="javascript:void(0)" class="delete">
							<img src="/images/delete.svg">
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters({
				showMobNav: 'showMobNav'
			})
		},
		data () {
			return {
				medias: []
			}
		},
		methods: {
			properTime (string) {
				return this.$moment(string).format('YYYY-MM-DD hh:mm:ss A')
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
