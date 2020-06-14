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
        <div class="main-panel">

        </div>
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
    <div class="middle-bar-right">
        <p> Travel Plans List Here</p>
    
    </div>
    <div class="bottom-bar-right">
        <div class="half-bl">
            <h3>Create A New Travel Plan</h3>
        </div>
        <div class="half-br">
            <h3>Join A Travel Plan</h3>
        </div>
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
        },
        CalendarEvents:{
                    
        },
        TravelPlans:[
            {
                Title:'Gregs Wedding',
                Location:'Los Angeles',
                StartDate: 'Mar. 19th',
                EndDate: 'Mar. 23rd',
                Status: 'Completed',
                Link: ''
            },
            {
                Title:'Gregs Wedding',
                Location:'Los Angeles',
                StartDate: 'Mar. 19th',
                EndDate: 'Mar. 23rd',
                Status: 'Completed',
                Link: ''
            },
            {
                Title:'Gregs Wedding',
                Location:'Los Angeles',
                StartDate: 'Mar. 19th',
                EndDate: 'Mar. 23rd',
                Status: 'Completed',
                Link: ''
            },
            {
                Title:'Gregs Wedding',
                Location:'Los Angeles',
                StartDate: 'Mar. 19th',
                EndDate: 'Mar. 23rd',
                Status: 'Completed',
                Link: ''
            }
        ],

      }
    },
}
</script>
<!--||-->
<style scoped>
.screen {
    color: white;
    left: 0%;
    height: 100vh;
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

            .main-panel {
                background-color: white;
                border: .5px solid gray;
                box-shadow: 2% 2% 2% black;
                height: 80%;
                top: 10%;
                position: relative;
                left: 10%;
                width: 80%;
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

            .half-bl {
                height: 100%;
                width:50%;
            }

            .half-br {
                height: 100%;
                width: 50%;
            }
</style>