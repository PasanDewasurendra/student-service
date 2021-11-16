# student-service
The project focused on how to deploy the Docker containerized 3-tier web application on Amazon Kubernetes Service (EKS) using Terraform

***

## Backend Tools and Technologies 
``` 
Java | SpringBoot | Microservices | Spring Data Mongodb | Maven
``` 
```
IDE : InteliJ IDEA
```

## Frontend Tools and Technologies 
``` 
NodeJs | ReactJs | Axios |
```
```
IDE : VS Code
```

## Docker Development

### To build image with Dockerfile
``` 
docker build –t <image name> <path> 

ex: docker build –t studentservice-frontend . 
```

### To run instences (containers) from built image
``` 
docker [commands] run 

-p <port to run on localhost> : <post on which it is exposed> :- port mapping    
--name <name>:- Name of the Container    
--network <network name> :- name of network  
-it :- interactive mode  
-d :- deattached mode  

```

### To delete the container (instance of docker image)
``` 
docker rm <container name> 

-f:- this parameter will forcely delete
```

### To delete the image
```
docker rmi <image name> 
```

## Docker Compose Command

### To Build, start and attache to containers
```
docker-compose up   
```

### To Stop and removes containers, networks, volumes, and images
```
docker-compose down
```


