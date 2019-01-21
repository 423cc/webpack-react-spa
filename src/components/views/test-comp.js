import React,{PureComponent} from 'react';
import classNames from 'classnames';

export default class extends PureComponent {


  constructor(props){
    super(props)
    this.state={
      testFiled :123
    }
}

  oncom

  render() {
    return (
      <section className="test-comp">
        {this.props.children}
      </section>
    )
  }
}
