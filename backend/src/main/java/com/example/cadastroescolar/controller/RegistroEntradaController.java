package com.example.cadastroescolar.controller;

import com.example.cadastroescolar.model.RegistroEntrada;
import com.example.cadastroescolar.repository.RegistroEntradaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")//Endereço do front
@CrossOrigin(origins = "http://localhost:19006")//EndereÃ§o do front*/
@RestController
@RequestMapping("/registroentrada")
public class RegistroEntradaController {
    @Autowired
    private RegistroEntradaRepository registroentradaRepository;
    @GetMapping
    public List<RegistroEntrada> listarRegistroEntrada() {
        return registroentradaRepository.findAll();
    }
    @PostMapping
    public RegistroEntrada criarVeiculo(@RequestBody RegistroEntrada registroentrada) {
        return registroentradaRepository.save(registroentrada);
    }
     @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarRegistroEntrada(@PathVariable Long rg) {
        if (registroentradaRepository.existsById(rg)) {
            registroentradaRepository.deleteById(rg);
            return ResponseEntity.ok("Registroentrada deletado com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<RegistroEntrada> atualizarRegistroEntrada(@PathVariable Long rg, @RequestBody RegistroEntrada registroentradaAtualizado) {
        if (registroentradaRepository.existsById(rg)) {
            RegistroEntrada registroentrada = registroentradaRepository.findById(rg).get();
            registroentrada.setId(registroentradaAtualizado.getId());
            registroentrada.setData_hora(registroentradaAtualizado.getData_hora());
            registroentrada.setEntrada_tardia(registroentradaAtualizado.getEntrada_tardia());
            registroentrada.setData_hora_saida_antecipada(registroentradaAtualizado.getData_hora_saida_antecipada());
            //faça os outros abaixo

            RegistroEntrada registroentradaAtualizadoBD = registroentradaRepository.save(registroentrada);
            return ResponseEntity.ok(registroentradaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
