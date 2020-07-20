
<template>
<section class="draft-preview">
    <span>
        <span class="subject">{{draft.subject}}</span>
        <span>{{draft.send}}</span>
    </span>

    <div class="btns">
        <button @click.stop="edit">
            <font-awesome-icon icon="edit" />
        </button>
        <button @click.stop="deleteDraft">
            <font-awesome-icon icon="trash"/>
        </button>
    </div>
</section>
</template>

<script>
import {emailService} from '../../../services/mister-email/email.service.js';

export default {
    props:{
        draft: Object
    },
    methods: {
        edit(){
            this.$router.push('/mister-email/compose/'+this.draft.id)
        },
        deleteDraft(){
            emailService.deleteDraft(this.draft.id)
        }
    },

}
</script>

<style>

</style>
