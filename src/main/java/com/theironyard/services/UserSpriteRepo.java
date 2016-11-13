package com.theironyard.services;

import com.theironyard.entities.User;
import com.theironyard.entities.UserSprite;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaelplott on 11/12/16.
 */
public interface UserSpriteRepo extends CrudRepository<UserSprite, Integer> {
    Iterable<UserSprite> findByUser(User user);
}
