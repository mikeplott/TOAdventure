package com.theironyard.services;

import com.theironyard.entities.Avatar;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaelplott on 11/10/16.
 */
public interface AvatarRepo extends CrudRepository<Avatar, Integer> {
}
