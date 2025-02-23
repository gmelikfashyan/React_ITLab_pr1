import Style from "./Header.module.css"
import classNames from "classnames"

interface Props {
    name: string;
}

export default function Header ({name}: Props) {
    return (
        <header className={Style.Header}>
            <div className={classNames(Style.container, Style.containerWrapper)} >
                <p>{name}</p>
                <nav>
                    <ul>
                        <li><a href={"#about"}>About</a></li>
                        <li><a href={"#skills"}>Skills</a></li>
                        <li><a href={"#experience"}>Experience</a></li>
                        <li><a href={"#education"}>Education</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}