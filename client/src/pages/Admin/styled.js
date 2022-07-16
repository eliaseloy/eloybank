import styles from 'styled-components';

export const AreaAdmin = styles.div`
    color: #fff;
    width: 90%;
    height: 90%;
    margin: auto;
    background-color: #ebebeb;
    padding: 20px 15px;
    margin-top: 20px;
    border-radius: 7px;
    font-family: Roboto, sans-serif;
    box-shadow: 10px 11px rgba(0, 0, 0, 0.7);

    ./container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
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

`;
