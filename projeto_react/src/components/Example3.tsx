import { useState } from "react";

const Example3Component = () => {

    const [windowSize, setWindowSize] = useState ({

        width: window.innerWidth,
        height: window.innerHeight

    })

    return (

        <div>

            <h4>
                Window size
            </h4>

            <p>
                Width: {windowSize.width} <br />
                Height: {windowSize.height}
            </p>

        </div>

    )

}

export default Example3Component
