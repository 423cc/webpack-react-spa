import React from 'react';
import ReactDom from 'react-dom';
// import 'antd/dist/antd.css';
import {Tree} from 'antd';
import ProcessClass from '../index';

const TreeNode = Tree.TreeNode;

export default class  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processList: [],
      rootKey: "",
      processDisplayNameList: []
    };
  }


  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  componentDidMount() {

    console.log("tree didmount")
    console.log(this.props.processList);
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  // componentWillUpdate(nextProps, nextState) {
  //     console.log('Component WILL UPDATE!');
  // }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {

    return (
      <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
        onSelect={this.onSelect}
      >
        {
          this.state.processList.map((v, idx) => {
            return (
              <TreeNode title={v.processDisplayName} key={idx}>
                {v.listInfo.map((a, b) => {
                  return (
                    <TreeNode title={a.processName} key={idx + "-" + b}>
                    </TreeNode>)
                })}
              </TreeNode>
            );
          })
        }

        {/*<TreeNode title="parent 1" key="0-0">*/}
        {/*<TreeNode title="parent 1-0" key="0-0-0">*/}
        {/*<TreeNode title="leaf" key="0-0-0-0" />*/}
        {/*<TreeNode title="leaf" key="0-0-0-1" />*/}
        {/*<TreeNode title="leaf" key="0-0-0-2" />*/}
        {/*</TreeNode>*/}
        {/*<TreeNode title="parent 1-1" key="0-0-1">*/}
        {/*<TreeNode title="leaf" key="0-0-1-0" />*/}
        {/*</TreeNode>*/}
        {/*<TreeNode title="parent 1-2" key="0-0-2">*/}
        {/*<TreeNode title="leaf" key="0-0-2-0" />*/}
        {/*<TreeNode title="leaf" key="0-0-2-1" />*/}
        {/*</TreeNode>*/}
        {/*</TreeNode>*/}
      </Tree>
    );
  }
}

// ReactDOM.render(<TreeComponent />, document.getElementById('processList'));
