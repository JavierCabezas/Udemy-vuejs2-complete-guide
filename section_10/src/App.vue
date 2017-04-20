<template>
    <div class="container">
        <quote v-for="q in quotes" :quote="q">
        </quote>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

    export default {
        data: function (){
            return {
                quotes: [
                    'Starting quote',
                    'Another quote'
                ],
                maxQuotes: 10
            }
        },
        components:{
            'quote': Quote
        }
    }
</script>

<style>
</style>
