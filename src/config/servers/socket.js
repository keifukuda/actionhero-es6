"use strict";

var config = {};

config.default = {
  servers: {
    socket: function(/* api */) {
      return {
        enabled: false,
        // TCP or TLS?
        secure: false,
        // passed to tls.createServer if secure=true. Should contain SSL certificates
        serverOptions: {},
        // Port or Socket
        port: 5000,
        // which IP to listen on (use 0.0.0.0 for all)
        bindIP: "0.0.0.0",
        // Enabple TCP KeepAlive pings on each connection?
        setKeepAlive: false
      };
    }
  }
};

config.test = {
  servers: {
    socket: function(/* api */){
      return {
        enabled: true,
        port: 5001,
        secure: false
      };
    }
  }
};


export default config;