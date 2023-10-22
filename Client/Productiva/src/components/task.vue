<template>
    <div class="w-full flex flex-col">
        <div>
            <!-- task head -->
            <div class="flex flex-row items-center justify-between">
                <div class="text-anti-flash-white p-10">
                    <h1 class="text-4xl">{{ taskName }}</h1>
                    <p class="text-Some-light-grey">Due Date: {{ dueDate }}</p>
                </div>
                <div
                    class="text-anti-flash-white bg-brand-main rounded-md w-7 h-7 text-2xl flex items-center justify-center align-middle mr-14">
                    <h1>+</h1>
                </div>
            </div>

            <!-- subtask container -->
            <div class="flex px-10 max-w-2xl">
                <table id="userTable" class="w-full">
                    <tbody id="tableBody" class="w-full">
                        <tr v-for="(task) in subtasks"
                            v-on:click="$router.push({ path: `/profile/${item.member_name}/home` })">
                            <td class="bg-nearly-white rounded-md w-full p-2 flex flex-row justify-between my-1">
                                <div class="flex">
                                    <input type="checkbox" name="completed" class="mx-3">
                                    <p class="text-lg ml-2">{{ task }}</p>
                                </div>
                                <svg src="../assets/icons/destroy.svg" class="fill-black"></svg>
                                <!-- <button class="rotate-90 text-sm">•••</button> -->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            'taskName': 'Task Name',
            'dueDate': '00/00/0000',
            'subtasks': ['task1', 'task2', 'task3'],
        }
    }
}
</script>