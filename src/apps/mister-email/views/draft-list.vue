<template>
<section class="draft-list">
    <ul v-if="drafts">
        <li v-for="(draft, inx) in drafts" :key="inx">
            <draft-preview :draft="draft"></draft-preview>
        </li>
    </ul>
</section>
</template>

<script>
import {emailService} from '../../../services/mister-email/email.service.js';
import draftPreview from '../components/draft-preview';

export default {
    data() {
        return {
            drafts: null
        }
    },
    created() {
        emailService.getDrafts()
            .then(drafts => this.drafts = drafts)
    },
    components: {
        draftPreview
    }
}
</script>

<style>

</style>
