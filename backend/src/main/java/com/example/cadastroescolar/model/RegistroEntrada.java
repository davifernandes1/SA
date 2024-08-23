package com.example.cadastroescolar.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class RegistroEntrada {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String data_hora;
    private String entrada_tardia;
    private String data_hora_saida_antecipada;

    @ManyToOne
    private Aluno aluno;
}
