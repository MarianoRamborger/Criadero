import React from 'react';

let promise;

export function useFacebook(options, cb) {
  if (typeof options === 'function') {
    cb = options;
  }

  React.useEffect(() => {
    if (promise) {
      promise.then(cb);
    } else {
      promise = new Promise(resolve => {
        // TEST ID 896456977490629
        // https://developers.facebook.com/docs/javascript/reference/FB.init
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: 742766353200270,
            autoLogAppEvents: true,
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v5.0',
            ...options,
          });
          resolve(window.FB);
        };

        const script = document.createElement('script');
        const isDebug = window.localStorage.getItem('fb:debug') === 'true';
        script.src = `https://connect.facebook.net/en_US/sdk/xfbml.customerchat${isDebug ? '/debug' : ''}.js`;
        //Ahí levanta el source, como dice en https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/sdk#install

        document.head.appendChild(script);
      });
      promise.then(cb);
    }
  }, );
}
