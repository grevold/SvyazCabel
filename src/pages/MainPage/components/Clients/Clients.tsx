import { texts } from "../../../../texts"

import s from "./Clients.module.css"

export function Clients() {
    return (
        <div className={s.root}>
            <h1 className={s.header}>Наши клиенты</h1>
            <ul className={s.clientsList}>
                {texts.Clients.map((logo) => (
                    <li key={logo}>
                        <img
                            className={s.logo}
                            src={`${process.env.PUBLIC_URL}/clients/${logo}`}
                        />
                    </li>
                ))}
            </ul>

        </div>
    )
}