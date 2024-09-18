import { PropsWithChildren } from "react"

interface MyComponentProps extends PropsWithChildren {

    color?: string

}

const MyComponent = ({ color, children }: MyComponentProps) => {

    return (

        <p style={{color: color}}>

            {children}

        </p>

    )

}

export default MyComponent
