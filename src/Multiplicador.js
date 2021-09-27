import {Component} from "react";
import "./Multiplicador.css"

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            num1:  0,
            num2:  0,
            res:  0
        };
        this.handleNum1 = this.handleNum1.bind(this);
        this.handleNum2 = this.handleNum2.bind(this);
    }

    handleNum1(event) {
        this.setState({
            num1: Number(event.target.value)
        });
    }

    handleNum2(event) {
        this.setState({
            num2: Number(event.target.value)
        });
    }

    multiplicar(){
        this.setState({
            res: this.state.num1 * this.state.num2,
        })
    }

    
    render() {
        return(
            <div>
                <div className="titulo">
                <h1>Multiplicador de Números</h1>
                </div>
                <div className="resultado">
                    <input value={this.state.num1} onChange={this.handleNum1}/>
                    <span> X </span>
                    <input value={this.state.num2} onChange={this.handleNum2}/>
                    <button onClick = {this.multiplicar.bind(this)}>Calcular</button>
                </div>   
                <div className="Resultado">
                    <h1> Resultado: {this.state.res}</h1>
                </div>
                </div>
        )
    }

}