package eu.mentreon.backend.controller;

import eu.mentreon.backend.model.appuser.AppUser;
import eu.mentreon.backend.repo.AppUserRepo;
import eu.mentreon.backend.service.AppUserService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/mentor")
public class AppUserController {

    private final AppUserService appUserService;
    private final AppUserRepo appUserRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public AppUserController(AppUserService appUserService, AppUserRepo appUserRepo, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.appUserService = appUserService;
        this.appUserRepo = appUserRepo;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping("/login")
    public boolean login(@RequestBody AppUser appUser) {
        AppUser userInRepo = appUserRepo.findByEmail(appUser.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User by email " + appUser.getEmail() + " was not found"));
        return appUser.getUsername().equals(userInRepo.getEmail()) && appUser.getPassword().equals(userInRepo.getPassword());
    }

    public String bcryptEncryptor(String plainText) {
        return bCryptPasswordEncoder.encode(plainText);
    }

    public Boolean doPasswordsMatch(String rawPassword,String encodedPassword) {
        return bCryptPasswordEncoder.matches(rawPassword, encodedPassword);
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

}
