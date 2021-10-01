import { InjectionToken, Provider } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { IRootState, reducersFactory } from "./reducers/root.reducer";

export const ROOT_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<IRootState>>('RootReducers');

export const reducerProvider: Provider = {
  provide: ROOT_REDUCER_TOKEN,
  useFactory: reducersFactory,
};

export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [] : [];

export const runtimeChecks = {
  strictStateImmutability: true,
  strictActionImmutability: true,
  strictActionWithinNgZone: true,
  strictActionTypeUniqueness: true
};
