<template>
    <div class="row form-group">
        <textarea v-model="new_quote" class="form-control"> </textarea> <br>
        <button @click.prevent="add_quote()" class="btn btn-primary center-block"> Add quote </button>
        <br><br>
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
            add_quote() {
                eventBus.$emit( 'addQuote', this.new_quote );
                this.new_quote = '';
            }
        }
    }
</script>

<style>

</style>