import styles from 'styled-components';

export const Panel1 = styles.div`
    color: black;
    width: 90%;
    height: 90%;
    margin: auto;
    background-color: #ebebeb;
    padding: 20px 15px;
    margin-top: 6px;
    border-radius: 7px;
    font-family: Roboto, sans-serif;
    box-shadow: 10px 11px rgba(0, 0, 0, 0.7);

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    .login-form{
        color:black;
    }

    .title-bank{
        margin-left: 10px;
    }

    .form-bank{
        margin-left: 45px;
        margin-bottom: 20px;
        text-align: center;
        height: 24px;
        width: 10%;
    }

    .title-agency{
        margin-left: 10px;
    }

    .form-agency{
        margin-left: 28px;
        margin-bottom: 20px;
        height: 24px;
        width: 10%;
    }

    .title-number{
        margin-left: 10px;
    }

    .form-number{
        margin-left: 24px;
        margin-bottom: 20px;
        height: 24px;
        width: 10%;
    }

    .title-password{
        margin-left: 10px;
    }

    .form-password{
        margin-left: 12px;
        margin-bottom: 50px;
        height: 24px;
        width: 10%;
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

    .botton-form-group{
        margin-left: 30px;
    }
    .buttonMenu{
        cursor: pointer;
        background: transparent;
        font-size: 16px;
        font-weight: 800;
        border-radius: 3px;
        color: palevioletred;
        border: 2px solid palevioletred;
        margin: 0 1em 2em;
        margin-left: 50px;
        padding: 0.20em 0.8em;
        transition: 0.5s all ease-out;
        &:hover {
          background-color: palevioletred;
          color: white;
        }
    }

    .buttonSave{
        cursor: pointer;
        background: transparent;
        font-size: 16px;
        font-weight: 800;
        border-radius: 3px;
        color: palevioletred;
        border: 2px solid palevioletred;
        margin-left: 80px;
        padding: 0.20em 0.8em;
        transition: 0.5s all ease-out;
        &:hover {
          background-color: palevioletred;
          color: white;
        }
    }

    .title-type{
        margin-left: 10px;
    }

    .form-type{
        margin-left: 5px;
        margin-bottom: 20px;
        height: 30px;
        width: 10%;
    }
    .title-description{
        margin-left: 40px;
    }

    .form-description{
        margin-left: 5px;
        margin-bottom: 20px;
        height: 24px;
        width: 30%;
    }
    .title-amount{
        margin-left: 40px;
    }

    .form-amount{
        margin-left: 5px;
        margin-bottom: 20px;
        height: 24px;
        width: 10%;
    }

`;
