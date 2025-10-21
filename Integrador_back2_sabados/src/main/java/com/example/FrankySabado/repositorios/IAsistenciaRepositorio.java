package com.example.FrankySabado.repositorios;

import com.example.FrankySabado.ayudas.EstadosAsistencia;
import com.example.FrankySabado.modelos.Asistencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface IAsistenciaRepositorio extends JpaRepository<Asistencia, Integer> {

    List<Asistencia> findByEstado(EstadosAsistencia estado);
    List<Asistencia> findByFecha(LocalDate fecha);


    //Consulta para IdAsistencia
    List<Asistencia>findByIdGrupo(Integer idGrupo);


}
