<template>
    <footer class="footer">
            <div class="down-load">
                <div class="title">Creata Class</div>
                <div class="download">
                    <img v-lazy="img1" class="apple-download">
                    <img v-lazy="img2" alt="" class="google-download">
                </div>
            </div>
            <div class="contact-us">
                <div class="title">Contact Us</div>
                <div class="icon-list">
                    <a href="">
                        <img v-lazy="img3" class="icon">
                    </a>
                    <a href="">
                        <img v-lazy="img4" class="icon">
                    </a>
                    <a href="">
                        <img v-lazy="img5" class="icon">
                    </a>
                </div>
            </div>
            <div class="copyright">
                <div class="line"></div>
                <div class="text">
                    <p >6 RAFFLES QUAY #14-06 SINGAPORE(048580)</p>
                    <p >
                        <a href="">Privacy Policy</a>
                        <a href="">Children's Privacy Policy</a>
                        ｜ email：service@cretaclass.com 
                    </p>
                </div>
            </div>
        </footer>
</template>

<script setup>
import img1 from '../assets/zebra-16406756544011741.png'
import img2 from '../assets/zebra-16406756814996865.png'
import img3 from '../assets/zebra-164015357476683.png'
import img4 from '../assets/zebra-16405776100114532.png'
import img5 from '../assets/zebra-16401536197469694.png'


</script>

<style scoped>
.footer {
    position: relative;
    height: 22.8125vw;
    background: #228356;
}

.down-load {
    position: absolute;
    left: 21.35417vw;
    top: 4.16667vw;
}

.title {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 510;
    line-height: 1.25vw;
    color: #fff;
}

.download {
    margin-top: 1.04167vw;
}

.apple-download, .google-download {
    height: 2.08333vw;
    cursor: pointer;
    -webkit-filter: drop-shadow(0 .10417vw .20833vw rgba(0,0,0,.12));
    filter: drop-shadow(0 .10417vw .20833vw rgba(0,0,0,.12));
}

.apple-download {
    margin-right: .625vw;
}

.contact-us {
    position: absolute;
    left: 70.72917vw;
    top: 4.16667vw;
}

.title {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 510;
    line-height: 1.25vw;
    color: #fff;
}

.icon-list {
    margin-top: 1.04167vw;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}

.icon {
    width: 2.08333vw;
    height: 2.08333vw;
    margin-right: .83333vw;
    cursor: pointer;
}

.copyright {
    position: absolute;
    left: 50%;
    top: 12.70833vw;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.line {
    width: 57.29167vw;
    height: .05208vw;
    background: hsla(0,0%,100%,.1);
}

.text {
    margin-top: 4.16667vw;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: .625vw;
    line-height: .83333vw;
    text-align: center;
    color: hsla(0,0%,100%,.4);
}

a {
    color: hsla(0,0%,100%,.4);
    text-decoration: none;
}
</style>