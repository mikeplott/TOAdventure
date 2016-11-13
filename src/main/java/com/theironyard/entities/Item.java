package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/13/16.
 */
@Entity
@Table(name = "useritems")
public class Item {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    @ManyToOne
    User user;

    public Item() {
    }

    public Item(String filename, User user) {
        this.filename = filename;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
