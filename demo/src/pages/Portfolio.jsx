import React from 'react'
import Project from '../components/Portfolio/Project'
import BaseLayout from '../layouts/BaseLayout'


const projects = [
    {
        id: '0',
        title: "E-Commerce Web Store",
        about: "A full e-shopping experience for an art gallery",
        url: "https://e-commerce-art-application.herokuapp.com",
        image: "./images/art-gallery.png"
    },
    {
        id: '1',
        title: "Howzat Cricket Game",
        about: "A game to play for cricket high scores",
        url: "https://howzat-cricket.herokuapp.com",
        image: "./images/react-cricket.png"
    },
    {
        id: '2',
        title: "Movie Night",
        about: "An app to find a great movie to watch",
        url: "https://yoko-cyer.github.io/Movie-Generator/",
        image: "./images/frontend_img.png"
    },
    {
        id: '3',
        title: "Weather Dashboard",
        about: "An app to check the weather in different cities",
        url: "https://timmobrien.github.io/challenge-06-weather-dashboard/",
        image: "./images/weather.png"
    },
    {
        id: '4',
        title: "Philips Hue Discord Bot",
        about: "A bot which interacts in discord to change the colours of your lights",
        url: "https://github.com/timmobrien/hue-discord-bot",
        image: "./images/hue.jpeg"
    },
    {
        id: '5',
        title: "Javascript Quiz",
        about: "A quiz to test yor javascript knowledge",
        url: "https://github.com/timmobrien/Javascript-Quiz",
        image: "./images/quiz.png"
    },

]

export default function Portfolio() {
  return (

    <BaseLayout>

        <Project projects={projects}/>

    </BaseLayout>


  )
}
