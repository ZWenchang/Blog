<template>
    <div id="header">
        <ul>
            <div class="menu">
                <li class="logo">
                    <img src="src/assets/zzz.png">
                </li>
                <div class="right">
                    <li><router-link to="/" class="link">blog</router-link></li>
                    <li><router-link to="/blog" class="link">about</router-link></li>
                </div>             
            </div>
        </ul>
    </div>
</template>
<script setup lang = 'ts'>
import { ref, reactive } from 'vue'

</script>
<style scoped lang="less">
a {
    text-decoration: none;
}

ul {
    height: 50px;
}

#header {
    background-color: rgb(225, 89, 15);
    width: 100%;
    height: 50px;
}

#header .right {
    display: flex;
    // margin-left: 1200px;
    float: right;

}

#header .menu {
    display: flex;
    /* display: flex：弹性盒子，很适合多个元素按一行或者一列排开 */
    height: 100%;
    /* 设置和导航栏 header 相同的高度 */
    line-height: 50px;
    /* 设置行高，注意不要使用 inherit（继承），因为 menu 的父标签不是 header，而是 ul，我们并没有设置 ul 的行高，无法继承 */
    /* 最大宽度 */
    padding: 0 20px;
    justify-content:space-between;
}

#header .menu li {
    height: 100%;
    /* 设置高度，让每一个标签的高度也等于 header 高度 */
}

#header li:hover {
    background: rgb(241, 99, 16);
    transition: 0.5s;
    /* 持续 0.5 秒 */
}

#header .menu li .link {
    font: bolder normal 16px Source Sans Pro;
    color: #fff;
    /* 不解释，看不懂的补 CSS 知识去 */
    padding: 14px 15px;
    font-size: medium;
}

img {
    margin-top: 5px;
    height: 40px;
    width: 40px;
    margin-left: 20px;
}
</style>