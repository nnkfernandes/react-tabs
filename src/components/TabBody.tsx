import './TabBody.css'

export interface TabBodyInterface {
    content: string
}

export function TabBody(props: TabBodyInterface) {
    return (

        <div className='tab-container'>
            {props.content}
        </div>
    )
}