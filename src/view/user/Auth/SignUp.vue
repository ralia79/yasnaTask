
<template>

    <div class="column_center all">
        <div class="d-flex flex-column border_col">
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-between">
                <p class="p-0 m-0">Email</p>
                <input type="email" placeholder="Email" v-model="Email">
            </div>
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-between mt-3">
                <p class="p-0 m-0">UserName</p>
                <input type="text" placeholder="UserName" v-model="username">
            </div>
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-between mt-3">
                <p class="p-0 m-0">Password</p>
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <div class="mar50"> </div>
            <button class="btnCustom" @click="SignUp()">SignUp</button>
            <p class="abs_text" @click="GoTo()">you have account ? Login</p>
        </div>
    </div>

</template>


<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data() {
        return {
            Email: '',
            username: '',
            password: ''
        }
    },
    methods: {
        GoTo() {
            window.location.href = "/Login"
        },
        SignUp() {
            const url = 'https://api.realworld.io/api/users';
            let data = JSON.stringify({
                "user": {
                    "email": this.Email,
                    "username": this.username,
                    "password": this.password
                }
            });
            var config = {
                method: 'post',
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    let data = response.data;
                    localStorage.setItem('token', data.user.token)
                    localStorage.setItem('IsLogined', true)
                    localStorage.setItem('username', data.user.username)
                    localStorage.setItem('email', data.user.email)
                    window.location.href = '/'
                })
                .catch(function (error) {
                    console.log(error);
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

.border_col {
    padding: 50px;
    border-radius: 15px;
    border: 1px solid #DBEEFF;
    justify-content: center;
    width: 50%;
    height: 70%;
    margin-top: 5%;
    margin-bottom: 5%;
    position: relative;
}

p {
    font-family: 'Euclid', serif !important;
}

input::placeholder {
    font-family: 'Euclid', serif !important;
}

input {
    width: 70%;
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

@media only screen and (max-width : 762px) {
    .border_col {
        width: 80%;
    }

    input {
        width: 100%;
    }
}
</style>