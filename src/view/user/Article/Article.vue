<template>

    <div class="blueBG">
        <div class="container pb-5">

            <div class="topArticle d-flex flex-row-reverse align-items-center justify-content-start  w-100">
                <button class="d-flex flex-row align-items-center blueBG">
                    <span class="material-symbols-outlined me-md-2 me-0">
                        favorite
                    </span>
                    <p class="p-0 m-0  d-none d-md-block">25 like</p>

                </button>

                <button class="d-flex flex-row align-items-center share me-2">
                    <span class="material-symbols-outlined  me-md-2 me-0">
                        share
                    </span>
                    <p class="p-0 m-0  d-none d-md-block">share</p>

                </button>
            </div>


            <div
                class="TitleArticle d-flex d-flex flex-column flex-md-row align-items-center justify-content-between  w-100 position-relative  abstractOnject">
                <p class="title">
                    {{ this.title }}
                </p>
                <div class="spacer d-flex d-md-none"></div>

                <div class="d-flex flex-row align-items-center Auther_Article">
                    <img :src="this.image" alt="">
                    <div class="d-flex flex-column align-items-start justify-content-center ms-2">
                        <p class="p-0 m-0 Auther_name"> {{ this.author }} </p>
                        <p class="p-0 m-0 grey">{{ this.createAt }}</p>
                    </div>
                </div>
                <div class="spacer d-flex d-md-none"></div>
            </div>


            <div class="spacer"></div>

        </div>

    </div>

    <div class="container cover w-100 d-flex flex-column align-items-center justify-content-center">
        <img src="../../../assets/cover.png" alt="">
        <div class="spacer"></div>



        <article class="mb-5">
            {{ this.body }}
        </article>
    </div>

</template>
<script>

export default {
    name: 'Article',
    data() {
        return {
            title: JSON.parse(localStorage.getItem("CurrentArticle")).Title,
            author: JSON.parse(localStorage.getItem("CurrentArticle")).Author,
            image: JSON.parse(localStorage.getItem("CurrentArticle")).Image,
            createAt: JSON.parse(localStorage.getItem("CurrentArticle")).CreateAt,
            body: JSON.parse(localStorage.getItem("CurrentArticle")).Body
        }
    },

}
</script>
<style scoped>
.spacer {
    height: 50px;
}

.cover img {
    width: 60%;
    position: relative;
    margin-top: -100px;
}

.cover article {
    width: 90%;
    color: #7D9DB9;
    font-family: 'Euclid';
    font-size: 18px;
}

.abstractOnject::after {
    content: url('../../../assets/Vector3.png');
    position: absolute;
    left: 50px;
    top: -50px;
}

.abstractOnject::before {
    content: url('../../../assets/Vector3.png');
    position: absolute;
    right: 50px;
    bottom: 10px;
}

.Auther_name {
    color: white;
    font-size: 14px;
}

.grey {
    color: #C9CCCF;
    font-size: 12px;
}

.Auther_Article img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
}

.TitleArticle .title {
    color: white;
    font-size: 30px;
    max-width: 50%;
    font-family: 'Euclid_bold';
}

.blueBG {
    background: #0F8EFF;
}

.topArticle {
    height: 200px;
}

.topArticle button {
    outline: none;
    border: 1px solid #DBEEFF;
    border-radius: 30px;
    padding: 10px 21px;
    color: #DBEEFF;
}

.share {
    background: #DBEEFF;
    border-radius: 30px;
    color: #0F8EFF !important;
}


@media only screen and (max-width : 762px) {
    .cover img {
        width: 90%;
    }

    .TitleArticle .title {
        font-size: 20px;
        max-width: 90%;
    }

    .topArticle button {
        border-radius: 50%;
        padding: 10px;
    }

    .topArticle {
        padding: 0 20px;
    }
}
</style>