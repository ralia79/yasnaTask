<template>
    <header class="bg_custom">
        <div class="container d-flex flex-row align-items-center justify-content-between">
            <nav class="d-flex">
                <li @click="GoTo('/')">Home</li>
                <li>About Us</li>
            </nav>
            <button class="btnCustom" @click="GoTo('/Login')">{{ btnText }}</button>
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