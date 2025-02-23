
import {educations} from "../../data/data.ts";
import styles from './Education.module.css'
import classNames from "classnames";
import Style from "../Header/Header.module.css"

export default function Education() {
    return (
        <section id="education" className={classNames(Style.containerWrapper, styles.educationSection)}>
            <h2>Образование</h2>
            {educations.map((elem, index) => (
                <div key={index} className={styles.educationElem}>
                    <div className={styles.educationInfo}>
                        <h3>{elem.name}</h3>
                        <p>{elem.city}</p>
                        <p>{elem.endDate}</p>
                    </div>
                    <div className={styles.routeLine}>
                        <div className={styles.educationPoint}></div>
                        <div className={styles.educationLine} style={{visibility: index === educations.length - 1 ? 'hidden' : 'visible'}}></div>
                    </div>
                </div>
                ))}
        </section>
    )
}