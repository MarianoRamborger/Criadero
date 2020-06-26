import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
// import {useConfig} from './useConfig';
import {useFacebook} from './useFacebook'

const useStyles = makeStyles(theme => ({
  '@global': {
    '.fb_dialog,.fb_reset iframe': {
      zIndex: `${theme.zIndex.modal - 10} !important`,
    },
  },
}));

//When a component is wrapped in React.memo(), React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.
const CustomerChat = React.memo(function CustomerChat() {
  const timeoutRef = React.useRef();

  const theme = useTheme();
  useStyles();


 //facebook widget
  useFacebook({ xfbml: false }, FB => {
    if (timeoutRef.current !== null) {
      timeoutRef.current = setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'fb-customerchat';
        el.setAttribute('attribution', 'setup_tool');
        el.setAttribute('page_id', 110890407341913);
        el.setAttribute('ptheme_color', theme.palette.primary.main);
        el.setAttribute('plogged_in_greeting', 'Hola, que tal? En que podemos ayudarte?');
        el.setAttribute('plogged_out_greeting', 'Hola, que tal? En que podemos ayudarte?');
        // el.setAttribute('pgreeting_dialog_display', '...');
        // el.setAttribute('pgreeting_dialog_delay', '...');
        // el.setAttribute('pminimized', 'false');
        document.body.appendChild(el);
        FB.XFBML.parse();
      }, 200);
    }
  });

  return null;
});

export default CustomerChat;
