package dev.app.e_books;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "dev.app.e_books")
public class EBooksApplication {

	public static void main(String[] args) {
		SpringApplication.run(EBooksApplication.class, args);
	}

}
