<template>
    <div class="book-filter">
        <input type="text" 
            class="inner-text"
            placeholder="Start typing title, authors or category" 
            v-model="filterBy.text" 
            @input="emitFilter"
        />

        <label>
            Price
            <select v-model="filterBy.price">
                <option value="">No filter</option>
                <option value="expensive">Expensive (Up Form 500)</option>
                <option value="inexpensive">Inexpensive (Up from 200)</option>
                <option value="cheap">Cheap</option>
            </select>
        </label>
        <label>
            Length
            <select v-model="filterBy.length">
                <option value="">No filter</option>
                <option value="long">Long</option>
                <option value="decent">Decent</option>
                <option value="light">Light</option>
            </select>
        </label>
        <router-link to="/books/add">Add Book</router-link>
    </div>
</template>

<script>
export default {
    props: ['filterBy'],
    methods: {
        emitFilter() {
            this.$emit('filtered')
        }
    },
}
</script>

<style>

</style>