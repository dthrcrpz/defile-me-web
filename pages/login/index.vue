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
					<p>Don't have an account? <nuxt-link to="/register">Register here</nuxt-link></p>
				</div>
				<form @submit.prevent="login()">
					<div class="form-group">
						<input type="text" name="email" placeholder="Email Address" v-model="loginForm.email">
					</div>
					<div class="form-group">
						<input type="password" name="password" placeholder="Password" v-model="loginForm.password">
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
		        this.$auth.loginWith('local', { data: this.loginForm }).then(res => {
		        	console.log(res)
		        }).catch(err => {
		        	console.log(err)
		        })
			}
		},
		data () {
			return {
				loginForm: {
					email: 'dthrcrpz@gmail.com',
					password: 'password'
				}
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