import React from "react";
import axios from "axios";
import { useState, useEffect,} from "react";


import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/Pagination";






const Home = ({searchValue}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage,setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState({
    name:'popularity',
    sortProperty:'rating'
  });


  useEffect(() => {
    setIsLoading(true)

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    axios
      .get('https://6519adf4818c4e98ac60a882.mockapi.io/Items',{
        params:{
          category:categoryId >0 ? categoryId : '',
          sortBy: sortType.sortProperty.replace('-',''),
          order: order,
          search: searchValue ? searchValue : '',
          page:currentPage,
          limit:4
        }
      })
      .then((res) => {
          setItems(res.data)
          setIsLoading(false)
        });
      window.scrollTo(0,0)
  }, [categoryId,sortType,searchValue,currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)

  return (
    <>
      <div className="content__top">
        <Categories 
          value ={categoryId}
          onChangeCategory={(id)=>setCategoryId(id)}/>
        <Sort 
         value ={sortType}
         onChangeSort={(id)=>setSortType(id)}/>
      </div>
      <h2 className="content__title">
        {isLoading ? "Loading..." : "All pizza"}
      </h2>
      <div className="content__items">
        {isLoading
          ? skeletons
          :  pizzas}
      </div>
        <Pagination onChangePage={number=>setCurrentPage(number)}/>
    </>
  );
};

export default Home;
