<template>
    <div class="border-r-1 border-anti-flash-white w-36 h-full">
        <table class="w-full">
            <tbody class="w-full" id="tableBody">
                <tr class="w-full" v-for="(task) in tasks"
                    v-on:click="$router.push({ path: `/profile/${item.member_name}/home` })">
                    <td class="w-full text-anti-flash-white hover:bg-Some-light-grey hover:cursor-pointer">
                        <p>{{ task.title }}</p>
                        <p>{{ task.dueDate }}</p>
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
    },
    methods: {
        getTasks() {
            const request = {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ Username: this.user, Password: this.pass })
            };
            fetch('http://10.144.128.123:8080/tasks', request)
                .then(response => {
                    if (response.status === 200) {
                        response.json().then((data) => {
                            console.log(data)
                            this.tasks = data;
                        });
                    } else {
                        this.invalid = true;
                        console.log("bad");
                    }
                })
        },

    },
    mounted() {
        this.getTasks();
    }
}

</script>