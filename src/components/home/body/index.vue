<template>
    <div id="bodyall">
        <div class="body1" >
            <!-- v-intersection-observer="onIntersectionObserver" -->
            <img src="src\assets\pexels-cottonbro-studio-6580014.jpg" style="width: 360px;height: 420px;" class="image" />
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

        </div>
        <div class="body1">
            <img src="src\assets\pexels-ricky-esquivel-16204656.jpg" style="width: 360px;height: 360px;" class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="body1">
            <img src="src\assets\pexels-instantanés-de-chrissie-15836012.jpg" style="width: 360px;height: 380px;"
                class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="body1">
            <img src="src\assets\pexels-monstera-6373305.jpg" style="width: 360px;height: 320px;" class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="body1">
            <img src="src\assets\pexels-sebastian-palomino-1955134.jpg" style="width: 360px;height: 400px;" class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="body1">
            <img src="src\assets\pexels-irina-iriser-1122626.jpg" style="width: 360px;height: 360px;" class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="body1">
            <img src="src\assets\pexels-tomáš-malík-3408353.jpg" style="width: 360px;height: 468px;" class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="body1">
            <img src="src\assets\pexels-tuğba-14588331.jpg" style="width: 360px;height: 451px;" class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="body1">
            <img src="src\assets\pexels-angela-roma-7319277.jpg" style="width: 360px;height: 350px;" class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <br>
                    <br>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang = 'ts'>
import { ref } from 'vue'
// import { vIntersectionObserver } from '@vueuse/components'
// const root = ref(null)

// const isVisible = ref(false)

// function onIntersectionObserver([{ isIntersecting }]) {
//   isVisible.value = isIntersecting
// }






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
        border-radius: 10rpx;
        box-shadow: 5px 5px 5px #cdcfcf;
        border-radius: 20px;
        margin-top: 20px
    }

    .body1:hover {
        transform: translateY(-3px);
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

.image {
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