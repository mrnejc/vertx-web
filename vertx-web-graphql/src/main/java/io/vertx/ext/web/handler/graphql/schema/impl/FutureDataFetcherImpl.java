/*
 * Copyright 2020 Red Hat, Inc.
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

package io.vertx.ext.web.handler.graphql.schema.impl;

import graphql.schema.DataFetchingEnvironment;
import io.vertx.core.Context;
import io.vertx.core.Future;
import io.vertx.core.Promise;
import io.vertx.core.impl.ContextInternal;
import io.vertx.ext.web.handler.graphql.schema.VertxDataFetcher;

import java.util.Objects;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;

public class FutureDataFetcherImpl<T> implements VertxDataFetcher<T> {

  private final Function<DataFetchingEnvironment, Future<T>> dataFetcher;
  private final Function<DataFetchingEnvironment, Context> contextProvider;

  public FutureDataFetcherImpl(
    Function<DataFetchingEnvironment, Future<T>> dataFetcher,
    Function<DataFetchingEnvironment, Context> contextProvider
  ) {
    this.dataFetcher = Objects.requireNonNull(dataFetcher, "dataFetcher is null");
    this.contextProvider = Objects.requireNonNull(contextProvider, "contextProvider is null");
  }

  @Override
  public CompletionStage<T> get(DataFetchingEnvironment env) {
    ContextInternal context = (ContextInternal) contextProvider.apply(env);
    Promise<T> promise;
    if (context == null) {
      promise = Promise.promise();
      invokeDataFetcher(env, promise);
    } else {
      promise = context.promise();
      context.runOnContext(v -> invokeDataFetcher(env, promise));
    }
    return promise.future().toCompletionStage();
  }

  private void invokeDataFetcher(DataFetchingEnvironment env, Promise<T> promise) {
    dataFetcher.apply(env).onComplete(promise);
  }
}
