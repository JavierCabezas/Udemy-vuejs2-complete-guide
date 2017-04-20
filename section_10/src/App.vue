<template>
    <div class="container">
        <quote-slider :quotes_num="quotes.length" :max_quotes="maxQuotes"> </quote-slider>
        <form-quote> </form-quote>
        <quote v-for="q in quotes" :quote="q"> </quote>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Quoteslider from './components/QuoteSlider.vue';
    import FormQuote from './components/FormQuote.vue';

    import { eventBus } from './main';

    export default {
        data: function (){
            return {
                quotes: [
                    'Starting quote',
                    'Another quote',
                ],
                maxQuotes: 10,
            }
        },
        created(){
            eventBus.$on('addQuote', (new_quote) => {
                this.quotes.push(new_quote);
            });
        },
        components:{
            'quote': Quote,
            'quoteSlider': Quoteslider,
            'formQuote': FormQuote
        }
    }
</script>

<style>
</style>
