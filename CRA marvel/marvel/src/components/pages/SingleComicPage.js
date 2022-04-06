import SingleComic, {withSingleComicPage, SingleChar} from "../singleComic/SingleComic";

import useMarvelServices from "../services/MarvelServices";
import { useCallback } from "react";


const SingleComicPage = () => {
  

  const {getComics,clearError, loading, error, process, setProcess} = useMarvelServices();
  const SingleComicwithData = useCallback(withSingleComicPage(SingleComic, getComics), []);

    return (
        <>
          {/* <SingleComic/> */}
          <SingleComicwithData  
          clearError={clearError} 
          // loading={loading} 
          // error={error}
          process={process}
          setProcess={setProcess}
          />

        </>
    )
}


const SingleCharPage = () => {

  const {getCharacter,clearError, loading, error, process, setProcess} = useMarvelServices();
  const SingleCharwithData = useCallback(withSingleComicPage(SingleChar,getCharacter), []);

    return (
        <>
          <SingleCharwithData 
          clearError={clearError} 
          // loading={loading} 
          // error={error}
          process={process}
          setProcess={setProcess}
          />

        </>
    )
}

export default SingleComicPage;
export {SingleCharPage};