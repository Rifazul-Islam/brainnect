"use client"
import project1 from "@/assets/project1.jpg";
import Image from 'next/image';
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Link from 'next/link'
const Projects = () => {
    const [projects, setProjects] = useState();
    useEffect(() => {
      fetch("/projects.json")
        .then((res) => res.json())
        .then((data) => setProjects(data.projects));
    }, []);
    console.log(projects);
    return (
        <div className="w-[1300px] mx-auto">
          <div className="text-center">
              <span className="text-red-600 border-red-400 border p-1 px-4 rounded-md cursor-pointer">
                Projects
              </span>
              <h2 className="text-3xl font-semibold my-2 mt-3">Our Recent Works</h2>
           </div>
           {/* projects container */}
           <div className="grid grid-cols-3 gap-5 mt-10">
            {
                projects?.map(project => (
                <div key={project._id} id={styles.projectCard} className='bg-[#F0EEED] p-5 rounded-2xl h-[470px] relative overflow-hidden'>
                    <Image id={styles.imageCov} width={"100%"} height={"100%"} src={project1} alt='project 1' />
                    <hr />
                    <div id={styles.cover} className="w-full h-full bg-[#e2e2f79d] absolute -top-[500px] left-0 -z-0 transition duration-700"></div>
                    <div className="transition z-10 absolute" id={styles.contentBox}>
                    <div id={styles.content} >
                        <h3 className='text-lg font-semibold'>{project?.name} - <span className='text-base'>A Human Resource Management Website</span></h3>
                    </div>
                    <div id={styles.buttons} className='flex gap-5 mt-5'>
                        <button className="bg-[#FC4772] text-white px-4 py-2 rounded-lg">Preview</button>
                        <Link href={project?.live_link}>
                        <button className="bg-[#FC4772] text-white px-4 py-2 rounded-lg">Live</button>
                        </Link>
                    </div>
                    </div>
                </div>
                ))
            }
                
           </div>
        </div>
    );
};

export default Projects;