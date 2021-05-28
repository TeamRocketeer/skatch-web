import { atom } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const roomState = atom({
  key: 'roomState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
