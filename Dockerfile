FROM java:8
EXPOSE 8080
ADD target/weatherman-0.0.1-SNAPSHOT.jar weatherman-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","weatherman-0.0.1-SNAPSHOT.jar"]