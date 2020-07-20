<template>
<section @click="openClose" @mouseover="hover = true" @mouseleave="hover = false" :class="{'is-read': email.isRead, 'is-open': isOpen}" class="email-preview">
    <section class="title-mail">
        <span>
            <button @click.stop="setStar" :class="starClass">
                <font-awesome-icon icon="star" />
            </button>
            <span class="subject">{{email.subject}}</span>
            <span>{{email.send}}</span>
        </span>
        <div v-if="hover" class="btns">
            <button @click.stop="openEmail">
                <font-awesome-icon icon="expand" />
            </button>
            <button v-if="email.isDeleted" @click.stop="restor">
                <font-awesome-icon icon="arrow-up" />
            </button>
            <button @click.stop="deleteEmail">
                <font-awesome-icon icon="trash" />
            </button>
        </div>
        <span v-else class="time">{{sendAt}}</span>
    </section>

    <section class="body-mail" v-if="isOpen">
        <p class="body">
            {{shortBody}}
        </p>
    </section>
</section>
</template>

<script>
import {
    utilService
} from '../../../services/util.service.js';
import {
    emailService
} from '../../../services/mister-email/email.service.js';

export default {
    props: {
        email: Object
    },
    data() {
        return {
            isOpen: false,
            hover: false
        }
    },
    computed: {
        sendAt() {
            return utilService.timeConverter(this.email.sentAt)
        },
        shortBody() {
            return `${this.email.body.substr(0,50)}${(this.email.body.length>49)?'...':''}`;
        },
        starClass() {
            if (this.email.star) return 'star-active'
        }
    },
    methods: {
        openClose() {
            this.isOpen = !this.isOpen;
            emailService.readEmail(this.email.id)
        },
        deleteEmail() {
            emailService.deleteEmail(this.email.id)
        },
        openEmail() {
            this.$router.push(`/mister-email/${this.email.id}`)
        },
        setStar() {
            emailService.setStar(this.email.id)
        },
        restor() {
            emailService.restorEmail(this.email.id)
        }
    },

}
</script>

<style>

</style>
