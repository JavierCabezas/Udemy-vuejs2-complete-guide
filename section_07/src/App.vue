<template>
    <div class="container">
        <app-header></app-header>

        <div class="row">
            <servers> </servers>
            <server-details></server-details>
        </div>
        <hr>
        <div class="row">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import Servers from './Servers.vue';
    import Header from './Header.vue';
    import ServerDetails from './ServerDetails.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            'app-header': Header,
            'servers': Servers,
            'server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
