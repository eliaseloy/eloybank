import styles from 'styled-components';

export const AreaHeader = styles.div`
    height: 70px;
    background-image: linear-gradient(to right, #FE5D26, #370d44);
    color: #fff;

    ./containerHeader{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    ./logo{
        flex 1;
        

        img{
            width: 50px;
        }
    }

    ./nameCompany{
    }

    nav{
    
        ul{
            display: flex;
        }
    
        li{
            list-style: none;
            margin-left: 200px;
            margin-right: 50px;
            margin-top: 20px;
            color: white;
            font-size: 20px;
            width: 100%;

            a{
                text-decoration: none;
                color: white;

                &:hover{
                    color: #F5BB00;
                }
            }
        }
    }
`;