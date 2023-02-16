interface projects_data_type{
    name:string
    tags:string[]
    description:string
    github:string
    demo:string
}

export const projects_data: projects_data_type[] = [
    {
        name:'Svaasthy',
        tags:['React Native','Expo','Typescript','Firebase'],
        description:'“Svaasthy” enables us to ease up the emergency medical situations by providing the best and the fastest way to reach your nearest hospitals or medical centers.',
        github:'https://github.com/Pavitra554/Svaasthy',
        demo:''
    },
    {
        name:'Instagram Clone',
        tags:['Next.js','Redux','Javascript','Firebase','Framer Motion','CSS'],
        description:`As the project name describes this is a clone of the Instagram web app build with Next.js. where you can log in, like, comment, and also you can upload a post.`,
        github:'https://github.com/Pavitra554/Instagram-Clone',
        demo:'https://instagram-clone-psi-roan.vercel.app/'
    },
    {
        name:'Ment-Ally',
        tags:['MongoDB','Express.js','React.js','Node.js','Firebase','Javascript','Framer Motion','CSS'],
        description:` Ment-Ally is a web app build with React.js. Ment Ally is one solution for all your mental problems.`,
        github:'https://github.com/Pavitra554/Ment-Ally',
        demo:'https://ment-ally-3fc6a.web.app/'
    },
    {
        name:'Covid-19',
        tags:['Next.js','Typescript','Tailwind CSS'],
        description:`Web App made with Next.js to show covid-19 stats using real time API.`,
        github:'https://github.com/Pavitra554/COVID-19',
        demo:'https://covid-19-jet.vercel.app/'
    },
    {
        name:'WhatsApp UI Clone',
        tags:['React Native','Expo','Typescript'],
        description:`As the project name describes this is a clone of the whatsapp ui build with React Native.`,
        github:'https://github.com/Pavitra554/WhatsApp_UI_Clone_React_Native',
        demo:'https://reactnativeexample.com/whatsapp-ui-clone-using-react-native/'
    },
]