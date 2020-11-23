import React from "react";
import axios from "axios";
import {Container,Card,Badge} from 'react-bootstrap'
import CurrencyRow from "./CurrencyRow"
class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            fromCurrency: "USD",
            toCurrency: "INR",
            amount: "1",
            exchangeRate: "",
            amountInFromCurrency: true
           
        };
    }
    
    componentDidMount() {
        this.api_call();
        this.statePopulate();
        setInterval(this.api_call, 10000);
    }
    api_call = () => {
        axios
            .get("https://api.exchangeratesapi.io/latest")
            .then(response => {
                const currencyAr = ["EUR"];
                for (const key in response.data.rates) {
                    currencyAr.push(key);
                }
                this.setState({ currencies: currencyAr });
            })
            .catch(err => {
                console.log("oppps", err);
            });
        //console.log("api called");
    }

    statePopulate = () => {
        axios
        .get(
            `https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency
            }&symbols=${this.state.toCurrency}`
        )
        .then(response => {
            this.setState({ exchangeRate: response.data.rates[this.state.toCurrency] });
        })
    }

    componentDidUpdate(prevProps, prevState){
        if ((prevState.fromCurrency !== this.state.fromCurrency) || (prevState.toCurrency !== this.state.toCurrency)) {
            axios
            .get(
              `https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency
              }&symbols=${this.state.toCurrency}`
            )
            .then(response => {
              this.setState({ exchangeRate: response.data.rates[this.state.toCurrency] });
            })
            .catch(error => {
              console.log("Opps", error.message);
            });
        }
    }
    handleFromAmountChange = e => {
        this.setState({
            amount: e.target.value,
            amountInFromCurrency:true
        })
    }
    handleToAmountChange = e => {
        this.setState({
            amount: e.target.value,
            amountInFromCurrency:false
        })
      }
      

    render() {
        let toAmount, fromAmount
  if (this.state.amountInFromCurrency) {
    fromAmount = this.state.amount
    toAmount = (this.state.amount * this.state.exchangeRate).toFixed(5)
  } else {
    toAmount = this.state.amount
    fromAmount = (this.state.amount/ this.state.exchangeRate).toFixed(5)
  }
        return (
            <Container>
      <Card style={{ width: '18rem' }} className="text-center" bg="light" border="primary">
      <Card.Body>
      <Card.Title>Currency Exchange</Card.Title>
      <CurrencyRow
      currencies={this.state.currencies}
      selectedCurrency={this.state.fromCurrency}
      onChangeCurrency={e => this.setState({ fromCurrency: e.target.value })}
      onChangeAmount={this.handleFromAmountChange}
      amount={fromAmount}
      />
      <CurrencyRow
                    currencies={this.state.currencies}
                    selectedCurrency={this.state.toCurrency}
                    onChangeCurrency={e => this.setState({ toCurrency: e.target.value })}
                    onChangeAmount={this.handleToAmountChange}
                    amount={toAmount}
                />

      <h1><Badge  variant="info">{toAmount}</Badge></h1>
    </Card.Body>
    </Card>
    </Container>
           
                
                
           
        )
    }
}

export default Converter;