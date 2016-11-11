package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/10/16.
 */
@Entity
@Table(name = "avatars")
public class Avatar {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    @ManyToOne
    User user;

    public Avatar() {
    }

    public Avatar(String filename, User user) {
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
