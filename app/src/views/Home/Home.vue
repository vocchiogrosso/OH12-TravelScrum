<template>
<div class="screen">
    <div id="third">
        <img class="banner" src="./Assets/TravelBook - White.png"/>
        <router-link to="/auth/login">
            <div class="button" id="btn-1">
                <h2>Login</h2>
            </div>
        </router-link>
        <router-link to="/auth/register">
            <div class="button" id="btn-2">
                <h2>Register</h2>
            </div>
        </router-link>
    </div>
    <div id="seven">
        <div class="tag">
            <h2>Thailand, Krabi</h2>
        </div>    
    </div>
</div>
</template>
<!--| |-->
<script>
export default {
    name:'Home'
}
</script>
<!--| |-->
<style scoped>
.screen {
    color: black;
    height: 100vh;
    left: 0%;
    position: absolute;
    top: 0%;
    width: 100vw;
}

#third {
    background-color: white;
    height: 100vh;
    left: 0%;
    position: absolute;
    top: 0%;
    width: 30vw;
}

    .banner {
        left: 0%;
        position: absolute;
        width: 100%;

    }

    .button {
        border: 1px solid black;
        font-size: .85vw;
        height: 7.5%;
        position: absolute;
        width: 40%;
    }

        #btn-1 {
            left: 30%;
            top: 37.5%;
        }

        #btn-2 {
            left: 30%;
            top: 53.5%;
        }

#seven {
    background-image: url('./Assets/background-banner.jpg');
    background-size: cover;
    background-position-x: 0%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    height: 100vh;
    left: 30vw;
    position: absolute;
    top: 0%;
    width: 70vw;
}

    .tag {
        background-color: rgba(0, 0, 0, 0.514);
        color: white;
        font-size: 1.25vh;
        height: 5vh;
        left: 82.5%;
        position: absolute;
        top: 92.5vh;
        width: 10vw;
    }

</style>