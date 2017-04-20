<template>
    <div class="quote_block col-md-3 panel panel-default col-md-offset-1">
        <p class="quote" @click="delete_quote(index)"> {{ quote }} </p>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: [ 'quote', 'index' ],
        methods: {
            delete_quote(index){
                eventBus.$emit( 'deleteQuote', index );
            }
        }
    }
</script>

<style scoped>
    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: red;
    }
</style>