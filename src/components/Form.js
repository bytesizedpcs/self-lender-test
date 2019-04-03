import React, { Component } from 'react';
import White_Arrow from '../Assets/White_Arrow.svg';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      firstNameValid: true,
      lastNameValid: true,
      addressValid: true,
    }
  }

  validateForm() {
    const { firstNameValid, lastNameValid, addressValid } = this.state;

    return (firstNameValid && lastNameValid && addressValid);
  }

  errorClass(isValid, classOfError) {
    return (isValid ? '' : classOfError);
  }

  inputErrorClass(isValid) {
    return (isValid ? '' : 'input-has-error');
  }

  labelErrorClass(isValid) {
    return (isValid ?  '' : 'label-has-error');
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

  }

  handleSubmit = (event) => {
    const { firstName, lastName, address, address2 } = this.state;

    //check to see if req fields are falsy
    //if field is falsy setState of valid items
    this.setState({
      firstNameValid: !!firstName,
      lastNameValid: !!lastName,
      addressValid: !!address,
    }, () => {
      if (this.validateForm()) alert(JSON.stringify({ firstName, lastName, address, address2 }));
    })
    
    event.preventDefault();
  }

  render() {
    const { firstName, lastName, address, address2, firstNameValid, lastNameValid, addressValid } = this.state;

    return (
      <form className="main-form" onSubmit={this.handleSubmit}>

        <label className={`${this.errorClass(firstNameValid, 'label-has-error')}`}>
          {this.errorClass(firstNameValid, 'label-has-error') ? 'FIRST NAME REQUIRED' : 'FIRST NAME'}
        </label>
        <input 
            name="firstName" 
            className={`form-input ${this.errorClass(firstNameValid, 'input-has-error')}`}
            value={firstName}
            onChange={this.handleInputChange}
        ></input>

        <label className={`${this.errorClass(lastNameValid, 'label-has-error')}`}>
          {this.errorClass(lastNameValid, 'label-has-error') ? 'LAST NAME REQUIRED' : 'LAST NAME'}
        </label>
        <input 
            name="lastName" 
            className={`form-input ${this.errorClass(lastNameValid, 'input-has-error')}`}
            value={lastName}
            onChange={this.handleInputChange}
        ></input>

        <label className={`${this.errorClass(addressValid, 'label-has-error')}`}>
          {this.errorClass(addressValid, 'label-has-error') ? 'ADDRESS REQUIRED' : 'ADDRESS'}
        </label>
        <input 
            name="address" 
            className={`form-input ${this.errorClass(addressValid, 'input-has-error')}`}
            value={address}
            onChange={this.handleInputChange}
        ></input>

        <label>
          ADDRESS 2 (OPTIONAL)
        </label>
        <input 
            name="address2" 
            className="form-input"
            value={address2}
            onChange={this.handleInputChange}
        ></input>

        <button className="submit-button" type="submit">Next <img alt="" src={White_Arrow} /></button>
      </form>
    )
  }
}

export default Form;
