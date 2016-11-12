package com.theironyard.controllers;

import com.theironyard.entities.*;
import com.theironyard.entities.Character;
import com.theironyard.services.*;
import com.theironyard.utlities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.net.PasswordAuthentication;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 * Created by michaelplott on 11/10/16.
 */
@RestController
public class TOAdventureController {
    @Autowired
    UserRepo users;

    @Autowired
    AvatarRepo avatars;

    @Autowired
    NPCRepo npcs;

    @Autowired
    CharacterRepo characters;

    Server h2;

    @PostConstruct
    public void init() throws SQLException, PasswordStorage.CannotPerformOperationException {
        h2.createWebServer().start();

        if (users.count() == 0) {
            users.save(new User("mike", PasswordStorage.createHash("123")));
            users.save(new User("sam", PasswordStorage.createHash("123")));
            users.save(new User("tom", PasswordStorage.createHash("123")));
            users.save(new User("rob", PasswordStorage.createHash("123")));
            users.save(new User("nick", PasswordStorage.createHash("123")));
        }

        if (characters.count() == 0) {
            User user = users.findFirstByUsername("mike");
            User user1 = users.findFirstByUsername("sam");
            User user2 = users.findFirstByUsername("tom");
            User user3 = users.findFirstByUsername("rob");
            User user4 = users.findFirstByUsername("nick");
            characters.save(new Character("avatars/human-standing.png", 0, 12, 0, 0, user));
            characters.save(new Character("avatars/elf-standing.png", 0, 143, 0, 0, user1));
            characters.save(new Character("avatars/dark-elf.png", 0, 1235, 0, 0, user2));
            characters.save(new Character("avatars/orc-standing.png", 0, 1234123, 0, 0, user3));
            characters.save(new Character("avatars/skeleton-standing.png", 0, 13422141, 0, 0, user4));
        }

        if (avatars.count() == 0) {
            avatars.save(new Avatar("avatars/human-standing.png", Avatar.Animation.STANDING, Avatar.Race.HUMAN));
            avatars.save(new Avatar("avatars/human-jumping.png", Avatar.Animation.JUMPING, Avatar.Race.HUMAN));
            avatars.save(new Avatar("avatars/elf-standing.png", Avatar.Animation.STANDING, Avatar.Race.ELF));
            avatars.save(new Avatar("avatars/elf-jumping.png", Avatar.Animation.JUMPING, Avatar.Race.ELF));
            avatars.save(new Avatar("avatars/elf-death.png", Avatar.Animation.DEATH, Avatar.Race.ELF));
            avatars.save(new Avatar("avatars/dark-elf-standing.png", Avatar.Animation.STANDING, Avatar.Race.DARKELF));
            avatars.save(new Avatar("avatars/dark-elf-jumping.png", Avatar.Animation.JUMPING, Avatar.Race.DARKELF));
            avatars.save(new Avatar("avatars/orc-standing.png", Avatar.Animation.STANDING, Avatar.Race.ORC));
            avatars.save(new Avatar("avatars/orc-jumping.png", Avatar.Animation.JUMPING, Avatar.Race.ORC));
            avatars.save(new Avatar("avatars/skeleton-standing.png", Avatar.Animation.STANDING, Avatar.Race.SKELETON));
            avatars.save(new Avatar("avatars/skeleton-jumping.png", Avatar.Animation.JUMPING, Avatar.Race.SKELETON));
        }

        if (npcs.count() == 0) {
            npcs.save(new NPC("npcs/enemy1.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy2.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy3.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy4.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy5.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy6.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy7.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy8.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy9.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy10.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy11.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy12.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy13.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy14.png", NPC.Category.ENEMY));
            npcs.save(new NPC("npcs/enemy15.png", NPC.Category.ENEMY));
            npcs.save(new NPC("money/money.png", NPC.Category.MONEY));
            npcs.save(new NPC("items/axe.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/billyclub.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/hammer.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/hatchet.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/paddle.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/pickaxe.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/scimitar.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/staff.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/staff2.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/stonespear.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/torch.png", NPC.Category.ITEM));
            npcs.save(new NPC("items/trident.png", NPC.Category.ITEM));
            npcs.save(new NPC("health/health.png", NPC.Category.HEALTH));
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }


    // route allowing users to login to the site and returns a user object to the client.

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<User> postUser(HttpSession session, @RequestBody User user) throws PasswordStorage.CannotPerformOperationException, PasswordStorage.InvalidHashException {
        User userFromDb = users.findFirstByUsername(user.getUsername());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }

        session.setAttribute("username", user.getUsername());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    // route gets avatars that the user can then choose from, this avatar object is expected back in the post route.

    @RequestMapping(path = "/signup", method = RequestMethod.GET)
    public Iterable<Avatar> getAvatars() {
        return avatars.findByAnimation(Avatar.Animation.STANDING);
    }

    // route recieves a user object and hashes the password and saves it to the database as well as creating a new character object
    // setting the default values and saving that to the database. returns a user object.

    @RequestMapping(path = "/signup", method = RequestMethod.POST)
    public ResponseEntity<User> getUser(HttpSession session, @RequestBody User user, @RequestBody Avatar avatar) throws PasswordStorage.CannotPerformOperationException {
        user.setPassword(PasswordStorage.createHash(user.getPassword()));
        users.save(user);
        Character character = new Character(avatar.getFilename(), 0, 0, 0, 0, user);
        characters.save(character);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    // route returns a user object to the client.

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public User getUser(HttpSession session) {
        String username = (String) session.getAttribute("username");
        return users.findFirstByUsername(username);
    }

    // route saving checkpoints, still determining the functionality of this route.

    @RequestMapping(path = "/checkpoint", method = RequestMethod.POST)
    public ResponseEntity<Character> setCheckpoint(HttpSession session, @RequestBody Character character) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Character>(HttpStatus.FORBIDDEN);
        }
        Character characterFromDb = characters.findOne(character.getId());
        characterFromDb.setMoney(character.getMoney());
        characterFromDb.setScore(character.getScore());
        characters.save(characterFromDb);
        return new ResponseEntity<Character>(character, HttpStatus.OK);
    }

    // route to change the level.

    @RequestMapping(path = "/level", method = RequestMethod.POST)
    public ResponseEntity<Character> setLevel(HttpSession session, @RequestBody User user) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<Character>(HttpStatus.FORBIDDEN);
        }
        Character character = characters.findByUser(user);
        character.setLevel(character.getLevel() + 1);
        characters.save(character);
        return new ResponseEntity<Character>(character, HttpStatus.OK);
    }

    // route returning a list of avatar assets with standing sprites for a user to select.

    @RequestMapping(path = "/avatars", method = RequestMethod.GET)
    public Iterable<Avatar> getAvatars(HttpSession session) throws Exception {
        //String username = (String) session.getAttribute("username");
        //if (username == null) {
          //  throw new Exception("Not logged in!");
       // }
        return avatars.findByAnimation(Avatar.Animation.STANDING);
    }

    // route returning an array list of NPC assets

    @RequestMapping(path = "random-assets", method = RequestMethod.GET)
    public ArrayList<NPC> getRandomAssets(HttpSession session) {
        //String username = (String) session.getAttribute("username");
        User user = users.findFirstByUsername("mike");
        Character character = characters.findByUser(user);
        ArrayList<NPC> theNpcs = new ArrayList<>();
        for (int i = 0; i < 20 + character.getCheckpoint(); i++) {
            double randNum =  Math.random();
            if (randNum <= .70) {
                int randId = (int) (Math.random() * (16 - 1)) + 1;
                // int randId = (int) Math.ceil(Math.random() * 15);
                theNpcs.add(npcs.findOne(randId));
            }
            else if (randNum > .70 && randNum <= .90) {
                int randId = (int) (Math.random() * (29 - 17)) + 17;
                //int randId = (int) Math.ceil(Math.random() * 11);
                theNpcs.add(npcs.findOne(randId));
            }
            else if (randNum > .90 && randNum <= .95) {
                theNpcs.add(npcs.findOne(16));
            }
            else {
                theNpcs.add(npcs.findOne(29));
            }
        }
        return theNpcs;
    }



    // route returning a random NPC asset, "NPC asset defined as an enemy, money, items and health" to the client.

    @RequestMapping(path = "/random-asset", method = RequestMethod.GET)
    public NPC getRandomAsset(HttpSession session) {

        double randNum =  Math.random();
        if (randNum <= .50) {
            int randId = (int) (Math.random() * (16 - 1)) + 1;
            // int randId = (int) Math.ceil(Math.random() * 15);
            return npcs.findOne(randId);
        }
        else if (randNum > .50 && randNum <= .75) {
            int randId = (int) (Math.random() * (29 - 17)) + 17;
            //int randId = (int) Math.ceil(Math.random() * 11);
            return npcs.findOne(randId);
        }
        else {
            return npcs.findOne(16);
        }
    }

    // route saving and returning the avatar the user selected.

    @RequestMapping(path = "/user-avatar", method = RequestMethod.POST)
    public Iterable<Avatar> postUserAvatar(HttpSession session, @RequestBody Avatar avatar) throws Exception {
//        String username = (String) session.getAttribute("username");
//        if (username == null) {
//            throw new Exception("Not logged in!");
//        }
        User user = users.findFirstByUsername("mike");
        //User user = users.findFirstByUsername(username);
        //Avatar avatarFromDb = avatars.findOne(avatar.getId() + 1);
        characters.save(new Character(avatar.getFilename(), 0, 0, 0, 0, user));
        //characters.save(new Character(avatarFromDb.getFilename(), 0, 0, user));
        return avatars.findByRace(avatar.getRace());
    }

    // route returning the avatar the user selected.

    @RequestMapping(path = "/user-avatar", method = RequestMethod.GET)
    public ArrayList<Avatar> getUserAvatar(HttpSession session) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            throw new Exception("Not logged in");
        }
        User user = users.findFirstByUsername(username);
        ArrayList<Avatar> theAvatars = new ArrayList<>();
        //User user = users.findFirstByUsername(username);
        //User user = users.findFirstByUsername("mike");
        //User user = users.findFirstByUsername("sam");
        //User user = users.findFirstByUsername("tom");
        //User user = users.findFirstByUsername("rob");
        //User user = users.findFirstByUsername("nick");
        //Character character = characters.findByUser(user.getId();
        Character character = characters.findByUser(user);
        Avatar avatar = avatars.findByFilename(character.getFilename());
        Avatar avatar1 = avatars.findOne(avatar.getId() + 1);
        theAvatars.add(avatar);
        theAvatars.add(avatar1);
        return theAvatars;
        //return characters.findByUser(user.getId());
    }

    // route returning all the characters with their scores in the list that is sent back.

    @RequestMapping(path = "/highscore", method = RequestMethod.GET)
    public Iterable<Character> getHighscores(HttpSession session) {
        return characters.findAll();
    }
}
