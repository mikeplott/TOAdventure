package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/12/16.
 */
@Entity
@Table(name = "usersprites")
public class UserSprite {
    public enum Animation {
        STANDING,
        JUMPING;
    }

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    @Column(nullable = false)
    Animation animation;

    @ManyToOne
    User user;

    public UserSprite() {
    }

    public UserSprite(String filename, Animation animation, User user) {
        this.filename = filename;
        this.animation = animation;
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

    public Animation getAnimation() {
        return animation;
    }

    public void setAnimation(Animation animation) {
        this.animation = animation;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
