import { styled } from "styled-components";

const Header = styled.header `
    color:red;
    span {
        color: blue
    }
`

export default () => <>
    <header>
        Header
        <span>teste</span>
    </header>
</>