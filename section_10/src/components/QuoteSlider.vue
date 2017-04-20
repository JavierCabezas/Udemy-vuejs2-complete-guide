<template>
   <div class="row slider">
       {{ quotes_num }} / {{ max_quotes }}
   </div>
</template>

<script>
    export default {
        props: ['quotes_num', 'max_quotes']
    }
</script>

<style>

</style>