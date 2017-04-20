<template>

    <div class="progress">
        <div class="progress-bar" role="progressbar" :aria-valuenow="quotes_num"
             aria-valuemin="0" :aria-valuemax="max_quotes" :style="'width:'+ percentage +'%'">
            {{quotes_num}} / {{max_quotes}} ({{percentage}}%)
        </div>
    </div>

</template>

<script>
    export default {
        props: ['quotes_num', 'max_quotes'],
        computed: {
            percentage: function () {
                return 100 * this.quotes_num / this.max_quotes;
            }
        }
    }
</script>

<style>

</style>