import {styled} from 'styled-components'

const Container = styled.div`
    display: flex;

    > * {
    flex-grow: 1
    }

    .img {
        background-color: black;
        flex-grow: 1
    }

    .container-form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default () => <>
   <Container>
    <div className='img'></div>
    <div></div>
    <form>
            <div>
                <label>Login</label>
                <input name="logina" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="pass" />
            </div>
            <button>Enter</button>
            <button>Forgot login?</button>
        </form>
    </Container>
</>