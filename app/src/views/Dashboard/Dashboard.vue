<template>
<div class="page">
    <router-view/>
</div>
</template>
<!--||-->
<script>
export default {
    name:'Dashboard'
}
</script>
<!--||-->
<style scoped>
.page {
    position: absolute;
    left: 0%;
    top: 0%;
    min-height: 100vh;
    width: 100vw;
}
</style>
