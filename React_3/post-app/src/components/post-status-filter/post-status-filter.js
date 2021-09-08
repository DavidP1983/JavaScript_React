import React from 'react'

const PostStatusFilter = () => {
    return(
        <div className="input-group-append">
            <button className="btn btn-primary" type="button">
                Все
            </button>
            <button className="btn btn-outline-secondary" type="button">
                Понравилось
            </button>
        </div>
    )
}

export default PostStatusFilter;