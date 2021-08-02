import './App.css';

function App() {
  // Lab 6.1
  // return (
  //   <div>
  //     <input type="text" onChange={event => console.log(event.target.value)} />
  //   </div>
  // );

  // Lab 6.2
  // return (
  //   <select onChange={event => console.log(event.target.value)}>
  //     <option value="1">Thailand</option>
  //     <option value="2">Singapore</option>
  //     <option value="3">Myanmar</option>
  //     <option value="4">Lao</option>
  //     <option value="5">Cambodia</option>
  //   </select>
  // );

  // Lab 6.3
  const handleChangeCheckBox = event => {
    event.stopPropagation();
    console.log('Input changed');
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.target.checked ? 'Tick' : 'Unticked');
  };

  const handleChangeFormChange = event => {
    event.stopPropagation();
    console.log('Form changed');
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.target.checked ? 'Tick' : 'Unticked');
  };

  return (
    <div>
      <form onChange={handleChangeFormChange}>
        <input type="checkbox" name="phoneBrand" value="Apple" onChange={handleChangeCheckBox} />
        <label>Apple</label>
        <input type="checkbox" name="phoneBrand" value="Samsung" onChange={handleChangeCheckBox} />
        <label>Samsung</label>
        <input type="checkbox" name="phoneBrand" value="Oppo" onChange={handleChangeCheckBox} />
        <label>Oppo</label>
        <input type="radio" name="gender" value="Male" onChange={handleChangeCheckBox} />
        <label>Male</label>
        <input type="radio" name="gender" value="Female" onChange={handleChangeCheckBox} />
        <label>Female</label>
      </form>
    </div>
  );
}

export default App;
