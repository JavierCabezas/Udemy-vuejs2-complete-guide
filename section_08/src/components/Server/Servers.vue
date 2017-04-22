<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server v-for="s in servers" :serverObj="s"> </server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        components: {
            'server': Server,
        },
        data: function(){
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Crítico' },
                    { id: 3, status: 'Desconocido' },
                    { id: 4, status: 'Crítico' },
                    { id: 5, status: 'Normal' },
                ]
            }
        }
    }
</script>

<style>

</style>
