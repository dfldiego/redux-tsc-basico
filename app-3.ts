import { Reducer, Action } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

/**
 * <T>: puede ser un tipo number, string, objeto.
 * store: dispara las acciones
 */
class Store<T> {

    /* private state: T; */

    constructor(private reducer: Reducer<T>, private state: T) {

    }

    // como state= private -> necesito una funcion para acceder a state.
    getState() {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }

}

const store = new Store(contadorReducer, 10);

console.log(store.getState());

/**
 * quiero disparar la accion del incrementador 
 */
store.dispatch(incrementadorAction);

console.log(store.getState());