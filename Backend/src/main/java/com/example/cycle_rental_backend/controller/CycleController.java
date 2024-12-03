package com.example.cycle_rental_backend.controller;

import com.example.cycle_rental_backend.model.Cycle;
import com.example.cycle_rental_backend.repository.CycleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CycleController {

    @Autowired
    private CycleRepository cycleRepository;
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/cycles")
    public List<Cycle> getAllCycles() {
        return cycleRepository.findAll();
    }

    @PostMapping
    public Cycle createCycle(@RequestBody Cycle cycle) {
        return cycleRepository.save(cycle);
    }
}
