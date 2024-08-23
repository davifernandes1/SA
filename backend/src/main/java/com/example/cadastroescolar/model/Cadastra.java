package com.example.cadastroescolar.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Cadastra {
    @Id
    @ManyToOne
    private Porteiro porteiro;

    @Id
    @ManyToOne
    private Aluno aluno;
}
