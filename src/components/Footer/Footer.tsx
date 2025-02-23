import Style from "./Footer.module.css"

interface Props {
    name: string;
}

export default function Footer ({name}: Props) {
    return (
        <footer className={Style.Footer}>
            <p>{name}</p>
        </footer>
    )
}