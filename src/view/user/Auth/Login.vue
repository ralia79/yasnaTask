
<template>

    <div class="column_center all">
        <div class="column">
            <div class="d-flex flex-row align-items-center justify-content-between">
                <p class="p-0 m-0">Email</p>
                <input type="email" placeholder="Email" :value="Email_Controller">
            </div>

            <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <p  class="p-0 m-0">Password</p>
                <input type="password" placeholder="Password" :value="Password_Controller">
            </div>
            <div class="mt-5"> </div>
            <button class="btnCustom" @click="sendLoginReq()">LOGIN</button>


            <p class="abs_text mt-1" @click="GoTo()">you havent account ? signUp</p>
        </div>
    </div>

</template>


<script>

export default {
    name: "Login",
    data() {
        return {
            Email_Controller: '',
            Password_Controller: ''
        }
    },
    methods: {
        GoTo() {
            window.location.href = "/SignUp"
        },
        sendLoginReq() {
            const url = 'https://api.realworld.io/api/users/login';
            let data = JSON.stringify({
                "user": {
                    "email": this.Email_Controller,
                    "password": this.Password_Controller,
                }
            });

        }
    }
}

</script>


<style scoped>
.all {
    width: 100%;
    height: 100%;
}

.column {
    padding: 50px;
    border-radius: 15px;
    border: 1px solid #DBEEFF;
    justify-content: center;
    width: 30%;
    height: 70%;
    margin-top: 5%;
    margin-bottom: 5%;
    position: relative;
}



input::placeholder {
    font-family: 'Euclid', serif !important;
}

input {
    width: 60%;
    padding: 5px 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #0F8EFF;
}
input:focus-visible {
    border: 1px solid #0F8EFF !important;
}
.abs_text {
    font-size: 12px;
    bottom: 0;
    left: 5px;
    color: #0F8EFF;
    cursor: pointer;
}
</style>