<template>
    <footer>
        <div class="container">
            <div class="d-flex flex-md-row flex-column align-item-start justify-content-between p-4 p-md-0">
                <div class="d-flex flex-md-row flex-column align-item-start justify-content-between">
                    <div class="column me-lg-4 mb-5 mb-md-0">
                        <li class="h4">YasnaTeam</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Contact us</li>
                    </div>
                    <div class="column ms-lg-4 mb-5 mb-md-0">
                        <li class="h4">Community</li>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Verasense.io Reviews</li>
                    </div>
                </div>
                <div class="column mb-5 mb-md-0">
                    <li class="h4">Contact Us</li>
                    <li>Telegram : +44 204 577 26 88</li>
                    <li>Email : Contact@Yasna.Team</li>
                </div>
            </div>
            <div class="d-flex flex-row-reverse flex-md-row align-item-center justify-content-between mt-5 pe-2 ps-2">
                <p>© 2022</p>
                <p>
                    Copyright © 2010-2022 Blog For YasnaTeam</p>

                <a href="https://yasna.team" class="d-none d-md-flex">
                    <img src="../../../assets/yasna.png" class="iconStyle">
                </a>
            </div>
        </div>
    </footer>
</template>


<script>



</script>

<style scoped>


* {
    color: white;
}

footer {
    width: 100%;
    background: linear-gradient(269.54deg, #158CFD 4.94%, #5D79E8 84.5%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 50px 0 20px 0;
    position: relative;
    overflow: hidden;
}

.iconStyle {
    width: 100px;
}
footer::before {
        content: url('../../../assets/vector7.png');
        position: absolute;
        bottom: 0;
        left: 0;
    }
footer::after {
        content: url('../../../assets/vector6.png');
        position: absolute;
        top: 0;
        right: 0;
    }
@media only screen and (max-width : 762px ){
    
    footer::after {
        content: none;
    }
    
}

</style>