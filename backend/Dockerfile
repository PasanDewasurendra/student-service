FROM adoptopenjdk/openjdk11:alpine-jre

MAINTAINER Pasan Dews "it18162738@my.sliit.lk"

ADD target/student-service-docker.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]