package eu.mentreon.backend.service;

import eu.mentreon.backend.model.appuser.AppUser;
import eu.mentreon.backend.model.appuser.AppUserRole;
import eu.mentreon.backend.model.registration.EmailValidator;
import eu.mentreon.backend.model.registration.RegistrationRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final AppUserService appUserService;

    private final EmailValidator emailValidator;

    public String register(RegistrationRequest request) {
       boolean isValidEmail = emailValidator.
               test(request.getEmail());
       if (!isValidEmail) {
           throw new IllegalStateException("email not valid: " + request.getEmail());
       }
        return appUserService.singUpUser(
                new AppUser(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getPassword(),
                        AppUserRole.USER
                )
        );
    }
}
