<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server === null">Server Details are currently not updated</p>
        <div v-else>
            <p>Server #{{server.id}}: {{server.status}} </p>
            <button @click="changeStatus('normal')">Normal</button>
            <button @click="changeStatus('critical')">Crítico</button>
            <button @click="changeStatus('unkown')">Desconocido</button>
        </div>

    </div>

</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        data: function (){
            return {
                server: null
            }
        },
        created(){
            eventBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        },
        methods: {
            changeStatus(status) {
                let new_status = 'Desconocido';
                switch(status){
                    case 'normal': new_status = 'Normal'; break;
                    case 'critical': new_status = 'Crítico'; break;
                }
                this.server.status = new_status;
            }
        }
    }
</script>

<style>

</style>
