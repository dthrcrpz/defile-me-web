<template>
	<div class="login-page">
		<div class="container">
			<div class="left">
				<p>defile me</p>
			</div>
			<div class="right">
				<div class="title">Register</div>
				<div class="desc">
					<p>Welcome to Defile Me</p>
					<p>Already have an account? <nuxt-link to="/login">Login here</nuxt-link></p>
				</div>
				<form @submit.prevent="register()" id="register-form">
					<div class="form-group">
						<input type="text" name="name" placeholder="Fullname" v-validate="'required'" value="jojo tata">
						<transition name="fade"><span class="validation-errors" v-if="errors.has('name')">{{ properFormat(errors.first('name')) }}</span></transition>
					</div>
					<div class="form-group">
						<input type="text" name="email" placeholder="Email Address" v-validate="'required|email'" value="jojo@email.cccc">
						<transition name="fade"><span class="validation-errors" v-if="errors.has('email')">{{ properFormat(errors.first('email')) }}</span></transition>
					</div>
					<div class="form-group">
						<input type="password" name="password" placeholder="Password" v-validate="'required|min:6'" ref="password" value="admin123">
						<transition name="fade"><span class="validation-errors" v-if="errors.has('password')">{{ properFormat(errors.first('password')) }}</span></transition>
					</div>
					<div class="form-group">
						<input type="password" name="password_confirmation" placeholder="Password Confirmation" v-validate="'required|confirmed:password'" value="admin123">
						<transition name="fade"><span class="validation-errors" v-if="errors.has('password_confirmation')">{{ properFormat(errors.first('password_confirmation')) }}</span></transition>
					</div>
					<div class="button-container">
						<button>Register</button>
					</div>
				</form>
			</div>
		</div>
		<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
			<register-success v-if="showRegistrationSuccessModal"/>
		</transition>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import RegisterSuccess from '~/components/globals/RegisterSuccess'

	export default {
		computed: {
			...mapGetters({
				showRegistrationSuccessModal: 'showRegistrationSuccessModal'
			})
		},
		layout: 'auth',
		auth: false,
		components: {
			RegisterSuccess
		},
		data () {
			return {

			}
		},
		methods: {
			register () {
				this.$validator.validateAll().then(valid => {
					if (valid) {
						// call the register API
						let formData = new FormData(document.querySelector('#register-form'))
						this.$axios.post(`users`, formData).then(res => {
							this.$store.commit('toggleRegistrationSuccessModal', true)
							this.$store.commit('toggleModal', true)
							// after 3 seconds, automatically login that user
							setTimeout(() => {
								this.$auth.loginWith('local', { data: formData }).then(res => {
						        	this.$store.commit('toggleRegistrationSuccessModal', false)
									this.$store.commit('toggleModal', false)
									this.$router.push('/')
						        }).catch(err => {
						        	console.log(err)
						        })
							}, 3000)
						}).catch(err => {
							console.log(err)
						})
					}
				})
			}
		},
		head () {
			return {
				meta: [
                    { hid: 'og:title', property: 'og:title', content: `Register | Defile Me` },
                    { hid: 'title', property: 'title', content: `Register | Defile Me` },
				],
			}
		}
	}
</script>