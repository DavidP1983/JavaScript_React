import React,{Component} from "react";
import ErrorMessage from "../errorMessage";
import  Spinner from '../spinner';

const WithData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
            error: false
            
        }
    
        componentDidMount(){
            // const{getData} = this.props
            getData() //service
            // this.gotService.getAllCharacters()
            .then((data) => {
                this.setState({
                    data,
                    error: false
                });
            })
            .catch(() => this.onError());
            
        }
    
        render() {
            const {data,error} = this.state
            console.log(data);
    
            if(error) {
                return(
                <div>
                <ErrorMessage/>
                </div>
                )
            }
    
            if(!data){
                return <Spinner/>
            }
            return <View {...this.props} data={data}/>
        }
    }
}
export default WithData;