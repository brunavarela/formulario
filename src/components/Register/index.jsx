import './styles.css'

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import YupImg from "../../assets/yup-form.png";
import ComputerImg from "../../assets/computer.png";
import IconPerson from "../../assets/icon-person.png";
import IconPhone from "../../assets/icon-phone.png";
import Iconcpf from "../../assets/icon-cpf.png";



import { motion } from 'framer-motion';

const Register = () => {
    const history = useHistory();

    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_user')) ?? []
    const setLocalStorage = (db_user) => localStorage.setItem("db_user", JSON.stringify(db_user))

    const createUser = (user) => {
        const db_user =  getLocalStorage()
        db_user.push(user)
        setLocalStorage(db_user)

        return history.push(`/landing/${user.nome}`);
    }

    const schema = yup.object().shape({
        nome: yup
          .string()
          .required("Por favor, insira seu nome.")
          .min(2, "Mínimo de 2 caracteres" ),
        sobrenome: yup
          .string()
          .required("Por favor, insira seu sobrenome.")
          .min(2, "Mínimo de 2 caracteres" ), 
        cpf: yup
          .string()
          .required("Por favor, insira seu cpf.")
          .min(11, "CPF inválido"),
        telefone: yup
          .string()
          .required("Por favor, insira seu telefone.") 
          .min(11, "Número inválido"),
        termos: yup.bool() 
          .oneOf([true], "Você precisa aceitar os termos de uso")  
        
    });

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm({ resolver: yupResolver(schema) });

    
    return (
        <motion.div
            final={{ opacity: 0 }}
            closed = {{duration: 5}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="main-container">
                <form onSubmit={ handleSubmit(createUser) } className="form--container">
                    <div className="form--header">
                        <img src={YupImg} alt={YupImg} />
                    </div>
                    <div className="form">
                        <div className='input-container'>
                            <img src={IconPerson} alt={IconPerson} />
                            <input type="text"
                            placeholder='Seu nome'
                            {...register("nome")}
                            />
                        </div>
                            <p className="form--errors">
                                {errors.nome?.message}
                            </p>
                        <div className='input-container'>
                            <img src={IconPerson} alt={IconPerson} />
                            <input type="text" 
                            placeholder='Seu sobrenome'
                            {...register("sobrenome")}
                            />
                        </div>
                        <p className="form--errors">
                            {errors.sobrenome?.message}
                        </p>
                        <div className='input-container'>
                            <img src={Iconcpf} alt={IconPerson} />
                            <input type="number"
                            placeholder='Seu CPF'
                            {...register("cpf")}
                            />
                        </div>
                        <p className="form--errors">
                            {errors.cpf?.message}
                        </p>
                        <div className='input-container'>
                            <img src={IconPhone} alt={IconPerson} />
                            <input type="number" 
                            placeholder='Seu telefone'
                            {...register("telefone")}
                            />
                        </div>
                        <p className="form--errors">
                            {errors.telefone?.message}
                        </p>
                        <div className='container--checkbox'>
                            <div className='checkbox'>    
                                <input type="checkbox" 
                                {...register("termos")}
                                />
                                <h4>Eu li e aceito os <span>termos de uso</span></h4>
                            </div>
                                <p id= "checkbox-error" className="form--errors">
                                    {errors.termos?.message}
                                </p>
                        </div>
                    </div>
                    <div className="form--button">
                        <button type="submit">Salvar</button>   
                    </div>
                </form>
                <div className="main-container image--container">
                    <img src={ComputerImg} alt={ComputerImg} />
                </div>
            </div>
            <footer className="footer"><span>Bruna Varela ©2023</span></footer>
        </motion.div>
    )

}

export default Register