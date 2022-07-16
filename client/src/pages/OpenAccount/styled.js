import styles from 'styled-components';

export const Panel1 = styles.div`
    color: #fff;
    width: 90%;
    height: 90%;
    margin: auto;
    background-color: #ebebeb;
    padding: 20px 15px;
    margin-top: 6px;
    border-radius: 7px;
    font-family: Roboto, sans-serif;
    box-shadow: 10px 11px rgba(0, 0, 0, 0.7);

    ./container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    h1{
        margin-top: 1px;
        color: black;
    }

    h2{
        margin-top: 5px;
        color: black;
    }

    h3{
        margin-top: 5px;
        color: black;
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
        font-weight: normal;
    }

    .message{
        margin-left: 200px;
        margin-top: 0px;
        margin-bottom: 5px;
        color: red;
        font-size: 20px;
    }

    .login-form{
        color:black;
    }

    .colum2{
        margin-left: 100px;
    }

    .button{
        cursor: pointer;
        background: transparent;
        font-size: 16px;
        font-weight: 800;
        border-radius: 3px;
        color: palevioletred;
        border: 2px solid palevioletred;
        margin: 0 1em;
        margin-left: 100px;
        padding: 0.25em 1em;
        transition: 0.5s all ease-out;
        &:hover {
          background-color: palevioletred;
          color: white;
        }
    }

    .title-col1{
        margin-left: 0;
    }

    .form-col1{
        margin-left: 28px;
        height: 26px;
    }

    .title-name{
        margin-left: 50px;
    }

    .title-doc{
        margin-left: 30px;
        martin-top: 10px;
    }

    .title-birth{
        margin-left: 30px;
        martin-top: 10px;
    }

    .title-zip{
        margin-left: 30px;
        martin-top: 10px;
    }

    .title-state{
        margin-left: 30px;
        martin-top: 10px;
    }

    .title-country{
        margin-left: 30px;
        martin-top: 10px;
    }

    .title-agency{
        margin-left: 30px;
        martin-top: 10px;
    }

    .title-custId{
        margin-left: 30px;
        martin-top: 10px;
    }

    .title-password{
        margin-left: 0px;
        
    }

    .title-confirmPass{
        margin-left: 200px;
        martin-top: 10px;
    }

    .form-type{
        margin-left: 8px;
        height: 30px;
        width: 12%;
    }

    .form-name{
        margin-left: 8px;
        height: 24px;
        width: 50%;
    }

    .form-email{
        margin-left: 24px;
        height: 24px;
        width: 20%;
    }

    .form-doc{
        margin-left: 8px;
        height: 22px;
        width: 20%;
    }

    .form-birth{
        margin-left: 8px;
        height: 25px;
        width: 15%;
    }

    .form-address{
        margin-left: 5px;
        height: 22px;
        width: 40%;
    }

    .form-zip{
        margin-left: 8px;
        height: 22px;
        width: 10%;
    }

    .form-city{
        margin-left: 37px;
        martin-top: 10px;
        height: 22px;
        width: 30%;
    }

    .form-state{
        margin-left: 10px;
        martin-top: 10px;
        height: 22px;
        width: 20%;
    }

    .form-country{
        margin-left: 10px;
        martin-top: 10px;
        height: 30px;
        width: 12%;
    }

    .form-bank{
        margin-left: 10px;
        martin-top: 10px;
        height: 30px;
        width: 12%;
    }

    .form-agency{
        margin-left: 10px;
        martin-top: 10px;
        margin-bottom: 10px;
        height: 30px;
        width: 30%;
    }

    .form-account{
        margin-left: 10px;
        martin-top: 10px;
        height: 24px;
        width: 12%;
    }

    .form-custId{
        margin-left: 10px;
        martin-top: 10px;
        height: 24px;
        width: 12%;
    }

    .login-form-password{
        display: flex;
        justify-content: left;
    }

    .form-password{
        margin-left: 10px;
        martin-top: 10px;
        height: 24px;
        width: 20%;
    }

    .form-confirmPass{
        margin-left: 10px;
        martin-top: 10px;
        height: 24px;
        width: 20%;
    }

`;
