require 'vertx-web-client/http_response'
require 'vertx/buffer'
require 'vertx-web-common/body_codec'
require 'vertx/multi_map'
require 'vertx/read_stream'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.web.client.HttpRequest
module VertxWebClient
  #  A client-side HTTP request.
  #  <p>
  #  Instances are created by an {::VertxWebClient::WebClient} instance, via one of the methods corresponding to the specific
  #  HTTP methods such as {::VertxWebClient::WebClient#get}, etc...
  #  <p>
  #  The request shall be configured prior sending, the request is immutable and when a mutator method
  #  is called, a new request is returned allowing to expose the request in a public API and apply further customization.
  #  <p>
  #  After the request has been configured, the methods
  #  <ul>
  #    <li>{::VertxWebClient::HttpRequest#send}</li>
  #    <li>{::VertxWebClient::HttpRequest#send_stream}</li>
  #    <li>{::VertxWebClient::HttpRequest#send_json} ()}</li>
  #    <li>{::VertxWebClient::HttpRequest#send_form}</li>
  #  </ul>
  #  can be called.
  #  The <code>sendXXX</code> methods perform the actual request, they can be called multiple times to perform the same HTTP
  #  request at different points in time.
  #  <p>
  #  The handler is called back with
  #  <ul>
  #    <li>an {::VertxWebClient::HttpResponse} instance when the HTTP response has been received</li>
  #    <li>a failure when the HTTP request failed (like a connection error) or when the HTTP response could
  #    not be obtained (like connection or unmarshalling errors)</li>
  #  </ul>
  #  <p>
  #  Most of the time, this client will buffer the HTTP response fully unless a specific  is used
  #  such as .
  class HttpRequest
    # @private
    # @param j_del [::VertxWebClient::HttpRequest] the java delegate
    def initialize(j_del, j_arg_T=nil)
      @j_del = j_del
      @j_arg_T = j_arg_T != nil ? j_arg_T : ::Vertx::Util::unknown_type
    end
    # @private
    # @return [::VertxWebClient::HttpRequest] the underlying java delegate
    def j_del
      @j_del
    end
    #  Configure the request to use a new method <code>value</code>.
    # @param [:OPTIONS,:GET,:HEAD,:POST,:PUT,:DELETE,:TRACE,:CONNECT,:PATCH,:OTHER] value 
    # @return [self]
    def method(value=nil)
      if value.class == Symbol && !block_given?
        @j_del.java_method(:method, [Java::IoVertxCoreHttp::HttpMethod.java_class]).call(Java::IoVertxCoreHttp::HttpMethod.valueOf(value))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling method(#{value})"
    end
    #  Configure the request to use a new port <code>value</code>.
    # @param [Fixnum] value 
    # @return [self]
    def port(value=nil)
      if value.class == Fixnum && !block_given?
        @j_del.java_method(:port, [Java::int.java_class]).call(value)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling port(#{value})"
    end
    #  Configure the request to decode the response with the <code>responseCodec</code>.
    # @param [::VertxWebCommon::BodyCodec] responseCodec the response codec
    # @return [::VertxWebClient::HttpRequest] a reference to this, so the API can be used fluently
    def as(responseCodec=nil)
      if responseCodec.class.method_defined?(:j_del) && !block_given?
        return ::Vertx::Util::Utils.safe_create(@j_del.java_method(:as, [Java::IoVertxExtWebCodec::BodyCodec.java_class]).call(responseCodec.j_del),::VertxWebClient::HttpRequest, nil)
      end
      raise ArgumentError, "Invalid arguments when calling as(#{responseCodec})"
    end
    #  Configure the request to use a new host <code>value</code>.
    # @param [String] value 
    # @return [self]
    def host(value=nil)
      if value.class == String && !block_given?
        @j_del.java_method(:host, [Java::java.lang.String.java_class]).call(value)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling host(#{value})"
    end
    #  Configure the request to use a new request URI <code>value</code>.
    #  <p>
    #  When the uri has query parameters, they are set in the {::VertxWebClient::HttpRequest#query_params} multimap, overwritting
    #  any parameters previously set.
    # @param [String] value 
    # @return [self]
    def uri(value=nil)
      if value.class == String && !block_given?
        @j_del.java_method(:uri, [Java::java.lang.String.java_class]).call(value)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling uri(#{value})"
    end
    #  Configure the request to add a new HTTP header.
    # @param [String] name the header name
    # @param [String] value the header value
    # @return [self]
    def put_header(name=nil,value=nil)
      if name.class == String && value.class == String && !block_given?
        @j_del.java_method(:putHeader, [Java::java.lang.String.java_class,Java::java.lang.String.java_class]).call(name,value)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling put_header(#{name},#{value})"
    end
    # @return [::Vertx::MultiMap] The HTTP headers
    def headers
      if !block_given?
        if @cached_headers != nil
          return @cached_headers
        end
        return @cached_headers = ::Vertx::Util::Utils.safe_create(@j_del.java_method(:headers, []).call(),::Vertx::MultiMap)
      end
      raise ArgumentError, "Invalid arguments when calling headers()"
    end
    #  Configures the amount of time in milliseconds after which if the request does not return any data within the timeout
    #  period an TimeoutException fails the request.
    #  <p>
    #  Setting zero or a negative <code>value</code> disables the timeout.
    # @param [Fixnum] value The quantity of time in milliseconds.
    # @return [self]
    def timeout(value=nil)
      if value.class == Fixnum && !block_given?
        @j_del.java_method(:timeout, [Java::long.java_class]).call(value)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling timeout(#{value})"
    end
    #  Add a query parameter to the request.
    # @param [String] paramName the param name
    # @param [String] paramValue the param value
    # @return [self]
    def add_query_param(paramName=nil,paramValue=nil)
      if paramName.class == String && paramValue.class == String && !block_given?
        @j_del.java_method(:addQueryParam, [Java::java.lang.String.java_class,Java::java.lang.String.java_class]).call(paramName,paramValue)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling add_query_param(#{paramName},#{paramValue})"
    end
    #  Set a query parameter to the request.
    # @param [String] paramName the param name
    # @param [String] paramValue the param value
    # @return [self]
    def set_query_param(paramName=nil,paramValue=nil)
      if paramName.class == String && paramValue.class == String && !block_given?
        @j_del.java_method(:setQueryParam, [Java::java.lang.String.java_class,Java::java.lang.String.java_class]).call(paramName,paramValue)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling set_query_param(#{paramName},#{paramValue})"
    end
    #  Return the current query parameters.
    # @return [::Vertx::MultiMap] the current query parameters
    def query_params
      if !block_given?
        return ::Vertx::Util::Utils.safe_create(@j_del.java_method(:queryParams, []).call(),::Vertx::MultiMap)
      end
      raise ArgumentError, "Invalid arguments when calling query_params()"
    end
    #  Copy this request
    # @return [::VertxWebClient::HttpRequest] a copy of this request
    def copy
      if !block_given?
        return ::Vertx::Util::Utils.safe_create(@j_del.java_method(:copy, []).call(),::VertxWebClient::HttpRequest, nil)
      end
      raise ArgumentError, "Invalid arguments when calling copy()"
    end
    #  Like {::VertxWebClient::HttpRequest#send} but with an HTTP request <code>body</code> stream.
    # @param [::Vertx::ReadStream] body the body
    # @yield 
    # @return [void]
    def send_stream(body=nil)
      if body.class.method_defined?(:j_del) && block_given?
        return @j_del.java_method(:sendStream, [Java::IoVertxCoreStreams::ReadStream.java_class,Java::IoVertxCore::Handler.java_class]).call(body.j_del,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::VertxWebClient::HttpResponse, nil) : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling send_stream(#{body})"
    end
    #  Like {::VertxWebClient::HttpRequest#send} but with an HTTP request <code>body</code> buffer.
    # @param [::Vertx::Buffer] body the body
    # @yield 
    # @return [void]
    def send_buffer(body=nil)
      if body.class.method_defined?(:j_del) && block_given?
        return @j_del.java_method(:sendBuffer, [Java::IoVertxCoreBuffer::Buffer.java_class,Java::IoVertxCore::Handler.java_class]).call(body.j_del,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::VertxWebClient::HttpResponse, nil) : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling send_buffer(#{body})"
    end
    #  Like {::VertxWebClient::HttpRequest#send} but with an HTTP request <code>body</code> object encoded as json and the content type
    #  set to <code>application/json</code>.
    # @param [Hash{String => Object}] body the body
    # @yield 
    # @return [void]
    def send_json_object(body=nil)
      if body.class == Hash && block_given?
        return @j_del.java_method(:sendJsonObject, [Java::IoVertxCoreJson::JsonObject.java_class,Java::IoVertxCore::Handler.java_class]).call(::Vertx::Util::Utils.to_json_object(body),(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::VertxWebClient::HttpResponse, nil) : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling send_json_object(#{body})"
    end
    #  Like {::VertxWebClient::HttpRequest#send} but with an HTTP request <code>body</code> object encoded as json and the content type
    #  set to <code>application/json</code>.
    # @param [Object] body the body
    # @yield 
    # @return [void]
    def send_json(body=nil)
      if ::Vertx::Util::unknown_type.accept?(body) && block_given?
        return @j_del.java_method(:sendJson, [Java::java.lang.Object.java_class,Java::IoVertxCore::Handler.java_class]).call(::Vertx::Util::Utils.to_object(body),(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::VertxWebClient::HttpResponse, nil) : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling send_json(#{body})"
    end
    #  Like {::VertxWebClient::HttpRequest#send} but with an HTTP request <code>body</code> multimap encoded as form and the content type
    #  set to <code>application/x-www-form-urlencoded</code>.
    #  <p>
    #  When the content type header is previously set to <code>multipart/form-data</code> it will be used instead.
    # @param [::Vertx::MultiMap] body the body
    # @yield 
    # @return [void]
    def send_form(body=nil)
      if body.class.method_defined?(:j_del) && block_given?
        return @j_del.java_method(:sendForm, [Java::IoVertxCore::MultiMap.java_class,Java::IoVertxCore::Handler.java_class]).call(body.j_del,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::VertxWebClient::HttpResponse, nil) : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling send_form(#{body})"
    end
    #  Send a request, the <code>handler</code> will receive the response as an {::VertxWebClient::HttpResponse}.
    # @yield 
    # @return [void]
    def send
      if block_given?
        return @j_del.java_method(:send, [Java::IoVertxCore::Handler.java_class]).call((Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::VertxWebClient::HttpResponse, nil) : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling send()"
    end
  end
end
