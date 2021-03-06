import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import Fastfood from '@material-ui/icons/Fastfood';
import { useSelector } from 'react-redux';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Trang chủ',
      href: '/admin',
      icon: <DashboardIcon />
    },
    {
      title: 'Account',
      href: '/admin/account',
      icon: <PersonIcon />
    }, 
    {
      title: 'Quản lý sản phẩm',
      href: '/admin/product',
      icon: <Fastfood />
    }
    // , {
    //   title: 'Đăng xuất',
    //   href: '/admin/signout',
    //   icon: <ExitToAppIcon />
    // }
  ];
  const store2 = useSelector(state => state).adminInfo.token.user.groupid;
  if (store2==='admin') {
    pages.push({
      title: 'Khuyến mãi',
      href: '/admin/promotion',
      icon: <Fastfood />
    }, {
      title: 'Quản lý nhân sự',
      href: '/admin/employee',
      icon: <PeopleIcon />
    })
  }
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
