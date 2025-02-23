import {skills} from "../../data/data.ts";
import Skill from "../Skill/Skill.tsx";
import classNames from "classnames";
import Style from "../Header/Header.module.css"
import styles from "./Skills.module.css"

export default function Skills () {
    return (
        <section id="skills" className={styles.skillsSection}>
            <h2>Навыки</h2>
            <ul className={classNames(Style.containerWrapper, styles.skillsContainer)}>
                {skills.map((elem, index) => (
                    <li key={index}>
                        <Skill name={elem.name} level={elem.level} image={elem.image} />
                    </li>
                ))}
            </ul>
        </section>
    )
}