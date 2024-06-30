package dev.app.e_books;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
    @Autowired
    private BookService bookService;
    private MessageService messageService;

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks(){
        return new ResponseEntity<>(bookService.allBooks(), HttpStatus.OK);
    }

    @GetMapping("/{personalId}")
    public ResponseEntity<Optional<Book>> getSingleBook(@PathVariable String personalId){
        return new ResponseEntity<>(bookService.singleBook(personalId), HttpStatus.OK);
    }

}
