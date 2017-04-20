<template>
    <div class="container">
        <quote-slider :quotes_num="quotes.length" :max_quotes="maxQuotes"> </quote-slider>
        <quote v-for="q in quotes" :quote="q"> </quote>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Quoteslider from './components/QuoteSlider.vue';

    export default {
        data: function (){
            return {
                quotes: [
                    'Starting quote',
                    'Another quote',
                ],
                maxQuotes: 10
            }
        },
        components:{
            'quote': Quote,
            'quoteSlider': Quoteslider
        }
    }
</script>

<style>
</style>
