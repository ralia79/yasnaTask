<template>
    <header class="ROW bg_custom">
        <nav class="ROW">
            <li @click="GoTo('/')">Home</li>
            <li>About Us</li>
        </nav>


        <!-- Sign in Or Sign Up section -->

        <button class="btn" @click="GoTo('/Login')">{{ btnText }}</button>



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