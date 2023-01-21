<template>
    <header class="bg_custom">
        <div class="container d-flex flex-row align-items-center justify-content-between">
            <nav class="d-none d-sm-flex">
                <li @click="GoTo('/')">Home</li>
                <li>About Us</li>
            </nav>
            <img src="../../../assets/yasna.png" class="d-flex d-sm-none LOGO">
            <button class="btnCustom d-none d-sm-flex" @click="GoTo('/Login')">{{ btnText }}</button>
            <button class="btnCustom d-flex d-sm-none" @click="GoTo('/Login')">
                <span class="material-symbols-outlined p-0 m-0">
                    login
                </span>
            </button>
        </div>
    </header>

</template>


<script>

export default {
    data() {
        return {
            btnText: "Login/Sign up",

        }
    },
    methods: {
        GoTo(Rout) {
            window.location.href = Rout
        }
    }

}

</script>


<style scoped>
@media only screen and (max-width :576px) {
    .btnCustom {
        border-radius: 50% !important;
        padding: 10px;
        max-width: 50px !important;
        max-height: 50px !important;
    }
}
.LOGO {
    width: 100px;
}
header {
    justify-content: space-between;
}

.bg_custom {
    background-color: #F7FBFF;
    padding: 20px 20px;
}

li:hover {
    color: #0F8EFF;

}
</style>