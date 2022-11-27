import {SiMarketo }from 'react-icons/si'
import {MdOutlineDesignServices} from 'react-icons/md'
import { MdDeveloperMode } from 'react-icons/md'
import {IoMdSettings} from 'react-icons/io'
import {GoTelescope} from 'react-icons/go'
export const ServicesData=[
    {id:1,
    name: "Design",
    logo: <MdOutlineDesignServices />,
    description: "Before the real development happens, there must be a design specified and tailored by the client to be used. I design fully responsive and user friendly websites to provide comfortable web expiriences. "
},
{id:2,
    name:"Development",
    logo: <MdDeveloperMode />,
    description: "With my vast knowledge in fullstack and MERN stack development, I develop very user friendly websites and responsive on all devices. I develop small sites e.g. Portfolios to to big sites e.g E-commerce sites for your business."
},

{id:3,  
    name:"SEO",
    logo: <GoTelescope />,
    description: "In order to rank top on google's algorithim during search, your website must be SEO friendly. That means all the Keywords, titles e.t.c should be well coded into the site to make it easier to rank on top. With my good knowledge in Search Engine Optimization I build SEO friendly sites which helps also in marketing of your business."
},
{id:4,
    name:"Digital Marketing",
    logo: <SiMarketo />,
    description: "On top of being a developer, I am also a certified Digital Marketing Specialist. I help business establish their grounds online by attracting an online crowd to your business. If you need to establish and grow your business online, I got you covered too."
},
{id:5,
    name:"Maintenance and Support",
    logo: <IoMdSettings />,
    description: "After development and implimentation, I also provide regular maintenance of the Web sites and applications. This is done for various reasons e.g. Updates, new features addition, new technologies e.t.c."
}
]