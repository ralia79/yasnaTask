<template>
    <div class=" mb-3 col-md-4 col-6">
        <div class="ArticleItem  d-flex flex-column align-items-start justify-content-start">
            <p class="ArticleItem_title">
               {{title}}
            </p>

            <p class="ArticleItem_desc d-none d-md-flex">
                {{desc}}
            </p>
            <div class="d-flex flex-row align-items-center Auther_Article">
                <img :src="img" alt="">
                <div class="d-flex flex-column align-items-start justify-content-center ms-2">
                    <p class="p-0 m-0 Auther_name"> {{ Auther }} </p>
                    <p class="p-0 m-0 grey">{{date}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShowArticle',
    props:[
        "title", 
        "desc" ,
        "Auther" , 
        "date", 
        "img"
    ] ,
    mounted(){
    } ,
    data() {
        return {

        };
    },
};
</script>
<style scoped>
.Auther_name {
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

.ArticleItem_title {
    font-weight: 600;
    font-size: 13px;
}

.ArticleItem_desc {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #C9CCCF;

    display: block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 3.6em;
    line-height: 1.8em;
}

.ArticleItem {
    background: #FFFFFF;
    border: 1px solid #EAF5FF;
    box-shadow: 0px 2px 44px 1px rgba(23, 43, 61, 0.11);
    border-radius: 5px;
    cursor: pointer;
    width: 90%;
    padding: 20px;
}
</style>