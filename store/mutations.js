export default {
	toggleMobNav (state) {
        state.showMobNav = !state.showMobNav
    },
    toggleModal (state, data) {
    	state.showModal = data
    },
    toggleUnderConstructionModal (state, data) {
    	state.showUnderConstructionModal = data
    },
}