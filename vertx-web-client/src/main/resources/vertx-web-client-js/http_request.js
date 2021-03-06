/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-web-client-js/http_request */
var utils = require('vertx-js/util/utils');
var HttpResponse = require('vertx-web-client-js/http_response');
var Buffer = require('vertx-js/buffer');
var BodyCodec = require('vertx-web-common-js/body_codec');
var MultiMap = require('vertx-js/multi_map');
var ReadStream = require('vertx-js/read_stream');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpRequest = io.vertx.ext.web.client.HttpRequest;

/**
 A client-side HTTP request.
 <p>
 @class
*/
var HttpRequest = function(j_val, j_arg_0) {

  var j_httpRequest = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;

  /**
   Configure the request to use a new method <code>value</code>.

   @public
   @param value {Object} 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.method = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpRequest["method(io.vertx.core.http.HttpMethod)"](io.vertx.core.http.HttpMethod.valueOf(value));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the request to use a new port <code>value</code>.

   @public
   @param value {number} 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.port = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpRequest["port(int)"](value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the request to decode the response with the <code>responseCodec</code>.

   @public
   @param responseCodec {BodyCodec} the response codec 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.as = function(responseCodec) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      return utils.convReturnVertxGen(HttpRequest, j_httpRequest["as(io.vertx.ext.web.codec.BodyCodec)"](responseCodec._jdel), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the request to use a new host <code>value</code>.

   @public
   @param value {string} 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.host = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpRequest["host(java.lang.String)"](value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the request to use a new request URI <code>value</code>.
   <p>
   When the uri has query parameters, they are set in the {@link HttpRequest#queryParams} multimap, overwritting
   any parameters previously set.

   @public
   @param value {string} 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.uri = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_httpRequest["uri(java.lang.String)"](value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the request to add a new HTTP header.

   @public
   @param name {string} the header name 
   @param value {string} the header value 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.putHeader = function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpRequest["putHeader(java.lang.String,java.lang.String)"](name, value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {MultiMap} The HTTP headers
   */
  this.headers = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedheaders == null) {
        that.cachedheaders = utils.convReturnVertxGen(MultiMap, j_httpRequest["headers()"]());
      }
      return that.cachedheaders;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configures the amount of time in milliseconds after which if the request does not return any data within the timeout
   period an TimeoutException fails the request.
   <p>
   Setting zero or a negative <code>value</code> disables the timeout.

   @public
   @param value {number} The quantity of time in milliseconds. 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.timeout = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_httpRequest["timeout(long)"](value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a query parameter to the request.

   @public
   @param paramName {string} the param name 
   @param paramValue {string} the param value 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.addQueryParam = function(paramName, paramValue) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpRequest["addQueryParam(java.lang.String,java.lang.String)"](paramName, paramValue);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a query parameter to the request.

   @public
   @param paramName {string} the param name 
   @param paramValue {string} the param value 
   @return {HttpRequest} a reference to this, so the API can be used fluently
   */
  this.setQueryParam = function(paramName, paramValue) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_httpRequest["setQueryParam(java.lang.String,java.lang.String)"](paramName, paramValue);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Return the current query parameters.

   @public

   @return {MultiMap} the current query parameters
   */
  this.queryParams = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(MultiMap, j_httpRequest["queryParams()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Copy this request

   @public

   @return {HttpRequest} a copy of this request
   */
  this.copy = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(HttpRequest, j_httpRequest["copy()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpRequest#send} but with an HTTP request <code>body</code> stream.

   @public
   @param body {ReadStream} the body 
   @param handler {function} 
   */
  this.sendStream = function(body, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpRequest["sendStream(io.vertx.core.streams.ReadStream,io.vertx.core.Handler)"](body._jdel, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpRequest#send} but with an HTTP request <code>body</code> buffer.

   @public
   @param body {Buffer} the body 
   @param handler {function} 
   */
  this.sendBuffer = function(body, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpRequest["sendBuffer(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](body._jdel, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpRequest#send} but with an HTTP request <code>body</code> object encoded as json and the content type
   set to <code>application/json</code>.

   @public
   @param body {Object} the body 
   @param handler {function} 
   */
  this.sendJsonObject = function(body, handler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_httpRequest["sendJsonObject(io.vertx.core.json.JsonObject,io.vertx.core.Handler)"](utils.convParamJsonObject(body), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpRequest#send} but with an HTTP request <code>body</code> object encoded as json and the content type
   set to <code>application/json</code>.

   @public
   @param body {Object} the body 
   @param handler {function} 
   */
  this.sendJson = function(body, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] !== 'function' && typeof __args[1] === 'function') {
      j_httpRequest["sendJson(java.lang.Object,io.vertx.core.Handler)"](utils.convParamTypeUnknown(body), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpRequest#send} but with an HTTP request <code>body</code> multimap encoded as form and the content type
   set to <code>application/x-www-form-urlencoded</code>.
   <p>
   When the content type header is previously set to <code>multipart/form-data</code> it will be used instead.

   @public
   @param body {MultiMap} the body 
   @param handler {function} 
   */
  this.sendForm = function(body, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpRequest["sendForm(io.vertx.core.MultiMap,io.vertx.core.Handler)"](body._jdel, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Send a request, the <code>handler</code> will receive the response as an {@link HttpResponse}.

   @public
   @param handler {function} 
   */
  this.send = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpRequest["send(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpRequest;
};

HttpRequest._jclass = utils.getJavaClass("io.vertx.ext.web.client.HttpRequest");
HttpRequest._jtype = {
  accept: function(obj) {
    return HttpRequest._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(HttpRequest.prototype, {});
    HttpRequest.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpRequest._create = function(jdel) {
  var obj = Object.create(HttpRequest.prototype, {});
  HttpRequest.apply(obj, arguments);
  return obj;
}
module.exports = HttpRequest;