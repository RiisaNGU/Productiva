<template>
    <!-- nav options -->
    <div id="nav"
        class="flex flex-row justify-between text-anti-flash-white border-b-1 h-12 border-anti-flash-white items-center pl-8 pr-4">
        <div class="flex flex-row items-center">
            <h1 class="text-brand-main mr-3">Logo</h1>
            <button class="px-5">Tasks</button>
            <button class="px-5">Calendar</button>
            <button @click="openCreate" class="px-3 bg-brand-main rounded-md m-3 w-25 h-7">Create Task</button>
        </div>
        <div class="flex">
            <button class="bg-brand-main rounded-full h-8 w-8"></button>
        </div>
    </div>
    <createTaskModal v-show="modal" modalOpen="modal"/>
</template>

<script>
import createTaskModal from './createTaskModal.vue';

export default {

    data() {
        return {
            modal: false
        }
    },
    methods: {
        openCreate() {
            this.modal = true;
        }
    },
    components: {
        createTaskModal,
    }

}

</script>
