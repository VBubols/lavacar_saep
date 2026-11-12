import { useState } from 'react';
import Login from './components/Logins.jsx';
import Proprietarios from './components/Proprietarios.jsx';
import Veiculos from './components/Veiculos.jsx';
import OrdensServico from './components/OrdensServico.jsx';
import './App.css';

const App = () => {
  const [usuario, setUsuario] = useState(null);

  const sair = () => {
    sessionStorage.removeItem('token');
    setUsuario(null);
  };

  return (
    <main className='container'>
      {!usuario ? (
        <Login onLogin={(dados) => setUsuario(dados)} />
      ) : (
        <>
          <header className='topo'>
            <div>
              <h1>Gestão Automotiva</h1>
              <p>Bem-vindo(a), {usuario.nome}</p>
            </div>
            <button onClick={sair}>Sair</button>
          </header>

          <div className='painel'>
            <Proprietarios />
            <Veiculos />
            <OrdensServico />
          </div>
        </>
      )}
    </main>
  );
};

export default App;
