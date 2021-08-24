import { Component } from 'react';

class CountText extends Component {
  // props { count:  }
  render() {
    // const {
    //   props: { count }
    // } = this;
    const { count } = this.props;
    return <h2>{count}</h2>;
    // return <h2>{this.props.count}</h2>;
  }
}

export default CountText;
