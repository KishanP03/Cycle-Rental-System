package com.example.cycle_rental_backend.repository;

import com.example.cycle_rental_backend.model.Cycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for performing CRUD operations on the Cycle entity.
 */
@Repository
public interface CycleRepository extends JpaRepository<Cycle, Long> {

    // Additional custom query methods (if needed) can be added here
}
