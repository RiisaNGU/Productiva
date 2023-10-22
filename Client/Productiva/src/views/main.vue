<template>
    <div class="bg-bg-dark w-screen h-screen overflow-hidden">
        <navbar />
        <div class="h-full">
            <taskList></taskList>
        </div>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import taskList from '../components/taskList.vue';


export default {
    components: {
        navbar,
        taskList
    }
}   
</script>