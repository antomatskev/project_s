package eu.mentreon.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mentor")
public class MentorPageResource {

    @GetMapping("/test")
    public ResponseEntity<String> testController () {
        return new ResponseEntity<>("testController respond", HttpStatus.OK);
    }
}
