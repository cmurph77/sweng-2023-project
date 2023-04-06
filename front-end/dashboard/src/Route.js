import  {useContext} from 'react'
import NavigationContext from './context/navigation';

function Route({path, children}){
    const { currentPath } = useContext(NavigationContext);

    if (path === currentPath){
        return children;
    }

    else{
        return null;
    }
}

export default Route;