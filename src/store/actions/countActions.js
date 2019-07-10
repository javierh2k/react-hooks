export const countInitialState = {
    count: 0
  };
  
  export const countActions = {
    increment: state => ({ count: state.count + 1 }),
    decrement: state => ({ count: state.count - 1 })
  };