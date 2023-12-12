"use client"

import React, { useEffect, useState } from 'react';
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
  <div>
    <h2 className="text-4xl text-slate-300 py-4">Websites</h2> 
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center items-center">  
        <div className="grid grid-rows-9 grid-cols-4 gap-2">
          <div><InfoBox id={1} name="IronmanGuide" description="Guide on how to play as an IronMan in Old School RuneScape." repositoryURL="https://github.com/ColtonThompson/IronmanGuide"/></div>
          <div><InfoBox id={1} name="ScarySuperior" description="My first ReactJS project. Creates a table view for JSON data." repositoryURL="https://github.com/ColtonThompson/ScarySuperior"/></div>
          <div><InfoBox id={1} name="Relleka Web" description="RuneScape fansite written in PHP/HTML/CSS." repositoryURL="https://github.com/ColtonThompson/Relleka"/></div>
        </div>
      </div>
    </div>
    <h2 className="text-4xl text-slate-300 py-4">Game Development</h2> 
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center items-center">  
        <div className="grid grid-rows-9 grid-cols-4 gap-2">
          <div><InfoBox id={1} name="Astra" description="2D orthographic video-game prototype with a basic tile system written in Java powered by Slick2D libraries." repositoryURL="https://github.com/Nightleaf/Astra"/></div>
          <div><InfoBox id={1} name="Cepheus" description="2D space prototype written in C# built in Unity" repositoryURL="https://github.com/Nightleaf/Cepheus"/></div>
          <div><InfoBox id={1} name="GameThing" description="2D top down adventure/rpg prototype written in GDScript for Godot 4.1" repositoryURL="https://www.youtube.com/watch?v=7OO5r-bzZN4"/></div>
        </div>
      </div>
    </div>
    <h2 className="text-4xl text-slate-300 py-4">Desktop Applications</h2> 
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center items-center">  
        <div className="grid grid-rows-9 grid-cols-4 gap-2">
          <div><InfoBox id={1} name="ModGrabber" description="Tool to download mod music from ModArchive.org." repositoryURL="https://github.com/ColtonThompson/ModGrabber"/></div>
          <div><InfoBox id={1} name="Scraper" description="Web scraper to pull data from a list of members from a forum." repositoryURL="https://github.com/ColtonThompson/Scraper"/></div>
          <div><InfoBox id={1} name="AuthenticationSystem" description="School project to create an authentication system in Java." repositoryURL="https://github.com/ColtonThompson/AuthenticationSystem"/></div>
        </div>
      </div>
    </div>        
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
