<template>
<div class="screen">
<!--||-->
<div class="left-panel">
    <div class="top-bar-left">
        <div>
            <div class="div">
                <p>Next Trip</p>
            </div>
            <div class="div">
                <p>{{Next.Weather}}</p>
                <p>{{Next.HighTemp}}</p>
                <p>{{Next.LowTemp}}</p>
                <p>{{Next.City}},{{Next.State}}</p>
                <p>{{Next.NextDate}}</p>
            </div>
            <div class="div">
                <p>{{Next.FlightDepartLoc}}</p>
                <p>{{Next.FlightArrivingLoc}}</p>
                <p>{{Next.FlightNumber}}</p>
            </div>
            <div class="div">
                <p>{{Next.DepartureTime}}</p>
                <p>{{Next.DepartureTime}}</p>
            </div>
            <div class="div"> 
                
            </div>
        </div>
    </div>
    <div class="middle-bar-left">

    </div>
    <div class="bottom-bar-left">

    </div>
</div>
<div class="right-panel">
    <div class="top-bar-right">
        <img src=""/>
        <p>{{User.FirstName}}</p>
        <p>{{User.LastName}}</p>
        <p>{{User.Username}}</p>
        <p>{{User.Status}}</p>
    </div>

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
    name:'Main',
    data(){
      return {
        Next:{
            Weather:'Sunny',
            HighTemp:51,
            LowTemp:49,
            City:'Los Angeles',
            State:'CA',
            NextDate:'March 19th 2020',

            FlightDepartLoc:'JFK T4',
            FlightArrivingLoc:'LAX T2',
            FlightNumber:'DL1406',

            DepartureTime:'06:15AM EST',
            ArrivalTime:'09:15AM EST',
            CityBanner:'../../Assets/la-banner.jpg'
        },
        User:{
            ProfilePic:'../../Assets/la-banner.jpg',
            FirstName:'Vincent',
            LastName:'Occhiogrosso',
            Username:'@iamvincento',
            Status:'Online'
        }
      }
    },
}
</script>
<!--||-->
<style scoped>
.screen {
    color: white;
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
            left: 70%;
            width: 30vw;
        }

        .bottom-bar-right {
            background-color: #3D80CB;
            height: 10vh;
            position: absolute;
            top: 90%;
            left: 70%;
            width: 30vw;
        }
</style>