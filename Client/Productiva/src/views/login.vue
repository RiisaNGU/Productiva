<template>
    <div class="flex w-screen h-screen bg-bg-dark">
        <div class="bg-nearly-white w-fit h-fit rounded-md m-auto flex flex-col items-center">
            <h1 class="font-mainFont font-bold text-4xl mt-5 mb-5">Login</h1>
            <form class="flex flex-col group-odd:items-center mx-7">
                <label for="user">Username</label>
                <input type="text" class="mb-5" name="user" id="user">
                <label for="pass">Password</label>
                <input type="text" name="pass" id="pass">
                <input type="button" value="Login" class="font-mainFont bg-brand-main rounded-md p-3 font-bold w-48 text-anti-flash-white m-5 hover:cursor-pointer">
            </form>
        </div>
    </div>
</template>