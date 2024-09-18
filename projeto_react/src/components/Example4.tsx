import { useEffect, useState } from "react";

interface Address {

    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;

}

const Example4Component = () => {

    const [loading, setLoading] = useState(false);
    const [zipcode, setZipcode] = useState('');
    const [address, setAddress] = useState<Address | undefined>(undefined);

    useEffect(() => {

        if (loading && zipcode.length === 9) {

            fetch(`https://viacep.com.br/ws/${zipcode}/json`)
                .then(response => response.json())
                .then(data => {
                    setAddress(data);
                    setLoading(false);
                })
                .catch(() => {
                    setAddress(undefined);
                    setLoading(false);
                });
                
        }

    }, [loading, zipcode]);

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault(); // Impede o comportamento padrão do formulário
        setLoading(true);

    };

    return (

        <div>

            <h5>Buscar Endereço</h5>

            <form onSubmit={handleSubmit}>

                <label htmlFor="zipcode">
                    Digite o CEP (ex: 01001-000) <br />
                    <input 
                        type="text" 
                        name="zipcode" 
                        id="zipcode" 
                        value={zipcode} 
                        onChange={e => setZipcode(e.target.value)} 
                        pattern="\d{5}-\d{3}" />
                </label>

                <br />
                <br />

                <button type="submit">Buscar</button>

            </form>

            {loading && <p>Carregando...</p>}

            {!loading && address?.logradouro && (

                <div>

                    <h5>Resultado para o CEP: {zipcode}</h5>
                    <p>{address?.logradouro}</p>
                    <p>{address?.complemento}</p>
                    <p>{address?.bairro}</p>
                    <p>{address?.localidade}</p>
                    <p>{address?.uf}</p>
                    <p>{address?.cep}</p>

                </div>

            )}

        </div>

    );

};

export default Example4Component;

