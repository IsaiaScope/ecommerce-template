const CONSTANTS = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  navbar: {
    logo: '',
    links: {
      search: { label: 'search', icon: 'search', link: '' },
      shoppingCart: { label: '', icon: 'shopping_cart', link: '' },
      profile: { label: '', icon: 'account_circle', link: '' },
    },
  },
};

export const C = Object.freeze(CONSTANTS);
export const BP = Object.freeze(CONSTANTS.breakpoints);
