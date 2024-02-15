module.exports = {
      '/': [
        {
            title: 'Get started',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '/user_guide/pricing',
                '/user_guide/installation',
                '/user_guide/configuring',
            ]
        },
        '/user_guide/tools',
        {
            title: 'Support',
            collapsable: true,
            sidebarDepth: 1,
            initialOpenGroupIndex: -1,
            children: [
                 '/user_guide/faq',
                 '/user_guide/troubleshooting',
                 '/user_guide/limitations',
                 '/user_guide/changelog',
                 '/user_guide/about',
            ]
        }
      ]
}