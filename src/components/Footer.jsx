import styled from "styled-components"

export default function Footer({counter}) {
    return (
    <FooterContainer data-test="footer">
        <p>{counter}/8 CONCLUÍDOS</p>
    </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    }
`