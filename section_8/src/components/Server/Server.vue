<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ serverObj.id }}
    </li>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: ['serverObj'],
        methods: {
            serverSelected(){
                eventBus.$emit( 'serverSelected', this.serverObj );
            }
        }
    }
</script>