"use client"
import project1 from "@/assets/project1.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaTabletAlt } from "react-icons/fa";
import { FaLaptop, FaMobileScreenButton } from "react-icons/fa6";
import styles from "./style.module.css";
const Projects = () => {
    const [previewDevice, setPreviewDevice] = useState("pc");
    const [previewImage, setPreviewImage] = useState(null);
    const [projects, setProjects] = useState();
    useEffect(() => {
      fetch("/projects.json")
        .then((res) => res.json())
        .then((data) => {
            setProjects(data?.projects);
        });
    }, []);
    console.log(projects);
    console.log(previewDevice);
    return (
        <>
        <div className="lg:w-[1300px] mx-auto">
          <div className="text-center">
              <span className="text-red-600 border-red-400 border p-1 px-4 rounded-md cursor-pointer">
                Projects
              </span>
              <h2 className="text-3xl font-semibold my-2 mt-3">Our Recent Works</h2>
           </div>
           {/* projects container */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
                projects?.map(project => (
                <div key={project._id} id={styles.projectCard} className='bg-[#F0EEED] p-5 rounded-2xl h-[490px] relative overflow-hidden'>
                    <div className="lg:w-[380px] h-[380px] overflow-hidden mb-5" >
                    <Image id={styles.cardImg} width={400} height={360} src={'https://i.ibb.co/vj00X9s/unity-spark-22122-web-app-2.png'} alt='project 1' />
                    </div>
                    <hr />
                    <div id={styles.cover} className="w-full h-full absolute -top-[500px] left-0 -z-0 transition duration-700 ease-in-out"></div>
                    <div className="transition z-10 absolute duration-1000" id={styles.contentBox}>
                    <div id={styles.content} >
                        <h3 className='text-lg font-semibold'>{project?.name} - <span className='text-base'>A Human Resource Management Website</span></h3>
                    </div>
                    <div id={styles.buttons} className='flex gap-5 mt-5'>
                        <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="bg-[#FC4772] text-white px-4 py-2 rounded-lg">Preview</button>
                        <dialog id="my_modal_2" className="modal">
                            <div className={`modal-box ${previewDevice === 'pc' && 'max-w-[1000px]'} ${previewDevice === 'tab' && 'max-w-[780px]'} ${previewDevice === 'mob' && 'max-w-[425px]'}`}>
                                <div className="flex gap-7 items-center justify-end">
                                    <FaMobileScreenButton className={`text-xl ${previewDevice === 'mob' ? 'text-[#FC4772]' : 'text-black'}`} onClick={() => setPreviewDevice("mob")} />
                                    <FaTabletAlt className={`text-xl ${previewDevice === 'tab' ? 'text-[#FC4772]' : 'text-black'}`}  onClick={() => setPreviewDevice("tab")} />
                                    <FaLaptop className={`text-2xl ${previewDevice === 'pc' ? 'text-[#FC4772]' : 'text-black'}`} onClick={() => setPreviewDevice("pc")} />
                                </div>
                                <hr className="mt-5" />
                                <Image
                                    className="mt-5"
                                    width={1000}
                                    height={1000}
                                    src={
                                        previewDevice === 'pc'
                                        ? project?.desktop_v_image
                                        : previewDevice === 'tab'
                                        ? project?.tablet_v_image
                                        : previewDevice === 'mob'
                                        ? project?.mobile_v_image
                                        : '' // Add a default image source here if necessary
                                    }
                                    alt="preview image"
                                    />
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                            </dialog>
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
        </>
    );
};

export default Projects;