interface MyComponent {

    color?: string
    
}

const MyComponent = (props: MyComponent) => {

    return (

        <p style={{color: props.color}}>

            Hello, world!

        </p>

    )

}

export default MyComponent
