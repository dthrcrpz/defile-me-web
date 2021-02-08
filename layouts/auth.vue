<template>
	<div>
		<nuxt/>
		<transition name="fade">
			<modal-background v-if="showModal"/>
		</transition>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import ModalBackground from '@/components/globals/ModalBackground'

	export default {
		components: {
			ModalBackground
		},
		computed: {
			...mapGetters({
				showModal: 'showModal',
			})
		},
	}
</script>