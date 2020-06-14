<template>
<div class="screen">
    <div id="third" class="container">
        <br>
        <p>Welcome To</p>
        <img class="banner" src="../../Assets/TravelBook - Banner.png"/>
        <p>Welcome Back</p>
        <hr>
        <p>Sign In Below</p>
        <form>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="e.g., user@example.com" v-model="Email" required/>
            <p>Password</p>
            <input type="password" placeholder="Enter Password" v-model="Password" required/>
            <hr>
            <router-link to="/dashboard/">
                <input class="loginbtn" type="submit" value="Login"/>
            </router-link>
            <br>
            <router-link to="/auth/reset">Forgot Password</router-link>
            <div class="container register">
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
    name:'login',
    data(){
      return {
        Email:'',
        Password:''
      }
    },
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
    box-sizing: border-box;
    height: 100vh;
    left: 0%;
    margin: 0%;
    padding: 5%;
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

    body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
  max-width: 50%;
  position: relative;
  left: 25%;
  top: 10%;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.loginbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.register {
  background-color: #f1f1f1;
  text-align: center;
}

</style>