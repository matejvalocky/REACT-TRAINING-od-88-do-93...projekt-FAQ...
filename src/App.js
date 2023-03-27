//React 91 - Projekt FAQ - map a rest parametr



import questions from "./data"
import Question from "./components/Question"

const App = () => {
  return <div>
    {   
    questions.map((oneQuestion) =>{
        return <Question key={oneQuestion.id} {...oneQuestion} />
      })
    }
        
        </div>


}

export default App