pipeline {
    agent {
        label 'mern-agent'
    }

    stages {
        stage('Checkout Verification') {
            steps {
                echo 'GitHub checkout verification started!'
                sh 'hostname'
                sh 'whoami'
                sh 'git --version'
            }
        }

        stage('Docker Verification') {
            steps {
                sh 'docker --version'
                sh 'docker ps'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                    docker build \
                        -t avilrawal/doctor-backend:latest \
                        -t avilrawal/doctor-backend:${BUILD_NUMBER} \
                        ./backend

                    docker build \
                        -t avilrawal/doctor-frontend:latest \
                        -t avilrawal/doctor-frontend:${BUILD_NUMBER} \
                        ./frontend

                    docker build \
                        -t avilrawal/doctor-admin:latest \
                        -t avilrawal/doctor-admin:${BUILD_NUMBER} \
                        ./admin
                '''
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKERHUB_USER',
                        passwordVariable: 'DOCKERHUB_TOKEN'
                    )
                ]) {
                    sh '''
                        set +x
                        echo "$DOCKERHUB_TOKEN" | docker login \
                            --username "$DOCKERHUB_USER" \
                            --password-stdin

                        docker push avilrawal/doctor-backend:latest
                        docker push avilrawal/doctor-backend:${BUILD_NUMBER}

                        docker push avilrawal/doctor-frontend:latest
                        docker push avilrawal/doctor-frontend:${BUILD_NUMBER}

                        docker push avilrawal/doctor-admin:latest
                        docker push avilrawal/doctor-admin:${BUILD_NUMBER}

                        docker logout
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Docker images built and pushed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
