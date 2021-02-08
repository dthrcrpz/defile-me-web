<template>
	<div>
		<navbar/>
		<side-nav/>
		<nuxt/>

		<transition name="fade">
			<modal-background v-if="showModal"/>
		</transition>
		<transition name="fade">
			<to-top v-if="showToTop"/>
		</transition>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Navbar from '@/components/globals/Navbar'
	import SideNav from '@/components/globals/SideNav'
	import ToTop from '@/components/globals/ToTop'
	import ModalBackground from '@/components/globals/ModalBackground'
	import UnderConstruction from '@/components/globals/UnderConstruction'

	export default {
		components: {
			Navbar, SideNav, UnderConstruction, ToTop, ModalBackground
		},
		computed: {
			...mapGetters({
				showModal: 'showModal',
			})
		},
		data () {
			return {
				showToTop: false
			}
		},
		watch: {
			'$store.getters.showModal': function (val) {
				if (val) {
					document.body.classList.add('no-scroll')
				} else {
					document.body.classList.remove('no-scroll')
				}
			},
			'$store.getters.showMobNav': function (val) {
				let box1 = document.querySelector(".sidenav .box:nth-child(1)")
				let box2 = document.querySelector(".sidenav .box:nth-child(2)")

				if (val) {
					box1.classList.add('active')
					setTimeout(() => {
						box2.classList.add('active')
					}, 200)
				} else {
					box2.classList.remove('active')
					setTimeout(() => {
						box1.classList.remove('active')
					}, 200)
				}
			}
		},
		methods: {
			showUnderConstructionModal () {
				setTimeout(() => {
					this.$store.commit('toggleModal', true)
					this.$store.commit('toggleUnderConstructionModal', true)
				}, 400)
			},
			listenScrollForToTop () {
				window.addEventListener('scroll', () => {
					this.showToTop = (window.scrollY >= 200) ? true : false 
				})
			}
		},
		beforeMount () {
			this.listenScrollForToTop()
		}
	}
</script>