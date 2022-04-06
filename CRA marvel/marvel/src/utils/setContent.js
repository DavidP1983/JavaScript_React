import Spinner from "../components/spinner/Spinner";
import Skeleton from "../components/skeleton/Skeleton";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const setContent = (process, Component, data) => {
    switch(process) {
        case 'waiting':
            return <Skeleton/>;
            break;
        case 'loading':
            return <Spinner/>
            break;
        case 'confirmed':
            return <Component data={data} />
            break;
        case 'error': 
            return <ErrorMessage/>
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;