import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react';
import { mount } from 'react-mounter';
import  MainLayout  from '../imports/ui/layouts/MainLayout';
import  HomeProductContainer  from '../imports/ui/containers/HomeProductContainer';
import  AdminPage  from '../imports/ui/pages/AdminPage';

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {
      content: <HomeProductContainer />
    })
  }
})

FlowRouter.route('/admin', {
  name: 'adminpage',
  action() {
    mount(MainLayout, {
      content: <AdminPage />
    })
  }
})
