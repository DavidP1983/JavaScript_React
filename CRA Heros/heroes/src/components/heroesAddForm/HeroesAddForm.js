/* eslint-disable react-hooks/rules-of-hooks */

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
import { useHttp } from "../../hooks/http.hook";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";


import { heroesFetching, heroesFetched, heroesFetchingError, filterFetched } from "../../actions";



const HeroesAddForm = () => {
    const { heroes, heroesLoadingStatus, filters } = useSelector(state => state);
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const { request } = useHttp();

    // console.log(data);

 // Запрос к базе данных по фильтрам 
    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/filters")
         .then(data => dispatch(filterFetched(data)))
         .catch(() => dispatch(heroesFetchingError()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


 // получения данных с инпутов
    const onValueChange = (e) => {
        const newItem = { [e.target.name]: e.target.value }
        setData({ id: uuidv4().slice(2, 9), ...data, ...newItem });
    }


 // отправка данных с инпута в базу heroes.json и в общий state
    const onSubmitForm = (e) => {
        e.preventDefault();
        request("http://localhost:3001/heroes", "POST", JSON.stringify(data))
            .then((data) => {
                dispatch(heroesFetched([...heroes, data]))
                console.log('Upload Success:', data)
            })
            .catch(() => dispatch(heroesFetchingError()))
            .finally(() => setData(e.target.reset({})))
    }

 

     if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

// <option></option> сформированный на базе данных
    const renderFilter = (arr) => {
       
        return arr.map((item, i) => {
           
            let label;
            switch (item) {
                case 'all':
                    label = "Я владею элементом...";
                    break;
                case 'fire':
                    label = "Огонь";
                    break;
                case 'water':
                    label = "Вода";
                    break;
                case "wind":
                    label = "Ветер"
                    break;
                case 'earth':
                    label = "Земля"
                    break;
                default:
                    label = "Нет данных";
            }
    
            return <option key={i} value={item}>{label}</option>
        })
    }

   

    const filterElements = renderFilter(filters);
 


    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    onChange={onValueChange}
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    onChange={onValueChange}
                    name="description"
                    id="text"
                    className="form-control"
                    placeholder="Что я умею?"
                    style={{ "height": 130 }} />
            </div>
            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    onChange={onValueChange}
                    name="element"
                    id="element"
                    className="form-select">
                    {/* <option>Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>                 // Динамическая вставка   {filterElements}
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option> */}
                    {filters.length === 0 ? <option>Загрузка...</option>: filterElements}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;