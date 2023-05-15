import React from 'react'
import materialUI from "../../assets/materialUI.svg";
import css3 from "../../assets/css-3.png"
import html5 from "../../assets/html-5.png";
import tailwindCss from "../../assets/tailwind_css_Logo.svg.png";
import js from '../../assets/js.png';
import github from "../../assets/icons8-github.svg";
import Image from 'next/image';
import react from "../../assets/React.svg";
import next from "../../assets/nextjs-icon.svg";
import node from "../../assets/node-js.png";
import database from "../../assets/database.png";


const TechWorkedWith = () => {
    let icons = [
        {
            image:html5,
            name:"HTML"
        },
        {
            image:css3,
            name:"css3"
        },
        {
            image:js,
            name:"javaScript"
        },
        {
            image:react,
            name:"React"
        },
        {
            image:next,
            name:"nextJS"
        },
        {
            image:tailwindCss,
            name:"tailwindCss"
        },
        {
            image:materialUI,
            name:"materialUI"
        },
        {
            image:node, 
            name:"nodeJS"
        },
        {
            image:database,
            name:'mongodb'
        },
        {
            image:github,
            name:"github"
        }
    ]
    return (
        <div className='my-20'>
            <h2 className='text-center text-3xl text-blue-600 font-bold font-serif'>SKILLS</h2>
            <hr className='w-[30%] border-blue-600 border-2 mx-auto' />
            <div className='flex justify-center items-center flex-wrap gap-4 my-10'>
                {
                    icons.map((ele) => (
                        <div className='p-2 border rounded justify-center items-center flex flex-col drop-shadow-lg hover:scale-110 hover:shadow-2xl'>
                            <Image src={ele.image} className='w-10	'/>
                            <p className='font-bold'>{ele.name}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TechWorkedWith;