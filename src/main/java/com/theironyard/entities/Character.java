package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/11/16.
 */
@Entity
@Table(name = "characters")
public class Character {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    @Column(nullable = false)
    int score;

    @Column(nullable = false)
    int money;

    @ManyToOne
    User user;

    public Character() {
    }

    public Character(String filename, int score, int money, User user) {
        this.filename = filename;
        this.score = score;
        this.money = money;
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

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
