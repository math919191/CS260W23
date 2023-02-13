import logo from './logo.svg';


function Box(props){
    return (
        <div className="Box">
            <img src={logo} width={ props.size } className="App-logo" alt="logo" />
        </div>
    )
}

export default Box;
