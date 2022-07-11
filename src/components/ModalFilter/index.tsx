import { IFilterModal } from "../../types/FilterModal";


interface IMFilter {
    onClick?: () => void;
    text?: string;
    onClose: ()=>void;
    id: "modal" ;
    setFilter: (FilterModale:IFilterModal)=>void;
  }
  
  
  const ModalFilter = ( props: IMFilter) => {
    const heandleOutsideClick = (e:any)=>{
        if(e.target.id === props.id) {props.onClose()};
    }
    return (
    <div id={props.id} onClick={heandleOutsideClick}>
        <label htmlFor="brand">Marca</label>
       <select name="brand" value={"ford"}   id="marcaFilter">
          <option value="ford" >Ford</option>
          <option value="chevrolet"> chevrolet</option>
          <option value="fiat">fiat</option>
        </select>
        <label htmlFor="color">Cor do Carro </label>
       <select name="Cor"  id="cor">
          <option value="red">vermelho</option>
          <option value="green"> verde</option>
          <option value="yellow">amarelo</option>
        </select>     
        <label htmlFor="year">Ano do Carro </label>   
        <input type="number" placeholder="YYYY" min="1920" max={ new Date().getFullYear()}/>
        <label htmlFor="min">Preço minimo </label>  
        <input type="number" />
        <label htmlFor="max">Preço maximo </label>  
        <input type="number" />
        <button onClick={props.onClose} > Filtrar</button>

    </div>
    
    )
  };
  
  export default ModalFilter;
  