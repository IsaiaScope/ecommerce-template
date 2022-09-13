const CONSTANTS: beppe = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  svgIconsList: {
    path: '../../../assets/svgs/icons/',
    iconsName: ['cabin', 'search', 'shopping-cart', 'profile'],
  },
  navbar: {
    logo: '',
    links: {
      homePage: { label: '', iconName: 'cabin', link: '' },
      search: { label: 'search', iconName: 'search', link: '' },
      shoppingCart: { label: '', iconName: 'shopping-cart', link: '' },
      profile: { label: '', iconName: 'profile', link: '' },
    },
  },
  homePage: {
    categories: {
      all: {
        title: 'all',
        btnLabel: 'see more',
        route: '',
        fbFilePath: 'shop-categories/all',
      },
      salty: {
        title: 'salty',
        btnLabel: 'see more',
        route: '',
        fbFilePath: 'shop-categories/salty',
      },
      sweety: {
        title: 'sweety',
        btnLabel: 'see more',
        route: '',
        fbFilePath: 'shop-categories/sweety',
      },
    },
  },
};

interface beppe {
  breakpoints: any;
  svgIconsList: {
    path: string;
    iconsName: string[];
  };
  navbar: any;
  homePage: any;
}

export const C = Object.freeze(CONSTANTS);
export const BP = Object.freeze(CONSTANTS.breakpoints);
export const HOME = Object.freeze(CONSTANTS.homePage);
