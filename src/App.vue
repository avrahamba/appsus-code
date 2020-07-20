<template>
<div id="app">
    <section class="my-app">
        <header>
            <app-header></app-header>
        </header>
        <div class="fake-header"></div>
        <router-view></router-view>
        <txt-msg></txt-msg>
        <footer>
            <div>coffiright 2020</div>
        </footer>
        <div class="screen" @click="closeBar"></div>
    </section>
</div>
</template>
<script>
import appHeader from './apps/marge/components/app-header.vue';
import txtMsg from './apps/marge/components/txt-msg.vue';
import {eventBus,EVENT_CLOSE_MODAL} from './services/event-bus.service.js';

export default {
    components:{
        appHeader,
        txtMsg
    },
    methods: {
        closeBar(){
            document.body.classList.remove('open-bar');
            eventBus.$emit(EVENT_CLOSE_MODAL)
        }
    },
}
</script>
<style lang="scss">
</style>
