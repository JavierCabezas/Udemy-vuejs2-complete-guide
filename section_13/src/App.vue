<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p> {{ reverseMe | capitalize }} </p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p> {{ countMe | add-character-count }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p> {{reversed}}</p>

                <p> {{counted}}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->


            </div>
        </div>
    </div>
</template>

<script>
    import  {lenghtMixin} from './lenghtMixin';

    export default {
        mixins: ['lenghtMixin'],
        data: function (){
            return {
                reverseMe: 'reverse',
                countMe: 'Counter'
            }
        },
        filters: {
            capitalize: function (value) {
               return value.split("").reverse().join("");
            }
        },
        computed: {
            reversed() {
                return this.reverseMe.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
