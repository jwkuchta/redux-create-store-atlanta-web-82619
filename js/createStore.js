let state;

function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    case  'DECREASE_COUNT': 
      return {count: state.count - 1};
    default:
      return state
  }
}

function dispatch(action){
  state = reducer(state, action);
  render();
};

function render() {
  let container = document.getElementById('container');
  container.textContent = state.count;
};

dispatch({ type: '@@INIT' })
let inButton = document.getElementById('in-button');

dispatch({ type: '@@INIT'})
let deButton = document.getElementById('de-button')

inButton.addEventListener('click', function() {
    dispatch({ type: 'INCREASE_COUNT' });
})

deButton.addEventListener('click', function() {
  dispatch({type: 'DECREASE_COUNT'})
})
