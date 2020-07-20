<template>
    <nav class="app-header" @click="closeBar">
        <div class="bars" @click.stop="openBar">
            <font-awesome-icon icon="bars" />
        </div>
        <router-link class="logo" to="/" exact>
            <img src="@/assets/img/LOGO.png">
            <h1>APPSUS</h1> 
        </router-link>
        <ul>
            <li v-for="(link, index) in links" :key="index">
                <router-link class="router-link" :to="link.to">{{link.text}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links:[
                {to:'/books',text:'Miss Books'},
                {to:'/miss-keep',text:'Miss Keep'},
                {to:'/mister-email',text:'Mister Email'},
            ]
        }
    },
    methods: {
        openBar(){
            document.body.classList.toggle('open-bar')
        },
        closeBar(){
            document.body.classList.remove('open-bar')
        }
    },
}
</script>

<style>

</style>