<template>
<section class="email-compose">
    <input v-model="subject" type="text" placeholder="Subject">
    <input v-model="sendTo" type="text" placeholder="Send To">
    <textarea v-model="body" cols="30" rows="10" placeholder="Body"></textarea>
    <div class="btns">
        <button @click="save"><font-awesome-icon icon="save"/></button>
        <button @click="send"><font-awesome-icon icon="paper-plane"/></button>
    </div>
</section>
</template>

<script>
import {emailService} from '../../../services/mister-email/email.service.js';

export default {
    data() {
        return {
            subject: '',
            body: '',
            sendTo: ''
        }
    },
    created() {
        if (this.$route.params.id) {
            emailService.getDraftById(this.$route.params.id)
                .then(draft => {
                    this.subject = draft.subject
                    this.body = draft.body
                    this.sendTo = draft.send
                    emailService.deleteDraft(draft.id)
                })
        }

    },
    methods: {
        send() {
            emailService.sendEmail({
                    subject: this.subject,
                    sendTo: this.sendTo,
                    body: this.body
                })
                .then(() => this.$router.push('/mister-email'))
        },
        save() {
            emailService.saveDraft({
                    subject: this.subject,
                    sendTo: this.sendTo,
                    body: this.body
                })
                .then(() => this.$router.push('/mister-email/drafts'))
        }
    },

}
</script>

<style>

</style>
