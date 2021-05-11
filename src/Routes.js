import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home'

const Routes = () => {
    return (
        <Route path='/' component={Home} />
    )
}

export default Routes;