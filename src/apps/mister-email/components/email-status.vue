<template>
      <section class="email-status" v-if="status">
        <div class="emails">Emails: {{status.allEmails}}</div>
        <div>New: {{status.unreadedEmails}}</div>
    </section>
</template>

<script>
import {emailService} from '../../../services/mister-email/email.service.js';
import {eventBus,EVENT_CHANGE_STATUS_EMAIL} from '../../../services/event-bus.service.js';

export default {
    data() {
        return {
            status: null      
        }
    },
    created() {
        emailService.getStatus()
            .then(status => this.status = status);
        
        eventBus.$on(EVENT_CHANGE_STATUS_EMAIL,()=>{
            emailService.getStatus()
                .then(status => this.status = status);
        })
    },
}
</script>

<style>

</style>