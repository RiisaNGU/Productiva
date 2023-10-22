<template>
    <div class="fixed left-0 top-0 w-screen h-screen backdrop-blur-sm bg-black bg-opacity-30 flex">
        <div class="bg-nearly-white rounded-md w-[573px] h-[410px] m-auto p-10">
            <h1 class="font-bold text-4xl">Create Task</h1>
            <form class="pt-14 flex flex-col">
                <label for=""></label>
                <input type="text" v-model="taskName">
                <label for=""></label>
                <input type="datetime-local" v-model="taskDate">
            </form>
            <!-- buttons -->
            <div class="flex justify-center">
                <button @click="close" class="w-[156px] h-[40px] border-2 rounded-md border-red-600 text-red-600 text-xl font-mainFont font-semibold m-5">Cancel</button>
                <button @click="" class="w-[156px] h-[40px] border-2 rounded-md border-brand-main bg-brand-main text-anti-flash-white text-xl font-mainFont font-semibold m-5">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            taskName: '',
            taskDate: '',
        }
    },
    props: {
        modalOpen: Boolean,
    },
    methods: {
        close() {
            this.modalOpen = false;
        }
    }
}
</script>