package dev.app.e_books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "books")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    private ObjectId _id;
    private String title;
    private Author author;
    private String genre;
    private String format;
    private String summary;
    private String cover_image;
    private String personalId;
    private List<Chapter> chapters;
}
