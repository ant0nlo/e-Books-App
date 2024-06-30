package dev.app.e_books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "messages")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    private String id;
    private String name;
    private String email;
    private String message;
}
