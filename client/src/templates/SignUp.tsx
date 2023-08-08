import {styled} from "styled-components";
import SignForm from "../components/SignForm";

const Container = styled.div`

    background-color: #435865;
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: " ";
        background-color: #243238;
        width: 90%;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 1;
        transform: skew(40deg) translateX(50%);
        box-shadow: -3px -3px 4px #000000;
    }

    > * {
        position: relative;
        z-index: 9;
    }
`

export default () => <>

<Container>
    <SignForm />
</Container>

</>