class CreateStore {
  states: { [key: string]: any } = {};
  listeners = new Set();
  constructor(initialState: { [key: string]: any }) {
    this.states = initialState;
  }
  public getState = (key?: string) => {
    return key ? this.states[key] : this.states;
  };
  public setState = (newState: Object) => {
    this.states = { ...this.states, ...newState };
    
    this.listeners.forEach((listener) => {
      listener instanceof Function && listener(this);
    });
  };
  public subscribe = (listener: any) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };
}

const store = new CreateStore({});

export default store;
