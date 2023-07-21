import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // const count = 1;

  const handleAlertClick = () => {
    setTimeout(() => {
      alert(`Você clicou ${count} vezes`);
    }, 3000);
  };

  // efeito colateral
  // useEffect(
  //    () => {} isso é o efeito
  // )

  // Sincronização
  // Sincronizando count -> Mudança do título da página
  // useEffect(() => {
  //   console.log('Efeito com count nas dependências');
  //   document.title = `Você clicou ${count} vezes`;
  // }, [count]);

  return (
    <div>
      <p>
        Você clicou
        {' '}
        {count}
        {' '}
        vezes
      </p>
      <button onClick={ () => setCount(count + 1) }>
        Clique aqui
      </button>
      <button onClick={ () => setCount2(count2 + 1) }>
        Clique aqui2
        {' '}
        {count2}
      </button>
      <button onClick={ handleAlertClick }>
        Mostra alerta
      </button>
    </div>
  );
}

export default Counter;
