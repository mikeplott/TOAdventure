package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by michaelplott on 11/13/16.
 */
@Entity
@Table(name = "bossassets")
public class BossAsset {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String filename;

    @ManyToOne
    Boss boss;

    public BossAsset() {
    }

    public BossAsset(String filename, Boss boss) {
        this.filename = filename;
        this.boss = boss;
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

    public Boss getBoss() {
        return boss;
    }

    public void setBoss(Boss boss) {
        this.boss = boss;
    }
}
