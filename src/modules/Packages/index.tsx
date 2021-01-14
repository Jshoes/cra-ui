import React, { Component } from 'react';
import { List } from 'antd';
import PackageCard from './PackageCard';
import axios from 'axios';
import './index.css';

const privateLibrariesURL = 'http://nexus.mchz.com.cn:4873/-/verdaccio/packages';


interface IPackagesState {
  packages: any[];
}

export default class Packages extends Component<{}, IPackagesState> {

  state = {
    packages: []
  }

  componentDidMount() {
    axios.get(privateLibrariesURL)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            packages: res.data.filter((item: any) => item.name.indexOf('@') > -1)
          })
        }
      })
  }
  render() {
    const {packages} = this.state;
    return (
      <List
        className='packages-list'
        itemLayout="vertical"
        dataSource={packages}
        renderItem={(item) => (
          <List.Item>
            <PackageCard data={item} />
          </List.Item>
        )}
      />
    );
  }
}
