module.exports = {
  docs: [
    {
      type: 'category',
      label: '介绍',
      collapsed: false,
      items: ['index', 'web3'],
    },
    {
      type: 'category',
      label: 'web3',
      collapsed: false,
      items: [
        'web3/web3.version',
        'web3/web3.modules',
        'web3/web3.setProvider',
        'web3/web3.providers',
        'web3/web3.givenProvider',
        'web3/web3.currentProvider',
        'web3/web3.BatchRequest',
        'web3/web3.extend'
      ],
    },
    {
      type: 'category',
      label: 'web3.eth',
      collapsed: false,
      items: [
        'web3.eth/web3.eth.defaultAccount',
        'web3.eth/web3.eth.defaultBlock',
        'web3.eth/web3.eth.getProtocolVersion',
        'web3.eth/web3.eth.isSyncing',
        'web3.eth/web3.eth.getCoinbase',
        'web3.eth/web3.eth.isMining',
        'web3.eth/web3.eth.getHashrate',
        'web3.eth/web3.eth.getGasPrice',
        'web3.eth/web3.eth.getAccounts',
        'web3.eth/web3.eth.getBlockNumber',

        'web3.eth/web3.eth.getBalance',
        'web3.eth/web3.eth.getStorageAt',
        'web3.eth/web3.eth.getCode',
        'web3.eth/web3.eth.getBlock',
        'web3.eth/web3.eth.getBlockTransactionCount',
        'web3.eth/web3.eth.getUncle',
        'web3.eth/web3.eth.getTransaction',
        'web3.eth/web3.eth.getTransactionFromBlock',
        'web3.eth/web3.eth.getTransactionReceipt',
        'web3.eth/web3.eth.getTransactionCount',

        'web3.eth/web3.eth.sendTransaction',
        'web3.eth/web3.eth.sendSignedTransaction',
        'web3.eth/web3.eth.sign',
        'web3.eth/web3.eth.signTransaction',
        'web3.eth/web3.eth.call',
        'web3.eth/web3.eth.estimateGas',
        'web3.eth/web3.eth.getPastLogs',
        'web3.eth/web3.eth.getCompilers',
        'web3.eth/web3.eth.compile.solidity',
        'web3.eth/web3.eth.compile.lll',

        'web3.eth/web3.eth.compile.serpent',
        'web3.eth/web3.eth.getWork',
        'web3.eth/web3.eth.submitWork'
      ],
    }
  ],

  api: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['components'],
    },
    {
      type: 'category',
      label: 'Action Sheet',
      collapsed: false,
      items: ['api/action-sheet'],
    },
    {
      type: 'category',
      label: 'Accordion',
      collapsed: false,
      items: ['api/accordion', 'api/accordion-group'],
    },
    {
      type: 'category',
      label: 'Alert',
      collapsed: false,
      items: ['api/alert'],
    },
    {
      type: 'category',
      label: 'Badge',
      collapsed: false,
      items: ['api/badge'],
    },
    {
      type: 'category',
      label: 'Breadcrumb',
      collapsed: false,
      items: ['api/breadcrumb', 'api/breadcrumbs'],
    },
    {
      type: 'category',
      label: 'Button',
      collapsed: false,
      items: ['api/button', 'api/ripple-effect'],
    },
    {
      type: 'category',
      label: 'Card',
      collapsed: false,
      items: ['api/card', 'api/card-content', 'api/card-header', 'api/card-subtitle', 'api/card-title'],
    },
    {
      type: 'category',
      label: 'Checkbox',
      collapsed: false,
      items: ['api/checkbox'],
    },
    {
      type: 'category',
      label: 'Chip',
      collapsed: false,
      items: ['api/chip'],
    },
    {
      type: 'category',
      label: 'Content',
      collapsed: false,
      items: ['api/app', 'api/content'],
    },
    {
      type: 'category',
      label: 'Date & Time Pickers',
      collapsed: false,
      items: ['api/datetime', 'api/picker'],
    },
    {
      type: 'category',
      label: 'Floating Action Button',
      collapsed: false,
      items: ['api/fab', 'api/fab-button', 'api/fab-list'],
    },
    {
      type: 'category',
      label: 'Grid',
      collapsed: false,
      items: ['api/grid', 'api/col', 'api/row'],
    },
    {
      type: 'category',
      label: 'Infinite Scroll',
      collapsed: false,
      items: ['api/infinite-scroll', 'api/infinite-scroll-content'],
    },
    {
      type: 'category',
      label: 'Icons',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'ion-icon',
          href: 'https://ionicons.com',
        },
      ],
    },
    {
      type: 'category',
      label: 'Input',
      collapsed: false,
      items: ['api/input', 'api/textarea'],
    },
    {
      type: 'category',
      label: 'Item',
      collapsed: false,
      items: [
        'api/item',
        'api/item-divider',
        'api/item-group',
        'api/item-sliding',
        'api/item-options',
        'api/item-option',
        'api/label',
        'api/note',
      ],
    },
    {
      type: 'category',
      label: 'List',
      collapsed: false,
      items: ['api/list', 'api/list-header', 'api/virtual-scroll'],
    },
    {
      type: 'category',
      label: 'Media',
      collapsed: false,
      items: [
        'api/avatar',
        {
          type: 'link',
          label: 'ion-icon',
          href: 'https://ionicons.com',
        },
        'api/img',
        'api/thumbnail',
      ],
    },
    {
      type: 'category',
      label: 'Menu',
      collapsed: false,
      items: ['api/menu', 'api/menu-button', 'api/menu-toggle', 'api/split-pane'],
    },
    {
      type: 'category',
      label: 'Modal',
      collapsed: false,
      items: ['api/modal', 'api/backdrop'],
    },
    {
      type: 'category',
      label: 'Navigation',
      collapsed: false,
      items: ['api/nav', 'api/nav-link'],
    },
    {
      type: 'category',
      label: 'Popover',
      collapsed: false,
      items: ['api/popover'],
    },
    {
      type: 'category',
      label: 'Progress Indicators',
      collapsed: false,
      items: ['api/loading', 'api/progress-bar', 'api/skeleton-text', 'api/spinner'],
    },
    {
      type: 'category',
      label: 'Radio',
      collapsed: false,
      items: ['api/radio', 'api/radio-group'],
    },
    {
      type: 'category',
      label: 'Range',
      collapsed: false,
      items: ['api/range'],
    },
    {
      type: 'category',
      label: 'Refresher',
      collapsed: false,
      items: ['api/refresher', 'api/refresher-content'],
    },
    {
      type: 'category',
      label: 'Reorder',
      collapsed: false,
      items: ['api/reorder', 'api/reorder-group'],
    },
    {
      type: 'category',
      label: 'Routing',
      collapsed: false,
      items: ['api/router', 'api/router-link', 'api/router-outlet', 'api/route', 'api/route-redirect'],
    },
    {
      type: 'category',
      label: 'Searchbar',
      collapsed: false,
      items: ['api/searchbar'],
    },
    {
      type: 'category',
      label: 'Segment',
      collapsed: false,
      items: ['api/segment', 'api/segment-button'],
    },
    {
      type: 'category',
      label: 'Select',
      collapsed: false,
      items: ['api/select', 'api/select-option'],
    },
    {
      type: 'category',
      label: 'Slides',
      collapsed: false,
      items: ['api/slides', 'api/slide'],
    },
    {
      type: 'category',
      label: 'Tabs',
      collapsed: false,
      items: ['api/tabs', 'api/tab', 'api/tab-bar', 'api/tab-button'],
    },
    {
      type: 'category',
      label: 'Toast',
      collapsed: false,
      items: ['api/toast'],
    },
    {
      type: 'category',
      label: 'Toggle',
      collapsed: false,
      items: ['api/toggle'],
    },
    {
      type: 'category',
      label: 'Toolbar',
      collapsed: false,
      items: ['api/toolbar', 'api/header', 'api/footer', 'api/title', 'api/buttons', 'api/back-button'],
    },
    {
      type: 'category',
      label: 'Typography',
      collapsed: false,
      items: ['api/text'],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: ['api'],
    },
  ],

  cli: [
    {
      type: 'category',
      label: 'CLI Documentation',
      collapsed: false,
      items: [
        'cli',
        'cli/configuration',
        'cli/livereload',
        'cli/using-a-proxy',
        {
          type: 'link',
          label: 'Changelog',
          href: 'https://github.com/ionic-team/ionic-cli/blob/develop/packages/@ionic/cli/CHANGELOG.md',
        },
      ],
    },
    {
      type: 'category',
      label: 'Command Reference',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli/commands', // Generate section automatically based on files
        },
      ],
    },
  ],

  native: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'native',
        'native-community',
        'native-faq',
        {
          type: 'link',
          label: 'Community vs. Enterprise',
          href: 'https://ionic.io/docs/premier-plugins',
        },
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'native', // Generate section automatically based on files
        },
      ],
    },
  ],
};
