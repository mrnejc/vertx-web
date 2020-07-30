/*
 * Copyright 2019 Red Hat, Inc.
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

package io.vertx.ext.web.handler.graphql;

import io.vertx.codegen.annotations.DataObject;
import io.vertx.core.json.JsonObject;

/**
 * Options for configuring the {@link ApolloWSHandler}.
 *
 * @author Rogelio Orts
 */
@DataObject(generateConverter = true)
public class ApolloWSOptions {

  /**
   * Default interval in milliseconds to send {@code KEEPALIVE} messages to all clients = 30000.
   */
  public static final long DEFAULT_KEEP_ALIVE = 30000L;

  private long keepAlive = DEFAULT_KEEP_ALIVE;

  /**
   * Default constructor.
   */
  public ApolloWSOptions() {
  }

  /**
   * Copy constructor.
   *
   * @param other the options to copy
   */
  public ApolloWSOptions(ApolloWSOptions other) {
    keepAlive = other.keepAlive;
  }

  /**
   * Constructor to create options from JSON.
   *
   * @param json the JSON
   */
  public ApolloWSOptions(JsonObject json) {
    this();
    ApolloWSOptionsConverter.fromJson(json, this);
  }

  /**
   * @return a JSON representation of these options
   */
  public JsonObject toJson() {
    JsonObject json = new JsonObject();
    ApolloWSOptionsConverter.toJson(this, json);
    return json;
  }

  /**
   * @return interval in milliseconds to send {@code KEEPALIVE} messages to all clients
   */
  public long getKeepAlive() {
    return keepAlive;
  }

  /**
   * Set the interval in milliseconds to send {@code KEEPALIVE} messages to all clients. Defaults to {@code 30000}.
   *
   * @param keepAlive interval in milliseconds
   *
   * @return a reference to this, so the API can be used fluently
   */
  public ApolloWSOptions setKeepAlive(long keepAlive) {
    this.keepAlive = keepAlive;
    return this;
  }
}
