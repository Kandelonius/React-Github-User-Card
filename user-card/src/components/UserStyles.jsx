import styled from 'styled-components';

const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    border:5px solid green;
    background-color: purple;
    padding 2%;
    width:75%;
    margin:0 auto;
    header {
        width:100%;
        text-align: center;
    }
    img {
        width:45%;
        margin:0 auto;
    }
}
    div {
        width:45%;
        * {
            margin:0 auto;
        }
    }
    h3 {
        width: 25%;
    }
    a {
        color: black;
        text-decoration: none;
        width: 100%;
    }
`

export default Div