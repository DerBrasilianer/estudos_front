interface Props {

    count: number
    setCount: (count: number) => void

}

const Counter = ({ count, setCount }: Props) => {

    return (

        <div className="card">

            <button onClick={() => setCount(count + 1)}>
                count is {count}
            </button>

            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>

        </div>

    )

}

export default Counter
