import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Crear el contexto
export const UserContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  // Estado inicial: carga usuario (y rol) desde localStorage
  const [usuario, setUsuario] = useState(() => {
    const datos = localStorage.getItem("usuario");
    return datos ? JSON.parse(datos) : null;
  });

  // Función para login
  const login = (usuarioData) => {
    // usuarioData puede venir así: { nombre: "Juan", rol: "admin", token: "abc123" }
    setUsuario(usuarioData);
    localStorage.setItem("usuario", JSON.stringify(usuarioData));
  };

  // Función para logout
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
    navigate("/");
  };

  // Verificación de rol (opcional y muy útil)
  const tieneRol = (rol) => {
    return usuario?.rol === rol;
  };

  return (
    <UserContext.Provider value={{ usuario, login, logout, tieneRol }}>
      {children}
    </UserContext.Provider>
  );
};
