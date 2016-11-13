package com.theironyard.services;

import com.theironyard.entities.Item;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaelplott on 11/13/16.
 */
public interface UserItemRepo extends CrudRepository<Item, Integer> {
    Iterable<Item> findByUser (User user);
}
