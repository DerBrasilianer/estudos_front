interface MyComponentProps {

    color?: string

}

const MyComponent = ({ color }: MyComponentProps) => {

    return (

        <p style={{color: color}}>

            Hello, world!

        </p>

    )

}

export default MyComponent
