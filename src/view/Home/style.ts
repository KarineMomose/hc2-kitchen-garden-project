import styled from "styled-components";

export const Container = styled.div`
width: 100%;
margin: 0 auto;

section {
    height: 100%;
    width: 100%;
    background: #e2e2e2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    }

    .card-container {
     
    background-color: #d5e08b;
    border-radius   : 10px;
    padding         : 25px;
    max-width       : 350px;
    box-shadow      : 2px 4px 10px rgba(0, 0, 0, 0.19);
    font-family     : Arial, Helvetica, sans-serif sans-serif;
    color           : white;
    margin-top      : 25px;
    margin-bottom   : 25px;
    flex-wrap: wrap;
    align-content: center;
    text-align: center;

    }

    input {
     width           : 100%;
    height          : 20px;
    margin-bottom   : 10px;
    text-align      : center;
    border-radius   : 6px;
    background-color: none;
    color           : rgb(10, 10, 10);
    }
    
    .buttoncadastrar{
       width:200px;
       margin: 10px 50px 5px ;
       background: #FFF05F;
       border-radius: 18px;
       box-shadow:2px 2px 5px #0000003d;
       border: none;
       
    }

    .product-content{
        display:grid;
        text-align: center;
        height: 450px;
        background: #fff;
        border-radius: 12px;
        padding: 12px;
        width:300px;
        margin:10px;
    }
    .buttonadicionar {
        width:200px;
        margin: 10px 50px 5px ;
        background: #FFF05F;
        border-radius: 18px;
        box-shadow:2px 2px 5px #0000003d;
        border: none;
    }
    
    footer {
        align-content: center;
        text-align: center;
        padding: 10px;
        margin: 10px;
        display: flex;
        flex-direction: column;
    }
`