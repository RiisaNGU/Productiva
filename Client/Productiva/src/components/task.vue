<template>
    <div>
        <!-- task head -->
        <div class="text-anti-flash-white p-10">
            <h1 class="text-4xl">{{ taskName }}</h1>
            <p class="text-Some-light-grey">Due Date: {{ dueDate }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            'taskName': 'Task Name',
            'dueDate': '00/00/0000',

        }
    }
}
</script>