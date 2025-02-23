import Style from "./Skill.module.css"

interface Props {
    name: string;
    level: string;
    image: string;
}

export default function Skill({name, level, image}: Props) {
    return (
        <section className={Style.skillWrapper}>
            <img src={image} />
            <div>
                <h3>{name}</h3>
                <p>{level}</p>
            </div>
        </section>
    )
}