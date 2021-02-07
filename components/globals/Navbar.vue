<template>
	<nav>
		<div class="container">
			<nuxt-link to="/" class="logo">defileMe</nuxt-link>
			<div :class="`burger ${($store.state.showMobNav) ? 'active' : ''}`" @click="$store.commit('toggleMobNav')">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</nav>
</template>