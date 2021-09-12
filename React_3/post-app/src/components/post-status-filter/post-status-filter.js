import React from 'react'
import {Button} from 'reactstrap'

const PostStatusFilter = () => {
    return(
        <div className="input-group-append">
            <Button color='primary' type='button'>Все</Button>
            <Button outline color='secondary' type='button'>Понравилось</Button>
        </div>
    )
}

export default PostStatusFilter;