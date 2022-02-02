import {useState} from 'react';
import Video from '../../component/video/Video';
import { Link } from 'react-router-dom';
import './ExplorePage.css'
import { useVideo } from '../../hooks/useVideo';

const initVideo = [
    {
        id:1,
        title:'React & TypeScript - Course for Beginners',
        ytId: 'FJDVKeh7RJI',
        description: "Learn how to build React apps using TypeScript. First, learn the basics of TypeScript. Then, learn how to integrate TypeScript in a React app by building an awesome project. You will learn how to use TypeScript with React Hooks such as useState, useRef, and useReducers. You will also learn how to pass props from one component to another by defining prop types of the component. And you will learn much more!",
        profileImg: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        profileName: 'FreeCode Camp',
        thumbnailUrl: 'https://i.ytimg.com/vi/FJDVKeh7RJI/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCMP5VO6ae9bTAxYmzmvCQzIdLhHQ',
    } ,
    {
        id:2,
        title:'Learn JavaScript - Full Course for Beginners',
        ytId: 'PkZNo7MFNFg',
        description: "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.",
        profileImg: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        profileName: 'FreeCode Camp',
        thumbnailUrl: 'https://i.ytimg.com/vi/XGf2GcyHPhc/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBpplsYl5_RgczTzMtfeR_wk-2xkw',
    } ,
    {
        id:3,
        title:'Build a Node.js API - tutorial',
        ytId: 'fsCjFHuMXj0',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, asperiores impidet sed illo, nobis iusto consequatur quis totam odio, cupiditate repellat ea quibusdam velit. Saepe, sapiente quaerat. Inventore, laborum atque.",
        profileImg: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        profileName: 'FreeCode Camp',
        thumbnailUrl: 'https://i.ytimg.com/vi/fsCjFHuMXj0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBGWqJhRl-r_hhNhcdsfLBvTz90ZQ',
    },
    {
        id:4,
        title:'APIs for Beginners - How to use an API (Full Course / Tutorial)',
        ytId: 'GZvSYJDk-us',
        description: "What is an API? Learn all about APIs (Application Programming Interfaces) in this full tutorial for beginners. You will learn what APIs do, why APIs exist, and the many benefits of APIs. APIs are used all the time in programming and web development so it is important to understand how to use them.",
        profileImg: 'https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s176-c-k-c0x00ffffff-no-rj',
        profileName: 'FreeCode Camp',
        thumbnailUrl: '	https://i.ytimg.com/vi/GZvSYJDk-us/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCGLbDmsHcFVihYVPTaCWVAbDxNFQ',
    },
    {
        id:5,
        title:'Full Stack MERN Introduction',
        ytId: 'RXfiTQ9pQB4',
        description: "Develop a simple project with the best possible structure so that you can use it as a boilerplate and elevate your MERN stack projects to meet industry standards. Leverage the quickest #coding time for #building the #applications using a complete road map for #MERN with our expert Praveen.",
        profileImg: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHagmM6KteNmA/company-logo_200_200/0/1625475684887?e=2159024400&v=beta&t=y4xSbjR6VbQUK71WET6x-DDBscvy9RFfP3NM0w6uUzU',
        profileName: 'Recro',
        thumbnailUrl: 'https://i.ytimg.com/vi/RXfiTQ9pQB4/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLB7gjwn7DjhagoxCVlbXII9uzFSig',
    },
    {
        id:6,
        title:'Devchats with Ankush (Software engineer at Amazon)',
        ytId: 'luEdOtUbTVM',
        description: "DevChats by Recro is a 1-0-1 conversation with experienced #developers where we talk about their professional journey, challenges they faced, mistakes they have made, #learnings in the process & so on. In this DevChat, catch Ankush Dharkar who works as the Senior #Software engineer at #Amazon, talks about his journey as a developer,  running a Dev community, and the important skills that will help you grow beyond code.  Watch the whole video to know the career mistakes that everyone does and his advice to the #techies who have just started their careers.",
        profileImg: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHagmM6KteNmA/company-logo_200_200/0/1625475684887?e=2159024400&v=beta&t=y4xSbjR6VbQUK71WET6x-DDBscvy9RFfP3NM0w6uUzU',
        profileName: 'Recro',
        thumbnailUrl: '	https://i.ytimg.com/vi/luEdOtUbTVM/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCDuSQsabotUO3DgaUgR1080haIKw',
    },
    {
        id:7,
        title:'Demystifying Memory Leak in JavaScript',
        ytId: 'UE_hn5FnMCE',
        description: "Memory leaks are a problem every developer has to face eventually. Even when working with memory-managed languages there are cases where memory can be leaked.Our speaker Santosh Kumar, who works as works at Interview Kickstart as a Technical Lead for a front-end developer talks about the topics related to memory leaks",
        profileImg: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHagmM6KteNmA/company-logo_200_200/0/1625475684887?e=2159024400&v=beta&t=y4xSbjR6VbQUK71WET6x-DDBscvy9RFfP3NM0w6uUzU',
        profileName: 'Recro',
        thumbnailUrl: 'https://i.ytimg.com/vi/UE_hn5FnMCE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLB1HLg74_t59yGPKQYcayzp0e0b9w',
    },
    {
        id:8,
        title:'Panel Discussion: The State of JavaScript',
        ytId: 'nO7s4rduPYU',
        description: "With an all-star panel of JavaScript experts for a roundtable discussion on the challenges, opportunities, and potential for innovation within the JavaScript community. Driven by the insightful questions, we have discussed the latest developments, trends, and how will JavaScript change in 2021 and beyond.",
        profileImg: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHagmM6KteNmA/company-logo_200_200/0/1625475684887?e=2159024400&v=beta&t=y4xSbjR6VbQUK71WET6x-DDBscvy9RFfP3NM0w6uUzU',
        profileName: 'Recro',
        thumbnailUrl: 'https://i.ytimg.com/vi/nO7s4rduPYU/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLD9XiEa1kOaIpKuuN1IvznEcsxy8w',
    }
]
function ExplorePage() {

    const [query, setQuery] = useState('')
    
    return (
        <div className="explorepage__container">
            <div className="explorepage__title">
                Explore
                <span className='search__input'>
                <input 
                    type="text" 
                    value={query} 
                    onChange={({target}) => setQuery(target.value)}
                    placeholder='Search'/>
            </span>
            </div>

            
            <div className="explorepage__videos">
                {
                    initVideo.map((video)=> 
                        <Link key={video.id} to="/video">
                            <Video propVideo={video} />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default ExplorePage;
