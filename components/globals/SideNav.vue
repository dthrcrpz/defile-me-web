<template>
	<div class="sidenav">
		<div class="box active"></div>
		<div class="box active">
			<nuxt-link to="/upload-media"><svg height="16px" version="1.1" viewBox="0 0 24 16" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#fff" id="Core" transform="translate(-126.000000, -46.000000)"><g id="backup" transform="translate(126.000000, 46.000000)"><path d="M19.4,6 C18.7,2.6 15.7,0 12,0 C9.1,0 6.6,1.6 5.4,4 C2.3,4.4 0,6.9 0,10 C0,13.3 2.7,16 6,16 L19,16 C21.8,16 24,13.8 24,11 C24,8.4 21.9,6.2 19.4,6 L19.4,6 Z M14,9 L14,13 L10,13 L10,9 L7,9 L12,4 L17,9 L14,9 L14,9 Z" id="Shape"/></g></g></g></svg> <span>Upload Media</span></nuxt-link>
			<nuxt-link to="/my-media"><svg id="Layer_1" style="enable-background:new 0 0 80 70;" version="1.1" viewBox="0 0 80 70" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><g id="Layer_2"><g id="Layer_3"><path d="M64,20.4L45,5.1l-12.9,7.2l-6.4-6.8L5.4,5.4v59.4h69.1V20.4H64z M44.7,8.7l14.5,11.6H39.7l-5.4-5.8L44.7,8.7z M71.6,61.9 H8.4V8.4l16,0.1l14,14.8h33.1V61.9z"/><rect height="3" width="46.8" x="16.6" y="50.2"/></g></g></svg> <span>My Media</span></nuxt-link>
			<hr>
			<a href="javascript:void(0)" @click="logout()"><svg height="18px" version="1.1" viewBox="0 0 18 18" width="18px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-87.000000, -213.000000)"><g id="exit-to-app" transform="translate(87.000000, 213.000000)"><path d="M7.1,12.6 L8.5,14 L13.5,9 L8.5,4 L7.1,5.4 L9.7,8 L0,8 L0,10 L9.7,10 L7.1,12.6 L7.1,12.6 Z M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,6 L2,6 L2,2 L16,2 L16,16 L2,16 L2,12 L0,12 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z" id="Shape"/></g></g></g></svg> <span>Logout</span></a>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			async logout () {
				await this.$auth.logout()
			}
		}
	}
</script>