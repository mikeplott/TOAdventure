package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/11/16.
 */
@Entity
@Table(name = "npcs")
public class NPC {
    public enum Category {
        ENEMY,
        MONEY,
        ITEM,
        HEALTH;
    }
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    @Column(nullable = false)
    Category category;

    public NPC() {
    }

    public NPC(String filename, Category category) {
        this.filename = filename;
        this.category = category;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
