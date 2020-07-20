<template>
    <div class="home-page">
        <h1>APPSUS</h1>
        <section class="links">
            <router-link 
                v-for="(category, inx) in categories" 
                :key="inx" 
                class="router-link" 
                :to="category.to">
                <img :src="category.src">
                <h2>{{category.h2}}</h2>
                <p>{{category.p}}</p>
            </router-link>
        </section>
    </div>
</template>

<script>
import ideaImg from '@/assets/img/idea.png';
import mailImg from '@/assets/img/mail.png';
import booksImg from '@/assets/img/Books.png';
export default {
    data() {
        return {
            categories:[
                {to:'/miss-keep', src:ideaImg, h2: 'Miss keep', p: 'Save your notes'},
                {to:'/mister-email', src:mailImg, h2: 'Mister Email', p: 'Send and read you email'},
                {to:'/books', src:booksImg, h2: 'Miss Books', p: 'Save your library'},
            ]
        }
    },
}
</script>

<style>

</style>