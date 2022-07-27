export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    // En vez de return initialState

    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } // id
        return todo;
      });

    default:
      return initialState;
  }
};

// Siempre evitamos utilizar el .push para mutar el arreglo, en este caso usamos el operados spread.

// La funcion .filter no muta el arreglo, DEVUELVE uno nuevo
