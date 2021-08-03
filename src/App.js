import './App.css';
import { useState } from 'react';

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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('1234');

  const handleClickClearBtn = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form>
      <div>
        <label>Email : </label>
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="text" value={password} onChange={event => setPassword(event.target.value)} />
      </div>
      <button type="button" onClick={handleClickClearBtn}>
        Clear
      </button>
    </form>
  );
}

export default App;
