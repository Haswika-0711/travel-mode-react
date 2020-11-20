import React from 'react'
import {Form,Row,Col} from 'react-bootstrap'
export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
   
    <Form>
    <Row >
            <Col>
              <Form.Group controlId="Form.Amount">
                <Form.Control
                  name="amount"
                  type="text"
                  value={amount}
                  onChange={onChangeAmount}
                  placeholder="Enter amount" />
              </Form.Group>
              </Col>
            <Col>
              <Form.Group >
                <Form.Control as="select"
                  onChange={onChangeCurrency}
                  value={selectedCurrency}
                >
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            </Row>
    </Form>
     
   
  )
}