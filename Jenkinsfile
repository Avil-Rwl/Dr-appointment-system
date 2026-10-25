pipeline {
agent {
label 'mern-agent'
}


stages {
    stage('Checkout Verification') {
        steps {
            echo 'GitHub webhook is working!'
            echo'Congress u have done it!'
            echo'You are great'
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
    
}

post {
    success {
        echo 'Pipeline completed successfully!'
    }
    failure {
        echo 'Pipeline failed. Check the console output.'
    }
}


}

