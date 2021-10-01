import { DEFAULT_ROUTER_FEATURENAME, getSelectors } from '@ngrx/router-store';
import { createRouterSelector } from "@ngrx/router-store/";

export const {
  selectCurrentRoute, // select the current route
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors();

export const routerSelector = createRouterSelector();
