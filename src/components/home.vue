<template>
    <div>
        <div class="banner">
            <img v-lazy="img1" alt="The creta class is the math class for kids 3-8. The 5 levels matching for different age groups with the abundant learning resourc, including 500+ knowledge points, 2300+ exercises, 1200+ animates video. The creta class is the highlight with systemic curriculum, top-notch teaching research team, 1-on-1 tutoring. " class="banner-img">
            <div class="flex">
                <img v-lazy="img2" alt="shading" class="shading">
                <div class="purcahse">
                    <div data-v-4d861efe>
                        <div class="time">2 Weeks</div>
                        <div class="money">₹249</div>
                    </div>
                    <div class="btn">
                        <span data-v-4d861efe>Try it now</span>
                        <img v-lazy="img3" class="arrow">
                    </div>
                </div>
                <div class="download">
                    <div class="text">Download the app</div>
                    <img v-lazy="img4" class="app-store">
                    <img v-lazy="img5" class="google-play">
                </div>
            </div>
        </div>
        <div>
            <div class="section1">
                <div class="flex">
                    <div class="text">
                        <div class="title">A Math Learning App Kids Crave</div>
                        <div class="desc">Systemtic curriculum for 3-8</div>
                        <div class="desc">Attractive AI content stimulates interest in learning</div>
                        <div class="desc">Immersive class with interactive experience</div>
                    </div>
                    <img v-lazy="img6" class="image">
                </div>
                <div class="flex">
                    <img v-lazy="img7" class="image">
                    <div class="text"></div>
                </div>
                <div class="flex">
                    <div class="text"></div>
                    <img v-lazy="img8" class="image">
                </div>
            </div>
            <div class="section2">
                <div class="main-content">
                    <div class="title">Cultivate thinking skills from all aspects</div>
                    <div class="sub-title">Covering cognitive, behavior and society respectively</div>
                    <img v-lazy="img9" alt="Creta Class cultivates thinking skills from all aspects, consisting of three levels: cognition, action, and sociality. The skills includes logical reasoning, problem solving, confidence, critical thinking, arithmetic, spatial awareness and data analysis." class="main-img">
                    <div class="btn">
                        <div data-v-69ff67a0>Try it now</div>
                        <img v-lazy="img10" class="arrow">
                    </div>
                </div>
                <img v-lazy="img11" class="top">
                <img v-lazy="img12" class="left">
                <img v-lazy="img13" class="right">
            </div>
            <div class="section3">
                <div class="title">Learn with Ease Anytime, Anywhere</div>
                <img v-lazy="img14">
            </div>
            <div class="section4">
                <div class="title">Hear what our learners say</div>
                <div class="comment-list">
                    <div class="comment">
                        <div class="comment-title">Open the gate to learning math for my kids.</div>
                        <div class="desc">Like well-made animations, Creta Class is well designed to cater to kids' feature. My son is 3 years old, and he is immersed in its interesting and simple exercises. His 5-year-old sister is happy to discover the fun of math together with him. It is Creta Class that opens the gate to learning math for my kids.</div>
                    </div>
                    <div class="comment">
                        <div class="comment-title">Make my 4-year-old daughter feel confident!</div>
                        <div class="desc">The teaching and research team of Creta Class are apparently the expert in math, and they help kids think mathematically associating with common examples in daily life. After learning my daughter has been enabled to do better at analyzing and solving problems. Now she is more active and talkative at kindergarten. I must give the credit to Creta Class!</div>
                    </div>
                    <div class="comment">
                        <div class="comment-title">He holds big advantages of math literacy over peers.</div>
                        <div class="desc">At the stage of Terrible 3, my younger son always says no to all kinds of communication except Creta Class. Thanks to the App, he holds big advantages of math literacy over his peers. The well-designed Creta Class allows for personal learning tempo and ensures positive motivation. He understands that acquiring knowledge is something to be proud of. So I am confident in accompanying him in making his due progress at the pre-school age.</div>
                    </div>
                </div>
            </div>
            <div class="section5">
                <div class="title">How to start your child’s first lesson</div>
                <img v-lazy="img15" class="main-img">
                <div class="btn">
                    <div >Try it now</div>
                    <img v-lazy="img16" class="arrow">
                </div>
            </div>
            
        </div>
        <faq></faq>
    </div>
</template>


<script setup>
import faq from './faq.vue'
import img1 from '../assets/zebra-16405774952215305.png'
import img2 from '../assets/zebra-16399919790761060.png'
import img3 from '../assets/zebra-16399901081837876.png'
import img4 from '../assets/zebra-16406756544011741.png'
import img5 from '../assets/zebra-16406756814996865.png'
import img6 from '../assets/zebra-16405737365583148.png'
import img7 from '../assets/zebra-16405738669897070.png'
import img8 from '../assets/zebra-16405741584975373.png'
import img9 from '../assets/zebra-1639987141953422.png'
import img10 from '../assets/zebra-16401415675038986.png'
import img11 from '../assets/zebra-16399839083342613.png'
import img12 from '../assets/zebra-16399839211629248.png'
import img13 from '../assets/zebra-16399839355223290.png'
import img14 from '../assets/zebra-16406759845901789.png'
import img15 from '../assets/a8x8spp7y.png'
import img16 from '../assets/zebra-16401416568915634.png'
</script>

<style scoped>
.banner {
    position: relative;
    width: 100%;
    padding-bottom: 2.8125vw;
}

.banner-img {
    width: 100%;
}

.banner .flex {
    padding: 0 1.04167vw;
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    box-sizing: border-box;
    width: 57.29167vw;
    height: 5.20833vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    background: linear-gradient(180deg,#fff1d5,#fff);
    box-shadow: 0 -0.41667vw 0.625vw rgb(0 0 0 / 4%), inset 0 0.05208vw 0 hsl(0deg 0% 100% / 80%);
    border-radius: .41667vw;
}

.banner .flex .shading {
    position: absolute;
    width: 26.04167vw;
    height: 5.20833vw;
    top: 0;
    left: 0;
}

.purcahse {
    margin-top: .72917vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    z-index: 100;
}

.time {
    font-family: PingFang SC;
    font-size: .9375vw;
    font-weight: 510;
    line-height: 1.35417vw;
    color: #000;
}

.money {
    font-family: PingFang SC;
    font-size: 1.5625vw;
    font-weight: 590;
    line-height: 1.66667vw;
    color: #ff5c00;
}

.banner .flex .purcahse .btn {
    margin-left: 1.5625vw;
    cursor: pointer;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    width: 9.16667vw;
    height: 2.70833vw;
    background: linear-gradient(0deg,#ff5c00,#ff5c00);
    box-shadow: 0 0.05208vw 0.20833vw hsl(0deg 0% 100% / 60%), 0 0.20833vw 0.625vw rgb(255 92 0 / 40%);
    border-radius: 5.20833vw;
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 700;
    line-height: 1.5625vw;
    color: #fff;
}

.banner .flex .purcahse .btn .arrow {
    width: .83333vw;
    height: .83333vw;
}

.banner .flex .download {
    margin-top: .9375vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}

.banner .flex .download .text {
    font-family: PingFang SC;
    font-size: .72917vw;
    font-weight: 400;
    line-height: .83333vw;
    color: #000;
    margin-right: 1.04167vw;
}

.banner .flex .download .app-store, .banner .flex .download .google-play {
    height: 2.29167vw;
    cursor: pointer;
    -webkit-filter: drop-shadow(0 .10417vw .20833vw rgba(0,0,0,.12));
    filter: drop-shadow(0 .10417vw .20833vw rgba(0,0,0,.12));
}

.banner .flex .download .app-store {
    width: 6.97917vw;
    margin-right: .83333vw;
}

.banner .flex .download .google-play {
    width: 7.8125vw;
}

.section1 .flex {
    height: 25vw;
    padding: 0 21.35417vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    background: #fff;
}

.section2 .flex {
    height: 25vw;
    padding: 0 21.35417vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    background: #fff;
}

.section3 .flex {
    height: 25vw;
    padding: 0 21.35417vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    background: #fff;
}

.section4 .flex {
    height: 25vw;
    padding: 0 21.35417vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    background: #fff;
}

.section5 .flex {
    height: 25vw;
    padding: 0 21.35417vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    background: #fff;
}



.section1 .text {
    width: 32.29167vw;
    font-family: PingFang SC;
    color: #000;
}

.section2 .text {
    width: 32.29167vw;
    font-family: PingFang SC;
    color: #000;
}

.section3 .text {
    width: 32.29167vw;
    font-family: PingFang SC;
    color: #000;
}

.section4 .text {
    width: 32.29167vw;
    font-family: PingFang SC;
    color: #000;
}

.section5 .text {
    width: 32.29167vw;
    font-family: PingFang SC;
    color: #000;
}

.image {
    width: 21.875vw;
    height: 13.54167vw;
}

.flex .text .title {
    font-size: 2.08333vw;
    font-weight: 600;
    line-height: 2.5vw;
    margin-bottom: 2.08333vw;
}

.flex .text .desc {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    font-size: 1.04167vw;
    font-weight: 400;
    line-height: 1.25vw;
    margin-bottom: 1.5625vw;
}

.desc:before {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    content: "";
    width: 1.25vw;
    height: 1.25vw;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    margin: 0 .52083vw 0 -.3125vw;
    background: #ffc700;
    border-radius: .20833vw;
}

.section2 {
    position: relative;
    width: 100%;
    height: 53.125vw;
    box-sizing: border-box;
    padding: 5.72917vw 21.35417vw;
    background: #a86bf6;
    overflow: hidden;
    text-align: center;
    color: #fff;
}

.section2 .main-content {
    position: relative;
    z-index: 100;
}

.section2 .main-content .title {
    font-family: PingFang SC;
    font-size: 2.08333vw;
    font-weight: 700;
    line-height: 2.5vw;
    margin-bottom: .625vw;
}

.section2 .main-content .sub-title {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 510;
    line-height: 1.25vw;
    margin-bottom: 2.60417vw;
}

.main-img {
    width: 57.29167vw;
    height: 27.39583vw;
}

.section2 .main-content .btn {
    margin: 3.33333vw auto 0 auto;
    width: 16.66667vw;
    height: 3.95833vw;
    background: #fff;
    box-shadow: 0 0.20833vw 0.83333vw 0 rgb(0 0 0 / 16%);
    border-radius: 5.20833vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    cursor: pointer;
    font-family: PingFang SC;
    font-size: 1.45833vw;
    font-weight: 700;
    line-height: 1.66667vw;
    color: #7c2be2;
}

.arrow {
    width: 1.25vw;
    height: 1.25vw;
}

.top {
    position: absolute;
    top: 0;
    left: 21.35417vw;
    width: 20.83333vw;
    height: 10.10417vw;
}

.left {
    position: absolute;
    top: 24.21875vw;
    left: 0;
    width: 18.54167vw;
    height: 28.90625vw;
}

.right {
    position: absolute;
    top: 29.375vw;
    right: 0;
    width: 32.1875vw;
    height: 23.75vw;
}

.section3 {
    padding: 5.72917vw 21.35417vw;
    background: #f8f8f8;
    text-align: center;
}

.section3 .title {
    font-family: PingFang SC;
    font-size: 2.08333vw;
    font-weight: 700;
    line-height: 2.5vw;
    color: #000;
}

.section3 img {
    margin-top: 3.75vw;
    width: 58.95833vw;
}

.section4 {
    padding: 5.72917vw 21.35417vw;
    background: #fff;
}

.section4 .title {
    font-family: PingFang SC;
    font-size: 2.08333vw;
    font-weight: 700;
    line-height: 2.5vw;
    color: #000;
    text-align: center;
}

.section4 .comment-list {
    margin-top: 4.16667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}

.section4 .comment-list .comment {
    width: 19.375vw;
    height: 27.1875vw;
    background: url(https://conan-online.cretacontent.com/conan-oss-resource/zebra-16405771644014393.png) no-repeat;
    background-size: 19.375vw 27.1875vw;
    box-sizing: border-box;
    padding: 7.70833vw 2.39583vw 0 2.39583vw;
}

.section4 .comment-list .comment .comment-title {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 700;
    line-height: 1.25vw;
    color: #000;
    text-align: left;
}

.section4 .comment-list .comment .desc {
    margin-top: .625vw;
    font-family: PingFang SC;
    font-size: .72917vw;
    font-weight: 400;
    line-height: 1.04167vw;
    color: rgba(0,0,0,.6);
    text-align: left;
}

.section5 {
    padding: 5.72917vw 20.83333vw;
    background: #ff800b;
}

.section5 .title {
    font-family: PingFang SC;
    font-size: 2.08333vw;
    font-weight: 700;
    line-height: 2.5vw;
    color: #fff;
    text-align: center;
}

.section5 .main-img {
    margin-top: 4.16667vw;
    width: 58.33333vw;
    height: 27.44792vw;
}

.section5 .btn {
    margin: 4.16667vw auto 0 auto;
    width: 16.66667vw;
    height: 3.95833vw;
    background: #fff;
    box-shadow: 0 0.20833vw 0.83333vw rgb(0 0 0 / 16%);
    border-radius: 5.20833vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    cursor: pointer;
    font-family: PingFang SC;
    font-size: 1.45833vw;
    font-weight: 700;
    line-height: 1.66667vw;
    color: #ff5c00;
}

.arrow {
    width: 1.25vw;
    height: 1.25vw;
}

.faq {
    box-sizing: border-box;
    background: #f8f8f8;
    padding: 5.72917vw 27.60417vw;
}

.faq .title {
    font-family: PingFang SC;
    font-size: 2.08333vw;
    font-weight: 700;
    line-height: 2.5vw;
    text-align: center;
    color: #000;
    margin-bottom: 4.16667vw;
}

.question-item:not(:last-child) {
    margin-bottom: 1.25vw;
}

.question-item {
    position: relative;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.20833vw 0.83333vw rgb(0 0 0 / 4%);
    border-radius: .625vw;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1.25vw;
}

.question-title {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 700;
    line-height: 1.25vw;
    color: #000;
    cursor: pointer;
}

.arrow.clockwise {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    z-index: 1000;
}

.question-item .arrow.clockwise, .question-item .arrow {
    transition: -webkit-transform .3s linear;
    transition: transform .3s linear;
    transition: transform .3s linear,-webkit-transform .3s linear;
}

.question-item .arrow {
    position: absolute;
    right: 1.25vw;
    top: 1.25vw;
    width: 1.25vw;
    height: 1.25vw;

}

.section5 .btn {
    margin: 4.16667vw auto 0 auto;
    width: 8.125vw;
    height: 2.5vw;
    box-sizing: border-box;
    border: .05208vw solid #999;
    border-radius: 5.20833vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    cursor: pointer;
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 400;
    line-height: 1.25vw;
    color: #666;
}

.arrow {
    position: relative;
    width: .83333vw;
    height: .83333vw;
}

.faq .btn .arrow:after, .faq .btn .arrow:before {
    content: "";
    position: absolute;
    top: .36458vw;
    right: 0;
    width: .46875vw;
    height: .10417vw;
    border-radius: .3125vw;
    background: #666;
}

.faq .btn .arrow:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: right;
    transform-origin: right;
}

.faq .btn .arrow:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: right;
    transform-origin: right;
}

.section1 .flex:nth-child(2n) {
    background: #f8f8f8;
}
</style>