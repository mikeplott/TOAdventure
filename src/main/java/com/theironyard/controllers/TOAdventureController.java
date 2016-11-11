package com.theironyard.controllers;

import com.theironyard.entities.User;
import com.theironyard.services.UserRepo;
import com.theironyard.utlities.PasswordStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * Created by michaelplott on 11/10/16.
 */
@RestController
public class TOAdventureController {
    @Autowired
    UserRepo users;



    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<User> postUser(HttpSession session, @RequestBody User user) throws PasswordStorage.CannotPerformOperationException, PasswordStorage.InvalidHashException {
        User userFromDb = users.findFirstByUsername(user.getUsername());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            user.setMoney(0);
            user.setScore(0);
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }

        session.setAttribute("username", user.getUsername());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public User getUser(HttpSession session) {
        String username = (String) session.getAttribute("username");
        return users.findFirstByUsername(username);
    }

    @RequestMapping(path = "checkpoint", method = RequestMethod.POST)
    public ResponseEntity<User> setCheckpoint(HttpSession session, @RequestBody User user) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }
        User userFromDb = users.findFirstByUsername(username);
        userFromDb.setMoney(user.getMoney());
        userFromDb.setScore(user.getScore());
        users.save(userFromDb);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
}
