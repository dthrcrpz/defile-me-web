<template>
	<div class="login-page">
		<div class="container">
			<div class="left">
				<p>defile me</p>
			</div>
			<div class="right">
				<div class="title">Login</div>
				<div class="desc">
					<p>Welcome, please login to continue</p>
					<p>Don't have an account? <nuxt-link to="register">Register here</nuxt-link></p>
				</div>
				<form @submit.prevent="login()">
					<div class="form-group">
						<input type="text" name="email" placeholder="Email Address">
					</div>
					<div class="form-group">
						<input type="password" name="password" placeholder="Password">
					</div>
					<div class="button-container">
						<button>Login</button>
						<a href="javascript:void(0)">Forgot Password</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		layout: 'auth',
		methods: {
			login () {

			}
		},
		data () {
			return {

			}
		},
		head () {
			return {
				meta: [
                    { hid: 'og:title', property: 'og:title', content: `Login | Defile Me` },
                    { hid: 'title', property: 'title', content: `Login | Defile Me` },
				],
			}
		}
	}
</script>