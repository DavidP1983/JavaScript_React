/* eslint-disable array-callback-return */
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
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";


import { heroeCreated } from "../../actions";



const HeroesAddForm = () => {
    const { filters, filtersLoadingStatus } = useSelector(state => state.filters); 
    const dispatch = useDispatch();
    const { request } = useHttp();

    const [heroName, setHeroName] = useState('');
    const [heroDesc, setHeroDesc] = useState('');
    const [heroElem, setHeroElem] = useState('');

    
    const onSubmitForm = (e) => {
        e.preventDefault();
        const newHero = {
            id: uuidv4(),
            name: heroName,
            description: heroDesc,
            element: heroElem
        }

        request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
            .then(data => console.log(data, 'Success'))
            .then(() => dispatch(heroeCreated(newHero)))
            .catch(err => console.log(err))

            setHeroName('');
            setHeroDesc('');
            setHeroElem('');
    }


    const renderFilter = (filter, status) => {
        if(status === 'loading') {
            return <option>...Загрузка элементов</option>
        }else if (status === 'error') {
            return <option>Ошибка загрузки</option>
        }

        if(filter && filter.length > 0) {
            return filter.map(({name, label}) => {

                if(name === 'all') return;

                return <option key={name} value={name}>{label}</option>
            })
        }
    }



    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?" 
                    value={heroName}
                    onChange={(e) => setHeroName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description"
                    id="text"
                    className="form-control"
                    placeholder="Что я умею?"
                    style={{ "height": 130 }} 
                    value={heroDesc}
                    onChange={(e) => setHeroDesc(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    name="element"
                    id="element"
                    className="form-select"
                    value={heroElem}
                    onChange={(e) => setHeroElem(e.target.value)}>
                    <option>Я владею элементом...</option>
                    {/* <option value="fire">Огонь</option>
                    <option value="water">Вода</option>                 // Динамическая вставка   {filterElements}
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>  */}
                    {renderFilter(filters, filtersLoadingStatus)}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;