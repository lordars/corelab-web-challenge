import {FormEvent, useEffect, useMemo, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search, Filter , ModalFilter} from "../../components/";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import { IFilterModal } from "../../types/FilterModal";
import { isModifier, visitEachChild } from "typescript";
const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const [IsModalVisible, setIsModalVisible] = useState<Boolean>(false);
  const [FilterModal, setFilterModal] = useState<IFilterModal[]>([
    {
    name: "ford",
    color: "red",
    priceMAX: 122,
    priceMin:20000,
    year:2020
}
  ]);

  /*useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);*/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setSearch(e.target.value) 
  };

   const vehiclesFilter = useMemo(()=>{
   return   vehicles
     .filter((vehicle)=>      
     vehicle.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
     vehicle.color.toLowerCase().includes(search.toLocaleLowerCase()) ||
     vehicle.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
     vehicle.plate.toLowerCase().includes(search.toLocaleLowerCase()) ||
     vehicle.price.toString().includes(search) ||
     vehicle.year.toString().includes(search)      
        )
   },[search]) 


useEffect(() => {
  return () => {
    setVehicles( 
         [...vehicles,
             { id: 1,
      name: "pedro",
      description: "vale do cuqiu",
      plate: "sdadfas32",
      isFavorite: true,
      year: 1220,
      color: "amarelho",
      price: 123,
      createdAt: new Date()},
      { id: 1,
        name: "joão",
        description: "vale do cuqiu",
        plate: "sdadfas32",
        isFavorite: true,
        year: 1220,
        color: "amarelho",
        price: 123,
        createdAt: new Date()}
            ]  )  
  }
}, [])

     
const toggleFavorite = (car:IVehicle)=>{ car.isFavorite? car.isFavorite = false: car.isFavorite= true 
  setVehicles([...vehicles,{...car}])
}






  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <div>
        <Search placeholder="Search" value={search} onChange={(e)=>{handleChange(e)}}/>
        <Filter  onClick={()=> setIsModalVisible(true)}/>
        {IsModalVisible? (
          <div>       

            <ModalFilter id={"modal"} onClose={()=>setIsModalVisible(false)} setFilter={(ModalFilter)=> setFilterModal([ModalFilter] ) }/>
          </div>
        ): null}
       
        
        </div>
     
        <Button text="Add new vehicle" onClick={() => {}} />
     
     <ul>
      
       
      </ul> 
       
      <div>
        {
          vehiclesFilter.map((car)=>(
            
         /*   if(car.color === FilterModal.color || car.year == FilterModal.year|| car.price >= FilterModal.min 
              || car.price <= FilterModal.max && car.name == FilterModal.name  )
              {
              } */
              <Card key={car.name+car.plate} title={car.name}>        
                <button  onClick={()=>{toggleFavorite(car)}} >Favoritar </button> 
                <p key={car.plate}>Placa: {car.plate}</p>
                <p key={car.description}>Descrição: {car.description}</p>
                <p key={car.year}>Ano: {car.year}</p>
                <p key={car.color}>Color: {car.color}</p>
                <p key={car.price}>Preço: {car.price}</p>
                {car.isFavorite? <p key={car.plate+car.name}>Favorito: Es um favorito </p>  : <p  key={car.year+car.name}>Favorito: não esta em tua lista</p>  } 
              </Card>
           
        ))
      }
      </div>
      </main>
    </div>
  );
};

export default VehiclesPage;
