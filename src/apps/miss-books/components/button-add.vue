<template>
<div class="button-add">
    <span>{{txt}}</span>
    <span class="plus" @click="add">+</span>
</div>
</template>

<script>
export default {
    props: {
        txt: String
    },
    methods: {
        add() {
            this.$emit('add')
        }
    },
}
</script>

<style>

</style>
