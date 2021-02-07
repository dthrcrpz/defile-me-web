<template>
	<nav>
		<div class="container">
			<div :class="`burger ${($store.state.showMobNav) ? 'active' : ''}`" @click="$store.commit('toggleMobNav')">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nuxt-link to="/" class="logo">defileMe</nuxt-link>
		</div>
	</nav>
</template>