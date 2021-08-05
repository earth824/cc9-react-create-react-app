import './App.css';
import React, { useState } from 'react';

function App() {
  // Lab 7.1
  // Method 1
  // const [hide, setHide] = useState(false);
  // const button = hide === true ? null : <button onClick={() => setHide(true)}>Click to hide me</button>;
  // return <div>{button}</div>;
  // Method 2
  // const [display, setDisplay] = useState('inline');
  // return (
  //   <button style={{ display: display }} onClick={() => setDisplay('none')}>
  //     Click to hide me
  //   </button>
  // );
  // Method 3
  // const [classes, setClasses] = useState('');
  // return (
  //   <button className={classes} onClick={() => setClasses('hidden')}>
  //     Click to hide me
  //   </button>
  // );
  // Lab 7.2
  // const [show, setShow] = useState(true);
  // const render = show ? <h1>Text</h1> : null;
  // return (
  //   <div>
  //     <button onClick={() => setShow(false)}>Hide me</button>
  //     {render}
  //   </div>
  // );
  // Lab 7.3
  // const [textbtn, setTextbtn] = useState('Hide');
  // const [text, setText] = useState('flex');
  // const afterClick = e => {
  //   // if (textbtn == 'Hide') {
  //   //   setTextbtn(textbtn => 'Show');
  //   // } else if (textbtn == 'Show') {
  //   //   setTextbtn(textbtn => 'Hide');
  //   // }
  //   // if (textbtn == 'Hide') {
  //   //   setText(text => 'none');
  //   // } else {
  //   //   setText(text => 'flex');
  //   // }
  //   if (textbtn === 'Hide') {
  //     setTextbtn('Show');
  //     setText('none');
  //   } else {
  //     setTextbtn('Hide');
  //     setText('flex');
  //   }
  // };
  // const handleClickButton = () => {};
  // const onClickButtonHandler = () => {};
  // return (
  //   <>
  //     <button onClick={afterClick}>{textbtn}</button>
  //     <p style={{ display: text }}>Lorem ipsum dolar sit.</p>
  //   </>
  // );
  // Lab7.4
  // const [num, setNum] = useState('');
  // const convert = event => {
  //   setNum(event.target.value * 35);
  // };
  // const handleNumChange = e => setNum(e.target.value * 35);
  // return (
  //   <div>
  //     <span>Enter Dollar</span>
  //     <input type="text" onChange={convert} />
  //     <div>
  //       <h1>Convert to Bath : {num} Bath</h1>
  //     </div>
  //   </div>
  // );
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('1234');
  // const handleClickClearBtn = () => {
  //   setEmail('');
  //   setPassword('');
  // };
  // return (
  //   <form>
  //     <div>
  //       <label>Email : </label>
  //       <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
  //     </div>
  //     <div>
  //       <label>Password: </label>
  //       <input type="text" value={password} onChange={event => setPassword(event.target.value)} />
  //     </div>
  //     <button type="button" onClick={handleClickClearBtn}>
  //       Clear
  //     </button>
  //   </form>
  // );
  // Lab 7.5
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [error, setError] = useState('');
  // const handleClickCheckBtn = () => {
  //   if (phoneNumber === '') {
  //     setError('Phone number is required');
  //   } else if (isNaN(phoneNumber)) {
  //     setError('Invalid phone number format');
  //   } else if (phoneNumber.length !== 10) {
  //     setError('Must be 10 length long');
  //   } else {
  //     setError('');
  //     alert('Valid number');
  //   }
  // };
  // const handleChangePhoneNumber = event => {
  //   const newValue = event.target.value;
  //   if (newValue === '') {
  //     setError('Phone number is required');
  //   } else if (isNaN(newValue)) {
  //     setError('Invalid phone number format');
  //   } else if (newValue.length !== 10) {
  //     setError('Must be 10 length long');
  //   } else {
  //     setError('');
  //   }
  //   setPhoneNumber(newValue);
  // };
  // const errorMessage = error ? <span style={{ color: 'red' }}>{error}</span> : null;
  // const style = error ? { borderColor: 'red', color: 'red' } : {};
  // return (
  //   <div>
  //     <div>
  //       <input
  //         placeholder="Phone Number"
  //         value={phoneNumber}
  //         // style={error === '' ? {} : { borderColor: 'red', color: 'red' }}
  //         style={style}
  //         onChange={handleChangePhoneNumber}
  //       />
  //       <button onClick={handleClickCheckBtn}>Check</button>
  //     </div>
  //     {/* <span style={{ color: 'red' }}>{error}</span> */}
  //     {errorMessage}
  //   </div>
  // );
  // const [state, setState] = useState({
  //   error: '',
  //   phoneNumber: ''
  // });
  // const handleChangePhoneNumber = e => {
  //   // Wrong !!! Don't do this
  //   // state.phoneNumber = e.target.value;
  //   // setState(state)
  //   // setState({ phoneNumber: e.target.value });
  //   // Correct#1
  //   // const newState = { ...state };
  //   // newState.phoneNumber = e.target.value;
  //   // setState(newState);
  //   // Correct#2
  //   setState({ ...state, phoneNumber: e.target.value });
  // };
  // const handleClickCheckBtn = () => {
  //   if (state.phoneNumber === '') {
  //     setState({ ...state, error: 'Phone number is required' });
  //   } else if (isNaN(state.phoneNumber)) {
  //     setState({ ...state, error: 'Invalid phone number format' });
  //   } else if (state.phoneNumber.length !== 10) {
  //     setState({ ...state, error: 'Must be 10 length long' });
  //   } else {
  //     setState({ ...state, error: '' });
  //     alert('Valid phone number');
  //   }
  // };
  // const style = state.error ? { borderColor: 'red', color: 'red' } : {};
  // const errorMessage = state.error ? <span style={{ color: 'red' }}>{state.error}</span> : null;
  // return (
  //   <div>
  //     <div>
  //       <input
  //         placeholder="Phone Number"
  //         value={state.phoneNumber}
  //         // style={error === '' ? {} : { borderColor: 'red', color: 'red' }}
  //         style={style}
  //         onChange={handleChangePhoneNumber}
  //       />
  //       <button onClick={handleClickCheckBtn}>Check</button>
  //     </div>
  //     {/* <span style={{ color: 'red' }}>{error}</span> */}
  //     {errorMessage}
  //   </div>
  // );
  // const [show, setShow] = useState(true);
  // const render = show ? <h1>Text</h1> : null;
  // return (
  //   <div>
  //     <button onClick={() => setShow(false)}>Hide me</button>
  //     {render}
  //   </div>
  // );
  // const [error, setError] = useState('Phone number is required');
  // const errorMessage = error ? <span style={{ color: 'red' }}>{error}</span> : null;
  // return (
  //   <div>
  //     {/* {errorMessage} */}
  //     {/* {error && <span style={{ color: 'red' }}>{error}</span>} */}
  //     <ErrorMessage error={error} />
  //   </div>
  // );
  // const [isLogged, setIsLogged] = useState(true);
  // return <div>{isLogged ? <h1>Welcome Back !!!</h1> : <h1>Welcome Guest</h1>}</div>;
  // }

  // function ErrorMessage(props) {
  //   if (!props.error) return null;
  //   return <span style={{ color: 'red' }}>{props.error}</span>;
  // }

  const arr = [2, 6, 7, 7];
  const render = arr.map((item, index) => <li key={index}>{item}</li>);
  // [
  //   <li>2</li>,
  //   <li>6</li>,
  //   <li>7</li>,
  // ]

  // return <ul>{render}</ul>;

  const products = [
    {
      id: 'f125467e',
      name: 'Coke',
      image: 'https://cloudinar/ ......'
    },
    {
      id: 'f23456767e',
      name: 'Pepsi',
      image: 'https://cloudina/...'
    }
  ];

  return (
    <ul>
      {products.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;
