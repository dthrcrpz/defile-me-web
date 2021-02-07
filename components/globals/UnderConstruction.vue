<template>
	<div class="modal-container">
		<div class="modal under-construction-modal" v-click-outside="closeModal">
			<img src="/images/under-construction.svg">
			<p class="title">Site is under construction</p>
			<p class="description">
				I'm still working on this
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			closeModal () {
				this.$store.commit('toggleUnderConstructionModal', false)
				this.$store.commit('toggleModal', false)
			}
		}
	}
</script>