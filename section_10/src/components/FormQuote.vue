<template>
    <div class="row">
        <textarea v-model="new_quote" class="form-control"> </textarea> <br>
        <button @click="add_quote()" class="btn btn-primary center-block"> Add quote </button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: [ 'quote' ],
        data: function (){
            return {
                new_quote: '',
            }
        },
        methods: {
            add_quote(){
                eventBus.$emit( 'addQuote', this.new_quote );
                this.new_quote = '';
            }
        }
    }
</script>

<style>

</style>