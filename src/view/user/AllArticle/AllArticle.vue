<template>

    <div class="container w-100 d-flex flex-column align-items-center mt-5 mb-5 position-relative">
        <div class="d-flex flex-column align-items-center justify-content-center w-100 AllArticle">
            <p>Blog</p>
        </div>

        <div class="optionBar d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between ">
            <div class="d-flex flex-row align-items-center justify-content-lg-start justify-content-between w-100">
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
        <ShowArticle v-for="item in this.Articles" :title="item.title" :desc="item.description"
            :Auther="item.author.username" :img="item.author.image" :date="new Date(item.createdAt).toISOString()"
            @click="GoTo(item.title, item.author.username, item.author.image, item.createdAt, item.body)" />
    </div>
</template>


<script>
import ShowArticle from './ShowArticle.vue';
import axios from 'axios'
export default {
    name: 'AllArticle',
    props: [],

    components: {
        ShowArticle
    },

    data() {
        return {
            Articles: [],
            count: 0
        }
    },
    mounted() {
        this.GetArticle()
    },
    methods: {

        GoTo(title, author, image, createdAt, body) {

            localStorage.setItem("CurrentArticle", JSON.stringify(
                {
                Title: title,
                Author: author,
                Image: image,
                CreateAt: createdAt,
                Body: body
            }
            ));

            window.location.href = "/Article"
        },

        GetArticle() {
            const url = 'https://api.realworld.io/api/articles';
            var config = {
                method: 'get',
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
            };
            axios(config)
                .then((response) => {
                    let data = response.data;
                    this.Articles = data.articles;

                })
                .catch(function (error) {
                    console.log(error);
                });
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


@media only screen and (max-width : 992px) {
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