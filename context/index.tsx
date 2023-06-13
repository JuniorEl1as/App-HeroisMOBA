import React, { createContext, useState } from 'react';

export type MeuContext = {
  categoriaHerois: string;
  setCategoriaHerois: (value: string) => void;
  capturarValueCategoria: string;
  setCapturarValueCategoria: (value: string) => void;
  corFundo: string;
  setCorFundo: (value: string) => void;
};

export interface Heroi {
  nome: string,
  imagem: string,
  id: string,
  tag: string, 
  todos: string,
  bio: string,
  skills: string,
};

const AuthContext = createContext<MeuContext | undefined>(undefined);

const AuthContextProvedor = ({ children }: any) => {
    const [categoriaHerois, setCategoriaHerois] = useState<string>("");
    const [capturarValueCategoria, setCapturarValueCategoria] = useState<string>("");
    const [corFundo, setCorFundo] = useState<string>("#252c76");

  return (
    <AuthContext.Provider
      value={{
        setCapturarValueCategoria,
        capturarValueCategoria,
        categoriaHerois, 
        setCategoriaHerois,
        corFundo, 
        setCorFundo
      }}>

      {children}

    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvedor };