// import dayjs from 'vue-dayjs';

export default defineNuxtPlugin((nuxtApp) => {
    // let getCookie = key=>((new RegExp((key || '=')+'=(.*?); ','gm')).exec(document.cookie+'; ') ||['',null])[1]
    function getCookie(sKey) {
      if (!sKey) { return null; }
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }


    // global provider
    Object.defineProperty(window, "Cookies", {
      get: function() {
          return document.cookie.split(';').reduce(function(cookies, cookie) {
              // cookies[cookie.split("=")[0]] = unescape(cookie.split("=")[1]);
              cookies[(cookie.split("=")[0]).replace(/ /g,'')] = unescape(cookie.split("=")[1]);
              return cookies
          }, {});
      }
    });



  return {
    provide: { getCookie },
  };
});