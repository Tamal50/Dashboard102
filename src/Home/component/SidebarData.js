import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/super-admin/dashboard/manage-user/overview/',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/super-admin/dashboard/overview/manage-users',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Student',
    path: '/student/dashboard',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Student',
        path: '/student/dashboard/all',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'New student',
        path: '/student/dashboard/new',
        icon: <IoIcons.IoIosPaper />
      },
     
    ]
  },
  {
    title: 'Computer',
    path: '/computer',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Computer',
        path: '/computer/allcomputer',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Booking',
        path: '/computer/booking',
        icon: <IoIcons.IoIosPaper />
      }
      
    ]
  },
  {
    title: 'Blogs',
    path: '/super-admin/dashboard/blogs/overview',
    icon: <FaIcons.FaBloggerB />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Blog Overview',
        path: '/super-admin/dashboard/blogs/overview',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add New Blog',
        path: '/super-admin/dashboard/blogs/addBlog',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
 
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Orders Report',
        path: '/reports/orders',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      // {
      //   title: 'Reports 3',
      //   path: '/reports/reports3',
      //   icon: <IoIcons.IoIosPaper />
      // }
    ]
  },
  {
    title: 'Messages',
    path: '/super-admin/dashboard/massage/overview',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
