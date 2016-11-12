package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/11/16.
 */
@Entity
@Table(name = "npcs")
public class NPC {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    public NPC() {
    }

    public NPC(String filename) {
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
