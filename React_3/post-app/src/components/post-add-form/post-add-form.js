import React from 'react'

const PostAddForm = () => {
 
    return (
        <form className="form-inline d-flex my-3 ">
            <input className="form-control flex-grow-1 mb-2 mr-1 "
                   type="text"
                   placeholder="О чем вы думаете сейчас"
              
                   
            />
            <button type="submit" className="btn btn-outline-secondary mb-2">Добавить</button>
        </form>
    )
}

export default PostAddForm;