import './App.css';

function App() {
  const handleClick = event => {
    console.log(event);
  };

  const handleSubmit = event => {
    // alert('Form is submitted');
    event.preventDefault();
    console.log('Form is submitted');
  };

  const handleSelect = () => {
    alert('Your value has been changed');
  };

  const handleClickButtonWithId = (id, event) => {
    alert(id);
  };

  return (
    <div style={{ margin: '3rem' }}>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert('Annonymous')}>Click Annonymous</button>
      <button
        onClick={function () {
          alert('Function Expression');
        }}
      >
        Click Function
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        {/* <input type="text" id="username" onChange={() => alert('input has been changed')} /> */}
        <input type="text" id="username" onChange={event => console.log(event.target.value)} />
        <label>Please select : </label>
        <select onChange={handleSelect}>
          <option>1</option>
          <option>2</option>
        </select>
        <button>Submit</button>
      </form>
      <a href="https://google.com" onClick={event => event.preventDefault()}>
        Goto Google
      </a>
      <button onClick={() => handleClickButtonWithId(1)}>Click 1</button>
      <button onClick={event => handleClickButtonWithId(2, event)}>Click 2</button>

      <input type="checkbox" name="country" value="Thailand" checked />
      <label>Thailand</label>
      <input type="checkbox" />
      <label>Singapore</label>
    </div>
  );
}

export default App;
