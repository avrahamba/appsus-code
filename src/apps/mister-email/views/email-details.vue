<template>
<section v-if="email" class="email-details">
    <h2>{{email.subject}}</h2>
    <h3>{{'from: '+email.send}}</h3>
    <p>{{email.body}}</p>
    <div class="btn">
        <button @click="saveEmail">
            <font-awesome-icon icon="save" /> </button>
        <button @click="closeEmail">
            <font-awesome-icon icon="compress" />
        </button>
        <button @click="deleteEmail">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</section>
</template>

<script>
import {
    emailService
} from '../../../services/mister-email/email.service.js';
import {
    noteService
} from '../../../services/miss-keep/notes.service.js';

export default {
    data() {
        return {
            email: null
        }
    },
    created() {
        emailService.getEmailById(this.$route.params.id)
            .then(email => this.email = email)
    },
    methods: {
        closeEmail() {
            this.$router.push('/mister-email')
        },
        deleteEmail() {
            emailService.deleteEmail(this.email.id);
            this.$router.push('/mister-email')
        },
        saveEmail() {
            noteService.saveNote({
                    type: 'txt',
                    title: this.email.subject,
                    txt: `Email from:${this.email.send}\n\n ${this.email.body}`
                })
                .then(this.$router.push('/miss-keep'))
        }
    },
}
</script>

<style>

</style>
