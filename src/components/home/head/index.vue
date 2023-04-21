<template>
    <div id="header">
        <div class="menu">
            <div class="logo">
                <input id="mychackbox" type="checkbox">
                <div class="left">
                    <label for="mychackbox" id="show"><img src="src/assets/zzz.png"></label>
                </div>
                <div class="hide">
                    <ul>
                        <router-link to="/" class="link"><li style="margin-top: 50px;">blog</li></router-link>
                        <router-link to="/blog" class="link"><li>about</li></router-link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang = 'ts'>
import { ref, reactive } from 'vue'

</script>
<style scoped lang="less">
a {
    text-decoration: none;
    color: aliceblue;
}


#header {
    background-color: rgb(225, 89, 15);
    width: 100%;
    height: 50px;
}

.logo {
    height: 50px;
}

#header li:hover {
    background: rgb(241, 150, 97);
    transition: 0.5s;
    /* 持续 0.5 秒 */

}

li {
    font: bolder normal 16px Source Sans Pro;
    /* 不解释，看不懂的补 CSS 知识去 */
    padding: 14px 15px;
    font-size: medium;
    text-decoration: none;
}

img {
    margin-top: 5px;
    height: 40px;
    width: 40px;
    position:absolute;
}

#mychackbox {
    display: none;
}


#mychackbox:checked~.left {
    position: fixed;
    left: 80px;
    transition: all .5s ease;
}

#mychackbox:checked~.hide {
    left: 0;
    transition: all .5s ease;
}

.hide {
    position: fixed;
    left: -80px;
    width: 80px;
    height: 100%;
    background: rgb(225, 89, 15);
    transition: all .5s ease;
}
.left{
    position: fixed;
    left: 10px;
    width: 80px;
    transition: all .5s ease;
}

label {
    cursor: pointer;
}</style>