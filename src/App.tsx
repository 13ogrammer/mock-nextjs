import { Router } from './Router'
import Route from './Route'
import Breeds from './Breeds'
import Breed from './Breed'

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Breeds />
      </Route>
      <Route path="/breed">
        <Breed />
      </Route>
    </Router>
  )
}

export default App