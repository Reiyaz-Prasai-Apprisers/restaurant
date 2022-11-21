class CreateStore {
  states: { [key: string]: any } = {};
  listeners = new Set();
  formRef: React.RefObject<HTMLFormElement> | null = null;
  constructor(initialState: { [key: string]: any }) {
    this.states = initialState;
  }
  public getState = (key?: string) => {
    return key ? this.states[key] : this.states;
  };
  public setState = (newState: Object) => {
    this.states = { ...this.states, ...newState };
    for (let name in newState) {
      if (this.formRef?.current) {
        this.formRef.current
          .querySelectorAll("#rp_form-item__v1")
          .forEach((child) => {
            child.querySelectorAll(`[name=${name}]`).forEach((_child) => {
              // @ts-ignore
              _child.value = newState[name];
            });
          });
      }
    }
    this.listeners.forEach((listener) => {
      listener instanceof Function && listener(this);
    });
  };
  public subscribe = (listener: any) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };
  public setFormRef = (ref: React.RefObject<HTMLFormElement>) => {
    this.formRef = ref;
  };
}


export default CreateStore;
