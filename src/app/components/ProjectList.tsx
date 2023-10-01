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

export default function ProjectList() {
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
