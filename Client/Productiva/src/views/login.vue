<template>
    <div class="flex w-screen h-screen bg-bg-dark">
        <div class="bg-nearly-white w-fit h-fit rounded-md m-auto flex flex-col items-center px-3">
            <h1 class="font-mainFont font-bold text-4xl mt-5 mb-5">Login</h1>
            <form class="flex flex-col group-odd:items-center mx-7" @submit.prevent="login">
                <label class="font-semibold text-lg " for="user">Username</label>
                <input type="text" class="mb-5 rounded-md h-7" v-model="user" name="user" id="user">
                <label class="font-semibold text-lg" for="pass">Password</label>
                <input type="password" name="pass" v-model="pass" class="rounded-md h-7" id="pass">
                <a @click="" class="text-Some-light-grey text-xs hover:underline hover:cursor-pointer mb-2 text-right mt-1 active:text-brand-main">Forgot Password?</a>
                <input type="submit" value="Login"
                    class="font-mainFont bg-brand-main rounded-md py-1 font-bold w-40 text-anti-flash-white m-5 hover:cursor-pointer text-xl hover:bg-brand-hover">
            </form>
            <a @click="" class="text-Some-light-grey text-xs hover:underline hover:cursor-pointer mb-2 active:text-brand-main">No Account? Sign up</a>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            user: '',
            pass: '',
        }
    },
    methods: {
        login() {
            const request = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Username: this.user, Password: this.pass })
            };
            fetch('http://10.144.128.123:8080/login', request)
                .then(response => {
                    if (response.status === 200) {
                        response.json().then((data) => {
                            localStorage.setItem("user", this.user);
                        });
                        console.log('good');
                        this.$router.push('/')
                    } else {
                        this.invalid = true;
                        console.log("bad");
                    }
                })
        },
    }
}

</script>