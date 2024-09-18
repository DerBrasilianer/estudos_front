import { PropsWithChildren } from "react"

interface MyComponentProps extends PropsWithChildren {

    color?: string
    identifyClick?: () => void

}

const MyComponent = ({ color = 'blue', identifyClick, children }: MyComponentProps) => {

    return (

        <>

        <p style={{color: color}}>

            {children}

        </p>

        <button onClick={() => identifyClick ? identifyClick(): null}>
            Click
        </button>

        </>

    )

}

export default MyComponent
