<template>
    <div class="border-r-1 border-anti-flash-white w-36 h-full">
        <table class="w-full">
            <tbody class="w-full" id="tableBody">
                <tr class="w-full" v-for="(task) in tasks" v-on:click="$router.push({ path: `/profile/${item.member_name}/home` })">
                    <td class="w-full text-anti-flash-white hover:bg-Some-light-grey hover:cursor-pointer">
                        <p>{{ task }}</p>
                        <p>date</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            tasks: ["task1", "task2", "task3"]
        }
    }
}

</script>