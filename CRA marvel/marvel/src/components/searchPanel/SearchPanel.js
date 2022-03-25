import { useFormik } from 'formik';
import * as Yup from 'yup';
import useMarvelServices from '../services/MarvelServices';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


import './searchPanel.scss';

const SearchPanel = () => {


    const [charname, setCharName] = useState([]);
    const [charId, setCharId] = useState(null);
    const [active, setActive] = useState(false);
    const [disable, setDisable] = useState(false);
    const offset = 1549;

   
    const { getAllCharacters } = useMarvelServices();

    const sendValue = time => {
        return new Promise(res => {
            setTimeout(() => res(), time);
        })
    }

    useEffect(() => {
        getName();
        return () => {
            getName();
        }
    }, []);

    useEffect(() => {
        let time;
        if (disable) {
            time = setTimeout(() => setDisable(false), 2000);
        } else {
            return disable;
        }
        return () => {
            clearInterval(time);
        }
    }, [disable]);



    const getName = () => {

        getAllCharacters(offset).then(name => setCharName(name));
    }

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            name: Yup.string().required('This fiel is required')
                //     .test('charname',"The character was not found. Check the name and try again",async (values) => 
                //   await fetch(charname === values))
                // .test('charname', "The character was not found. Check the name and try again", (values) => 
                // charname.map(item => item.name).filter((item) => item === values))
                .test({
                    name: "name",
                    test: function (value) {
                        const isValid = value;
                        const res = charname.filter((item) => { return item.name === isValid }).map(item => item.name).toString();
                        if (res) return true;
                        return this.createError({
                            path: "name",
                            message: "The character was not found. Check the name and try again",
                        }, setDisable(disable => !disable))
                    }

                })
        }),

        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(true);
            await sendValue(2000);
            setSubmitting(false);

        }
    });



    const res = charname.filter((item) => { return item.name === formik.values.name }).map(item => item.name).toString();

    const showMessage = (val) => {
        if (val && val === res) {
            setActive(true);
            const id  = +charname.filter((item) => { return item.name === val }).map(item => item.id);
            setCharId(id);

        }

    }




    return (
        <div className="form" >

            <form className="forms" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Or find a character by name:</label>
                <input
                    disabled={disable || formik.isSubmitting}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onFocus={() => setActive(false)}
                    className={disable || formik.isSubmitting ? "searchProsses" : null} 
                // onBlur={ () => getName(formik.values.name)}
                />

                <div className="form__btns">
                    <button className="button button__main" type='submit' disabled={disable || formik.isSubmitting} onClick={() => showMessage(formik.values.name)}>
                        <div className="inner">Find</div>
                    </button>
                     <button style={{ display: active && res ? "block" : null }} className="button button__secondary">
                        <div className="inner"> <Link to={`/characters/${charId}`}>To Page </Link></div>
                    </button>
            
                   
                </div>

                {formik.errors.name ? <span>{formik.errors.name}</span> : null}
                {active && res ? <span className='error'>There is! Visit {res} page?</span> : null}

            </form>
        </div>
    )

}

export default SearchPanel;