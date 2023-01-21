<template>

    <div class="blueBG">
        <div class="container pb-5">

            <div class="topArticle d-flex flex-row-reverse align-items-center justify-content-start  w-100">
                <button class="d-flex flex-row align-items-center blueBG">
                    <span class="material-symbols-outlined me-2">
                        favorite
                    </span>
                    <p class="p-0 m-0">25 like</p>

                </button>

                <button class="d-flex flex-row align-items-center share me-2">
                    <span class="material-symbols-outlined me-2">
                        share
                    </span>
                    <p class="p-0 m-0">share</p>

                </button>
            </div>


            <div
                class="TitleArticle d-flex flex-row align-items-center justify-content-between  w-100 position-relative  abstractOnject">
                <p class="title">
                    If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!

                </p>


                <div class="d-flex flex-row align-items-center Auther_Article">
                    <img src="../../../assets/article_avatar.png" alt="">
                    <div class="d-flex flex-column align-items-start justify-content-center ms-2">
                        <p class="p-0 m-0 Auther_name"> Ali Roshan nia </p>
                        <p class="p-0 m-0 grey">June 27 ,2024</p>
                    </div>
                </div>
            </div>


            <div class="spacer"></div>

        </div>

    </div>

    <div class="container cover w-100 d-flex flex-column align-items-center justify-content-center">
        <img src="../../../assets/cover.png" alt="">
        <div class="spacer"></div>



        <pre><article>
           
            Today we will continue our series of integration tutorials with a quick guide on HubSpot SMS automations.
            All of the automations in this article can be created with the help of Zapier and TextMagic.
            If you’re looking for ways to automate your calendar, check out our previous guide for Google Calendar SMS
            notifications.
            HubSpot is a powerful CRM tool that businesses use for their sales, support, and # marketing activities.
            Today, we look at four simple TextMagic SMS integrations via Zapier that will help you get more
            value out of your HubSpot account: Send a confirmation text when someone fills out your HubSpot form;
            Receive SMS notifications whenever a new deal, ticket, or task is added to your HubSpot dashboard; Instantly
            forward new HubSpot contact data to your TextMagic account and update your lists in real-time; Add SMS
            unsubscribers from TextMagic to a separate list in HubSpot for retargeting.
            To get started, you first must connect your HubSpot and TextMagic accounts to your Zapier account.
            You can do this before creating any Zap, or simply follow the connection steps as you go. Instantly forward
            new HubSpot contact data to your
            TextMagic account and update your lists in real-time; Add SMS unsubscribers from TextMagic to a separate
            list in HubSpot for retargeting.
            To get started, you first must connect your HubSpot and TextMagic accounts to your Zapier account. You can
            do this before creating any Zap, or simply follow the connection steps as
            you go.. Send a confirmation text when someone fills out your HubSpot form; Receive SMS notifications
            whenever a new deal, ticket, or task is added to your HubSpot dashboard;
          
        </article> </pre>
    </div>

</template>
<script>

export default {
    name: 'Article',
    data() {
        return {

        }
    }
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
</style>