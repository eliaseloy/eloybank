import React, { useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { ContainerPage, TitlePage } from "../../components/Main";
import CurrencyFormat from "react-currency-format";
import Global from "../Global";

import { Panel1 } from './styled';



const Page = () => {

  var newBalance = 0.00;

  var newBalanceDest = 0.00;

  const [renderButtons, setRenderButtons] = useState(false);

  var [accNumber, setAccNumber] = useState();
  
  var [agDest, setagDest] = useState();
  
  var [accDest, setAccDest] = useState();

  const [values, setValues] = useState();
  console.log(values);

  const handleChangeValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };


  async function handleClickLogin () {
    console.log('values = ' + values.agencyId);
    console.log('values = ' + values.number);
    console.log('values = ' + values.password);
    Axios.get("http://localhost:3003/login", {
      params: {
        agencyId: values.agencyId,
        number: values.number,
        password: values.password
      }
    }).then((response) => {
      console.log("response: " + response)
      console.log(response.data);
      if (response.status===200) {
        alert("Login Sucess");
        setRenderButtons(true);
        console.log(response.data.id);
        setAccNumber(accNumber = response.data.id);
        console.log(accNumber); 
      }else {
        if (response.status===204) {
          alert("Login failed")
        }
      }
    }).catch(error => alert("Login failed. Check the informations"));
  };

  const validationsLogin = yup.object().shape({
    agency: yup.number(),
    number: yup.number(),
    password: yup.string().min(8, "The password must be at least 8"),
  });

  const submitLogin = () => {

  }


  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3003/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
      
    });
  };

//  const handleClickOper = () => {
//  }

  const [chooseType, setChooseType] = useState(false);
  const [chooseTransfer, setChooseTransfer] =useState(false);

  const handleClickDepositWithraw = () => {
    setChooseTransfer(false);
    setChooseType(true);
  };


  const handleClickTransfer = () => {
    setChooseType(false);
    setChooseTransfer(true);
  };

  const handleClickCloseAccount = () => {
    setChooseTransfer(false);
    setChooseType(false);
  };

  const handleClicChangePassword = () => {
    setChooseTransfer(false);
    setChooseType(false);
  };

  async function handleClickSaveRegister () {
    console.log("entrando na função hangleClickSaveRegister");
    console.log(accNumber);
    await Axios.get("http://localhost:3003/account/:id", {
      params: {
        id: accNumber
      }
    }).then((response) => {
      if (response.status===200) {
        console.log("response.data.balance: " + parseFloat(response.data.balance));
        const balanceOld = (parseFloat(response.data.balance));
        console.log("balanceOld antes do if type: " + balanceOld);
        if (values.type === "W") {
          if (parseFloat(balanceOld) >= parseFloat(values.amount)) {
            newBalance = ((parseFloat(balanceOld)) - (parseFloat(values.amount)));
            console.log("novo saldo: " + newBalance);
            saveNewBalance(accNumber, newBalance);
          } else {
            alert("Sorry! Insufficient funds to proceed your withdraw!")
          }
        } else if (balanceOld >= 0) {
          console.log("values.amount: " + parseFloat(values.amount));
          newBalance = ((parseFloat(values.amount)) + (parseFloat(balanceOld)));
          console.log("novo saldo: " + newBalance);
          saveNewBalance(accNumber, newBalance);
        } else {
          console.log("values.amount: " + values.amount);
          newBalance = (parseFloat(values.amount));
          console.log("newBalance: " + newBalance);
          console.log("saindo da função hangleClickSaveRegister");
          saveNewBalance(accNumber, newBalance);
          }
      } else if (response.status===204) {
        console.log(response.data.id);
        }
    }).catch(error => alert("deu erro"));
  };
  
  async function handleClickSaveTransfer () {
    console.log("entrando na função hangleClickSaveTransfer");
    console.log(accNumber);
    await Axios.get("http://localhost:3003/account/:id", {
      params: {
        id: accNumber
      }
    }).then((response) => {
      if (response.status===200) {
        console.log("response.data.balance: " + parseFloat(response.data.balance));
        const balanceOld = (parseFloat(response.data.balance));
        console.log("balanceOld antes do if type: " + balanceOld);
        if (values.type === "T") {
          if (parseFloat(balanceOld) >= parseFloat(values.amount)) {
            newBalance = ((parseFloat(balanceOld)) - (parseFloat(values.amount)));
            console.log("novo saldo: " + newBalance);
            saveNewBalance(accNumber, newBalance);
            setagDest(values.agencyDest);
            setAccDest(values.numberDest);
            getBalanceDest(agDest, accDest, newBalanceDest);
          } else {
            alert("Sorry! Insufficient funds to proceed your transfer!")
          }
        }
      } else if (response.status===204) {
        console.log(response.data.id);
        }
    }).catch(error => alert("deu erro"));
  };

  async function getBalanceDest () {
    console.log("entrando na função getBalanceDest");
    console.log(" Destino: " + agDest + " - " + accDest);
    await Axios.get("http://localhost:3003/account/:id", {
      params: {
        id: accDest
      }
    }).then((response) => {
      if (response.status===200) {
        console.log(response.data);
        console.log("response.data.balance: " + parseFloat(response.data.balance));
        if (response.data.balance == null) {
          newBalanceDest = (parseFloat(values.amount));
          console.log("saldo antigo null - saldo novo destino: " + newBalanceDest);
          saveBalanceDest();
          } else {
            newBalanceDest = (parseFloat(response.data.balance)) + (parseFloat(values.amount));
            console.log("novo saldo destino: " + newBalanceDest);
            saveBalanceDest();
            }
      } else if (response.status===204) {
        console.log(response.data.id);
        }
    }).catch(error => alert("deu erro"));
  };


  async function saveNewBalance () {
    console.log("entrando na função saveNewBalance");
    console.log("accNumber: " + accNumber);
    console.log("newBalance: " + newBalance);
    await Axios.put("http://localhost:3003/account/balance/:id", {
      params: {
      },
      id: accNumber,
      balance: newBalance,
    }).then((response) => {
      console.log("response.data: " + response.status)
      if (response.status===200) {
        console.log("status 200");
        console.log("conferir no banco se gravou o novo saldo");
        alert("Moviment done!")
      }else {
        if (response.status===204) {
        console.log("status 204");
        }
      }
    }).catch(error => alert("deu erro"));
    
    setChooseType(false);
  };

  async function saveBalanceDest () {
    console.log("entrando na função saveBalanceDest");
    console.log("agDest: " + agDest);
    console.log("accDest: " + accDest);
    console.log("newBalance: " + newBalanceDest);
    await Axios.put("http://localhost:3003/account/balance/:id", {
      params: {
      },
      id: accDest,
      ag: agDest,
      balance: newBalanceDest,
    }).then((response) => {
      console.log("response.data: " + response.status)
      if (response.status===200) {
        console.log("status 200");
        console.log("conferir no banco se gravou o novo saldo");
        alert("Moviment done!")
      }else {
        if (response.status===204) {
        console.log("status 204");
        }
      }
    }).catch(error => alert("deu erro"));
    
    setChooseType(false);
  };


  return (
    <ContainerPage>
      <TitlePage>
        Eloy Bank of America | Official Website
      </TitlePage>
      <Panel1 className="container">
        <h1>Login: </h1>
        <Formik initialValues={{}} validationSchema={validationsLogin} onSubmit={submitLogin}>
          <Form className="login-form">
            <div className="login-form-group">
              <label htmlFor="bank" className="title-bank" >Bank: </label>
              <Field id="bankId" name="bank" className="form-bank" value='1' disabled />
              <ErrorMessage component="span" name="bank" className="form-error" />

              <label htmlFor="agencyId" className="title-agency" >Agency: </label>
              <Field id="agencyId" name="agencyId" className="form-agency" onChange={handleChangeValues} placeholder="Inform your agency" />
              <ErrorMessage component="span" name="agencyId" className="form-error" />

              <label htmlFor="number" className="title-number" >Account: </label>
              <Field id="number" name="number" className="form-number" onChange={handleChangeValues} placeholder="Inform your account" />
              <ErrorMessage component="span" name="number" className="form-error" />

              <label htmlFor="password" className="title-password" >Password: </label>
              <Field id="password" name="password" type="password" className="form-password" onChange={handleChangeValues} placeholder="Password" />
              <ErrorMessage component="span" name="password" className="form-error" />

              <button className="button" onClick={handleClickLogin} type="submit">Login</button>
            </div>
          </Form>
          </Formik>

          <Formik initialValues={{}} onSubmit={submitLogin} validationSchema={validationsLogin}>
          <Form className="botton-form">
            {renderButtons && (
              <div className="botton-form-group">
                <br></br>
                <button className="buttonMenu" onClick={handleClickDepositWithraw} type="button">Deposit / Withdraw</button>
                <button className="buttonMenu" onClick={handleClickTransfer} type="button">Transfer</button>
                <button className="buttonMenu" onClick={handleClicChangePassword} type="button">Change Password</button>
                <button className="buttonMenu" onClick={handleClickCloseAccount} type="button">Close Account</button>
              </div>
          )}
          </Form>
          </Formik>

          <Formik initialValues={{}} >
            <Form className="depwith-form">
              {chooseType && (
                <div className="depwith-form-group">
                <br></br>
                <br></br>
                <label htmlFor="type" className="title-type">Type: </label>
                <Field as="select" name="type" className="form-type" placeholder="" onChange={handleChangeValues} >
                    <option value="">Choose one</option>
                    <option value="D">Deposit</option>
                    <option value="W">Withdraw</option>
                </Field>
                <ErrorMessage component="span" name="type" className="form-error" />

                <label htmlFor="description" className="title-description" >Description: </label>
                <Field id="description" name="description" className="form-description" 
                  type="text" onChange={handleChangeValues} placeholder="Description" />
                <ErrorMessage component="span" name="description" className="form-error" />

                <label htmlFor="amount" className="title-amount" >Amount: </label>
                <CurrencyFormat id="amount" name="amount" className="form-amount"
                  type={'text'}
                  thousandSeparator={true}
                  isNumericString
                  decimalScale={2}
                  decimalSeparator="."
                  fixedDecimalScale={false}
//                  prefix="$"
                  allowNegative={false}
                  onChange={handleChangeValues}
                />
                <ErrorMessage component="span" name="amount" className="form-error" />

                <button className="buttonSave" onClick={handleClickSaveRegister} type="button" >Save Register</button>
              </div>
              )}
            </Form>
          </Formik>

          <Formik className="transfer-form" initialValues={{}} >
            <Form className="transfer-form-group">
              {chooseTransfer && (
                <div className="transfer-form-group">
                  <br></br>
                  <br></br>
                  <label htmlFor="type" className="title-type">Type: </label>
                  <Field as="select" name="type" className="form-type" placeholder="" onChange={handleChangeValues} >
                    <option value="">Choose one</option>
                    <option value="T">Transfer</option>
                  </Field>
                  <ErrorMessage component="span" name="type" className="form-error" />

                  <label htmlFor="description" className="title-description" >Description: </label>
                  <Field id="description" name="description" className="form-description" 
                    type="text" onChange={handleChangeValues} placeholder="Description" />
                  <ErrorMessage component="span" name="description" className="form-error" />

                  <label htmlFor="amount" className="title-amount" >Amount: </label>
                  <Field id="amount" name="amount" className="form-amount" onChange={handleChangeValues} placeholder="Amount" />
                  <ErrorMessage component="span" name="amount" className="form-error" />

                  <button className="buttonSave" onClick={handleClickSaveTransfer} type="button">Save Transfer</button>

                  <div name="transfer" className="login-form-group">
                    <label htmlFor="agencyDest" className="title-agency" >Agency destiny: </label>
                    <Field id="agencyDest" name="agencyDest" className="form-agency" onChange={handleChangeValues} placeholder="Inform agency destiny" />
                    <ErrorMessage component="span" name="agencyDest" className="form-error" />

                    <label htmlFor="numberDest" className="title-number" >Account destiny: </label>
                    <Field id="numberDest" name="numberDest" className="form-number" onChange={handleChangeValues} placeholder="Inform account destiny" />
                    <ErrorMessage component="span" name="numberDest" className="form-error" />
                  </div>
                </div>
              )}
            </Form>
          </Formik>
      </Panel1>
    </ContainerPage>
  );
}

export default Page;