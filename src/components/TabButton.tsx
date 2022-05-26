import './TabButton.css'

export interface TabButtonInterface {
    name: string
    onClick: () => void
    active: boolean
}

export function TabButton(props: TabButtonInterface) {

    return (
        <button className={props.active ? 'active' : undefined} onClick={props.onClick} >
            {props.name}
        </button>
    )
}