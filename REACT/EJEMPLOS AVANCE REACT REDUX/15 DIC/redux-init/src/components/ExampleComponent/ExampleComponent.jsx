import { useDispatch, useSelector } from 'react-redux';
import { ponerValor } from './ExampleComponentActions';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  // Saco el valor que tengo guardado en mi store de este componente (Su reducer)
  const { valorEjemplo } = useSelector(
    (state) => state.exampleComponentReducer
  );

  const cambiarSaludoPersonalizado = (saludoP) => {
    dispatch(ponerValor(saludoP));
  };

  const cambiarSaludo = () => {
    dispatch(ponerValor('ADIOS'));
  };
  return (
    <>
      <div>Saludo inicial: {valorEjemplo}</div>
      <button onClick={cambiarSaludo}>Cambiar el saludo</button>
      <label htmlFor="">
        Enviar nuevo mensaje{' '}
        <input
          type="text"
          onChange={(e) => {
            cambiarSaludoPersonalizado(e.target.value);
          }}
        />{' '}
      </label>
    </>
  );
};

export default ExampleComponent;
