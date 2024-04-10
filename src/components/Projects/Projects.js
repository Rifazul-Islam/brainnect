import Image from 'next/image';
import project1 from "@/assets/project1.jpg";
import styles from "./style.module.css";
const Projects = () => {
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
                <div id={styles.projectCard} className='bg-[#F0EEED] p-5 rounded-2xl'>
                    <Image width={"100%"} height={"100%"} src={project1} alt='project 1' />
                    <hr />
                    <div id={styles.content} >
                        <h3 className='text-lg font-semibold'>Unity Spark - A Human Resource Management Website</h3>
                        <div className='flex gap-5 mt-5'>
                        <button className="primary-btn">Preview</button>
                        <button className="primary-btn">Live</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Projects;