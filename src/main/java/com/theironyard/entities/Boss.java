package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/13/16.
 */
@Entity
@Table(name = "bosses")
public class Boss {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    public Boss() {
    }

    public Boss(String filename) {
        this.filename = filename;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }
}
