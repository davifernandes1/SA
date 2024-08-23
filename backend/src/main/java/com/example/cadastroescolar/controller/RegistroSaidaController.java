
package com.example.cadastroescolar.controller;

import com.example.cadastroescolar.model.RegistroSaida;
import com.example.cadastroescolar.repository.RegistroSaidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")//Endereço do front
@CrossOrigin(origins = "http://localhost:19006")//EndereÃ§o do front*/
@RestController
@RequestMapping("/registrosaida")
public class RegistroSaidaController {
    @Autowired
    private RegistroSaidaRepository registrosaidaRepository;
    @GetMapping
    public List<RegistroSaida> listarRegistroSaida() {
        return registrosaidaRepository.findAll();
    }
    @PostMapping
    public RegistroSaida criarVeiculo(@RequestBody RegistroSaida registrosaida) {
        return registrosaidaRepository.save(registrosaida);
    }
     @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarRegistroSaida(@PathVariable Long rg) {
        if (registrosaidaRepository.existsById(rg)) {
            registrosaidaRepository.deleteById(rg);
            return ResponseEntity.ok("RegistroSaida deletado com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<RegistroSaida> atualizarRegistroSaida(@PathVariable Long rg, @RequestBody RegistroSaida registrosaidaAtualizado) {
        if (registrosaidaRepository.existsById(rg)) {
            RegistroSaida registrosaida = registrosaidaRepository.findById(rg).get();
            registrosaida.setId(registrosaidaAtualizado.getId());
            registrosaida.setData_hora(registrosaidaAtualizado.getData_hora());
            //faça os outros abaixo

            RegistroSaida registrosaidaAtualizadoBD = registrosaidaRepository.save(registrosaida);
            return ResponseEntity.ok(registrosaidaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
