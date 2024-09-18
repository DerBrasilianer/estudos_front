import { useState } from "react"

const ExampleComponent = () => {

    const [name, setName] = useState<string>('')

    return (

        
        <>
        
            <h6>
                Exemplo de estado
            </h6>

            <p>
                Nome: 
                <span>
                    {name}
                </span>
            </p>

            <button onClick={() => setName(' Vinicius')}>
                Clique Aqui
            </button>
        
        </>

    )

}

export default ExampleComponent
