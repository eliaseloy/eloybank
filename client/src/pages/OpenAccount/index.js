import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { ContainerPage, TitlePage } from '../../components/Main';
import swal from 'sweetalert';
import Global from "../Global";

import { Panel1 } from './styled';
import { useHistory } from "react-router-dom";


const Page = () => {

    var numAccount = 0;

    const [CustId, setCustId] = useState(Global.CustId);

    const [values, setValues] = useState();
    console.log(values);

    const handleChangeValues = (value) => {
        setValues((prevValues) => ({
          ...prevValues,
          [value.target.name]: value.target.value,
        }));
    };

    const [agencies, setAgencies] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3003/agency").then(response => {
            setAgencies(response.data);
        })
    },[]);

  


//    const handleGetCustomerId = () => {
//        return (
//            Axios.get("http://localhost:3003/customers/", {
//                id: values.custId,
//            }).then((response) => {
//                console.log(CustId);
//            })
//        );
//    }

const handleClickSaveCustomer = () => {
        return (
            Axios.post("http://localhost:3003/customers", {
                type: values.type,
                name: values.name,
                email: values.email,
                doc: values.doc,
                birth: values.birth,
                address: values.address,
                zip: values.zip,
                city: values.city,
                state: values.state,
                country: values.country,
            }).then((response) => {
                console.log(response);
                console.log(Global.CustId);
                setCustId((Global.CustId = response.data.id))
                console.log("CustId: " + CustId + " Global.CustId: " + Global.CustId);
            })
    
        );
    };

    const history = useHistory();

    const handleClickOnlineBanking = () => {
        history.push('/OnlineBanking')
    }
    async function handleGetNumberAccount() {
        console.log("entrando na função handleGetNumberAccount");
        await Axios.get("http://localhost:3003/account").then(response => {
                console.log("response.data = " + response.data);
                console.log(response.data.length);
                console.log("response = " + response);
                console.log(response.length);
                numAccount = 0;
                if ((response.data.length) === 0) {
                    numAccount = 1;
                    console.log("lenght retornou zero então ids é " + numAccount)
                    return numAccount;
                }else {
                    numAccount = (response.data.length) + 1;
                    console.log("tamanho lenght = " + [response].length);
                    console.log("numAccount será = " + numAccount);
                    return numAccount;
                }
            })
            console.log("saindo na função handleGetNumberAccount");
        }

    async function handleClickOpenAccount () {
        console.log("entrando na função handleClickOpenAccount");
        await handleGetNumberAccount();
        console.log("retorno do numAccount =" + numAccount);
//        console.log("valor a ser jogado em customerId = " + Global.CustId)
        return (
            Axios.post("http://localhost:3003/account", {
                bankId: values.bankId,
                agencyId: values.agencyId,
                number: numAccount,
                password: values.password,
                customerId: Global.CustId,
            }).then((response) => {
                console.log(response);
                swal({
                    text: "Congrats!!! Now you are a costumer of Eloy Bank of America",
                    buttons: {
                    cancel: "Close",
                    },
                  })
                setCustId((Global.CustId = ""));
//                console.log("saindo na função handleClickOpenAccount");
                handleClickOnlineBanking();
            })
        );        
    };

    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          alert(response.data.msg);
          console.log(response);
          
        });
      };
    
    const validationsRegister = yup.object().shape({
          email: yup.string().email("invalid email").required("required"),
          birth: yup.date().required(),
          doc: yup.string().required("required").min(6, "min 6"),
          password: yup.string().min(8, "min 8").required("required"),
          confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passords must be equals"),
        });


    return (
        <ContainerPage>
            <TitlePage>
                Eloy Bank of America | Official Website
            </TitlePage>
            <Panel1 className="container">
                <h1>Customer:</h1>
                <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationsRegister}>
                    <Form className="login-form">
                        <div className="login-form-group">
                            <label htmlFor="type" className="title-col1">Type: </label>
                            <Field as="select" name="type" className="form-type" placeholder=""
                                onChange={handleChangeValues}>
                                <option value="">Choose one</option>
                                <option value="P">Person</option>
                                <option value="C">Company</option>
                            </Field>
                            <ErrorMessage component="span" name="type" className="form-error" />

                            <label htmlFor="name" className="title-name" >Full Name: </label>
                            <Field id="name" name="name" className="form-name" placeholder="Your full name here"
                            onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="name" className="form-error" />
                        </div>
                        <div className="login-form-group">
                            <br></br>
                            <label htmlFor="email" className="title-col1">Email: </label>
                            <Field id="email" type="email" name="email" className="form-email" placeholder="your best email" 
                                onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="email" className="form-error" />

                            <label htmlFor="doc" className="title-doc">Document: </label>
                            <Field id="doc" name="doc" className="form-doc" placeholder="Document number" onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="doc" className="form-error" />

                            <label htmlFor="birth" className="title-birth">Date of birth: </label>
                            <Field id="birth" type="date" format="mm-dd-yyyy" name="birth" className="form-birth" placeholder="Date of birth" onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="birth" className="form-error" />
                        </div>
                        <div className="login-form-group">
                            <br></br>
                            <label htmlFor="address" className="title-col1">Address: </label>
                            <Field id="Address" name="address" className="form-address" placeholder="Your best address" onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="address" className="form-error" />

                            <label htmlFor="zip" className="title-zip">Zip Code: </label>
                            <Field id="Zip" name="zip" className="form-zip" placeholder="Zip code" onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="zip" className="form-error" />
                        </div>
                        <div className="row">
                            <br></br>
                            <label htmlFor="city" className="title-col1">City: </label>
                            <Field id="city" name="city" className="form-city" placeholder="City" onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="city" className="form-error" />

                            <label htmlFor="state" className="title-state">State: </label>
                            <Field id="State" name="state" className="form-state" placeholder="State" onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="state" className="form-error" />

                            <label htmlFor="country" className="title-country">Country: </label>
                            <Field as="select" name="country" className="form-country" placeholder="Choose your country" onChange={handleChangeValues}>
                                <option value="">Choose your country</option>
                                <option value="US">United States</option>
                                <option value="BR">Brazil</option>
                                <option value="CA">Canada</option>
                                <option value="CH">Chile</option>
                            </Field>
                            <ErrorMessage component="span" name="country" className="form-error" />
                        </div>
                        <br></br>
                        <br></br>
                        <button className="button" onClick={handleClickSaveCustomer} type="submit">Save Customer</button>
                        <br></br>
                        <br></br>
                        <h1>Account: </h1>
                        <div className="login-form-group">
                            <label htmlFor="bank">Bank: </label>
                            <Field as="select" name="bankId" className="form-bank" placeholder="" onChange={handleChangeValues}>
                                <option value="">Choose your bank</option>
                                <option value="1">Eloy Bank of America</option>
                            </Field>
                            <ErrorMessage component="span" name="bank" className="form-error" />

                            <label htmlFor="agency" className="title-agency">Agency: </label>
                            <Field as="select" name="agencyId" className="form-agency" placeholder="Choose your agency" onChange={handleChangeValues}>
                                <option value="">Choose your agency</option>
                                {agencies.map(agency => (<option key={agency.id} value={agency.id}>{agency.name}</option>))}
                            </Field>
                            <ErrorMessage component="span" name="agency" className="form-error" />
                        </div>
                        <br></br>
                        <div className="login-form-group">
                            <label htmlFor="number" className="title-col1">Account number: </label>
                            <Field id="Number" name="number" className="form-account" 
                                placeholder="Will be generated" disabled/>
                            <ErrorMessage component="span" name="number" className="form-error" />

                            <label htmlFor="customerId" className="title-custId">Customer ID: </label>
                            <Field id="customerId" name="customerId" className="form-custId" disabled
                                placeholder="will be get" value={Global.CustId} onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="customerId" className="form-error" />

                        </div>
                        <br></br>
                        <br></br>
                        <div className="login-form-password">
                            <label className="title-password" htmlFor="password">Password: </label>
                            <Field id="password" type="password" name="password" className="form-password" 
                                placeholder="Your password" onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="password" className="form-error" />
                            <label htmlFor="confirmPassword" className="title-confirmPass">Confirm your password: </label>
                            <Field id="confirmPassword" type="password" name="confirmPassword" className="form-confirmPass" 
                                placeholder="Confirm your password" onChange={handleChangeValues}/>
                            <ErrorMessage component="span" name="confirmPassword" className="form-error" />
                        </div>
                        <br></br>
                        <br></br>
                        <button className="button" onClick={handleClickOpenAccount} type="submit">Save Account </button>
                    </Form>
                </Formik>
            </Panel1>            
        </ContainerPage>

);

}


export default Page;