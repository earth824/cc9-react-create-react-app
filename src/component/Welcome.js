import ProductItem from '../ProductItem';

function Welcome(props) {
  return <div>Hello World of React. My first React Projetc</div>;
}

function Greeting(props) {
  return <div>Greetin Component</div>;
}

const PI = 3.14;

function MyComponent(props) {
  return (
    <div>
      This is MyComponent
      <ProductItem />
    </div>
  );
}

export { Welcome, Greeting, PI };
export default MyComponent;
