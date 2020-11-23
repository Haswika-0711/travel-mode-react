import React from "react";
import { Form, Row, Col } from 'react-bootstrap'
class CurrencyRow extends React.Component {

  render() {
    return (
      <Form>
        <Row >
          <Col>
            <Form.Group controlId="Form.Amount">
              <Form.Control
                name="amount"
                type="number"
                value={this.props.amount}
                onChange={this.props.onChangeAmount}
                placeholder="Enter amount" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group >
              <Form.Control as="select"
                onChange={this.props.onChangeCurrency}
                value={this.props.selectedCurrency}
              >
                {this.props.currencies.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>

    )
  }
}

export default CurrencyRow;