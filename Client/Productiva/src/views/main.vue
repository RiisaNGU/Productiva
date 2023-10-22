<template>
    <div class="bg-bg-dark w-screen h-screen overflow-hidden">
        <navbar />
        <div class="h-full flex flex-row">
            <taskList></taskList>
            <task></task>
        </div>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import task from '../components/task.vue';


export default {
    components: {
        navbar,
        taskList,
        task,
    }
}   
</script>