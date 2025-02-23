import classNames from "classnames";
import Style from "../Header/Header.module.css";
import {experience} from "../../data/data.ts";
import styles from "./Experience.module.css";

export default function Experience () {
    return (
        <section id="experience" className={classNames(Style.containerWrapper, styles.experienceSection)}>
            <h2>Опыт</h2>
            <div className={classNames(styles.experienceWrapper)}>
                {experience.map((elem, index) => (
                    <div key={index} className={styles.experienceElem}>
                        <div className={styles.experienceInfo}>
                            <h3>{elem.JobTitle}</h3>
                            <p>{elem.location}</p>
                            <p>{elem.duration}</p>
                        </div>
                        <ul className={styles.achievementsList}>
                            {elem.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}