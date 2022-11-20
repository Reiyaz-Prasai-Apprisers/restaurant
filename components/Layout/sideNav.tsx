import styles from "../../styles/Layout.module.css"

// Props type for Header Component
export interface SideNavProps{
}

// Create a common header for the app
const SideNav:React.FC<SideNavProps> =  ({}) =>{
    return (
        <div >
           SideNav
        </div>
    )
}

export default SideNav;