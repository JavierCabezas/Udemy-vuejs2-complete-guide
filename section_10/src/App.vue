<template>
    <div class="container">

        <h1> Quotes </h1>
        <div class="row">
            <quote-slider :quotes_num="quotes.length" :max_quotes="maxQuotes"> </quote-slider>
        </div>

        <div class="row">
            <form-quote> </form-quote>
        </div>

        <div class="row">
            <quote v-for="(q, i) in quotes" :quote="q" :index="i"> </quote>
        </div>

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
                if(this.quotes.length  >= this.maxQuotes){
                    alert("Quote limit reached. Delete some quotes");
                }else{
                    this.quotes.push(new_quote);
                }

            });
            eventBus.$on('deleteQuote', (index) => {
                this.quotes.splice(index, 1);
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
