<template>
<div class="screen">
<!--||-->
<div class="left-panel">
    <div class="top-bar-left">
        <div>
            <div class="title-div">
                <p>Next<br> Trip</p>
            </div>
            <div class="next-city-div">
                <img id="weather-icon" :src="Next.Weather"/>
                <p id="weather-ht">{{Next.HighTemp}}</p>
                <p id="weather-lt">{{Next.LowTemp}}</p>
                <p id="weather-t1">{{Next.City}},{{Next.State}}</p>
                <p id="weather-t2">{{Next.NextDate}}</p>
            </div>
            <div class="next-flight-div">
                <p><b>Next Flight</b></p>
                <p>Departing: {{Next.FlightDepartLoc}}</p>
                <p>Arriving: {{Next.FlightArrivingLoc}}</p>
            </div>
            <div class="next-flight-info-div">
                <img id="icon-depart" src="../../Assets/Depart.png"/>
                <p id="depart-t">Departure Time: {{Next.DepartureTime}}</p>
                <img id="icon-arrive" src="../../Assets/Land.png"/>
                <p id="arrive-t">Arrival Time: {{Next.DepartureTime}}</p>
            </div>
            <div class="div-banner"> 
            </div>
        </div>
    </div>
    <div class="middle-bar-left">
        <div class="main-panel">
            <h3>Upcoming Calendar Events</h3>
        </div>
    </div>
    <div class="bottom-bar-left">

    </div>
</div>
<div class="right-panel">
    <div class="top-bar-right">
        <img class="profilepic" :src="User.ProfilePic"/>
        <p>{{User.FirstName}}</p>
        <p>{{User.LastName}}</p>
        <p>{{User.Username}}</p>
    </div>
    <div class="middle-bar-right">
        <p> Travel Plans List Here</p>
    
    </div>
    <div class="bottom-bar-right">
        <div class="lb">
            <h3>Create A New Travel Plan</h3>
        </div>
        <div class="rb">
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
            Weather:require(`../../Assets/Rectangle 31@2x.png`),
            HighTemp:58,
            LowTemp:49,
            City:'Los Angeles',
            State:'CA',
            NextDate:'March 19th 2020',

            FlightDepartLoc:'JFK T4',
            FlightArrivingLoc:'LAX T2',

            DepartureTime:'06:15AM EST',
            ArrivalTime:'09:15AM EST',
            CityBanner:'../../Assets/la-banner.jpg'
        },
        User:{
            ProfilePic:require(`../../Assets/profolio.png`),
            FirstName:'Vincent',
            LastName:'Occhiogrosso',
            Username:'@iamvincento',
            Status:'Online'
        },
        CalendarEvents:[{
            "Item":[
                {
                    Title:"This Item Is First",
                    IconA:true,
                    IconB:true,
                    IconC:true,
                    IconD:true
                },
                {
                    Title:"This Item Is Second",
                    IconA:true,
                    IconB:false,
                    IconC:false,
                    IconD:true
                },
                {
                    Title:"This Item Is Third",
                    IconA:true,
                    IconB:false,
                    IconC:false,
                    IconD:false
                },
                {
                    Title:"This Item Is Later",
                    IconA:true,
                    IconB:false,
                    IconC:false,
                    IconD:false
                },
                {
                    Title:"This Item Is Later",
                    IconA:false,
                    IconB:false,
                    IconC:false,
                    IconD:true
                },
                {
                    Title:"This Item Is Later",
                    IconA:false,
                    IconB:false,
                    IconC:false,
                    IconD:true
                },
                {
                    Title:"This Item Is Later",
                    IconA:false,
                    IconB:true,
                    IconC:false,
                    IconD:true
                },
                {
                    Title:"This Item Is Later",
                    IconA:false,
                    IconB:false,
                    IconC:false,
                    IconD:false
                },
                {
                    Title:"This Item Is Later",
                    IconA:false,
                    IconB:false,
                    IconC:false,
                    IconD:false
                },
                {
                    Title:"This Item Is Later",
                    IconA:false,
                    IconB:true,
                    IconC:false,
                    IconD:true
                },
            ],            
        }],
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

            .title-div {
                background-color: #254266;
                height: 100%;
                font-size: 2.25vh;
                top: 0%;
                position: absolute;
                width: 7.5%;
            }

            .next-city-div {
                background-color: #3D80CB;
                height: 100%;
                font-size: 2.25vh;
                top: 0%;
                left:7.5%;
                position: absolute;
                width: 25%;
            }

                #weather-icon {
                    height: 40%;
                    position: absolute;
                    left:7.5%;
                    top: 7.5%;
                    width: auto;
                }

                #weather-ht {
                    font-size: 2vh;
                    height: 40%;
                    position: absolute;
                    left:10%;
                    top: 30%;
                    width: auto;
                }

                #weather-lt {
                    font-size: 1.25vh;
                    height: 40%;
                    position: absolute;
                    left:10.75%;
                    top: 62.5%;
                    width: auto;
                }

                #weather-t1{
                    font-size: 2.5vh;
                    height: 30%;
                    position: absolute;
                    left:30%;
                    top: 0%;
                    width: auto;
                }

                #weather-t2{
                    font-size: 2.5vh;
                    height: 30%;
                    position: absolute;
                    left:30%;
                    top: 30%;
                    width: auto;
                }

            .next-flight-div {
                background-color: #254266;
                height: 100%;
                font-size: 2.25vh;
                top: 0%;
                left:32.5%;
                position: absolute;
                width: 12.5%;
            }

            .next-flight-div p {
                font-size: 1.25vh;
            }

            .next-flight-info-div {
                height: 100%;
                font-size: 2.25vh;
                top: 0%;
                left:45%;
                position: absolute;
                width: 30%;
            }

                .next-flight-info-div p {
                    font-size: 2vh;
                }

                #icon-depart {
                    position: absolute;
                    top: 10%;
                    height: 40%;
                    left: 10%;
                }

                    #depart-t {
                        text-align: left;
                        position: relative;
                        left:27.5%;
                    }

                    #arrive-t {
                        text-align: left;
                        position: relative;
                        left:27.5%;
                    }

                #icon-arrive {
                    position: absolute;
                    top: 50%;
                    height: 40%;
                    left: 10%;
                }

            .div-banner {
                background-image:url('../../Assets/la-banner.png');
                background-position-y: 60%;
                background-position-x: 20%;
                height: 100%;
                width: 25%;
                position: absolute;
                left:75%;
            }

            

        .middle-bar-left {
            background-image: url('../../Assets/nyc-bk.png');
            color: black;
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
            background-color: #424f5f;
            height: 10vh;
            position: absolute;
            top: 0%;
            left: 0%;
            width: 30vw;
        }

            .profilepic {
                position: absolute;
                left:5%;
                top:10%;
                height:80%;
            }

            .top-bar-right p {
                text-align:left;
                font-size: 1.35vh;
                font-weight: bold;
                letter-spacing: 0.15em;
                padding-left:22.5%;
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

            #lb {
                border: 1px solid black;
                width: 50%;
                position: absolute;
                left:0%;
                top: 0%;
                height: 100%;
            }

            #rb {
                border: 1px solid black;
                width: 50%;
                position: absolute;
                left:50%;
                top: 0%;
                height: 100%;
            }

</style>