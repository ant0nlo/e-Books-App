package dev.app.e_books;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/messages")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @PostMapping
    public ResponseEntity<Message> saveMessage(@RequestBody Message message) {
        return new ResponseEntity<>(messageService.saveMessage(message), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Message>> getAllMessages(){
        return new ResponseEntity<>(messageService.allMessages(), HttpStatus.OK);
    }
}
