package com.theironyard.services;

import com.theironyard.entities.Avatar;
import com.theironyard.entities.NPC;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaelplott on 11/11/16.
 */
public interface NPCRepo extends CrudRepository<NPC, Integer> {
}
