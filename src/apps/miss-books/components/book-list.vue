<template>
<div class="book-list">
    <router-link  :key="idx" v-for="(book, idx) in books" :to="'/books/'+book.id">
        <book-preview :book="book"></book-preview>
    </router-link>
</div>
</template>

<script>
import bookPreview from './book-preview'

export default {
    props: ['books'],
    methods: {
        selected(bookid) {
            
            this.$emit('selected', bookid)
        }
    },
    components:{
        bookPreview
    }
}
</script>

<style>

</style>