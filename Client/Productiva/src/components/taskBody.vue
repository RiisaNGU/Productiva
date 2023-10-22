<template>
    <div class="border-1 bg-transparent border-anti-flash-white text-anti-flash-white rounded-md">
        <textarea @change="updateDescription" class="bg-transparent resize-none w-full h-full focus:outline-none">

        </textarea>
    </div>
</template>

<script>

export default {
    props: {
        task: ''
    },
    methods: {
        updateDescription() {

        },
    },
    mounted() {

    }
}
</script>