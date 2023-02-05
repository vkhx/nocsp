var BLOCK="PROXY 127.0.0.1:8021";var ALLOW="DIRECT";var BYPASS="PROXY 8.8.8.8:53";
function FindProxyForURL(url,host){var h=host.toLowerCase();if(d(h,"ocsp.apple.com")||d(h,"ocsp2.apple.com"))return BLOCK;return ALLOW}
