export const sidebarMenu = [
    {
      name: 'Analytics',
      icon: ' blur_linear',
      route: '/analytics',
      component: 'HotelComponent',
      visible: true
    },
    {
      name: 'Tickets',
      icon: 'playlist_add_check',
      route: '/tickets',
      component: 'SuperAdminComponent',
      visible: true
    },
    {
        name: 'Lost & Found',
        icon: 'search',
        route: '/lost-found',
        component: 'SuperAdminComponent',
        visible: true
      },
      {
        name: 'Handbook',
        icon: 'library_books',
        route: '/handbook',
        component: 'SuperAdminComponent',
        visible: true
      },
      {
        name: 'Chat',
        icon: 'chat',
        route: '/chat',
        component: 'SuperAdminComponent',
        visible: true
      },
  ];
  