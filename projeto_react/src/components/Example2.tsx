import { useState } from "react";

interface Mydata {

    name: string
    email: string

}

const Example2Component = () => {

    const [data, setData] = useState<Mydata>({

        name: '',
        email: ''

    })


    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target

        setData({

            ...data,
            [name]: value

        })
    
    }


    const [isSubmit, setIsSubmit] = useState<boolean>(false)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (data.name && data.email) {

            setIsSubmit(true)

        }

    }


    return (

        <>
        
            <form onSubmit={handleSubmit}>

                <h4>
                    Formulário
                </h4>

                <label htmlFor="name">

                    Nome <br />
                    <input id="name" name="name" type="text" value={data.name} onChange={inputChange} />

                </label>

                <br />
                <br />

                <label htmlFor="email">

                    E-mail <br />
                    <input id="email" name="email" type="email" value={data.email} onChange={inputChange} />

                </label>

                <br />
                <br />

                <button type="submit">
                    Enviar
                </button>

                {isSubmit && (

                    <p>

                        Nome: {data.name} <br />
                        E-mail: {data.email}

                    </p>

                )}

            </form>
        
        </>

    )

}

export default Example2Component
