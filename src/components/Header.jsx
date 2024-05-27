import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import '../assets/css/style.css'; 

const CurvedMenu = () => {
  return (
    <div className="curved-menu-container ant-menu-horizontal">
      <span className="logo">Turna Labs</span>
      <Menu mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default CurvedMenu;
