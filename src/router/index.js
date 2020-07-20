import Vue from 'vue'
import VueRouter from 'vue-router'


import homePage from '../apps/marge/views/home-page.vue'
import aboutPage from '../apps/marge/views/about-page.vue'

import bookAdd from '../apps/miss-books/views/book-add.vue'
import bookApp from '../apps/miss-books/views/book-app.vue'
import bookPage from '../apps/miss-books/views/book-details.vue'

import keepApp from '../apps/miss-keep/views/keep-app.vue';

import misterEmail from '../apps/mister-email/views/email-app.vue';
import emailList from '../apps/mister-email/views/email-list.vue';
import emailCompose from '../apps/mister-email/views/email-compose.vue';
import emailDetails from '../apps/mister-email/views/email-details.vue';
import emailStarred from '../apps/mister-email/views/email-starred.vue';
import emailDeleted from '../apps/mister-email/views/email-deleted.vue';
import emailDraftList from '../apps/mister-email/views/draft-list.vue';


Vue.use(VueRouter)

  const routes = [
    {path: '/', component: homePage},

    {path: '/books', component: bookApp},
    {path: '/books/add', component: bookAdd},
    {path: '/books/:id', component: bookPage},

    {path: '/miss-keep', component: keepApp},
    
    {path: '/mister-email', component: misterEmail, children:[
      {path: '', component: emailList},
      {path: 'compose/:id?', component: emailCompose},  
      {path: 'starred', component: emailStarred},  
      {path: 'deleted', component: emailDeleted},  
      {path: 'sent', component: emailList},  
      {path: 'drafts', component: emailDraftList},  
      {path: ':id', component: emailDetails},  
    ]},
    {path: '/about', component: aboutPage},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
