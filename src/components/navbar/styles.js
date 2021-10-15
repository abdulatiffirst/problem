import styled from "styled-components";
export const NavbarWrapper=styled.nav` 
width: 100%;
height: 100px;
background-color: salmon;
ul{
    display: flex;
    justify-content: center;
    list-style: none;
    li{
        
        a{
            text-decoration: none;
            padding: 0 10px;
            color: black;
        }
    }
}

`