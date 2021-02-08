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
				<form @submit.prevent="register()">
					<div class="form-group">
						<input type="text" name="name" placeholder="Fullname">
					</div>
					<div class="form-group">
						<input type="text" name="email" placeholder="Email Address">
					</div>
					<div class="form-group">
						<input type="password" name="password" placeholder="Password">
					</div>
					<div class="form-group">
						<input type="password" name="password_confirmation" placeholder="Password Confirmation">
					</div>
					<div class="button-container">
						<button>Register</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		layout: 'auth',
		auth: false,
		methods: {
			register () {

			}
		},
		data () {
			return {

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