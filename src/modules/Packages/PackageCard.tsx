import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Divider} from 'antd';
import {ButtonGroups} from '@mcfed/components';
import './packageCard.css';

const TabPane = Tabs.TabPane;
const Button = ButtonGroups.CustomButton;

type commandType = 'install' | 'uninstall';

export default class PackageCard extends Component {
  handlerMenu(data:any) {

    // 发送指定命令消息给vscode插件
    this.sendMessage(data, 'install')
  }
  sendMessage(data: Object, command:commandType) {
    console.log(JSON.stringify(data, null, 2));
    const event = new CustomEvent('sendMessage', { detail: { command, text: data } });
    document.dispatchEvent(event);
  }

  renderIntro() {
    return (
      <Row className="package-intro-container">
        <img src={'http://nexus.mchz.com.cn:4873/-/static/93df1ce974e744e7d98f5d842da74ba0.svg'} alt="" />
        <div className="package-intro-content">
          <h2 className="package-title">@mcfed/core</h2>
          <div className="package-intro">
            <span>author</span>
            <Divider type="vertical" />
            <span>download</span>
          </div>
          <p>desc</p>
          <ButtonGroups className="package-options" handleClick={this.handlerMenu.bind(this)}>
            <Button
              actionkey='disable'
              type='link'>
              install
            </Button>
            <Button
              actionkey='disable'
              type='link'>
              uninstall
            </Button>
            <Button
              actionkey='disable'
              type='link'>
              npm
            </Button>
            <Button
              actionkey='disable'
              type='link'>
              github
            </Button>
          </ButtonGroups>
        </div>
      </Row>
    );
  }

  renderDesc() {
    return (
      <Tabs defaultActiveKey="1" onChange={() => null}>
        <TabPane tab="Version Histroy" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Test Coverage" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Change Log" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  }

  render() {
    return (
      <Card className={`package-item`}>
        {this.renderIntro()}
        {this.renderDesc()}
      </Card>
    );
  }
}
