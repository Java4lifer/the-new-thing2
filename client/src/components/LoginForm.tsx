import { styled } from 'styled-components'

const Container = styled.form`


font-family:'Anton', sans-serif;
font-family: 'Hind Madurai', sans-serif;
border: 1px solid white;
box-shadow: 2px 2px 2px grey;

.container {
    margin-bottom: 2rem;
    background-color: white;
    h1, h2 {
        line-height: 1em;
        margin:0;
        padding: 0;
    }
    h2 {
        font-size: 60%;
        color: black;
        font-weight: 300;
    }
}

    .input {

    }

    .sign-up {
        background-color: white;
        padding: 2rem;
        color: white;

        a {
            color: pink;
            text-decoration: none;
        }
    }

.action {
    
}
`
const AccentButton = styled.button`

border: ;

`

const HiddenButton = styled.button`



`

export default () => <React.Fragment>
    <Container>
        <div>
            <label>Login</label>
            <input name="logina" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="pass" />
        </div>
        <div className="action"></div>
        <AccentButton>Enter</AccentButton>
        <StupidButton>Forgot login?</StupidButton>
    </Container>
</React.Fragment>