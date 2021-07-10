function get_browser() {
  var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: (tem[1] || '') };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/)
    if (tem != null) { return { name: 'Opera', version: tem[1] }; }
  }
  if (window.navigator.userAgent.indexOf("Edge") > -1) {
    tem = ua.match(/\Edge\/(\d+)/)
    if (tem != null) { return { name: 'Edge', version: tem[1] }; }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
  return {
    name: M[0],
    version: +M[1]
  };
}

function isSupported(browser) {
  var supported = false;
  if (browser.name === "Chrome" && browser.version >= 48) {
    supported = true;
  } else if ((browser.name === "MSIE" || browser.name === "IE") && browser.version >= 10) {
    supported = true;
  } else if (browser.name === "Edge") {
    supported = true;
  }
  return supported;
}
// insp-logo-frame
setTimeout(() => {
  var browser = get_browser();

  // alert(`name: [${browser.name}], version: [${browser.version}]`);
  const loadingScreen = document.getElementById('loading-screen');
  // still loading ?
  if (loadingScreen) {
    loadingScreen.outerHTML = '';
    const notSupportedScreen = $('#browser-not-support-screen');
    // display not supported
    if (notSupportedScreen) {
      notSupportedScreen.removeClass('d-none');
      const eleReplay = $('#browser-detect-text');
      if (eleReplay)
        eleReplay.html(`Tên: ${browser.name}; Version: ${browser.version}`);
    }
  }
}, 60000);// 1 min