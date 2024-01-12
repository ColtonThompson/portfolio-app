"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Loading from './Loading';
import InfoBox from './InfoBox';

interface ProjectItem {
  id : number,
  name : string,
  description : string,
  repositoryURL : string
}

export default function ProjectsList() {
  return(
  <div className="container wrap">  
    <Cyst></Cyst> 
    <GameThing></GameThing>
    <PortfolioApp></PortfolioApp>
  </div>     
  );
}

function Cyst() {
  return(
  <div className="py-5">
    <h2 className="text-4xl text-slate-300">Cyst</h2> 
    <h2 className="text-slate-400 px-5">Project Start Date: January 7th, 2024</h2>
    <h2 className="text-slate-400 px-5">Project Goals: Develop a 2d game based on the theme: BUILDING CONNECTIONS</h2>
    <h2 className="text-slate-400 px-5">Development: This project was developed in GDScript along with the Godot Engine.</h2>
    <p className="text-slate-500 py-5 px-2 mr-10 ml-10">Cyst is a project that is developed with GDScript in the Godot Engine.
     This project was created for the New Year New Skills Game Jam on Itch.io, the theme was building connects. 
     The concept for this game was to have buildings you place that require another building nearby before allowing placement, this would generate infestation that ultimately will cover the map.
     You are fighting against the computer however that sends endless waves of enemies that want to destroy all of your buildings and units. Your goal is to spread and survive as long as possible.
    </p>
    
    <h2 className="text-2xl">Media</h2>
    <div className="container inline-flex">
    <div className="px-5">
        <Image
        src="https://i.imgur.com/Nkma93n.gif"
        width={500}
        height={500}
        alt="Polishing the game!"
        />
      </div>       
    <div className="px-5">
        <Image
        src="https://i.imgur.com/YZnp547.gif"
        width={500}
        height={500}
        alt="Bad guys movin in!"
        />
      </div>  
      <div className="px-5">
        <Image
        src="https://i.imgur.com/J6Zi4Oc.gif"
        width={500}
        height={500}
        alt="Placing cysts on the map!"
        />
      </div>    
    </div>
  </div>
  );
}

function GameThing() {
  return(
  <div className="py-5">
    <h2 className="text-4xl text-slate-300">GameThing</h2> 
    <h2 className="text-slate-400 px-5">Project Start Date: November 15th, 2023</h2>
    <h2 className="text-slate-400 px-5">Project Goals: Develop a 2d Orthographic RPG with an infinitely procedurally generated map.</h2>
    <h2 className="text-slate-400 px-5">Development: This project was developed in GDScript along with the Godot Engine.</h2>
    <p className="text-slate-500 py-5 px-2 mr-10 ml-10">GameThing is a project that is developed with GDScript in the Godot Engine. The focus of this project was to develop a 2D orthographic role-playing game that 
      would resemble a zelda esque art style with gameplay that is inspired by Terraria and Minecraft. This project features a infinitely generated world using 
      FastNoiseLite for the noise algorithm. This takes each tile and assigns a float value that determines the biomes & tiles, there are a few layers to create some
      unique characteristics of each map. The player can share their world seed and other worlds can be regenerated in a similar fashion.
    </p>
    <p className="text-slate-500 py-5 px-2 mr-10 ml-10">This project also was a good test to apply what I learned in college with the software development life cycle and using popular industry tools like Git, Github, and Trello.
      Each build for this project was more or less planned like you would plan a sprint, giving myself a goal and setting a rough estimate of when it should be completed by.
      This was done in conjunction with the Trello page to keep a project overview intact so I knew what was next, or what was taking too long.
    </p>
    <p className="text-slate-500 py-5 px-2 mr-10 ml-10">As of writing this blurb the current feature I am tackling is how to manage the world saves and supporting multiple platforms while also supporting multiple versions of the game.
      The idea is to allow the player to save their world and return to it even if the game has been updated.
    </p>
    <h2 className="text-2xl">Media</h2>
    <div className="container inline-flex">
      <div className="px-5">
        <Image
        src="https://i.imgur.com/gJfKhlA.png"
        width={500}
        height={500}
        alt="Adding hearts to display health!"
        />
      </div>
      <div className="px-5">
        <Image
        src="https://i.imgur.com/oIVuLib.png"
        width={500}
        height={500}
        alt="Objects added to the procedural generation"
        />
      </div>
      <div className="px-5">
        <Image
        src="https://i.imgur.com/e3K2ptt.png"
        width={500}
        height={500}
        alt="First time getting a world generated"
        />
      </div>
    </div>
  </div>
  );
}

function PortfolioApp() {
  return(
  <div className="py-5">
    <h2 className="text-4xl text-slate-300">Portfolio Website</h2> 
    <h2 className="text-slate-400 px-5">Project Start Date: September 25th, 2023</h2>
    <h2 className="text-slate-400 px-5">Project Goals: Develop a website to showcase my past works</h2>
    <h2 className="text-slate-400 px-5">Development: This project was developed in NextJS and Tailwind CSS</h2>
    <p className="text-slate-500 py-5 px-2 mr-10 ml-10">This portfolio website was created after speaking with some veterans of the software development industry and them suggesting I create something to showcase my work.
      The suggestion specifically was to develop this site using a modern tech stack so I had experience with something that was commonly being used. This website is running on
      NextJS which is a multi page application variant of React, the styling is using Tailwind. The other suggestion was to have the site be continously deployed using AWS and to
      also tie into a springboot api to pull information to be displayed on the site. This site is using CI/CD with AWS Amplify which checks the github for a new commit then rebuilds
      the site for live viewing. The Springboot api was developed but is not actively being used as of this moment.
    </p>
    <p className="text-slate-500 py-5 px-2 mr-10 ml-10">You are currently viewing the results of that work so far, I would be happy to speak about anything shown here!
    </p>
  </div>
  );
}

function ProjectListWithAPI() {
    const [projectsList, setProjectsList] = useState<ProjectItem[] | null>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    
        fetch('http://localhost:8080/projects/all')
          .then(response => response.json())
          .then(data => {
            setProjectsList(data);
            setLoading(false);
          })
      }, []);

      if (loading) {
        return <Loading/>
      }
      if (projectsList == null)
        return "<p className='text-red'>Projects unable to load!<p>"

    return(
        <div className="flex mx-auto items-center justify-center space-x-5">
            {projectsList.map(project => 
              <div key={project.id}>
              <InfoBox id={project.id} name={project.name} description={project.description} repositoryURL={project.repositoryURL}/>
              </div>
            )}
        </div>
    );
}
