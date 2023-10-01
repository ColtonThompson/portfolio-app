"use client"

import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import InfoBox from './InfoBox';

export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    
        fetch('http://localhost:8080/projects/all')
          .then(response => response.json())
          .then(data => {
            setProjects(data);
            setLoading(false);
          })
      }, []);

      if (loading) {
        return <Loading/>
      }

    return(
        <div className="flex mx-auto items-center justify-center space-x-5">
            {projects.map(proj =>
                <InfoBox title={proj.name} desc={proj.description} repo={proj.repositoryURL}/>
            )}
        </div>
    );
}
