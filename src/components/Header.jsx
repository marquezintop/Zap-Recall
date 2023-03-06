import styled from "styled-components"

export default function Header({logo}) {
    return (
    <HeaderContainer>
        <img src={logo} alt="logo"></img>
        <p>ZapRecall</p>
    </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    padding: 48px 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
    width: 52px;
    height: 60px;
    margin-right: 20px;
    }
    p {
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
    }
`