package com.example.cycle_rental_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Represents a cycle entity in the system.
 */
@Entity
public class Cycle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Unique identifier for each cycle

    private String name; // Name of the cycle
    private Double price; // Price of the cycle
    private String description; // Description of the cycle
    private String imagePath; // Path to the image file (stored on local or server)

    // Default constructor (required by JPA)
    public Cycle() {
    }

    // Parameterized constructor
    public Cycle(String name, Double price, String description, String imagePath) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    // Override toString for debugging and logging purposes
    @Override
    public String toString() {
        return "Cycle{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", imagePath='" + imagePath + '\'' +
                '}';
    }
}
