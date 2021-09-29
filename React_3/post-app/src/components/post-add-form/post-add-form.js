import React,{Component} from 'react'

export default class PostAddForm extends Component{
  constructor(props){
      super(props);
      this.state = {
          text: ''
      }
      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange (e){
      this.setState({
       text: e.target.value
    });
  }

  onSubmit(e){
      e.preventDefault();
      this.props.onAdd(this.state.text);
      this.setState({
          text: ''
      })
  }

  render(){
    return (
        <form className="form-inline d-flex my-3 " onSubmit={this.onSubmit}>
            <input className="form-control flex-grow-1 mb-2 mr-1 "
                   type="text"
                   placeholder="О чем вы думаете сейчас"
                   onChange={this.onValueChange}
                   value={this.state.text}
              
                   
            />
            <button type="submit" className="btn btn-outline-secondary mb-2">Добавить</button>
        </form>
    )
  }
}

