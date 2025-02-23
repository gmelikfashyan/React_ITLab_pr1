import Style from "./About.module.css"
import styles from "../Header/Header.module.css"
import classNames from "classnames";
import GitHubIcon from '../../assets/github-logo.png'

interface Props {
    name: string,
    description: string,
    github: string,
    image: string,
}

export default function About({name, description, github, image}: Props) {
    return (
        <section id="about" className={classNames(styles.containerWrapper, Style.aboutWrapper)}>
            <img src={image} alt={name} />
            <div className={Style.informationWrapper}>
                <h1>Привет, я {name}</h1>
                <p>{description}</p>
                <a href={github}>
                    <button>
                        <img className={Style.gitImage} src={GitHubIcon} />
                    </button>
                </a>
            </div>
        </section>

    )

}