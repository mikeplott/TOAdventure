package com.theironyard.services;

import com.theironyard.entities.Boss;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaelplott on 11/13/16.
 */
public interface BossRepo extends CrudRepository<Boss, Integer>{
}
