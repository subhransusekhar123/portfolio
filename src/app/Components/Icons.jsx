import React from 'react';
import facebook from '../../assets/icons8-facebook.svg';
import Image from 'next/image';
import github from '../../assets/icons8-github.svg';
import gmail from '../../assets/icons8-gmail.svg';
import instagram from '../../assets/icons8-instagram.svg';
import twitter from '../../assets/icons8-twitter.svg';
import linkedin from '../../assets/icons8-linkedin.svg';



const Icons = () => {
    let icons = [facebook, github, gmail, instagram, twitter , linkedin];
    return (
        <div className='flex items-center justify-center gap-3 my-5 drop-shadow-lg '>
            {
                icons.map((ele) => {
                    return (
                    <div className='hover:-translate-y-1 hover:shadow-2xl drop-shadow-2xl'>
                        <Image src={ele} />
                    </div>
                    )
                })
            }

        </div>
    )
}

export default Icons