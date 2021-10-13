import React, {Component} from 'react';
// import { Spinner } from 'reactstrap';
import styled from 'styled-components';
// import gotService from '../../servises/gotService';
// import  Spinner from '../spinner';
// import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types'

const LiBlock = styled.ul`
.list-group-item {
    cursor: pointer;
}
`

 export default class ItemList extends Component {
    // gotService = new gotService();

    // state = {
    //     itemList: null,
    //     error: false
        
    // }

    // componentDidMount(){
    //     const{getData} = this.props
    //     getData() //service
    //     // this.gotService.getAllCharacters()
    //     .then((itemList) => {
    //         this.setState({
    //             itemList,
    //             error: false
    //         });
    //     })
    //     .catch(() => this.onError());
        
    // }

    componentDidCatch(){
        this.setState({
            data: null,
            error: true
        })
    }

    
    onError = (status) => {
        this.setState({
            data: null,
            error: true
        })
    }

    renderItem(arr) {
        return arr.map((item,i) => {
           const {url} = item;
        //    console.log(url);
           let id = url.replace( /^\D+/g, '');
           const label = this.props.renderItem(item); // render function
       
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {/* {item.name} */}
                    {label}
                </li>
            )
        });
    }

    render() {
        // const {itemList,error} = this.state
        // console.log(itemList);

        // if(error) {
        //     return(
        //     <div>
        //     <ErrorMessage/>
        //     </div>
        //     )
        // }

        // if(!itemList){
        //     return <Spinner/>
        // }
        const {data} = this.props;
        const items = this.renderItem(data);


        return (
            <LiBlock className="item-list list-group my-2">
                {items}
            </LiBlock>
        );
    }
}


ItemList.defaultProps = {
onItemSelected: () => {}
}

ItemList.propTypes = {
onItemSelected: PropTypes.func,
// getData: PropTypes.arrayOf(PropTypes.object)
}


                                            /*HOC*/

// const f = () => {
//     return ItemList;
// }

// export default f();



// const withData = (View, getData) => {
//     return class extends Component {
//         state = {
//             data: null,
//             error: false
            
//         }
    
//         componentDidMount(){
//             // const{getData} = this.props
//             getData() //service
//             // this.gotService.getAllCharacters()
//             .then((data) => {
//                 this.setState({
//                     data,
//                     error: false
//                 });
//             })
//             .catch(() => this.onError());
            
//         }
    
//         render() {
//             const {data,error} = this.state
//             console.log(data);
    
//             if(error) {
//                 return(
//                 <div>
//                 <ErrorMessage/>
//                 </div>
//                 )
//             }
    
//             if(!data){
//                 return <Spinner/>
//             }
//             return <View {...this.props} data={data}/>
//         }
//     }
// // }
// const{getAllCharacters} = new gotService();
// withData(ItemList, getAllCharacters);
