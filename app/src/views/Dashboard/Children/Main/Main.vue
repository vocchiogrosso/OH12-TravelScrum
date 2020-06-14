<template>
<div class="screen">
<!--||-->
<div class="left-panel">
    <div class="top-bar-left">

    </div>
    <div class="middle-bar-left">

    </div>
    <div class="bottom-bar-left">

    </div>
</div>
<div class="right-panel">
    <div class="top-bar-right">

    </div>
    <div class="middle-bar-right">

    </div>
    <div class="bottom-bar-right">

    </div>
</div>
<!--||-->
</div>
</template>
<!--||-->
<script>
export default {
    name:'Main'
}
</script>
<!--||-->
<style scoped>
.screen {
    left: 0%;
    min-height: 100vh;
    position: absolute;
    top: 0%;
    width: 100vw;
}

    .left-panel {
        height: 100vh;
        position: absolute;
        top: 0%;
        left: 0%;
        width: 70vw;
    }

        .top-bar-left {
            background-color: #48617F;
            height: 10vh;
            position: absolute;
            top: 0%;
            left: 0%;
            width: 70vw;
        }

        .middle-bar-left {
            background-color: whitesmoke;
            height: 80vh;
            position: absolute;
            top: 10%;
            left: 0%;
            width: 70vw;
        }

        .bottom-bar-left {
            background-color: #48617F;
            height: 10vh;
            position: absolute;
            top: 90%;
            left: 0%;
            width: 70vw;
        }



    .right-panel {
        height: 100vh;
        position: absolute;
        top: 0%;
        left: 70%;
        width: 30vw;
    }

        .top-bar-right {
            background-color: #3D80CB;
            height: 10vh;
            position: absolute;
            top: 0%;
            left: 0%;
            width: 30vw;
        }

        .middle-bar-right {
            background-color: #48617F;
            height: 80vh;
            position: absolute;
            top: 10%;
            left: 0%;
            width: 30vw;
        }

        .bottom-bar-right {
            background-color: #3D80CB;
            height: 10vh;
            position: absolute;
            top: 90%;
            left: 0%;
            width: 30vw;
        }
</style>