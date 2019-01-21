import React from 'react'
import ReactDOM from 'react-dom';
// 引入React-Router模块
import {Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import {Menu, Icon, Switch, Layout} from 'antd'

import {Row, Col} from 'antd';

// import 'animate.css/animate.min.css'
// import 'font-awesome/css/font-awesome.min.css'
// import 'antd/dist/antd.min.css';

// 引入主体样式文件
import '../../assets/styles/main.css'

// 引入单个页面（包括嵌套的子页面）
import $ from "jquery";
import AppBase, {$api, $form, $route, TestComp, TreeComp, BarComp, PieComp, GanntComp, TableComp,GanntComp1} from '#';

const SubMenu = Menu.SubMenu
const {Header, Footer, Content} = Layout;


// 配置导航
export default class  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      processList: [],
      current: 'aaa',
      username: ''
    }
  }

  componentWillMount() {
    console.log("app will mount");
    console.log("end")
  }

  componentDidMount() {
    let that = this;
    new ProcessClass().get().then(function (data) {
        AppBase.$.memory = {
          processList: that._formatList(data)
        }
      }
    )
  }

  _formatList(data) {
    var processDisplayNameList = [];
    data.processDefinitionList.map(function (item) {
      if (processDisplayNameList.length > 0) {
        for (let i = 0; i < processDisplayNameList.length; i++) {
          if (processDisplayNameList[i].processDisplayName === item.processDisplayName) {
            processDisplayNameList[i].listInfo.push({processName: item.processName});
            return;
          }
        }
      }
      processDisplayNameList.push({
        processDisplayName: item.processDisplayName,
        listInfo: [{
          processName: item.processName
        }]
      })
    });
    return processDisplayNameList;
  }


  render() {
    return (
      <div>
        <Layout>
          <Header style={{color: "#a9a3a3"}}>
            <p> 项目人员管理 </p>

            <div id="rightWrap">
              <Menu mode="horizontal" theme={"dark"}>
                <SubMenu title={<span><Icon type="user"/>{this.state.username}</span>}>
                  <Menu.Item key="setting:1">退出</Menu.Item>
                </SubMenu>
              </Menu>
              {/*<div className="right-box">*/}
              {/*{ this.props.children }*/}
              {/*</div>*/}
            </div>

          </Header>

          <Layout>
            <Content style={{
              position: 'relative',
              height: 300,
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: '#a9a3a3',
              paddingTop: 2,
              bottom: 10
            }}>
              <Row style={{position: 'relative', height: 250, paddingBottom: 2, bottom: 0}}>
                <Col span={6}>
                  <div id="treeId">
                    {/*<TreeComponent processList={this.state.processList}/>*/}
                    <TreeComp processList={AppBase.$.memory.processList}></TreeComp>
                  </div>
                </Col>
                <Col span={18}>
                  <div>
                    {/*<svg id="gantt">*/}
                    {/*</svg>*/}
                    <GanntComp1/>
                    {/*<Demo/>*/}
                  </div>
                </Col>
              </Row>
            </Content>
            <Content style={{
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: '#a9a3a3',
              paddingTop: 5,
              height: 300
            }}>
              <Row style={{position: 'relative', paddingBottom: 2, bottom: 0}}>
                <Col span={16}>
                  <div>
                    <TableComp/>
                  </div>

                </Col>
                <Col span={8}>
                  <div>
                    <BarComp/>
                  </div>
                </Col>
              </Row>
            </Content>
            <Content style={{
              position: 'relative',
              height: 300,
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: '#a9a3a3',
              marginBottom: 20,
              paddingBottom: 2,
              paddingTop: 5,
              bottom: 0
            }}>
              <Row style={{borderStyle: 'solid', borderWidth: 1, borderColor: '#a9a3a3'}}>
                <Col span={12}>
                  <div>
                    <PieComp/>
                  </div>
                </Col>
                <Col span={12}>
                  content6
                </Col>
              </Row>
            </Content>
          </Layout>

          {/*<Footer style={{position: 'fixed', marginTop:20,bottom: 0}}> Footer</Footer>*/}
        </Layout>
<div><GanntComp1/></div>

      </div>
    )
  }

}



class ProcessClass {

  constructor() {
    this.state = {
      processList: ""
    }
  }

  // componentDidMount() {
  //     this.getUser();
  // }

  get() {
    var defer = $.Deferred();
    $.ajax({
      method: 'GET',
      url: '/hwe/services/epm/rest/process/processtemplates',
      // data: data,
      dataType: "json",
      contentType: "application/json",
      xhrFields: {
        withCredentials: true // 携带跨域cookie
      },
      crossDomain: true,
    }).done(function (data, textStatus, request) {
      if (data != null) {
        console.log("ajax return =");
        console.log(data);
        defer.resolve(data);

      }
    }).fail(function (response) {
      defer.reject({error: true, msg: response.responseText});

    });
    return defer.promise();
  };
}

// ReactDOM.render(<Sider/>, document.getElementById('app'));
