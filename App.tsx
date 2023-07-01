import { Router } from './Router'
import Route from './Route'
import Breeds from './pages/breeds'
import Breed from './pages/breed'

const App = ({ initialPath}: {initialPath: string}) => {
  return (
    <Router initialPath={initialPath}>
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