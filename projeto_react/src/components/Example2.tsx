import { useState } from "react";

const Example2Component = () => {

    return (

        <>
        
            <form>

                <h4>
                    Formulário
                </h4>

                <label htmlFor="name">

                    Nome <br />
                    <input id="name" name="name" type="text" />

                </label>

                <br />
                <br />

                <label htmlFor="email">

                    E-mail <br />
                    <input id="email" name="email" type="email" />

                </label>

                <br />
                <br />

                <button type="submit">
                    Enviar
                </button>

            </form>
        
        </>

    )

}

export default Example2Component
