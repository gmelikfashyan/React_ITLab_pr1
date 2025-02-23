import ReactIcon from "../assets/react.svg"
import JSIcon from "../assets/javascript.png"
import JavaIcon from "../assets/java.png"
import TypeScriptIcon from "../assets/typescript.png"
import CSSIcon from "../assets/css.png"
import PersonIcon from "../assets/person.png"

interface PersonInfo {
    name: string;
    description: string;
    github: string;
    image: string;
}

interface Skill {
    name: string;
    level: string;
    image: string;
}

interface Education {
    name: string;
    city: string;
    endDate: string;
}

interface Experience {
    JobTitle: string;
    location: string;
    duration: string;
    achievements: string[];
}

export const personInfo: PersonInfo = {
    name: "Gevork Melikfashyan",
    description: "Я начинающий frontend-разработчик, студент 3 курса РТУ МИРЭА по " +
        "направлению программная инженерия. В данный момент прохожу курс 'Frontend разработка на React и Next.js'.",
    github: "https://github.com/gMelikfashyan",
    image: PersonIcon,
}

export const skills: Skill[] = [
    { name: "JavaScript", level: "Продвинутый", image: JSIcon },
    { name: "React", level: "Продвинутый", image: ReactIcon },
    { name: "TypeScript", level: "Средний", image: TypeScriptIcon },
    { name: "HTML/CSS", level: "Продвинутый", image: CSSIcon },
    { name:"Java Spring", level: "Продвинутый", image: JavaIcon },
];

export const educations: Education[] = [
    { name: 'Лицей №1', city: "г. Апшеронск", endDate: "2022"},
    {name: 'РТУ МИРЭА', city: "г. Москва", endDate: "2026"},
    {name: 'Курс frontend-разработка на React и Next.js', city: 'РТУ МИРЭА', endDate: "2025"},
];

export const experience: Experience[] = [
    { JobTitle: "Frontend-разработчик в Company1", location: "г. Москва", duration: "03.01.2023 - 10.10.2023", achievements: [
        "Achievement 1",
            "Achievement 2",
            "Achievement 3",
        ]
    },
    {JobTitle: "Javascript-разработчик в Company2", location: "г. Краснодар", duration: "12.06.2024 - 27.08.2024", achievements: [
            "Achievement 1",
            "Achievement 2",
            "Achievement 3",
        ]
    }
]

