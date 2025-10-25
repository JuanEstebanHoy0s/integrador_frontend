import { Navigate, Outlet } from "react-router-dom";

export default function ProteccionRouter({ cargoRequerido }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Si no hay usuario, redirige al login
  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  // Si cargoRequerido es un string (un solo rol)
  if (typeof cargoRequerido === "string" && usuario.rol !== cargoRequerido) {
    return <Navigate to="/no-autorizado" replace />;
  }

  // Si cargoRequerido es un array (varios roles permitidos)
  if (Array.isArray(cargoRequerido) && !cargoRequerido.includes(usuario.rol)) {
    return <Navigate to="/no-autorizado" replace />;
  }

  // Si pasa todas las validaciones, renderiza la ruta protegida
  return <Outlet />;
}
