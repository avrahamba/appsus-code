<template>
<nav class="email-menu">
    <router-link to="/mister-email/compose">
        <font-awesome-icon icon="plus" />
        <div class="txt">
            Compose
        </div>
    </router-link>
    <router-link to="/mister-email" exact>
        <font-awesome-icon icon="inbox" />
        <div class="txt">Inbox</div>
    </router-link>
    <router-link to="/mister-email/starred" exact>
        <font-awesome-icon icon="star" />
        <div class="txt">Starred</div>
    </router-link>
    <router-link to="/mister-email/deleted" exact>
        <font-awesome-icon icon="trash" />
        <div class="txt">Deleted</div>
    </router-link>
    <router-link to="/mister-email/sent" exact>
        <font-awesome-icon icon="paper-plane" />
        <div class="txt">Sent</div>
    </router-link>
    <router-link to="/mister-email/drafts" exact>
        <font-awesome-icon icon="edit" />
        <div class="txt">Drafts</div>
    </router-link>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
