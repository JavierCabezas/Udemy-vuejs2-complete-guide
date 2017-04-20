<template>
    <div class="quote_block col-md-3 panel panel-default col-md-offset-1">
        <p class="quote"> {{ quote }} </p>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: ['quote'],
        methods: {
            delete_quote(){
                eventBus.$emit( 'addQuote', this.new_quote );
                this.new_quote = '';
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