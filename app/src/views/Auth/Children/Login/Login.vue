<template>
<div class="screen">
    <div id="third">
        <br>
        <p>Welcome To</p>
        <img class="banner" src="../../Assets/TravelBook - Banner.png"/>
        <p>Welcome Back</p>
        <hr>
        <p>Sign In Below</p>
        <form>
            <p>Email</p>
            <input type="text" placeholder="e.g., user@example.com"/>
            <p>Password</p>
            <input type="password" placeholder="Enter Password"/>
            <hr>
            <input type="submit" value="Login"/>
            <router-link to="/auth/reset">Forgot Password</router-link>
            <div class="bottom">
                <p>Don't already have an account?<router-link to="/auth/register">Register</router-link></p>
            </div>
        </form>
        
    </div>
    <div id="seven">
        <div class="tag">
            <h2>Hawaii</h2>
        </div>    
    </div>
</div>
</template>
<!--| |-->
<script>
export default {
    name:'login'
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
        position: relative;
        width: 60%;

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
    background-image: url('../../Assets/login-banner.jpg');
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