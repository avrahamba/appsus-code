<template>
          <main class="email-app">
            <email-filter></email-filter>
            <email-menu></email-menu>
            <router-view></router-view>
        </main>
</template>

<script>
import emailList from './email-list';
import emailMenu from '../components/email-menu';
import emailFilter from '../components/email-filter';
import {emailService} from '../../../services/mister-email/email.service.js';

export default {
    components:{
        emailList,
        emailMenu,
        emailFilter
    }
}
</script>

<style>

</style>