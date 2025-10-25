import React from 'react'
import GDistribucionNotas from './GDistribucionNotas'
import GAsistenciaGrado from './GAsistenciaGrado'
import GBienestarTipo from './GBienestarTipo'
import GRendimientoMaterias from './GRendimientoMaterias'

export default function Graficos() {
  return (
    <div className="container-fluid px-4">
      {/* Primera fila */}
      <div className="row gx-4">
        <div className="col-12 col-xl-6">
          <GDistribucionNotas />
        </div>
        <div className="col-12 col-xl-6">
          <GAsistenciaGrado />
        </div>
      </div>

      {/* Segunda fila */}
      <div className="row gx-4 mt-4">
        <div className="col-12 col-xl-6">
          <GBienestarTipo />
        </div>
        <div className="col-12 col-xl-6">
          <GRendimientoMaterias />
        </div>
      </div>
    </div>
  )
}
