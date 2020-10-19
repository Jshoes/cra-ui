import React, { Component } from 'react';
import { List } from 'antd';
import PackageCard from './PackageCard';

export default class Packages extends Component {
  render() {
    return (
      <List
        itemLayout="vertical"
        dataSource={[1, 2]}
        renderItem={(item) => (
          <List.Item>
            <PackageCard />
          </List.Item>
        )}
      />
    );
  }
}
