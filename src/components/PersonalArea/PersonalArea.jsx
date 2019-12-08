import React, {Component} from 'react';
import './PersonalArea.css';

class PersonalArea extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            description: "",
            price: 0
        }

        this.changeName = this.changeName.bind(this);
        this.saveOnServer = this.saveOnServer.bind(this);
    }

    changeName(e){
        e.preventDefault();
        const { target: { name, value } } = e
        this.setState({
            [name]: value
        });
    }
    async saveOnServer(){
        let Product = {
            name: this.state.name,
            description: this.state.description,
            price: Number(this.state.price)
        };
        console.log(Product);   
        let json = await fetch('https://localhost:44385/api/product/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(Product)
        });
        
        /*if (json.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            let json1 = await json.json();
            console.log(json1)
          } else {
            alert("Ошибка HTTP: " + json.status);
          }*/
    }
    render(){
        return(
            <div className="div_lc">
                <div>
                    <p>Наименование</p>
                    <input type="text" name="name" onChange={this.changeName} value={this.state.name} />
                </div>
                <div>
                    <p>Описание</p>
                    <input type="text" name="description" onChange={this.changeName} value={this.state.description}></input>
                </div>
                <div>
                    <p>Цена</p>
                    <input type="text" name="price" onChange={this.changeName} value={this.state.price}></input>
                </div>
                <button onClick={this.saveOnServer}>Сохранить</button>
            </div>

        )
        
    }
}

export default PersonalArea;