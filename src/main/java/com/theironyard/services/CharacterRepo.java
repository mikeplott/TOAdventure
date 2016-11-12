package com.theironyard.services;

import com.theironyard.entities.Character;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaelplott on 11/11/16.
 */
public interface CharacterRepo extends CrudRepository<Character, Integer> {
    //Iterable<Character> findByUser(int id);
    //Character findByUser(int id);
    Character findByUser(User user);
}
