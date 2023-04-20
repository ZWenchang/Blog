<template>
    <div id="bodyall">
        <div class="body1">
            <a href="">
                <img src="src/assets/1111.jpg" style="width: 360px;height: 420px;" class="target" />
                <div class="111" style="padding: 14px">
                    <router-link to="ZWC">ZHANGWENCHAGN </router-link>
                    <router-view></router-view>
                    <!-- <span>Yummy hamburger</span> -->
                    <div class="bottom">
                        <time class="time">{{ currentDate }}</time>
                        <br>
                        <br>
                    </div>
                </div>
            </a>
        </div>
        <a href="">
        <div class="body1">
            <img src="src/assets/2.jpg" style="width: 360px;height: 280px;" class="target" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </a>
    <a href="">
        <div class="body1">
            <img src="src/assets/3.jpg" style="width: 360px;height: 380px;" class="target" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </a>
    <a href="">
        <div class="body1">
            <img src="src/assets/4.jpg" style="width: 360px;height: 480px;" class="target" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </a>
    <a href="">
        <div class="body1">
            <img src="src/assets/5.jpg" style="width: 360px;height: 400px;" class="target" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </a>
    <a href="">
        <div class="body1">
            <img src="src/assets/6.jpg" style="width: 360px;height: 300px;" class="target" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </a>
    <a href="">
        <div class="body1">
            <img src="src/assets/7.jpg" style="width: 360px;height: 468px;" class="target" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </a>
    <a href="">
        <div class="body1">
            <img src="src/assets/8.jpg" style="width: 360px;height: 451px;" class="target" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </a>
    <a href="">
        <div class="body1">
            <img src="src/assets/9.jpg" style="width: 360px;height: 480px;" class="target" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </a>    

    </div>
</template>
<script setup lang = 'ts'>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'


const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting
    },
)

const currentDate = ref(new Date())
</script>
<style scoped lang="less">
#bodyall {
    display: flex;
    flex: 1;
    overflow: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-end;
    padding-top: 50px;
    padding-left: 80px;
    padding-right: 80px;

    .body1 {
        transition: transform 0.4s ease-in-out;
        border-radius: 10rpx;
        border-radius: 20px;
        margin-top: 20px
    }

    .body1:hover {
        transform: scale(1.07);
        /* 背景 */
        box-shadow: 0 20px 80px rgba(48, 49, 51, 0.15);
    }
}

.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.target {
    width: 100%;
    display: block;
    border-radius: 20px 20px 0 0;
}

a {
    color: black;
    text-decoration: none;

}
</style>

<!-- https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png -->