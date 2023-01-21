<template>

    <div class="container w-100 d-flex flex-column align-items-center mt-5 mb-5 position-relative">
        <div class="d-flex flex-column align-items-center justify-content-center w-100 AllArticle">
            <p>Blog</p>
        </div>

        <div class="optionBar d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between ">
            <div class="d-flex flex-row align-items-center justify-content-lg-start justify-content-between w-100" >
                <p class="optionItem active ">All</p>
                <p class="optionItem ">Technology</p>
                <p class="optionItem ">AI</p>
            </div>

            <div class="optionBarSearch">
                <input type="text" placeholder="Search">
            </div>
        </div>

    </div>
    <div class="spacer"></div>
    <div class="baseArticles container d-flex flex-row align-items-center justify-content-between flex-wrap">
        <ShowArticle v-for="item in 10" @click="GoTo()" />
    </div>
</template>


<script>
import ShowArticle from './ShowArticle.vue';
export default {
    name: 'AllArticle',
    props: [],

    components: {
        ShowArticle
    },
    data() {
        return {

        };
    },
    methods: {
        GoTo() {
            window.location.href = "/Article"
        }
    },
};
</script>


<style scoped>


.spacer {
    height: 30px;
}

.optionBarSearch input {
    padding: 10px 30px;
    border: 1px solid #EAF5FF;
    box-shadow: 0px 2px 20px rgba(23, 43, 61, 0.1);
    border-radius: 15px;
    outline: none;
}

.optionBarSearch input:focus-visible {
    border: 1px solid #0F8EFF !important;
}

.optionItem {
    padding: 10px 43px;
    margin: 0;
    cursor: pointer;
    font-family: 'Euclid';
}

.active {
    background: #0F8EFF;
    border-radius: 27px;
}

.AllArticle {
    background-color: #0F8EFF;
    padding: 60px 0;
    border-radius: 15px;
    position: relative;
    overflow: hidden !important;
}

.AllArticle::after {
    content: url("../../../assets/Vector2.png");
    position: absolute;
    right: 0;
}


.AllArticle::before {
    content: url("../../../assets/Vector.png");
    position: absolute;
    left: 0;
}



.AllArticle p {
    font-size: 40px;
    color: white;
    font-family: 'Euclid_bold';
}

.AllArticle p::after {
    content: url("../../../assets/BlogVector.png");
    position: absolute;
    margin-top: -10px;
}

.optionBar {
    background-color: white;
    width: 80%;
    /* height: 50px; */
    position: absolute;
    margin-bottom: -40px;
    bottom: 0;
    border: 1px solid #EAF5FF;
    box-shadow: 0px 2px 44px 1px rgba(23, 43, 61, 0.11);
    border-radius: 15px;
    padding: 20px 20px;
}


@media only screen and  ( max-width : 992px) {
    .optionBarSearch {
        width: 100%;
        margin-bottom: 20px;
    }
    .optionBarSearch input {
        width: 100%;
    }
    
}

@media only screen and (max-width : 768px) {
    .optionItem {
    padding: 8px 30px;
    margin: 0;
    cursor: pointer;
    font-family: 'Euclid';
}
    .AllArticle::after {
        content: url("../../../assets/Vector4.png");
        position: absolute;
        right: 0;
    }


    .AllArticle::before {
        content: url("../../../assets/Vector5.png");
        position: absolute;
        left: 0;
    }



    .optionBar {
        margin-bottom: -80px;
    }

    .spacer {
    height: 60px;
}
}
</style>