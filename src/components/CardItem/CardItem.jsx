import React, {Component} from 'react';
import ApiService from '../../services/api-service'

class CardItem extends Component{
    constructor(props){
        super(props);

        this.apiService = new ApiService();
        this.state = {
            id : '',
            name: '',
            description: '',
            price: ''
        }
    }

    async componentDidMount(){
        let {id} = this.props.match.params;
        let o = await this.apiService.getItem(id, 'api/Product/GetOrderById');
        let result = await o.json();
        
        this.setState({
            id: result.id,
            name: result.name,
            price: result.price,
            description: result.description
        });
    }
    render(){
   
       
        return(
            <div>
                <p>
                    ID
                </p>
                <p>
                    {this.state.id}
                </p>
                <p>
                    Name
                </p>
                <p>
                    {this.state.name}
                </p>
                <p>
                    Description
                </p>
                <p>
                    {this.state.description}
                </p>
                <p>
                    Price
                </p>
                <p>
                    {this.state.price}
                </p>
            </div>
        )
    }
}

export default CardItem;