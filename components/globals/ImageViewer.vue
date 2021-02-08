<template>
    <div class="modal-container">
        <div class="modal image-viewer" v-click-outside="closeModal">
            <img :src="image">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['image'],
        methods: {
            closeModal () {
                this.$parent.imageToView = null
                this.$store.commit('toggleModal', false)
            }
        }
    }
</script>