import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

import logo from '../../assets/images/logotipo.png'


interface Iproduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Iproduct[]>([]);
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    const target = e.target as typeof e.target & {
        name: { value: string };
        email: { value: string };
        cep: { value: number }
    };
    const name = target.name.value;
    const email = target.email.value;
    const cep = target.cep.value;
    const data = { name, email, cep }
    const clientStorage = JSON.stringify(data)
    localStorage.setItem(`@Cliente`,clientStorage)
}



  const handleCart = (index: number) => {
    const productStore = JSON.stringify(data[index]); localStorage.setItem(`@Produto-${index}`, productStore)
  }

  return (
    <Container>
      <header>
        <div className="header-div-flex">
          <img src={logo} alt="logo" width="200" />
        </div>
      </header>
      <main>
        <section>
          <div className="card-container">
            <div className="content">
              <form className="form" onSubmit={handleSubmit}>
                <div > Cadastre-se e informe seus dados de entrega, é bem rápidinho e logo sua comida sem crueldade estará a caminho.
                </div>
                <div>
                <input type="text" name="name" className="name"  placeholder="Nome" required/>
                </div>
                <div>
                <input type="text" name="email" className="email" placeholder="Email" required/>
                </div>
                <div>
                <input type="text" name="cep"  className="cep" placeholder="Cep" required/>
                </div>
                <div>
                  <button type="submit" className="buttoncadastrar" value="Cadastrar" >Cadastrar</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section>
          {data.map((prod, index) => (
            <div className="product-content" key={prod.id}>
              <img src={prod.photo} alt="Mac'ncheese" width="280" height="auto" />
              <h4>{prod.name}</h4>
              <span>{prod.description}</span>
              <h6>R${prod.price}</h6>
              <button className="buttonadicionar" onClick={() => handleCart(index)}>Adicionar</button>
            </div>
          ))}

        </section>

      </main>
      <footer>
        <div className="logoFooter">
        <img  src={logo} alt="" width="100" />
        </div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <h6>© 2021 Kitchen Garden, todos os direitos reservados. Desenvolvido por Karine Momose.</h6>
      </footer>
    </Container>
  );
}


export default Home;