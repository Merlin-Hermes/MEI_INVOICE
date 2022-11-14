import Header from "../../components/header";


import "./styles.css";

function Home() {
  return (
    <body>
      <Header />
    <div className="container">
        <div className="card">
          <text>As empresas devem se atentar para saber quais são as notas que devem usar em seu dia a dia. 
            Existem vários tipos, porém três são as mais usadas: <br/>
              Nota Fiscal (NF): este modelo é usado para registrar a venda e compra de produtos, 
            além de outras operações como importação, exportação, remessa, retorno e devolução, 
            por exemplo. Negócios como atacado, varejo, lojas e e-commerce em geral usam essa nota fiscal. <br/> 
              Nota Fiscal de Serviços (NFS): este tipo é usado para registrar a prestação de serviços. 
            Agências de publicidade, desenvolvedores de software, cabeleireiros, médicos, professores 
            particulares, entre outras categorias, deve emitir essa nota. <br/>
              Nota Fiscal do Consumidor (NFC): é um tipo de nota que está substituindo o modelo do cupom fiscal.</text>
        </div>
      </div>
    </body>
  );
}

export default Home;