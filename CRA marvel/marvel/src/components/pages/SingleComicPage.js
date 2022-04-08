import SingleComic, {withSingleComicPage, SingleChar} from "../singleComic/SingleComic";

import useMarvelServices from "../services/MarvelServices";
import { useCallback } from "react";


const SingleComicPage = () => {
  

  const {getComics,clearError, /*loading, error,*/ process, setProcess} = useMarvelServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const {getCharacter,clearError, /*loading, error,*/ process, setProcess} = useMarvelServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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