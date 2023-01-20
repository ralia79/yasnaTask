
<template>

    <div class="column_center all">
        <div class="column">
            <div class="ROW">
                <p>Email</p>
                <input type="email" placeholder="Email">
            </div>

            <div class="ROW">
                <p>UserName</p>
                <input type="text" placeholder="UserName">
            </div>
            <div class="ROW">
                <p>Password</p>
                <input type="password" placeholder="Password">
            </div>
            <div class="mar50"> </div>
            <button class="btn">LOGIN</button>


            <p class="abs_text" @click="GoTo()">you have account ? Login</p>
        </div>
    </div>

</template>


<script>

export default {
    name :"SignUp" , 
    data(){
        return {

        }
    }, 
    methods: {
        GoTo() {
            window.location.href = "/Login"
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
    width: 25%;
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
    width: 50%;
    padding: 5px 10px;
    border-radius: 8px;

    border: 1px solid #0F8EFF;
}

.abs_text {
    font-size: 12px;
    bottom: 0;
    left: 5px;
    color: #0F8EFF;
    cursor: pointer;
}
</style>