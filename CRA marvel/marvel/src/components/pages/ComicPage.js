import { Helmet, HelmetProvider } from 'react-helmet-async';

import ComicsPage from "../comicsPage/comicsInfo";


const ComicPage = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Our comic's list"
                    />
                    <title>Comic's Page</title>
                    <link rel="icon" type="image/png" href="https://kids.scholastic.com/content/kids64/en/books/_jcr_content/root/responsivegrid/responsivegrid_copy_/responsivegrid_1475068491/responsivegrid_41115/image_1985417245.coreimg.100.512.png/1625685144340/brand-icon-marvel.png" />
                </Helmet>
            </HelmetProvider>

            <ComicsPage />
        </>
    )
}

export default ComicPage;