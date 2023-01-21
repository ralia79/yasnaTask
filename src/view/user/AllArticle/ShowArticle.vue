<template>
    <div class=" mb-3 col-4">
        <div class="ArticleItem  d-flex flex-column align-items-start justify-content-start">
            <p class="ArticleItem_title">
                If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!
            </p>

            <p class="ArticleItem_desc">
                Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis
                possimus. Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus
                nihil quidem soluta vel est omnis.
            </p>
            <div class="d-flex flex-row align-items-center Auther_Article">
                <img src="../../../assets/article_avatar.png" alt="">
                <div class="d-flex flex-column align-items-start justify-content-center ms-2">
                    <p class="p-0 m-0 Auther_name"> Ali Roshan nia </p>
                    <p class="p-0 m-0 grey">June 27 ,2024</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShowArticle',
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