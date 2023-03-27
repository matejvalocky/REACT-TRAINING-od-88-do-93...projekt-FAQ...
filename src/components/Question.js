import "./Question.css"
import { useState } from "react" // slúži na prepínanie premennej


const Question = ({title, info}) => {

    const [show, setShow] = useState(false)


    return <div>
        <section>
            <h2>{title}</h2>
            <button onClick={() => setShow(!show)}>
                Odpoveď
            </button>
        </section>
        {show && <p>{info}</p>} 
    </div>
}

export default Question