import { useState } from "react"
import { TabBody } from "./TabBody"
import { TabButton } from "./TabButton"
import "./Tabs.css"


export interface TabsProps {
    tabs: Array<any>
}

export function Tabs(props: TabsProps) {

    const [currentTab, setCurrentTab] = useState(0)
    const buttons = props.tabs.map((value, index) => <TabButton key={value.tabName} active={currentTab === index} name={value.tabName} onClick={() => { setCurrentTab(index) }} />)
    return (
        <div className='wrapper'>
            <div className='btn-wrapper'>
                {buttons}
            </div>
            <TabBody content={props.tabs[currentTab].tabContent} />
        </div>
    )
}