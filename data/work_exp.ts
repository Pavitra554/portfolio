interface workTypes{
    name:string
    cer_link:string
    date:string
    proj:string
    proj_link:string
    description:string
    tags:string[]
    points:string[]
}

export const work_exp: workTypes[] = [
    {
        name:'Sypto - Futurebits Technology (OPC) Pvt Ltd',
        cer_link:'https://drive.google.com/file/d/13q69v5n6vpsE4pylwkig9oeaWEJCh3E2/view',
        date:'1 Sept 2022 - 1 Oct 2022',
        proj:'Sypto',
        proj_link:'https://www.sypto.xyz/',
        description:'',
        tags:['SDE - Frontend','Internship'],
        points:[
            'Worked on multiple UI issues in projects like ',
            'Made new UI according to the designs.',
            'Participated in code reviews and bug fixes.',
        ]
    },
    {
        name:'Code4Odisha - Hackathon Organization',
        cer_link:'https://www.linkedin.com/company/code4odisha/',
        date:' 1 July 2022 - 28 Aug 2022',
        proj:'Code4Odisha Session 1',
        proj_link:'https://code4odisha.tech/',
        description:'',
        tags:['Developer','Open Source','Team Member'],
        points:[
            'Worked on the official website of ',
            'Participated in code reviews and bug fixes.',
        ]
    },
    {
        name:"Hack Club ITER - Developer's Organization",
        cer_link:'https://iter.hackclub.com/',
        date:'25 Sept 2022 - 1 Oct 2022',
        proj:'Hack The October Event',
        proj_link:'https://hacktheoctober.hackclub.com/',
        description:'',
        tags:['Developer','Open Source','Team Member'],
        points:[
            'Worked on the official website of ',
            'Participated in code reviews and bug fixes.',
            'Live event updates.'
        ]
    }
]