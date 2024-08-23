package com.example.cadastroescolar.repository;
import com.example.cadastroescolar.model.RegistroSaida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistroSaidaRepository extends JpaRepository<RegistroSaida, Long> {
}
