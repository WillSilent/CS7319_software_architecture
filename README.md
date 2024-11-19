# CS7319 Software Architecture Design Group-6
Compilation and Implementation Platform
	•	Compilation Platform: Developed using [compiler/IDE, e.g., IntelliJ IDEA/VsCode].
	•	Implementation Platform: Java Spring Boot 3.3.5.
	•	Runtime Environment: JDK 21

	Installation and Configuration:
	1.	Install JDK and Maven.
	2.	Clone the project repository using: git clone <your-repo-url>.
	3.	Import the project into an IDE and wait for Maven to resolve dependencies.
	Installation and Configuration:
	1.	Install JDK and Maven.
	2.	Clone the project repository using: git clone <your-repo-url>.
	3.	Import the project into an IDE and wait for Maven to resolve dependencies.
  4.  Your can use IDEA or VSCode tools to open it.
  5.  The system will be accessible at 127.0.0.1:8000
Comparison of Architectural Designs and Rationale for Final Selection
  In this project, we evaluated and compared two architectural designs: Layered Architecture and Client-Server (CS)        Architecture. Below are the details of the comparison and the rationale for the final selection.

    Client-Server (CS) Architecture

	1.	Characteristics:
	•	The client handles sending requests, and the server processes them and returns responses.
	•	A simple two-tier structure that involves direct communication between client and server.
	2.	Advantages:
	•	Simplicity: Easier and faster to develop and deploy.
	•	Better Performance: Direct communication between client and server reduces overhead.
	•	Flexibility: Clients or servers can be extended independently.
	3.	Disadvantages:
	•	Lower Maintainability: Tighter coupling between client and server.
	•	Limited Scalability: Managing complex business logic becomes harder in this architecture.
	•	Security Risks: Directly exposed client-server communication can introduce vulnerabilities.
	4.	Use Cases:
	•	Suitable for simple applications or rapid development scenarios, such as lightweight web services or data-processing systems.

 Layered Architecture

	1.	Characteristics:
	•	The system is divided into multiple layers (e.g., Presentation Layer, Business Logic Layer, Data Access Layer).
	•	Each layer has a specific responsibility and interacts with other layers via defined interfaces or methods.
	•	Highly maintainable and extensible, making it suitable for complex applications.
	2.	Advantages:
	•	High Modularity: Each layer has a clear responsibility, making maintenance and testing easier.
	•	Team Collaboration: Developers can focus on individual layers without interfering with other layers.
	•	Ease of Extension and Modification: Adding new features typically requires changes in specific layers only.
	3.	Disadvantages:
	•	Performance Overhead: Calls between layers can add latency to system responses.
	•	Longer Development Time: Due to its complexity, development might take longer.
	4.	Use Cases:
	•	Best suited for large, complex applications that require long-term maintenance and scalability.

Final Selection
We chose Client-Server Architecture for the following reasons:
	1.	Simplicity:
	•	The Client-Server architecture is easier and faster to implement, which aligns with the project’s timeline and resource constraints.
	2.	Performance:
	•	The direct interaction between the client and server ensures better performance for this project, which does not require extensive business logic or modularity.
	3.	Suitability for Requirements:
	•	The project’s scope involves straightforward operations (e.g., basic user interactions, fetching court information, managing tournaments) that can be efficiently handled using the Client-Server model.
	4.	Reduced Overhead:
	•	Unlike the Layered Architecture, the CS framework avoids additional overhead caused by layer-to-layer communication, ensuring quicker response times for users.
	5.	Future Flexibility:
	•	Although the CS architecture may have limitations for complex systems, it is sufficient for the current project. Future enhancements or transitions to a more modular framework (e.g., Layered Architecture) can be planned as the system evolves.

5. Additional Notes

	•	For more complex business needs in the future, the system can be refactored to adopt a more modular architecture like Layered Architecture.
	•	UML diagrams, including class diagrams and deployment diagrams, are provided in docs/architecture-diagrams.pdf.
 
