package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/10/16.
 */
@Entity
@Table(name = "avatars")
public class Avatar {
    public enum Animation {
        STANDING,
        JUMPING,
        DEATH;
    }

    public enum Race {
        HUMAN,
        ELF,
        MISTER_T,
        ORC,
        SKELETON;
    }

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    @Column(nullable = false)
    Animation animation;

    @Column(nullable = false)
    Race race;

    public Avatar() {
    }

    public Avatar(String filename, Animation animation, Race race) {
        this.filename = filename;
        this.animation = animation;
        this.race = race;
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

    public Animation getAnimation() {
        return animation;
    }

    public void setAnimation(Animation animation) {
        this.animation = animation;
    }

    public Race getRace() {
        return race;
    }

    public void setRace(Race race) {
        this.race = race;
    }
}